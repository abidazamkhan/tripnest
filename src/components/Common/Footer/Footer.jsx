import React, { useState } from "react";
import "../Footer/footer.css"
import { Col, Container, Row, ListGroup } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true)
    }
    else if (scrolled <= 300) {
      setVisible(false)
    }
  }

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", toggleVisible)
  }


  return (
    <>
      <footer className="pt-5">
        <Container>
          <Row>
            <Col md="3" sm="12" className="quick_link mt-3 mt-md-0 ">
              <h4 className="mt-lg-0 mt-sm-3">Company </h4>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <NavLink to="/">About Us</NavLink>
                </ListGroup.Item>
                <ListGroup.Item>
                  <NavLink to="/">News</NavLink>
                </ListGroup.Item>
                <ListGroup.Item>
                  <NavLink to="/">Faq</NavLink>
                </ListGroup.Item>

              </ListGroup>
            </Col>
            <Col md="3" sm="12" className="quick_link mt-3 mt-md-0 ">
              <h4 className="mt-lg-0 mt-sm-3">Explore </h4>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <NavLink to="/"> Faq</NavLink>
                </ListGroup.Item>
                <ListGroup.Item>
                  <NavLink to="/">Tour Listings</NavLink>
                </ListGroup.Item>
                <ListGroup.Item>
                  <NavLink to="/"> Destination</NavLink>
                </ListGroup.Item>

              </ListGroup>
            </Col>
            <Col md="3" sm="12" className="quick_link mt-3 mt-md-0 ">
              <h4 className="mt-lg-0 mt-sm-3">Quick Link </h4>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <NavLink to="/"> Home</NavLink>
                </ListGroup.Item>
                <ListGroup.Item>
                  <NavLink to="/">About Us </NavLink>
                </ListGroup.Item>
                <ListGroup.Item>
                  <NavLink to="/"> Contact Us </NavLink>
                </ListGroup.Item>

              </ListGroup>
            </Col>
            <Col md="3" sm="12" className="location mt-3 mt-md-0 ">
              <h4 className="mt-lg-0 mt-sm-3">Contact Info </h4>

              <div className="d-flex align-items-center">
                <p className="pb-2"> Dhaka, Bangladesh</p>
              </div>

              <div className="d-flex align-items-top my-2">
                <i className="bi bi-geo-alt me-3"></i>
                <a target="_blank" rel="noopener noreferrer" href="mailto:tripnest@gmail.com" className="d-block" >tripnest@gmail.com</a>
              </div>
              <div className="d-flex align-items-top ">
                <i className="bi bi-telephone me-3"></i>
                <a target="_blank" rel="noopener noreferrer" href="tel:1234567890" className="d-block" >1234567890</a>
              </div>

            </Col>
          </Row>
          <Row className="py-2 bdr mt-3">
            <Col className="col copyright text-center">
              <div
                className="
    group inline-flex items-center gap-1
    pb-4 text-sm font-medium
    text-slate-500 transition-all duration-300
  "
              >
                <span>Developed by</span>

                <a
                  href="https://abidazam.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative font-semibold text-slate-700 hover:text-black ms-1"
                >
                  Abid Azam Khan
                  <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-slate-900 transition-all duration-300 hover-line" />
                </a>

                <span className="text-slate-400 ms-1">· CEO of</span>

                <a
                  href="https://unipixer.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-indigo-600 transition-colors hover:text-indigo-700 ms-1"
                >
                  UNIPIXER
                </a>
              </div>
            </Col>
          </Row>

        </Container>
      </footer>

      <div id="back-top"
        onClick={scrollTop}
        className={visible ? "active" : ""}>
        <i className="bi bi-arrow-up"></i>

      </div>
    </>
  );
};

export default Footer;
