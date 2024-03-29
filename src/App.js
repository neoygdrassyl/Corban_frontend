import "rsuite/dist/rsuite.min.css";
import './App.css';

import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

// LAYOUTS
import PublicLayout from './resources/layouts/public.layout';
import ModuleLayout from './resources/layouts/module.layout';
import MainLayout from "./resources/layouts/main.layout";

// SERVICES PROVIDERS
import PrivateRoute from './services/auth/privateRoute.page'
import { AuthProvider } from './resources/customs/contextProviders/auth.provider';
import { UtilProvider } from './resources/customs/contextProviders/util.provider';

// PAGES SOTWARE

// -------- DOVELA
import DashboardTeam from "./pages/dovela/dashteam.pages/dashteam.page";
import SUBMIT from "./pages/dovela/submit.pages/submit.page";
import ROLES from "./pages/dovela/roles.pages/roles.page";
import WORKERS from "./pages/dovela/workers.pages/workers.page";

import Fun from './pages/dovela/fun.pages/fun.page' // TODO MOVE
// -------- PUBLIC 
import Home from './pages/public/home.page/home.page'
import BEDROCK from "./pages/public/bedrock.page/bedrcok.page";

// -------- USER
import Dashboard from './pages/user/dashboard.page/dashboard.page'
import SIGN_IN from "./pages/user/signin.page/signin.page";
import Login from './pages/user/login.page/login.page'
import INVITE from "./pages/user/invite/invite.page";
import RESET from "./pages/user/reset,pages/reset.page";
import ACTIVATE from "./pages/user/activate.pages/activate.page";
import DOVELA_CONFIG from "./pages/dovela/config.pages/config.page";
import AUDITS_DOVELA from "./pages/dovela/audit.pages/audit.page";
import CALCULATOR_DOVELA from "./pages/dovela/tools.pages/cacl.page";
import TEMPLATES from "./pages/dovela/temaplates.pages/templates.page";
import DICTIONARY from "./pages/dovela/tools.pages/dictionary.page";
import CERTIFICATIONS from "./pages/dovela/tools.pages/certifications.page";
import OPTIONS from "./pages/user/options.page";
import HELP from "./pages/user/help.page";
import USER from "./pages/user/user/user.page";




function App() {

  return (
    <AuthProvider>
      <UtilProvider>

        <Router>
          <Routes>
            <Route element={<MainLayout />}>
              <Route exact path="/" element={<Navigate replace to="/home" />} />
              <Route element={<PublicLayout />} >
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/signin" element={<SIGN_IN />} />
                <Route exact path="/home" element={<Home />} />
                <Route exact path="/bedrock" element={<BEDROCK />} />
                <Route exact path="/reset/:email&:jtw" element={<RESET />} />
                <Route exact path="/activate/:email&:jtw" element={<ACTIVATE />} />
                <Route exact path="/invite/:jtw" element={<INVITE />} />
              </Route>

              <Route element={<PrivateRoute />}>
                <Route element={<ModuleLayout />} >
                  <Route exact path="/dashboard" element={<Dashboard />} />
                  
                  <Route exact path="/dashteam/:team" element={<DashboardTeam />} />

                  <Route exact path="/fun" element={<Fun />} />
                  <Route exact path="/submit" element={<SUBMIT />} />

                  <Route exact path="/roles" element={<ROLES />} />
                  <Route exact path="/workers" element={<WORKERS />} />
                  <Route exact path="/dconfig" element={<DOVELA_CONFIG />} />
                  <Route exact path="/daudit" element={<AUDITS_DOVELA />} />
                  <Route exact path="/dtemplates" element={<TEMPLATES />} />

                  {/* -------------------------- TOLLS ----------------- */} 

                  <Route exact path="/dcalc" element={<CALCULATOR_DOVELA />} />
                  <Route exact path="/dictionary" element={<DICTIONARY />} />
                  <Route exact path="/dcerts" element={<CERTIFICATIONS />} />

                    {/* -------------------------- OTHERS ----------------- */} 

                    <Route exact path="/options" element={<OPTIONS />} />
                    <Route exact path="/help" element={<HELP />} />
                    <Route exact path="/user" element={<USER />} />
                </Route>
              </Route>

              <Route path="*" element={<Navigate replace to="/home" />} />
            </Route>
          </Routes>
        </Router>


      </UtilProvider>
    </AuthProvider>
  );
}

export default App;