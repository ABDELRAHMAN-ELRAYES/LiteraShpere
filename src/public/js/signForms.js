'strict mode';

let getSigninFormBtn = document.querySelector('.get-signin-form-btn');
let getSignupFormBtn = document.querySelector('.get-signup-form-btn');
if (getSigninFormBtn && getSignupFormBtn) {
  let signinForm = document.querySelector('.signin-form');
  let signupForm = document.querySelector('.signup-form');
  [getSigninFormBtn, getSignupFormBtn].forEach((btn) => {
    btn.addEventListener('click', (event) => {
      event.preventDefault();
      if (event.target === getSigninFormBtn) {
        signinForm.classList.remove('move-left');
        signupForm.classList.add('move-right');
      }
      if (event.target === getSignupFormBtn) {
        signinForm.classList.add('move-left');
        signupForm.classList.remove('move-right');
      }
    });
  });
}
