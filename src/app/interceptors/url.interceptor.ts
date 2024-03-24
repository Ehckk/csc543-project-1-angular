import { HttpInterceptorFn } from '@angular/common/http';

const BASE_URL = "http://localhost:7000/api"

export const urlInterceptor: HttpInterceptorFn = (req, next) => {
  const newReq = req.clone({ url: `${BASE_URL}/${req.url}` })
  return next(newReq);
};
