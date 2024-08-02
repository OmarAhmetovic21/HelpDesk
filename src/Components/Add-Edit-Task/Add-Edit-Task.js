import React from "react";
import './Add-Edit-Task.css';
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import { useState } from 'react';
import { BrowserView, MobileView } from "react-device-detect";


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
                      tag={Link}> <BrowserView> <img style={{width:"25%", height:"100%"}} src="Plus-icon.png" alt="SarajevoGas Logo"></img></BrowserView>
                      <MobileView> <img style={{width:"85%", height:"100%"}} src="Plus-icon.png" alt="SarajevoGas Logo"></img></MobileView>
                      
    </Button>

  <BrowserView>
    {modal && (
         <div className="modal">
          <div className="overlay"></div>
            <div className="modal-content">
            <div className="login-box-task" style={{marginTop:"7.5%", justifyContent:'center'}}>
                    <form>
                        <input placeholder="Naziv zadatka" type="text" id="title"></input>
                        <textarea placeholder="Počnite pisati..." id="task-description" name="message" rows="4" required></textarea>
                      <div className="task-form-actions">
                        <select id="priority" name="sector" required>
                         <option id="option3" value="" disabled selected>Prioritet</option>
                         <option id="option3" value="sector1">Urgentno</option>
                         <option id="option3" value="sector2">Visoki</option>
                         <option id="option3" value="sector3">Srednji</option>
                         <option id="option3" value="sector3">Niski</option>
                        </select>
                        <input type="email" id="email-task" placeholder="Dodijelite task"></input>
                      </div>
                        <Button style={{textAlign:"center", textDecoration:"none"}} className='button-save' onClick={toggleModal}
                      //onClick={(e) => e.preventDefault()}
                      size="lg"
                      tag={Link}>Spasi</Button>
                      <button onClick={toggleModal} type="button" id='closebtntask'>Zatvori</button>
                    </form>
                </div>
            </div>

   


       </div>
       
          )}
      
      </BrowserView>

      <MobileView>
    {modal && (
         <div className="modal">
          <div className="overlay"></div>
            <div className="modal-content" style={{width: "70%"}}>
            <Button className="button-close" onClick={toggleModal}><img style={{width:"100%", height:"100%"}} src="X-icon.png" alt="SarajevoGas Logo"></img></Button>
            <div className="login-box" style={{marginTop:"25%"}}>
                    <h2 style={{color:"#224798", textAlign:"center"}}>Dodajte Task</h2>
                    <form>
                        <label style={{color:"#224798"}} for="email">Naslov</label>
                        <input type="email" id="email"></input>
                        <label style={{color:"#224798"}} for="password">Opis</label>
                        <textarea name="message" rows="4" required id="password"></textarea>
                        <Button style={{textAlign:"center", textDecoration:"none"}} className='button' to="/dashboard"
                      //onClick={(e) => e.preventDefault()}
                      size="lg"
                      tag={Link}>Sačuvaj</Button>
 
                    </form>
                </div>
            </div>

   


       </div>
       
          )}
      
      </MobileView>

      {/*<MobileView>

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

      </MobileView>*/}

    </>
  );
}

export default AddEditTask;