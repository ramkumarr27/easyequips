import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/footer.css";

const quickLinks = [
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/#",
    display: "Privacy policy",
  },
  {
    path: "/blog",
    display: "Blog",
  },
  {
    path: "/equipments",
    display: "Equip-List",
  },
  {
    path: "/contact",
    display: "Contact",
  },
];

const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" md="4" sm="12">
            <div className="logo footer_logo">
              <h1>
                <Link to="/home" className="d-flex align-items-center gap-1">
                  <i class="ri-truck-line"></i>
                  <span>
                    Equipments
                    <br />
                    <span>Rental Service </span>
                  </span>
                </Link>
              </h1>
            </div>
            <p className="footer_logo-content">
              Easy Equips India (EQI) - India’s leading construction equipment
              aggregator web portal to buy, sell, and rent heavy construction
              machinery. The online portal has an extensive database for the
              contractors across the nation, to sell, purchase, or rent the
              equipment.
            </p>
          </Col>
          <Col lg="2" md="4" sm="6">
            <div className="mb-4 quick_link">
              <h5 className="footer_link-title">Quick links</h5>
              <ListGroup>
                {quickLinks.map((item, index) => (
                  <ListGroupItem key={index} className="p-0 mt-3 quick_link ">
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </div>
          </Col>
          <Col lg="3" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer_link-title mb-4">Head Office</h5>
              <p className="office-info">No 13, Morais city, Trichy</p>
              <p className="office-info">Phone : +91-98765-43210</p>
              <p className="office-info">Email : easyequipsind@gmail.com</p>
              <p className="office-info">Office Time : 10am - 7pm</p>
            </div>
          </Col>

          <Col lg="3" md="4">
            <div className="mb-4">
              <h5 className="footer_link-title">Newsletter</h5>
              <p className="section_description">Subscribe our newsletter</p>
              <div className="newsletter">
                <input type="email" placeholder="Email" />
                <span>
                  <i class="ri-send-plane-line"></i>
                </span>
              </div>
            </div>
          </Col>
          <Col lg="12">
            <div className="footer_bottom pt-4">
              <p className="section_description d-flex align-items-center justify-content-center gap-1">
                <i class="ri-copyright-line"></i>Copyright {year}, Developed by
                Ramkumar R. All rights reserved
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
