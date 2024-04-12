const signUp = require("../campus-critic/methods/signInFormat.js");

describe("Testing SingUp Function", () => {
  // Testing SignInUsingEmailAndPassword with Empty Email
  test("Sign Up with Empty Email", async () => {
    const data = await signUp("validemail@ou.edu", "notgoodpass");
    expect(data).toStrictEqual({
      message: "Password does not follow requirements",
    });
  });

  // Testing SignInUsingEmailAndPassword with Empty Password
  test("Sign in with Empty Password", async () => {
    const data = await signUp("noteduemail@gmail.com", "goodPass21!");
    expect(data).toStrictEqual({
      message: "Email must be a .edu email",
    });
  });

  // Testing SignInUsingEmailAndPassword with valid inputs
  test("Sign in with Valid", async () => {
    const data = await signUp("blake@ou.edu", "goodPass21!");
    expect(data).toStrictEqual({
      message: "Success",
      user: "user",
    });
  });
});
