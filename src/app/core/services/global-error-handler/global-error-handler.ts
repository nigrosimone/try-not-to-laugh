import { ErrorHandler, Injectable } from '@angular/core';


@Injectable()
export class GlobalErrorHandler implements ErrorHandler {

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    handleError(error: any) {
        alert(error?.message || 'Undefined client error')
        console.error('Error from global error handler', error);
    }
}

