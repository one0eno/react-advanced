import { BrowserRouter, Navigate } from 'react-router-dom';
import { Routes, Route, NavLink } from 'react-router-dom';
import logo from '../logo.svg';
import {
  FormikBasicPage,
  RegisterPage,
  FormikYupPage,
  FormikComponent,
  FormikAbastractation,
  RegisterFormikPage,
  DinamicForm,
} from '../03-forms/index';
// import { FormikBasicPage } from '../03-forms/pages/FormikBasicPage';
// import { RegisterPage } from '../03-forms/pages/RegisterPage';
// import { FormikYupPage } from '../03-forms/pages/FormikYupPage';
// import { FormikComponent } from '../03-forms/pages/FormikComponent';
// import { FormikAbastractation } from '../03-forms/pages/FormikAbastractation';
//import { RegisterFormikPage } from '../03-forms/pages/RegisterFormikPage';

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className='main-layout'>
        <nav>
          <img src={logo} alt='logo' />
          <ul>
            <li>
              <NavLink to='/register' className={({ isActive }) => (isActive ? 'nav-active' : '')}>
                Register page
              </NavLink>
            </li>
            <li>
              <NavLink to='/formik-basic' className={({ isActive }) => (isActive ? 'nav-active' : '')}>
                Formik basic
              </NavLink>
            </li>
            <li>
              <NavLink to='/formik-yup' className={({ isActive }) => (isActive ? 'nav-active' : '')}>
                Formik YUP
              </NavLink>
            </li>

            <li>
              <NavLink to='/formik-component' className={({ isActive }) => (isActive ? 'nav-active' : '')}>
                Formik Component
              </NavLink>
            </li>
            <li>
              <NavLink to='/formik-abstractation' className={({ isActive }) => (isActive ? 'nav-active' : '')}>
                FormikAbastractation
              </NavLink>
            </li>
            <li>
              <NavLink to='/register-formik-page' className={({ isActive }) => (isActive ? 'nav-active' : '')}>
                Register Formik Page
              </NavLink>
            </li>
            <li>
              <NavLink to='/dimaic-form' className={({ isActive }) => (isActive ? 'nav-active' : '')}>
                DinamicForm
              </NavLink>
            </li>

            <li>
              <NavLink to='/about' className={({ isActive }) => (isActive ? 'nav-active' : '')}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to='/users' className={({ isActive }) => (isActive ? 'nav-active' : '')}>
                Users
              </NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/formik-basic' element={<FormikBasicPage />} />
          <Route path='/formik-yup' element={<FormikYupPage />} />
          <Route path='/formik-component' element={<FormikComponent />} />

          <Route path='/formik-abstractation' element={<FormikAbastractation />} />
          <Route path='/register-formik-page' element={<RegisterFormikPage />} />

          <Route path='/dimaic-form' element={<DinamicForm />} />

          <Route path='/about' element={<h1>About page</h1>} />
          <Route path='/users' element={<h1>user page</h1>} />
          <Route path='/home' element={<h1>Hombe page</h1>} />
          <Route path='/*' element={<Navigate to='/home' replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
