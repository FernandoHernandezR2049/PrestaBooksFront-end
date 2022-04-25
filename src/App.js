import logo from './logo.svg';
import React, { useEffect } from 'react';
import './App.css';
import Login from './pages/Login.js'
import LibrarianDashboard from './pages/LibrarianDashboard';

function App() {
  let [jwt, setJwt] = React.useState("");
  const handleChangeInJwt = (jwt) => {
    setJwt(jwt);
    localStorage.setItem("jwt", jwt);
  }

  useEffect(() => {
    setJwt(localStorage.getItem("jwt"));
  }, [])

  const deleteJWT = () => {
    handleChangeInJwt("");
  }
  return (
    <div className="App">
      {jwt ? <LibrarianDashboard jwt={jwt} deleteJWT={deleteJWT} /> : <Login jwt={jwt} handleChangeInJwt={handleChangeInJwt} />}

    </div>
  );
}

export default App;
