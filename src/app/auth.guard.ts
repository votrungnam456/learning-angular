import { Injectable } from '@angular/core';
import { CanActivate, CanActivateFn, Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate: CanActivateFn = (route, state) => {
    const isAuthenticated = true; // Thay bằng logic xác thực thực tế
    const router = Router;
    if (!isAuthenticated) {
      this.router.navigate(['/']); // Chuyển hướng đến trang đăng nhập nếu không xác thực
      return false;
    }
    return true;
  };
}
