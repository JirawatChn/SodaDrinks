import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

export const Login = () => {

  const goto = useNavigate()
  sessionStorage.setItem('token', '')

  const logintoweb = () => {
    sessionStorage.setItem('token', '123')
    if (sessionStorage.getItem('token') == '') return <Login />
    else (
      goto('/dashboard')
    )
  }
  return (
    <div className="center">
      <div style={{ width: '1000px', height: '700px',borderRadius: '0px', backgroundColor: '#ffffff', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', bottom: '130px' }}>
        <h2 style={{ fontSize: '48px', alignItems: 'center', color: '#63468E' }}>Login</h2>
          <form action="#" className="signin-form" >
            <div className="form-group mb-3" >
              <input id="txtEmail" type="text" style={{ backgroundColor: '#ffffff' }} className="form-control" placeholder="Username" />
            </div>
            <div className="input-group mb-3">
              <input id="txtPassword" type="password" className="form-control" placeholder="Password" />
            </div>
            <div className="form-group">
              <button type="submit" className="form-control btn btn-primary" onClick={()=>{logintoweb()}} style={{ fontSize: '24px', borderRadius: '30px', width: '432px', height: '55px', color: '#ffffff' }}>LOGIN</button>
            </div>
          </form>
      </div>
    </div>
  )
}
