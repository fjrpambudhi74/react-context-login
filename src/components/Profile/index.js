import React, {useContext} from "react";
import { LoginContext } from '../../contexts/LoginContext'
import "./index.css"

const Logout = () => {
  const {userName, setUser} = useContext(LoginContext)

  return (
    <div className="logout">
      <h1>Welcome <span className="user__name">{userName}</span></h1>
      <button className="logout__button" onClick={() => setUser(false)}>Logout</button>
    </div>
  )
}

export default Logout