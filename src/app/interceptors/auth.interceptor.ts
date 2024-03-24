import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem("access") ?? ""
  const newReq = req.clone({ headers: req.headers.append("Authorization", `Bearer ${token}`) })
  return next(newReq);
};
