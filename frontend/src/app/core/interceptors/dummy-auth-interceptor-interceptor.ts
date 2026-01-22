import { HttpInterceptorFn } from '@angular/common/http';

export const dummyAuthInterceptorInterceptor: HttpInterceptorFn = (req, next) => {
  const dummyToken = 'dummyBearerToken-123'
  const accessToken = sessionStorage.getItem('sessionKey')
  const authRequest = req.clone({
    setHeaders: {
      Authorization: `Bearer ${accessToken}`
    }
  })
  return next(authRequest);
};
