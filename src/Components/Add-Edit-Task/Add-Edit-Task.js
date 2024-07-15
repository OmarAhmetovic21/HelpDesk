import React from "react";
import './Add-Edit-Task.css';
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import { useState } from 'react';


// reactstrap components
/*import {Button, Card, CardHeader, CardBody, CardFooter, Form, Input, InputGroupAddon, InputGroupText,
  InputGroup, Container, Col, Row} from "reactstrap";*/


function AddEditTask() {
  const [modal, setModal] = useState(false);

const toggleModal = () => {
  setModal(!modal)
}

  return (
    <>  
    <Button style={{textAlign:"center", textDecoration:"none"}} className='button-add'
                      onClick={toggleModal}
                      size="lg"
                      tag={Link}> <img style={{width:"25%", height:"100%"}} src="Plus-icon.png" alt="SarajevoGas Logo"></img>
                      
    </Button>
    {modal && (
         <div className="modal">
          <div className="overlay"></div>
            <div className="modal-content">
            <Button className="button-close" onClick={toggleModal}><img style={{width:"40%", height:"40%"}} src="X-icon.png" alt="SarajevoGas Logo"></img></Button>
            <div className="login-box" style={{marginTop:"25%"}}>
                    <h2 style={{color:"#224798", textAlign:"center"}}>Dodajte Task</h2>
                    <form>
                        <label style={{color:"#224798"}} for="email">Naslov</label>
                        <input type="email" id="email"></input>
                        <labe style={{color:"#224798"}} for="password">Opis</labe>
                        <input type="password" id="password"></input>
                        <Button style={{textAlign:"center", textDecoration:"none"}} className='button' to="/dashboard"
                      //onClick={(e) => e.preventDefault()}
                      size="lg"
                      tag={Link}>Sačuvaj</Button>
 
                    </form>
                </div>
            </div>

   


       </div>
       
          )}
    </>
  );
}

export default AddEditTask;