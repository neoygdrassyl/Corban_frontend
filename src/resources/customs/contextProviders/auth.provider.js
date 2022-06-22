import React from "react";

import { fakeAuthProvider } from '../../../services/auth/auth'
import AtuhService from '../../../services/apis/auth.service'
import { GET_JSON_FULL } from "../utils/lamdas.functions";

export let AuthContext = React.createContext();

export function AuthProvider({ children }) {
  let [user, setUser] = React.useState(null);
  let [token, setToken] = React.useState(null);
  let [conn, setCon] = React.useState(null);

  React.useEffect(() => {
    if (user == null && token == null) check((cb) => cb);
  });

  let signin = (_user, callback) => {
    let validatedUser = validateUser(_user)
    setUser(validatedUser);
    localStorage.removeItem('corban_user')
    sessionStorage.setItem('corban_logOn', true);
    localStorage.setItem('corban_user', JSON.stringify(validatedUser));
    callback();
  };

  let updateToken = (_token, callback) => {
    localStorage.removeItem('corban_jwt')
    localStorage.setItem('corban_jwt', _token);
    setToken(_token);
    callback();
  };

  let signout = callback => {
    setUser(undefined);
    setToken(undefined);
    setCon(undefined)
    localStorage.removeItem('corban_user');
    localStorage.removeItem('corban_jwt');
    localStorage.removeItem('corban_conn');
    sessionStorage.clear();
    return callback();
  };

  let setConn = (_conn, callback) => {
    localStorage.removeItem('corban_conn')
    localStorage.setItem('corban_conn', JSON.stringify(_conn));
    setCon(_conn);
    callback();
  };

  let check = (callback) => {
    let _user = localStorage.getItem('corban_user');
    let _jwt = localStorage.getItem('corban_jwt');
    let _conn = localStorage.getItem('corban_conn');

    let logOn = sessionStorage.getItem('corban_logOn');
    
    if (_jwt && _user) {
      if (!logOn) {
        AtuhService.verifyLogin(_jwt).then(response => {
          if (response.data === 'OK') {
            sessionStorage.setItem('corban_logOn', true);
            if (!user && !token) {
              setToken(_jwt);
              setUser(JSON.parse(_user));
            }
            if (_conn && !conn) setCon(JSON.parse(_conn));
            return callback(true)
          }
          else return callback(false);
        })
          .catch(e => {
            return callback(false);;
          });
      } else {
        if (!user && !token) {
          setToken(_jwt);
          setUser(JSON.parse(_user));
        }
        if (_conn && !conn) setCon(JSON.parse(_conn));
        return callback(true)
      }


    } else  callback(false);
  }
  let value = { user: user, token, conn, signin, signout, updateToken, check, setConn };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

function validateUser(_user) {
  var user = {}

  let rolesNames = _user.rolesNames.split(';') ?? [];
  let rolesPriorities = _user.rolesPriorities.split(';') ?? [];
  let companiesInfo = _user.companiesInfo.split(';') ?? [];

  user.fullname = `${_user.name ?? ''} ${_user.name_2 ?? ''} ${_user.surname ?? ''} ${_user.surname_2 ?? ''}`;
  user.name = `${_user.name ?? ''} ${_user.surname ?? ''}`;
  user.id = _user.id;
  user.userInfo = _user.userInfo;

  let companies = {};
  let connections = [];
  let _companies = _user.technicalInfo.split(';') ?? [];
  for (var i = 0; i < _companies.length; i++) {
    let connName = GET_JSON_FULL(_companies[i]).indexName;

    if (!connections.includes(connName)) connections.push(connName);
    companies[connName] = {};
    companies[connName].technicalInfo = GET_JSON_FULL(_companies[i]);
    companies[connName].companiesInfo = GET_JSON_FULL(companiesInfo[i]);
    companies[connName].companiesInfo.rolesNames = rolesNames[i];
    companies[connName].companiesInfo.rolesPriorities = rolesPriorities[i];

  }
  user.companies = companies;
  user.connections = connections;
  return user
}