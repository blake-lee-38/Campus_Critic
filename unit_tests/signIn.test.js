
const signIn = require('../campus-critic/methods/signIn.js');


// Testing SignInUsingEmailAndPassword with Empty Email
test('Sign in with Empty Email', () => {
  expect(signIn('', 'password')).toBe('Email is required');
});

// Testing SignInUsingEmailAndPassword with Empty Password
test('Sign in with Empty Password', () => {
  expect(signIn('email', '')).toBe('Password is required');
});

// Testing SignInUsingEmailAndPassword with valid inputs
test('Sign in with Valid', () => {
  expect(signIn('email', 'password')).toBe('Success');
});