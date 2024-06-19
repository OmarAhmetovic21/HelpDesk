import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Col,
  Row
} from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar";
import { Link } from "react-router-dom";

function Login() {
  const [firstFocus, setFirstFocus] = React.useState(false);
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
  }, []);
  return (
    <>
      {/*<IndexNavbar />*/}
      {/*<div  className="page-header" style={{backgroundColor:"green"}}>*/}
        {/*<div
          className="page-header-image"
          style={{
            background: "url(" + require("assets/img/login.jpg") + ")"
          }}
        >
          
        </div>*/}

        <div className="content">

          {/*<Row className="text-center" style={{backgroundColor:"green"}}>
            <Col style={{marginTop:"2%"}}>
            <img alt="..." style={{borderRadius:"50%", width:"5%", height:"55%"}} className="img-raised" src={require("assets/img/SarajevogasLogo.jpg")}></img>
            <h5 style={{color:"white", fontWeight:"bold", marginTop:"1%"}}>Sarajevogas Help Desk</h5>
            </Col>
          </Row>*/}
          <Row className="text-center" style={{height:"100vh", margin:"0"}}>
            <Col style={{backgroundColor:"green"}} md="4">
                <img alt="..." style={{marginTop:"50%",borderRadius:"50%", width:"15%", height:"10%"}} className="img-raised" src={require("assets/img/SarajevogasLogo.jpg")}></img>
                <h5 className="text-center" style={{color:"white", fontWeight:"bold",marginTop:"2.5%"}}>Sarajevogas Help Desk</h5>
            </Col>

            <Col style={{backgroundColor:"white"}}>
              <Card className="card-login card-plain">
                <Form style={{marginTop:"50%"}} action="" className="form" method="">
                  <CardHeader className="text-center">
                    <h4 style={{color:"#224798", fontWeight:"bold"}}>Login</h4>
                  </CardHeader>
                  <CardBody>
                  <h5 style={{color:"#224798", float:"left",marginLeft:"5%"}}>Email</h5>
                    <InputGroup
                      className={
                        "no-border input-lg" +
                        (firstFocus ? " input-group-focus" : "")
                      }
                    >

                      
                      <Input style={{borderRadius:"3%",backgroundColor:"white", border:"3px solid green", borderColor:"green", color:"black"}}
                        placeholder="ime.prezime@sarajevogas.ba"
                        type="text"
                        onFocus={() => setFirstFocus(true)}
                        onBlur={() => setFirstFocus(false)}
                      ></Input>
                    </InputGroup>
                    <h5 style={{color:"#224798", float:"left", marginLeft:"5%"}}>Password</h5>
                    <InputGroup
                      className={
                        "no-border input-lg" +
                        (lastFocus ? " input-group-focus" : "")
                      }
                    >

                      <Input style={{borderRadius:"3%",backgroundColor:"white", border:"3px solid green", borderColor:"green",color:"black"}}
                        placeholder="Unesite vaš password"
                        type="password"
                        onFocus={() => setLastFocus(true)}
                        onBlur={() => setLastFocus(false)}
                      ></Input>
                    </InputGroup>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button 
                      block
                      className="btn-round"
                      style={{backgroundColor:"#224798"}}
                      to="/dashboard"
                      //onClick={(e) => e.preventDefault()}
                      size="lg"
                      tag={Link}
                    >
                      Login
                    </Button>
                    {/*<div className="text-center">
                      <h6>
                        <a
                          className="link"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          Create Account
                        </a>
                      </h6>
                    </div>*/}
                  </CardFooter>
                </Form>
              </Card>
            </Col>
          </Row>

        </div>
      {/*</div>*/}
    </>
  );
}

export default Login;
