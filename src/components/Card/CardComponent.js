import React from "react";
import { BrowserView, MobileView} from 'react-device-detect';
import './CardComponent.scss';

// reactstrap components
/*import {Button, Card, CardHeader, CardBody, CardFooter, Form, Input, InputGroupAddon, InputGroupText,
  InputGroup, Container, Col, Row} from "reactstrap";*/

// core components
import IndexNavbar from "components/Navbars/IndexNavbar";
import { Link } from "react-router-dom";

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
            <div className="card-content">

            <div className="card-title text-center">
                 <h3 style={{marginTop:'20px'}}>Zadatak 1</h3>
            </div>

            <div className="card-title text-center">
                 <p>Odnijeti računare</p>
            </div>

            </div>

            <div className="content-center">
                <h4 style={{color:'#224798', display: 'flex', justifyContent: 'center'}}>
                    Više detalja
                </h4>

            </div>

          

        </div>
    </>
  );
}

export default CardComponent;
