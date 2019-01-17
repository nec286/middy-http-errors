import { IHandlerLambda, IMiddyNextFunction } from 'middy'

interface HttpError extends Error { statusCode: string }

const strategy = (error: HttpError) => ({
  statusCode: error.statusCode,
  body: JSON.stringify({
    message: error.message
  })
})

export const httpErrorHandler = () => {
  return ({
    onError: (handler: IHandlerLambda, next: IMiddyNextFunction) => {
      const error = handler.error as HttpError

      console.error(error)

      if(/^[1-5][0-9][0-9]$/.test(error.statusCode)) {
        handler.response = strategy(error)
        return next()
      }
      return next(handler.error)
    }
  })
}
