import React from "react";
import './Card.css';
import { BrowserView, MobileView } from "react-device-detect";
import AddEditTask from "../Add-Edit-Task/Add-Edit-Task";


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
        <div className="card-container" style={{margin:"0", marginLeft:"160%",width:"200%", height: "625%"}}>

            <h3 style={{textAlign:"center"}}>Zadatak 1</h3>

             <p style={{marginLeft:"5%"}}>Odnijeti računare</p>
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



        </div>
      </BrowserView>

      <MobileView>
        <div className="card-container" style={{width:"200%", height:"300%", marginLeft:"70%"}}>

            <h3 style={{textAlign:"center"}}>Zadatak 1</h3>

                 <p style={{marginLeft:"5%"}}>Odnijeti računare</p>

            <div className="card-footer">
                <h4 style={{color:'#224798', textAlign:'center'}}>
                    Više detalja
                </h4>

            </div>

        </div>
      </MobileView>
    </>
  );
}

export default CardComponent;