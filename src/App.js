import { useState } from 'react';
import './App.css';
import Login from './components/Login';
import Profile from './components/Profile';
import { LoginContext } from './contexts/LoginContext'



function App() {
  const [user, setUser] = useState(false)
  const [userName, setUsername] = useState("")
  const [password, setPassword] = useState("")

  return (
    <div className="App">
      <LoginContext.Provider value={{userName, password, setPassword,setUsername, setUser}}>
        {user ? <Profile/> : <Login/>}
      </LoginContext.Provider>
    </div>
  );
}

export default App;
