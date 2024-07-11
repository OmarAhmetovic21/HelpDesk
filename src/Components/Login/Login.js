
import React from "react";
import './Login.css';
import { BrowserView, MobileView } from "react-device-detect";
import { Link } from "react-router-dom";
import {Button, Card, CardHeader, CardBody, CardFooter, Form, Input, InputGroupAddon, InputGroupText,
  InputGroup, Container, Col, Row} from "reactstrap";



function Login() {
   
  return (
    <>
    <body>
    <div className="background">
        <div className="container">
            <div className="left-side">
                <div className="logo-container">
                  <div className="logo-container-sc"><img src="logo_samo.png" alt="SarajevoGas Logo" class="logo"></img></div>
                    
                    <h2>SarajevoGas HelpDesk</h2>
                </div>
            </div>
            <div className="right-side">
                <div className="login-box">
                    <h2 style={{color:"#224798"}}>Login</h2>
                    <form>
                        <label style={{color:"#224798"}} for="email">Email</label>
                        <input type="email" id="email" placeholder="ime.prezime@sarajevogas.ba"></input>
                        <labe style={{color:"#224798"}} for="password">Password</labe>
                        <input type="password" id="password" placeholder="Unesi svoj password"></input>
                        <Button style={{textAlign:"center", textDecoration:"none"}} className='button' to="/dashboard"
                      //onClick={(e) => e.preventDefault()}
                      size="lg"
                      tag={Link}>Login</Button>
 
                    </form>
                </div>
            </div>
        </div>
    </div>
</body>
</>
  );
}

export default Login;
