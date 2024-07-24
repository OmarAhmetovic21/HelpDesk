import React from 'react';
import './Report-Issue.css';
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import { useState } from 'react';
import { BrowserView, MobileView } from "react-device-detect";

function ReportIssue() {

    const [modal, setModal] = useState(false);

    const toggleModal = () => {
      setModal(!modal)
    }

  return (
    <>

<Button style={{textAlign:"center", textDecoration:"none"}} className='button-add'
                      onClick={toggleModal}
                      size="lg"
                      tag={Link}> <BrowserView> Prijavite smetnju</BrowserView>
                      <MobileView> Prijavite smetnju </MobileView>
                      
    </Button>

{modal && (
         <div className="modal">
          <div className="overlay"></div>
            <div className="modal-content">
            <Button className="button-close" onClick={toggleModal}><img style={{width:"40%", height:"40%"}} src="X-icon.png" alt="SarajevoGas Logo"></img></Button>
            <div className="login-box" style={{marginTop:"25%"}}>
                    <h2 style={{color:"#224798", textAlign:"center"}}>Šrijavite smetnju</h2>
                    <form>
          <div className="form-group">
            <input type="text" id="name" name="name" placeholder="Ime i Prezime" required />
          </div>
          <div className="form-group">
            <input type="email" id="email" name="email" placeholder="tvoj_email@sarajevogas.ba" required />
          </div>
          <div className="form-group">
            <label id='porukaBoja' htmlFor="message">Poruka:</label>
            <textarea id="message" name="message" rows="4" required></textarea>
          </div>
          <div className="form-group">
            <select id="sector" name="sector" required>
              <option value="" disabled selected>Izaberi sektor</option>
              <option value="sector1">Sektor 1</option>
              <option value="sector2">Sektor 2</option>
              <option value="sector3">Sektor 3</option>
            </select>
          </div>
          <Button style={{textAlign:"center", textDecoration:"none"}} className='button' to="/dashboard"
                      //onClick={(e) => e.preventDefault()}
                      size="lg"
                      tag={Link}>Pošalji</Button>
        </form>
                </div>
            </div>

   


       </div>
       
          )}
    
    <div className="container">
      <div className="form-container">
        <h2>Prijavi smetnju:</h2>
        <form>
          <div className="form-group">
            <input type="text" id="name" name="name" placeholder="Ime i Prezime" required />
          </div>
          <div className="form-group">
            <input type="email" id="email" name="email" placeholder="tvoj_email@sarajevogas.ba" required />
          </div>
          <div className="form-group">
            <label id='porukaBoja' htmlFor="message">Poruka:</label>
            <textarea id="message" name="message" rows="4" required></textarea>
          </div>
          <div className="form-group">
            <select id="sector" name="sector" required>
              <option value="" disabled selected>Izaberi sektor</option>
              <option value="sector1">Sektor 1</option>
              <option value="sector2">Sektor 2</option>
              <option value="sector3">Sektor 3</option>
            </select>
          </div>
          <button type="submit">Pošalji</button>
        </form>
      </div>
    </div>

    </>
  );

}

export default ReportIssue;