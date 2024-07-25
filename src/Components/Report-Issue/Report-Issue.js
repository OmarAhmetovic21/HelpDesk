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
       
          )}
    
  

    </>
  );

}

export default ReportIssue;