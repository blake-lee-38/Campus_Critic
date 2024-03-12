async function signUp(email, pass) {
  // RE ensures password has 1 special character, 1 uppercase/lowercase letter, 1 num, and is at least 8 characters long
  var passRegex =
    /^(?=.*?[!@#$%^&*()_+\-=\[\]{};:"\\|,.<>\/?])(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9]).{8,}$/;

  // RE ensures email is a .edu email
  var emailRegex = /^[\w\.-]+@[\w\.-]+\.(edu)$/;

  if (email.match(emailRegex) && pass.match(passRegex)) {
    return { message: "Success", user: "user" };
  } else if (email.match(emailRegex)) {
    return { message: "Password does not follow requirements" };
  } else if (pass.match(passRegex)) {
    return { message: "Email must be a .edu email" };
  } else {
    return { message: "Email and Password do not follow requirements" };
  }
}

module.exports = signUp;
