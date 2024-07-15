import './Dashboard.css';
import {Button, Card, CardHeader, CardBody, CardFooter, Form, Input, InputGroupAddon, InputGroupText,
  InputGroup, Container, Col, Row} from "reactstrap";
import { Link } from 'react-router-dom';
import CardComponent from '../Card/Card';
import { useState } from 'react';
import { BrowserView, MobileView } from "react-device-detect";
import AddEditTask from '../Add-Edit-Task/Add-Edit-Task';

function DashBoard() {
const [modal, setModal] = useState(false);

const toggleModal = () => {
  setModal(!modal)
}

  return (
    <>
        <div className='body-dashboard'>
        <div className='image-div'>
          <img style={{width:"25%", height:"100%"}} src="SarajevogasLogo2.jpg" alt="SarajevoGas Logo"></img>
        </div>

        <div className='heading-div'>
             <h2 style={{textAlign:"center", margin:"0"}}>Helpdesk</h2>

        </div>

        
        <div className='greeting-message-div'>
        <h2 style={{textAlign:"center", margin:"0", color:"#224798"}}>Dobro došli</h2>

        </div>

        <div className='task-heading'>
            <h3 style={{margin:"0", color:"#224798", marginLeft:"20%"}}>Taskovi </h3>
            <AddEditTask/>
            
        </div>
        <div className='card-div'>
        <CardComponent/>
        </div>

        <div className='footer-div' style={{marginTop:"17%"}}>
        <Button style={{textAlign:"center", textDecoration:"none", width:"10%"}} className='button' to="/index"
                      //onClick={(e) => e.preventDefault()}
                      size="lg"
                      tag={Link}>Logout</Button>
          
        </div>
    
        </div>
       

</>
  );
}

export default DashBoard;
