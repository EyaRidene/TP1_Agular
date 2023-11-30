import { CanActivateFn, Router } from '@angular/router';

/*export const loginGuard: CanActivateFn = (route, state) => {
  const authService: AuthService = inject(AuthService);
  const router: Router = inject(Router);

  return authService.user$.pipe(
    tap((user) => {
      if (user) {
        router.navigate(['cv']);
      }
    }),
    map((user) => !user),
    catchError((error) => {
      console.error('Error in loginGuard', error);
      return of(false);
    })
  );
};*/
