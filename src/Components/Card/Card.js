import React from "react";
import './Card.css';

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
        <div className="card-container">

            <h3 style={{textAlign:"center"}}>Zadatak 1</h3>

                 <p style={{marginLeft:"5%"}}>Odnijeti računare</p>

            <div className="card-footer">
                <h4 style={{color:'#224798', textAlign: 'center'}}>
                    Više detalja
                </h4>

            </div>






        </div>
    </>
  );
}

export default CardComponent;