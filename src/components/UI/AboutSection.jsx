import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/about-section.css";
import aboutImg from '../../assets/all-images/cars-img/sideimg5.png';

const AboutSection = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about_section-content">
              <h4 className="section_subtitle">About Us</h4>
              <h2 className="section_title">
                welcome to Equipment rental service
              </h2>
              <p className="section_description">
                Easy Equips India (EEI) is a construction
                equipment aggregator in India for used and hiring segment of
                construction equipments. As of today,the construction equipment
                industry is hard pressed for equipments and efficient deployment
                of assets.This platform is intended to bring in method and process to this
                search and deployment mechanism and make the process quick,
                transparent and hassle free.
              </p>
              <div className="about_section-item d-flex align-items-center">
                <p className="section_description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> CRANES. 
                </p> <nbsp></nbsp>
                <nbsp></nbsp>

                <p className="section_description d-flex align-items-center gap-2" >
                  <i class="ri-checkbox-circle-line"></i> ROAD MACHINERY. 
                </p>
              </div>

              <div className="about_section-item d-flex align-items-center">
                <p className="section_description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> CONCRETE MACHINERY.
                </p>

                <p className="section_description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> EARTH MOVING MACHINERY. 
                </p>
              </div>
            </div>
          </Col>
          <Col lg="6" md="6">
            <div className="about_img">
              <img
                src={aboutImg}
                alt=""
                className="w-100"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
