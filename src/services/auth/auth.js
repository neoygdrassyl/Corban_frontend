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
  
const header = (extraHeaders) => {
  let token = localStorage.getItem('corban_jwt');
  let conn = localStorage.getItem('corban_conn');
  let user = localStorage.getItem('corban_user');
 
  let connection = JSON.parse(conn);
  let userInfo = JSON.parse(user);
  let headers = { headers: { Authorization: 'Bearer ' + token, dbIndex: connection.conn || '', dbId: connection.id, userId : userInfo.id, ...extraHeaders} }

  return headers
}

const Logheader = () => {
  let token = localStorage.getItem('corban_jwt');

  return { headers: { Authorization: 'Bearer ' + token} }
}

  export { fakeAuthProvider, header, Logheader };