import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Dashboard } from "./dashboard/dashboard"

export const Login = () => {

  const goto = useNavigate()
  sessionStorage.setItem('token','')

  const logintoweb = () =>{
    sessionStorage.setItem('token','123')
    if(sessionStorage.getItem('token') == '') return <Login/>
    else(
      goto('/dashboard')
    )
  }
    return (
        <div style={{ display: "flex", flexDirection: "column", marginTop: '100px', alignItems: "center" }}>
          <div>Login Form</div>
          <button className="btn btn-primary" style={{ marginTop: '10px' }} onClick={logintoweb}>Login</button>
        </div>
      );
    }