import React, {useContext} from "react";
import { LoginContext } from '../../contexts/LoginContext'
import "./index.css"

const Login = () => {

  const {setUsername, setPassword, setUser} = useContext(LoginContext)

  return (
    <div className="login">
      <form className="login__form" onSubmit={() => setUser(true)}>
        <h1>Login Context</h1>
        <input type="name" placeholder="Username" onChange={(e) => setUsername(e.target.value)}/>
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
        <button className="submit__btn" type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Login;