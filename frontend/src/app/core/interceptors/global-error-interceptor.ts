import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, tap, throwError } from 'rxjs';
import {MatSnackBar} from '@angular/material/snack-bar';


export const globalErrorInterceptor: HttpInterceptorFn = (req, next) => {
  const snackbar = inject(MatSnackBar)
  return next(req).pipe(
    tap({
      error: (error: HttpErrorResponse) => {
        snackbar.open(error.message, 'close', {
          duration: 5000
        })
      }
    }),
    catchError((error:HttpErrorResponse) => {
      return throwError(() => error);
    })
  )
};
