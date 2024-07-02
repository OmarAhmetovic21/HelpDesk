import React from "react";
import { BrowserView, MobileView} from 'react-device-detect';

// reactstrap components
import {Button, Card, CardHeader, CardBody, CardFooter, Form, Input, InputGroupAddon, InputGroupText,
  InputGroup, Container, Col, Row} from "reactstrap";

// core components
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

          <BrowserView>
          <Row className="text-center" style={{height:"100vh", margin:"0"}}>
            <Col style={{backgroundColor:"green"}} md="4">
                <img alt="..." style={{boxShadow:"none",marginTop:'50%',borderRadius:"50%", width:"11%", height:"7.5%"}} className="img-raised" src={require("assets/img/SarajevogasLogo.jpg")}></img>
                <h5 className="text-center" style={{color:"white", fontWeight:"bold",marginTop:"2.5%"}}>Sarajevogas Help Desk</h5>
            </Col>            

            <Col className="text-center" style={{backgroundColor:"white"}}>
              <Card className="card-login card-plain">
                <Form style={{marginTop:"50%"}} action="" className="form" method="">
                  <CardHeader className="text-center">
                    <h4 style={{color:"#224798", fontWeight:"bold"}}>Login</h4>
                  </CardHeader>
                  <CardBody>
                  <h5 style={{color:"#224798", float:"left"}}>Email</h5>
                    <InputGroup
                      className={
                        "no-border input-lg" +
                        (firstFocus ? " input-group-focus" : "")
                      }
                    >  
                      <Input style={{borderRadius:"2px",backgroundColor:"white", border:"1px solid green", borderColor:"green", color:"black"}}
                        placeholder="ime.prezime@sarajevogas.ba"
                        type="text"
                        onFocus={() => setFirstFocus(true)}
                        onBlur={() => setFirstFocus(false)}
                      ></Input>
                    </InputGroup>
                    <h5 style={{color:"#224798", float:"left"}}>Password</h5>
                    <InputGroup
                      className={
                        "no-border input-lg" +
                        (lastFocus ? " input-group-focus" : "")
                      }
                    >
                      <Input style={{borderRadius:"2px",backgroundColor:"white", border:"1px solid green", borderColor:"green",color:"black"}}
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
                  </CardFooter>
                </Form>
              </Card>
            </Col>
          </Row>
          </BrowserView>

          <MobileView>
          <Row className="text-center" style={{margin:"0"}}>
            <Col style={{backgroundColor:"green", alignItems:"center",justifyContent:"center"}} md="4">
                <img alt="..." style={{boxShadow:"none",marginTop:"5%",borderRadius:"50%", width:"7%", height:"20%"}} className="img-raised" src={require("assets/img/SarajevogasLogo.jpg")}></img>
                <h6 className="text-center" style={{color:"white", fontWeight:"bold",marginTop:"2.5%"}}>Sarajevogas Help Desk</h6>
            </Col>            

            <Col className="text-center" style={{backgroundColor:"white"}}>
              <Card className="card-login card-plain">
                <Form style={{marginTop:"20%"}} action="" className="form" method="">
                  <CardHeader className="text-center">
                    <h5 style={{color:"#224798", fontWeight:"bold"}}>Login</h5>
                  </CardHeader>
                  <CardBody>
                  <h6 style={{color:"#224798", float:"left"}}>Email</h6>
                    <InputGroup
                      className={
                        "no-border input-lg" +
                        (firstFocus ? " input-group-focus" : "")
                      }
                    >  
                      <Input style={{borderRadius:"2px",backgroundColor:"white", border:"1px solid green", borderColor:"green", color:"black"}}
                        placeholder="ime.prezime@sarajevogas.ba"
                        type="text"
                        onFocus={() => setFirstFocus(true)}
                        onBlur={() => setFirstFocus(false)}
                      ></Input>
                    </InputGroup>
                    <h6 style={{color:"#224798", float:"left"}}>Password</h6>
                    <InputGroup
                      className={
                        "no-border input-lg" +
                        (lastFocus ? " input-group-focus" : "")
                      }
                    >
                      <Input style={{borderRadius:"2px",backgroundColor:"white", border:"1px solid green", borderColor:"green",color:"black"}}
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
          </MobileView>
      {/*</div>*/}
    </>
  );
}

export default Login;
