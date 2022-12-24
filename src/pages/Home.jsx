import React from "react";
import HeroSlider from "../components/UI/HeroSlider";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import FindEquipForm from "../components/UI/FindEquipForm";
import AboutSection from "../components/UI/AboutSection";
import ServicesList from "../components/UI/ServicesList";
import EquipItem from "../components/UI/EquipItem";
import EquipData from "../assets/data/equipData";
import BecomeOperatorSection from "../components/UI/BecomeOperatorSection";
import Testimonial from "../components/UI/Testimonial";
import BlogList from "../components/UI/BlogList";

const Home = () => {
  return (
    <Helmet title="Home">
      {/* ======================== HERO SECTION ================= */}
      <section className="p-0 hero_slider-section">
        <HeroSlider />

        <div className="hero_form">
          <Container>
            <Row className="form_row">
              <Col lg="4" md="4">
                <div className="find_equips-left">
                  <h2 style={{ color: "#3a3b3b", fontWeight: "600" }}>
                    Find your best equipments here
                  </h2>
                </div>
              </Col>
              <Col lg="8" md="8" sm="12">
                <FindEquipForm />
              </Col>
            </Row>
          </Container>
        </div>
      </section>
      {/* ======================== ABOUT SECTION =================== */}
      <AboutSection />
      {/* ======================= SERVICES SECTION ============== */}
      <Container>
        <Row>
          <Col lg="12" className="mb-5 text-center">
            <h6 className="section_subtitle">See our</h6>
            <h2 className="section_title">Popular services</h2>
          </Col>
          <ServicesList />
        </Row>
      </Container>
      {/* {======================= EQUIP OFFER SECTION ============} */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h6 className="section_subtitle">Come with</h6>
              <h2 className="section_title">Hot offers</h2>
            </Col>

            {EquipData.map((item) => (
              <EquipItem item={item} key={item.id} />
            ))}
          </Row>
        </Container>
      </section>
      {/* =================== BECOME A OPEARTOR SECTION =========== */}
      <BecomeOperatorSection />

      {/* ==================== TESTIMONIAL ====================== */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-4 text-center">
              <h6 className="section_subtitle">Our client says</h6>
              <h2 className="section_title">Testimonials</h2>
            </Col>
            <Testimonial />
          </Row>
        </Container>
      </section>
      {/* ==================== BLOG SECTION ====================== */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section_subtitle">Explore our blogs</h6>
              <h2 className="section_title">Latest Blogs</h2>
            </Col>
            <BlogList />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
