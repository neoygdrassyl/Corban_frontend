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

// PAGES PUBLIC
import Login from './pages/login.page/login.page'
import Home from './pages/home.page/home.page'

// SERVICES PROVIDERS
import PrivateRoute from './services/auth/privateRoute.page'
import { AuthProvider } from './resources/customs/contextProviders/auth.provider';
import { UtilProvider } from './resources/customs/contextProviders/util.provider';

// PAGES SOTWARE
import Dashboard from './pages/dashboard.page/dashboard.page'
import Fun from './pages/fun.pages/fun.page'
import FUN_GEN_VIEW from './pages/fun.pages/lists.pages/funGen.view';
import FUN_MACRO_VIEW from './pages/fun.pages/lists.pages/funMacro.view';
import SUBMIT from "./pages/submit.pages/submit.page";
import BEDROCK from "./pages/bedrock.page/bedrcok.page";
import SIGN_IN from "./pages/signin.page/signin.page";
import RESET from "./pages/reset,pages/reset.page";
import ACTIVATE from "./pages/activate.pages/activate.page";
import DashboardTeam from "./pages/dashteam.pages/dashteam.page";
import ROLES from "./pages/roles.pages/roles.page";

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
              </Route>

              <Route element={<PrivateRoute />}>
                <Route element={<ModuleLayout />} >
                  <Route exact path="/dashboard" element={<Dashboard />} />
                  <Route exact path="/dashteam/:team" element={<DashboardTeam />} />
                  <Route exact path="/fun" element={<Fun />} />
                  <Route exact path="/fun/macro" element={<FUN_MACRO_VIEW />} />
                  <Route exact path="/fun/macro/:date_start&:date_end" element={<FUN_MACRO_VIEW />} />
                  <Route exact path="/fun/gen/:id" element={<FUN_GEN_VIEW />} />

                  <Route exact path="/submit" element={<SUBMIT />} />

                  <Route exact path="/roles" element={<ROLES />} />
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