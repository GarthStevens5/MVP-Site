import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = () => {
  return (
    <MDBFooter className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">Mountain View Publishers</h5>
            <p>
                1505 West 1st Avenue
                Broomfield, CO 80020
            </p>
            <p>
                Call: (800) MVP-7989
            </p>
            <p>
                Email: support@mvpmail.com
            </p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">Navigation</h5>
            <ul>
              <li className="list-unstyled">
                <a href="/">Home</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">About</a>
              </li>
              <li className="list-unstyled">
                <a href="/products">Products</a>
              </li>
              <li className="list-unstyled">
                <a href="/promotions">Promotions</a>
              </li>
              <li className="list-unstyled">
                <a href="/testimonials">Testimonials</a>
              </li>
              <li className="list-unstyled">
                <a href="/winners">Winners</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Credentials</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: Mountain View Publishers
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;