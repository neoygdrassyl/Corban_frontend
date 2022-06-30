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
  
const header = () => {
  let token = localStorage.getItem('corban_jwt');
  let conn = localStorage.getItem('corban_conn');
  return { headers: { Authorization: 'Bearer ' + token, dbIndex: JSON.parse(conn).conn || '' } }
}

  export { fakeAuthProvider, header };