import './Dashboard.css';
import {Button, Card, CardHeader, CardBody, CardFooter, Form, Input, InputGroupAddon, InputGroupText,
  InputGroup, Container, Col, Row} from "reactstrap";
import { Link } from 'react-router-dom';

function DashBoard() {
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
            <h3 style={{margin:"0", color:"#224798", marginLeft:"20%"}}>Taskovi</h3>
        </div>

        <div className='footer-div'>
        <Button style={{textAlign:"center", textDecoration:"none"}} className='button' to="/index"
                      //onClick={(e) => e.preventDefault()}
                      size="lg"
                      tag={Link}>Logout</Button>
          
        </div>



        {/*<Row>
          <Col>
             <h2 style={{color:"#224798"}}>Dobro došli</h2>
          </Col>

        </Row>*/}

      
        
      
       
        </div>
       




        {/*<div className="containe">

            <div className="left-side">
                <div className="logo-container">
                  <div className="logo-container-sc"><img src="logo_samo.png" alt="SarajevoGas Logo" class="logo"></img></div>
                    
                    <h2>DashBoard</h2>
                </div>
            </div>
            <div className="right-side">
                <div className="login-box">
                    <h2>Dasboard</h2>
                    <form>
                        <label for="email">Email</label>
                        <input type="email" id="email" placeholder="ime.prezime@sarajevogas.ba"></input>
                        <label for="password">Password</label>
                        <input type="password" id="password" placeholder="Unesi svoj password"></input>
                        <Button style={{textAlign:"center", textDecoration:"none"}} className='button' to="/index"
                      //onClick={(e) => e.preventDefault()}
                      size="lg"
                      tag={Link}>Logout</Button>
                    </form>
                </div>
            </div>
        </div>*/}

</>
  );
}

export default DashBoard;
