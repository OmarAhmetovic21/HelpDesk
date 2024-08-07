import './Dashboard.css';
import {Button, Card, CardHeader, CardBody, CardFooter, Form, Input, InputGroupAddon, InputGroupText,
  InputGroup, Container, Col, Row} from "reactstrap";
import { Link } from 'react-router-dom';
import CardComponent from '../Card/Card';
import { useState } from 'react';
import { BrowserView, MobileView } from "react-device-detect";
import AddEditTask from '../Add-Edit-Task/Add-Edit-Task';
import ReportIssue from '../Report-Issue/Report-Issue';

function DashBoard() {
const [modal, setModal] = useState(false);

const toggleModal = () => {
  setModal(!modal)
}

  return (
    <>
    <BrowserView>
        <div className='body-dashboard'>
        <div className='image-div'>
          <img style={{height:"100%", marginTop:"5px"}} src="SarajevogasLogo2.jpg" alt="SarajevoGas Logo"></img>
        </div>

        <div className='heading-div'>
             <h2  id='h2-ds'>Helpdesk</h2>
             <Button style={{textAlign:"center", textDecoration:"none", width:"10%"}} className='button-logout' to="/index"
                      //onClick={(e) => e.preventDefault()}
                      size="lg"
                      tag={Link}>Logout</Button>
             

        </div>
        
        <div className='greeting-message-div'>
        <h2 style={{textAlign:"center", margin:"0", color:"#224798"}}>Dobrodošao, korisnik</h2>
        

        </div>

        <div className='task-heading'>
            <h3 style={{margin:"10px 0px 0px 16%", color:"#224798"}}>Taskovi </h3>
            <AddEditTask/>
            
        </div>
        <div className='card-div'>
        <CardComponent/>
        </div>

        <div className='footer-div'>
        <ReportIssue/> 
        </div>

        

    
        </div>
       
        </BrowserView>

        <MobileView>
        <div className='body-dashboard'>
        <div className='image-div'>
          <img style={{width:"50%", height:"100%"}} src="SarajevogasLogo2.jpg" alt="SarajevoGas Logo"></img>
        </div>

        <div className='heading-div' style={{height:"5%"}}>
             <h3 style={{textAlign:"center", margin:"0"}}>Helpdesk</h3>

        </div>

        
        <div className='greeting-message-div'>
        <h3 style={{textAlign:"center", margin:"0", color:"#224798"}}>Dobro došli</h3>

        </div>

        <div className='task-heading' style={{textAlign:"center", justifyContent:"center"}}>
            <h3 style={{margin:"0", color:"#224798"}}>Taskovi</h3>
            <AddEditTask/>
            
        </div>
        
        <div className='card-div'>
        <CardComponent/>
        </div>

        <ReportIssue/> 

    
        </div>

        </MobileView>
</>
  );
}

export default DashBoard;
