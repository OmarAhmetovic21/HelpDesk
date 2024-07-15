
import React from "react";
import './Login.css';
import { BrowserView, MobileView } from "react-device-detect";
import { Link } from "react-router-dom";
import {Button, Card, CardHeader, CardBody, CardFooter, Form, Input, InputGroupAddon, InputGroupText,
  InputGroup, Container, Col, Row} from "reactstrap";



function Login() {
   
  return (
    <>
    <BrowserView>
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
                    <h2 className=".h2" style={{color:"#224798"}}>Login</h2>
                    <form className="form">
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
</BrowserView>
<MobileView>
<div className='login-body-mobile'>
        <div className='image-div'>
          <img style={{width:"25%", height:"100%"}} src="logo_samo.png" alt="SarajevoGas Logo"></img>
        </div>

        <div className='heading-div'>
             <h2 style={{textAlign:"center", margin:"0"}}>Sarajevogas Helpdesk</h2>
             
        </div>
        <h2 style={{color:"#224798", textAlign:"center"}}>Login</h2>
        <form className="form-mobile">
                        <label style={{color:"#224798"}} for="email">Email</label>
                        <input style={{width:"50%"}} type="email" id="email" placeholder="ime.prezime@sarajevogas.ba"></input>
                        <label style={{color:"#224798"}} for="password">Password</label>
                        <input style={{width:"50%"}} type="password" id="password" placeholder="Unesi svoj password"></input>
                        <Button style={{textAlign:"center", textDecoration:"none", width:"50%"}} className='button-mobile' to="/dashboard"
                      //onClick={(e) => e.preventDefault()}
                      size="lg"
                      tag={Link}>Login</Button>
 
        </form>
        
        {/*<div className="login-box-mobile">
        <h2 style={{color:"#224798", textAlign:"center"}}>Login</h2>
                    <form className="form-mobile">
                        <label style={{color:"#224798"}} for="email">Email</label>
                        <input type="email" id="email" placeholder="ime.prezime@sarajevogas.ba"></input>
                        <labe style={{color:"#224798"}} for="password">Password</labe>
                        <input type="password" id="password" placeholder="Unesi svoj password"></input>
                        <Button style={{textAlign:"center", textDecoration:"none"}} className='button-mobile' to="/dashboard"
                      //onClick={(e) => e.preventDefault()}
                      size="lg"
                      tag={Link}>Login</Button>
 
                    </form>
          </div>*/}
    
        </div>

</MobileView>
</>
  );
}

export default Login;
