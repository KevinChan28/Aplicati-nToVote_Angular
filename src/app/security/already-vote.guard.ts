import { CanActivateFn, Router } from '@angular/router';

export const alreadyVoteGuard: CanActivateFn = (route, state) => {
  const alreadyVote: boolean = JSON.parse(localStorage.getItem('alreadyVote') || 'false');
  
  if (alreadyVote) {
    // Redirigir a otra ruta si alreadyVote es true
    const router = new Router();
    alert('Ya has votado. No puedes acceder a esta página.');
    router.navigate(['/login']); // Reemplaza '/otraRuta' con la ruta a la que deseas redirigir
    return false;
  }
  
  return true;
};
