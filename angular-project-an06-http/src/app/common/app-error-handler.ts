import { ErrorHandler } from '@angular/core';

export class AppErrorHandler extends ErrorHandler {
  handleError(error: any) {
    alert('Unexpected error occured!');
    console.log('App Error Handler', error);
  }
}
