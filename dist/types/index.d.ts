import { IHandlerLambda, IMiddyNextFunction } from 'middy';
export declare const httpErrorHandler: () => {
    onError: (handler: IHandlerLambda<any, object>, next: IMiddyNextFunction) => void;
};
