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

  <div className="modal-issue">
          <div className="overlay-issue"></div>
            <div className="modal-content">
            <Button style={{width:"10%", height:"5%"}} className="button-close--issue" onClick={toggleModal}><img style={{marginBottom:'40%',width:"85%", height:"100%"}} src="X-icon.png" alt="SarajevoGas Logo"></img></Button>
            <div className="login-box" style={{marginTop:"7.5%"}}>
                    <h2 style={{color:"#224798", textAlign:"center"}}>Prijavite smetnju</h2>
                    <form>
                        <label style={{color:"#224798"}} for="email">Naslov</label>
                        <input type="text" id="issue-title"></input>
                        <label style={{color:"#224798"}} for="password">Opis</label>
                        <textarea id="issue-description" name="message" rows="4" required></textarea>
                        <label style={{color:"#224798",  marginTop: '10px'}} for="password">Prioritet</label>
                        <select id="sector" name="sector" required>
                        <option value="" disabled selected>Izaberi sektor</option>
              <option value="sector1">Sektor 1</option>
              <option value="sector2">Sektor 2</option>
              <option value="sector3">Sektor 3</option>
            </select>
                        <Button style={{textAlign:"center", textDecoration:"none"}} className='button-save-issue' to="/dashboard"
                      //onClick={(e) => e.preventDefault()}
                      size="lg"
                      tag={Link}>Sačuvaj</Button>
 
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