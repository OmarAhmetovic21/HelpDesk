import React from "react";
import './Edit-Task.css';
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import { useState } from 'react';
import { BrowserView, MobileView } from "react-device-detect";


// reactstrap components
/*import {Button, Card, CardHeader, CardBody, CardFooter, Form, Input, InputGroupAddon, InputGroupText,
  InputGroup, Container, Col, Row} from "reactstrap";*/


function EditTask() {
  const [modal, setModal] = useState(false);

const toggleModal = () => {
  setModal(!modal)
}

  return (
    <>
    <Button style={{textDecoration:"none"}}  className="edit-button"onClick={toggleModal}
                      size="lg"
                      tag={Link}>
    <p
> <BrowserView> Izmijeni</BrowserView>
                      <MobileView> Izmijeni</MobileView>
                      
    </p>

                      </Button>

  <BrowserView>
    {modal && (
         <div className="edit-modal">
          <div className="edit-overlay"></div>
            <div className="edit-modal-content">
            
            <div className="edit-login-box-task" style={{marginTop:"7.5%", justifyContent:'center'}}>
                    <form>
                        <input placeholder="Naziv zadatka (Edit)" type="text" id="edit-title"></input>
                        <textarea placeholder="Počnite pisati... (Edit)" id="edit-task-description" name="message" rows="4" required></textarea>
                      <div className="edit-task-form-actions">
                        <select id="edit-priority" name="sector" required>
                         <option id="edit-option3" value="" disabled selected>Prioritet</option>
                         <option id="edit-option3" value="sector1">Urgentno</option>
                         <option id="edit-option3" value="sector2">Visoki</option>
                         <option id="edit-option3" value="sector3">Srednji</option>
                         <option id="edit-option3" value="sector3">Niski</option>
                        </select>
                        <input type="email" id="edit-email-task" placeholder="Dodijelite task"></input>
                      </div>
                      <div className="edit-task-form-actions-two">
                      <label id="edit-status-heading">Status:</label>
                        <select id="edit-task-progress-select" required>
                         <option id="edit-option4" value="sector1">U toku</option>
                         <option id="edit-option4" value="sector2">Završeno</option>
                        </select>

                      </div>
                      
                        <Button style={{textAlign:"center", textDecoration:"none"}} className='edit-button-save' onClick={toggleModal}
                      //onClick={(e) => e.preventDefault()}
                      size="lg"
                      tag={Link}>Spasi Promjene</Button>
                      <button onClick={toggleModal} type="button" id='edit-closebtntask'>Zatvori</button>
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

     

    </>
  );
}

export default EditTask;