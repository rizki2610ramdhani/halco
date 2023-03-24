import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom'
import Header from './components/Header';

import Home from './pages/Home';
import Article from './pages/Article';
import Consultation from './pages/Consultation';
import Profile from './pages/Profile';
import ConsultationForm from './pages/ConsultationForm';
import AddArticle from './pages/AddArticle';
import ReservasiData from './pages/ReservasiData';
import { useContext, useState, useEffect } from 'react';
import { UserContext } from './context/userContext';
import { API, setAuthToken } from './config/api';
import { PrivateRouteDokter, PrivateRouteLogin, PrivateRoutePatient } from './middleware/PrivateRoute';

function App() {

  let navigate = useNavigate();
  const [state, dispatch] = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(true)

  const checkUser = async () => {
    try {
      const response = await API.get('/check-auth');
      console.log("check user success : ", response)
      // Get user data
      let payload = response.data.data;
      // Get token from local storage
      payload.token = localStorage.token;
      // Send data to useContext
      dispatch({
        type: 'USER_SUCCESS',
        payload,
      });
      setIsLoading(false)
    } catch (error) {
      console.log("check user failed : ", error);
      dispatch({
        type: 'AUTH_ERROR',
      });
      setIsLoading(false)
    }
  };

  useEffect(() => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
      checkUser();
    } else {
      setIsLoading(false)
    }
  }, []);

  useEffect(() => {
    // Redirect Auth but just when isLoading is false
    if (!isLoading) {
      if (state.isLogin === false) {
        navigate('/');
      }
    }
  }, [isLoading]);

  return (
    <>
      {isLoading ? null :
        <>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/article" element={<Article />} />
            <Route element={<PrivateRouteLogin />}>
              <Route element={<PrivateRoutePatient />}>
                <Route path="/consultation" element={<Consultation />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/consultation-form" element={<ConsultationForm />} />
              </Route>
              <Route element={<PrivateRouteDokter />}>
                <Route path="/add-article" element={<AddArticle />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/reservasi-data" element={<ReservasiData />} />
              </Route>
            </Route>
          </Routes>
        </>
      }
    </>
  );
}

export default App;
