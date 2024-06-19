import React from "react";
import { Link } from "react-router-dom";

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
import IndexNavbar from "components/Navbars/IndexNavbar";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";

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

      </div>
    </>
  );
}

export default DashBoard;
