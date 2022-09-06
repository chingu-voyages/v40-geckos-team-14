import './App.css';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import AddStory from './Pages/AddStory/AddStory';
import PrivateRoute from './Pages/Authentication/PrivateRoute';
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  const { isAuthenticated, user } = useAuth0();
  const isUser = isAuthenticated && user;
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute  user={isUser}>
              <Home />
            </PrivateRoute>
          }
        />
        <Route path="/add-story" element={<AddStory />} />
      </Routes>
    </>
  );
}

export default App;
