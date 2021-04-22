/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import {
  Container,
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardDeck,
  NavLink,
} from "reactstrap";
import wa from "../Img/wa.png";
import "./style/Contact.css";
import belah from "../Img/Belah.jpg";
import bulat from "../Img/Bulat.jpg";
import { Link } from "react-router-dom";
class OurProducts extends React.Component {
  render() {
    return (
      <>
        <section className="section section-lg">
          <Container>
            <CardDeck className="mb-5">
              <img src={bulat} width="350" height="250" />
              <Card>
                <CardBody>
                  <CardTitle>
                    <h2>Split betel nut</h2>
                  </CardTitle>
                  <CardText>
                    <tr>
                      <td width="70">
                        <p className="font-weight-bold">Quality : </p>
                      </td>

                      <td>
                        <p className="ml-2">
                          Good Cut , available grade 60%-65% ,70%-75% , 80%-
                          85%,90%-95% & Lali (Low Grade)
                        </p>
                        <p className="ml-2">(as per buyer request)</p>
                      </td>
                    </tr>
                  </CardText>
                </CardBody>
              </Card>
            </CardDeck>
            <CardDeck>
              <img src={belah} width="350" height="250" />
              <Card>
                <CardBody>
                  <CardTitle>
                    <h2>Whole betel nut</h2>
                  </CardTitle>
                  <CardText>
                    <tr>
                      <td width="70">
                        <p className="font-weight-bold">Quality : </p>
                      </td>

                      <td>
                        <p className="ml-2">
                          Good Cut , available grade 70%-75%
                        </p>
                        <p className="ml-2">(as per buyer request)</p>
                      </td>
                    </tr>
                  </CardText>
                </CardBody>
              </Card>
            </CardDeck>
            <NavLink tag={Link} href="/aboutus"></NavLink>
            {/* <NavLink
              to="wa.me/6281266719944?text=Assalamualaikum"
              // to="https://api.whatsapp.com/send/?phone=6281266719944?Assalamualaikum"
              className="waku"
              target="_blank"
              tag={Link}
            >
              <img src={wa} className="waku"></img>
            </NavLink> */}
          </Container>
        </section>
      </>
    );
  }
}

export default OurProducts;
