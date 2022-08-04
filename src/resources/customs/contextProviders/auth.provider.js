import React from "react";

import AtuhService from '../../../services/apis/auth.service'
import { GET_JSON_FULL } from "../utils/lamdas.functions";


export let AuthContext = React.createContext();

export function AuthProvider({ children }) {
  let [user, setUser] = React.useState(null);
  let [token, setToken] = React.useState(null);
  let [conn, setCon] = React.useState(null);
  let [nots, setNots] = React.useState([]);

  React.useEffect(() => {
    if (user == null && token == null) check((cb) => cb);
  }, [user, token, conn]);

  let signin = (_user, callback) => {
    let validatedUser = validateUser(_user);
    setUser(validatedUser);
    updateToken(_user.token, () => { });
    localStorage.removeItem('corban_user')
    sessionStorage.setItem('corban_logOn', true);
    localStorage.setItem('corban_user', JSON.stringify(validatedUser));
    loadNots(_user.loginUser)
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
    var __conn = validateConn(_conn)
    localStorage.removeItem('corban_conn')
    localStorage.setItem('corban_conn', JSON.stringify(__conn));
    setCon(__conn);
    callback();
  };

  let clearConn = (callback) => {
    localStorage.removeItem('corban_conn')
    setCon(null);
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
    } else  {return callback(false);}
  }

  function loadNots(email){
    AtuhService.loadAllNots(email).then(response => {
      setNots(response.data)
    }).finally(e => {return true})
  }
  let value = { user: user, token, conn, nots, signin, signout, updateToken, check, setConn, clearConn, loadNots, setNots };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

function validateUser(_user) {
  var user = {}
  var teamNames =  _user.teamNames ? _user.teamNames.split('&&') : [];
  var teamIds =  _user.teamIds ? _user.teamIds.split('&&') : [];

  var work_group_list = _user.technicalInfo ? _user.technicalInfo.split('&&') : [];
  work_group_list = work_group_list.map((wgl, i) => {
    let obj = GET_JSON_FULL(wgl)
    obj.name = teamNames[i]
    obj.id = teamIds[i]

    return obj
  })

  user.fullname = `${_user.name ?? ''} ${_user.name_2 ?? ''} ${_user.surname ?? ''} ${_user.surname_2 ?? ''}`;
  user.name = `${_user.name ?? ''} ${_user.surname ?? ''}`;
  user.id = _user.id;
  user.userInfo = _user.userInfo;
  user.workList = work_group_list;
  user.email = _user.loginUser;

  return user
}

function validateConn(_conn) {
  let companyInfo = _conn.companyInfo.split(';') ?? [];
  let roles = [];
  let totalRoles = _conn.roleName ? _conn.roleName.split(';').length : 0;
  let conn = {};
  let connections = [];
  let _companies = _conn.technicalInfo.split(';') ?? [];

  for (var i = 0; i < _companies.length; i++) {
    let connName = GET_JSON_FULL(_companies[i]).indexName;
    if (!connections.includes(connName)) connections.push(connName);
    conn = {};
    conn.technicalInfo = GET_JSON_FULL(_companies[i]);
    conn.companiyInfo = GET_JSON_FULL(companyInfo[i]);
  }

  for (var i = 0; i < totalRoles; i++) {
    let name = _conn.roleName ? _conn.roleName.split(';')[i] : '';
    let desc = _conn.roleInfo ? _conn.roleInfo.split(';')[i] : '';
    let priority = _conn.rolePriority ? _conn.rolePriority.split(';')[i] : '';
    let permits = _conn.rolePermits ? _conn.rolePermits.split(';')[i] : '';

    roles.push({ name, desc, priority, permits })
  }
  conn.connections = connections;
  conn.conn = _conn.bdname;
  conn.id = _conn.id_public
  conn.roles = roles;
  conn.active = _conn.active;
  conn.name = _conn.name;

  return conn
}