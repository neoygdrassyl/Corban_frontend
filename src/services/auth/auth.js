const fakeAuthProvider = {
  isAuthenticated: false,
  signin(cb) {
    fakeAuthProvider.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    fakeAuthProvider.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};
  
  export { fakeAuthProvider };