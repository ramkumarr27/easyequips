import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/become-operator.css";

import operatorImg from "../../assets/all-images/cars-img/operator.png";

const BecomeOperatorSection = () => {
  return (
    <section className="become_operator">
      <Container>
        <Row>
          <Col lg="6" md="6" sm="12">
            <img src={operatorImg} alt="" className="w-100" />
          </Col>
          <Col lg="6" md="6" sm="12">
            <h2 className="section_title become_operator-title">
                Do You Want to Earn With Us? So Don't Be Late
            </h2>

            <button className="btn become_operator-btn mt-4">Become a Operator</button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BecomeOperatorSection;
