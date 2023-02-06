import {Routes,Route,Navigate} from "react-router-dom"
import './App.css';
import AuthLayout from "./layouts/AuthLayout";
import Login from "./pages/public/auth/Login";
import Register from "./pages/public/auth/Register";
import ForgotPassword from "./pages/public/auth/ForgotPassword";
import ResetPassword from "./pages/public/auth/ResetPassword";
import Protected from "./security/Protected";
import AdminProtected from "./security/AdminProtected";

function App() {
  return (
    <div>
      <Routes>
        {/* NORMAL USER ROUTES */}

        {/*PUBLIC ROUTES*/}
          <Route path={''} element={<Navigate to={'auth'} replace />} />
          <Route path={'admin'} element={<AdminProtected></AdminProtected>}>

          </Route>
          {/*AUTHENTICATION*/}
          <Route path={'auth'} element={<AuthLayout/>}>
              <Route index element={<Navigate to={'login'} />}/>
              <Route path={'login'} element={<Login/>}/>
              <Route path={'register'} element={<Register/>}/>
              <Route path={'forgot-password'} element={<ForgotPassword/>}/>
              <Route path={'reset-password'} element={<ResetPassword/>}/>
          </Route>
      </Routes>
    </div>
  );
}

export default App;
