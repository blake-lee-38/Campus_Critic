

function signIn(email, pass) {
    if (email === "") return "Email is required";

    if(pass === "") return "Password is required";

    return "Success";
}
  
module.exports = signIn;