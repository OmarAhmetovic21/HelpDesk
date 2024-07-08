import React from "react";
import './Add-Edit-Task.css';
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

// reactstrap components
/*import {Button, Card, CardHeader, CardBody, CardFooter, Form, Input, InputGroupAddon, InputGroupText,
  InputGroup, Container, Col, Row} from "reactstrap";*/


function AddEditTask() {
/*  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  React.useEffect(() => {
    document.body.classList.add("login-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("login-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);*/
  return (
    <>
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
    </>
  );
}

export default AddEditTask;