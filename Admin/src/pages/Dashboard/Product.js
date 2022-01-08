import React from 'react';
import MetaTags from 'react-meta-tags';
import Breadcrumbs from "../../components/Common/Breadcrumb"
import {
    Col,
    Row,
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardImg,
    CardText,
    CardHeader,
    CardImgOverlay,
    CardFooter,
    CardDeck,
    CardColumns,
    Container,
    Button
  } from "reactstrap"

  import img1 from "../../assets/images/small/img-1.jpg"

const Product = () => {
    return (
        <div className="page-content">
            <MetaTags>
          <title>Product | Knoledge Hub </title>
            </MetaTags>
            <Breadcrumbs title="Home" breadcrumbItem="Product" />
                <div>
                   <div>
                      
                       <br/>
                       <h3> Your Products</h3>
                       <br/>
                    </div> 
                   <Row>
                      <Col lg={2}>
                      <Card>
                                <CardImg top width="100%" src={img1} alt="Card image cap" />
                            <CardBody>
                                <CardTitle>Book Name </CardTitle>
                                <CardSubtitle>By @User</CardSubtitle>
                                <CardText>This Book speak about Money.</CardText>
                                <Button outline color="primary" >Button</Button>
                            </CardBody>
                        </Card>
                      </Col>
                      <Col lg={2}>
                      <Card>
                                <CardImg top width="100%" src={img1} alt="Card image cap" />
                            <CardBody>
                                <CardTitle>Book Name </CardTitle>
                                <CardSubtitle>By @User</CardSubtitle>
                                <CardText>This Book speak about Money.</CardText>
                                <Button outline color="primary">Button</Button>
                            </CardBody>
                        </Card>
                      </Col>
                      <Col lg={2}>
                      <Card>
                                <CardImg top width="100%" src={img1} alt="Card image cap" />
                            <CardBody>
                                <CardTitle>Book Name </CardTitle>
                                <CardSubtitle>By @User</CardSubtitle>
                                <CardText>This Book speak about Money.</CardText>
                                <Button outline color="primary">Button</Button>
                            </CardBody>
                        </Card>
                      </Col>
                      <Col lg={2}>
                      <Card>
                                <CardImg top width="100%" src={img1} alt="Card image cap" />
                            <CardBody>
                                <CardTitle>Book Name </CardTitle>
                                <CardSubtitle>By @User</CardSubtitle>
                                <CardText>This Book speak about Money.</CardText>
                                <Button outline color="primary">Button</Button>
                            </CardBody>
                        </Card>
                      </Col>
                      <Col lg={2}>
                      <Card>
                                <CardImg top width="100%" src={img1} alt="Card image cap" />
                            <CardBody>
                                <CardTitle>Book Name </CardTitle>
                                <CardSubtitle>By @User</CardSubtitle>
                                <CardText>This Book speak about Money.</CardText>
                                <Button outline color="primary">Button</Button>
                            </CardBody>
                        </Card>
                      </Col>
                      <Col lg={2}>
                      <Card>
                                <CardImg top width="100%" src={img1} alt="Card image cap" />
                            <CardBody>
                                <CardTitle>Book Name </CardTitle>
                                <CardSubtitle>By @User</CardSubtitle>
                                <CardText>This Book speak about Money.</CardText>
                                <Button outline color="primary">Button</Button>
                            </CardBody>
                        </Card>
                      </Col>
                      
                   </Row>
                   <div>
                      <h3> Your upload Products</h3>
                      <br/>
                   </div> 
                   <Row>
                      <Col lg={2}>
                      <Card>
                                <CardImg top width="100%" src={img1} alt="Card image cap" />
                            <CardBody>
                                <CardTitle>Book Name </CardTitle>
                                <CardSubtitle>By @User</CardSubtitle>
                                <CardText>This Book speak about Money.</CardText>
                                <Button outline color="primary" >Button</Button>
                            </CardBody>
                        </Card>
                      </Col>
                      <Col lg={2}>
                      <Card>
                                <CardImg top width="100%" src={img1} alt="Card image cap" />
                            <CardBody>
                                <CardTitle>Book Name </CardTitle>
                                <CardSubtitle>By @User</CardSubtitle>
                                <CardText>This Book speak about Money.</CardText>
                                <Button outline color="primary">Button</Button>
                            </CardBody>
                        </Card>
                      </Col>
                      <Col lg={2}>
                      <Card>
                                <CardImg top width="100%" src={img1} alt="Card image cap" />
                            <CardBody>
                                <CardTitle>Book Name </CardTitle>
                                <CardSubtitle>By @User</CardSubtitle>
                                <CardText>This Book speak about Money.</CardText>
                                <Button outline color="primary">Button</Button>
                            </CardBody>
                        </Card>
                      </Col>
                      <Col lg={2}>
                      <Card>
                                <CardImg top width="100%" src={img1} alt="Card image cap" />
                            <CardBody>
                                <CardTitle>Book Name </CardTitle>
                                <CardSubtitle>By @User</CardSubtitle>
                                <CardText>This Book speak about Money.</CardText>
                                <Button outline color="primary">Button</Button>
                            </CardBody>
                        </Card>
                      </Col>
                      <Col lg={2}>
                      <Card>
                                <CardImg top width="100%" src={img1} alt="Card image cap" />
                            <CardBody>
                                <CardTitle>Book Name </CardTitle>
                                <CardSubtitle>By @User</CardSubtitle>
                                <CardText>This Book speak about Money.</CardText>
                                <Button outline color="primary">Button</Button>
                            </CardBody>
                        </Card>
                      </Col>
                      <Col lg={2}>
                      <Card>
                                <CardImg top width="100%" src={img1} alt="Card image cap" />
                            <CardBody>
                                <CardTitle>Book Name </CardTitle>
                                <CardSubtitle>By @User</CardSubtitle>
                                <CardText>This Book speak about Money.</CardText>
                                <Button outline color="primary">Button</Button>
                            </CardBody>
                        </Card>
                      </Col>
                      
                   </Row>
                    
               </div>

        </div>
    );
};

export default Product;