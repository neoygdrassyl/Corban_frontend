import { useNavigate } from "react-router-dom";
import { GET_JSON_FULL } from "../../resources/customs/utils/lamdas.functions";

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
  let headers = { headers: { Authorization: 'Bearer ' + token, dbIndex: connection.conn || '', dbId: connection.id, userId: userInfo.id, ...extraHeaders } }

  return headers
}

const Logheader = () => {
  let token = localStorage.getItem('corban_jwt');

  return { headers: { Authorization: 'Bearer ' + token } }
}

function handleRequest(request) {
  return request
    .then(response => {
      let refreshToken = response.headers['content-jwt'];
      //console.log(refreshToken)
      localStorage.removeItem('corban_jwt')
      localStorage.setItem('corban_jwt', refreshToken);
      return response
    })
    .catch((e) => {
      let errorData = GET_JSON_FULL(JSON.stringify(e));
      if (errorData.status == 401) {
        localStorage.removeItem('corban_user');
        localStorage.removeItem('corban_jwt');
        localStorage.removeItem('corban_conn');
        sessionStorage.clear();
        window.location.assign('/login')
      }
      return e
    })
}

export { fakeAuthProvider, header, Logheader, handleRequest };