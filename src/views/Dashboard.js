import React from "react";
import { Link } from "react-router-dom";
import { BrowserView, MobileView} from 'react-device-detect';
import CardComponent from "components/Card/CardComponent";

// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

// core components

function DashBoard() {
  const [pills, setPills] = React.useState("2");
  React.useEffect(() => {
    document.body.classList.add("logine-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("login-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);
  return (
    <>
      {/*<IndexNavbar />*/}
      <div className="content">
        <BrowserView>
        <Row className="text-center">
          <Col style={{backgroundColor:"white"}}>
          <img alt="..." style={{width:"25%", height:"100%", boxShadow:"none"}} className="img-raised" src={require("assets/img/SarajevogasLogo2.jpg")}></img>
          </Col>
        </Row>
        <Row className="text-center">
          <Col style={{backgroundColor:"green"}}>
          <h5 className="text-center" style={{color:"white", fontWeight:"bold",marginTop:"1%"}}>Help Desk</h5>
          </Col>
        </Row>

        <Row className="text-center">
          <Col style={{backgroundColor:"white"}}>
          <h5 className="text-center" style={{color:"#224798", fontWeight:"bold",marginTop:"1%"}}>Dobro Došli</h5>
          </Col>
        </Row>

        <Row>
          <Col style={{backgroundColor:"white"}}>
          <h6 style={{marginLeft:"20%",color:"#224798", fontWeight:"bold",marginTop:"1%"}}>Taskovi <i style={{marginLeft:"2%", height:"20%", width:"20%"}} class="fas fa-plus"></i></h6>
          
          </Col>
        </Row>

        <Row style={{marginTop:'5%'}}>
          <Col style={{marginLeft:'15%'}}>
           <CardComponent/>
          </Col>
        </Row>


        <Row className="text-center" style={{marginTop:'5%', display:'flex', justifyContent:'center'}}>
          <Col className="text-center" style={{justifyContent:'center', display:'flex'}}>
          <Button className="btn-round text-center" style={{justifyContent:'center',display:'flex',backgroundColor:"#224798", width:"20%"}}
        to="/index"
        //onClick={(e) => e.preventDefault()}
        size="lg"
        tag={Link}
      >
        Logout
      </Button>
      </Col>

        </Row>

        </BrowserView>

        <MobileView>
        <Row className="text-center">
          <Col style={{backgroundColor:"white"}}>
          <img alt="..." style={{width:"25%", height:"100%", boxShadow:"none"}} className="img-raised" src={require("assets/img/SarajevogasLogo2.jpg")}></img>
          </Col>
        </Row>
        <Row className="text-center">
          <Col style={{backgroundColor:"green"}}>
          <h6 className="text-center" style={{color:"white", fontWeight:"bold",marginTop:"1%"}}>Help Desk</h6>
          </Col>
        </Row>

        <Row className="text-center">
          <Col style={{backgroundColor:"white"}}>
          <h6 className="text-center" style={{color:"#224798", fontWeight:"bold",marginTop:"1%"}}>Dobro Došli</h6>
          </Col>
        </Row>

        <Row>
          <Col style={{backgroundColor:"white"}}>
          <h7 style={{marginLeft:"20%",color:"#224798", fontWeight:"bold",marginTop:"1%"}}>Taskovi <i style={{marginLeft:"2%", height:"10%", width:"10%"}} class="fas fa-plus"></i></h7>
          
          </Col>
        </Row>


        <Row className="text-center">
          <Col className="text-center">
          <Button className="btn-round text-center" style={{backgroundColor:"#224798", width:"40%"}}
        to="/index"
        //onClick={(e) => e.preventDefault()}
        size="lg"
        tag={Link}
      >
        Logout
      </Button>
      </Col>

        </Row>


        </MobileView>
      </div>
    </>
  );
}

export default DashBoard;
