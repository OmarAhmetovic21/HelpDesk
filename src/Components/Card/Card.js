import React from "react";
import './Card.css';
import { BrowserView, MobileView } from "react-device-detect";
import EditTask from "../Edit-Task/Edit-Task";


// reactstrap components
/*import {Button, Card, CardHeader, CardBody, CardFooter, Form, Input, InputGroupAddon, InputGroupText,
  InputGroup, Container, Col, Row} from "reactstrap";*/


function CardComponent() {
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
    <BrowserView>
        <div className="card-container" style={{margin:"0", marginLeft:"80%",width:"300px", height: "625%"}}>
            
            <div className="task-bin">
            <h3 style={{textAlign:"center", marginTop:"3%"}}>Zadatak 1</h3>
            <button id="delete-task"><img style={{width:"100%", height:"100%"}} src="bin.png" alt="SarajevoGas Logo"></img></button>
            
            </div>

            {/*<div className="paragraph-container" >

            </div>*/}
            <p id="task-description-p">Odnijeti računare i popraviti ŠTO PRIJE I HITNO</p>

            <div className="card-footer">
             
            <div className="card-status-div">
                      <p id='card-task-priority'>Urgetno</p>
                        <p id="card-task-assigned">Enver</p>

                  </div>
 
                 <div className="card-status-div">
                      <p id="card-status-caption">Status:</p>
                      <select id="task-progress-select" required>
                         <option id="option4" value="sector1">U toku</option>
                         <option id="option4" value="sector2">Završeno</option>
                        </select>

                  </div>

                <EditTask/>
                </div>


        </div>
      </BrowserView>

      <MobileView>
      <div className="card-container" style={{margin:"0", marginLeft:"160%",width:"200%", height: "625%"}}>

<h3 style={{textAlign:"center", marginLeft:"34%"}}>Zadatak 1</h3>

 <p style={{marginLeft:"5%", whiteSpace:"normal", overflowWrap:"break-word", maxWidth:"150px"}}>Odnijeti računare</p>
<div className="card-status-div">
          <p id='card-task-priority'>Urgetno</p>
            <p id="card-task-assigned">Enver</p>

      </div>

     <div className="card-status-div">
          <p id="card-status-caption">Status:</p>
            <p id="card-task-progress">U toku</p>

      </div>

     <h4 style={{color:'#224798', textAlign: 'center', marginTop: "5%", bottom:"0px"}}>
        Više detalja
    </h4>

    <EditTask/>



</div>
      </MobileView>
    </>
  );
}

export default CardComponent;