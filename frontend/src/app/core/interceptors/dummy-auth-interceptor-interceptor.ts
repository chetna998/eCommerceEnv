import { HttpInterceptorFn } from '@angular/common/http';

export const dummyAuthInterceptorInterceptor: HttpInterceptorFn = (req, next) => {
  const dummyToken = 'dummyBearerToken-123'
  const authRequest = req.clone({
    setHeaders: {
      Authorization: `Bearer ${dummyToken}`
    }
  })
  return next(authRequest);
};
