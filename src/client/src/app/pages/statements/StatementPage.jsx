/*
Import extenal libraries
*/
import React, { Component } from "react";

/*
Import internal libraries
*/
import Api from "../../services";

/*
Import css file
*/
import "./StatementPage.scss";

/*
Import components
*/
import HeaderFullscreen from "../../components/header/header-fullscreen/HeaderFullscreen";
import GridWrapper from "../../components/structural-components/grid-wrapper/GridWrapper";
import Title from "../../components/text-components/title/Title";
import Paragraph from "../../components/text-components/paragraph/Paragraph";
import Quote from "../../components/text-components/quote";
import GeneralNav from "../../components/header/general-nav/GeneralNav";
import Featured from "../../components/card-components/featured/Featured";
import { ParallaxProvider } from "react-scroll-parallax";
import { Parallax } from "react-scroll-parallax";
import BlankDiv from "../../components/styled-components/blank-div/BlankDiv";
import Footer from "../../components/footer";
import OverlayMenu from "../../components/structural-components/overlay-menu/OverlayMenu";
import TeacherProfile from "../../components/card-components/teacher-profile/TeacherProfile";
import EasyFlexRow from "../../components/structural-components/flexbox/easy-flex-row/EasyFlexRow";

class StatementPage extends Component {
  state = {
    testemonials: []
  };

  componentWillMount() {
    this.loadTestemonials(1);
  }

  loadTestemonials = pageIndex => {
    Api.findTestemonials({ limit: 4, skip: pageIndex })
      .then(data => {
        console.log(data.docs);
        const prevTestomial = this.state.testemonials;
        const newTestemonial = [...prevTestomial, ...data.docs];
        this.setState(prevState => ({
          ...prevState,
          testemonials: newTestemonial,
          pagination: {
            limit: data.limit,
            page: data.page,
            pages: data.pages,
            total: data.total
          }
        }));
      })
      .catch(error => {
        console.log(error);
      });
  };

  toggleMenu = e => {
    e.preventDefault();
    this.setState(state => ({ showMenu: !state.showMenu }));
  };

  getParentState = e => {
    let parentState = this.state.showMenu;
    return parentState;
  };

  render() {
    const { testemonials } = this.state;
    this.items = this.state.testemonials.map(item => (
      <div key={item.id} className="col-space-between card-wrapper">
        <h2 className="primary-subtitle">{item.subject}</h2>
        <p className="">{item.body}</p>
        <p className="">{item.name}</p>
        <br />
      </div>
    ));
    return (
      <React.Fragment>
        <OverlayMenu menustate={this.state.showMenu} />
        <GridWrapper style="html-wrapper">
          <GridWrapper style="main-page-wrapper">
            <BlankDiv style="blank-div-lg" />
            <GeneralNav
              toggleMenu={this.toggleMenu}
              menustate={this.getParentState()}
            />
            <Title style="section-title" text="Getuigenissen" />
            <Paragraph
              text="Wat als je drie studententeams in verschillende landen dezelfde briefing geeft? En ze vervolgens parallel aan hun eigen oplossing laat werken? In het initiatief Parkspot besloten docenten van de Hogeschool van Amsterdam, Hochschulde der Medien (Stuttgart) en Arteveldehogeschool om dat eens uit te testen."
              style="standard-text-paragraph par-pos-1 paragraph-mb-med"
            />
            <BlankDiv style="blank-div-lg" />
            <div className="testimonial-wrapper">
              <Title style="testimonial-title" text="Nomi Van Gool" />
              <div className="testimonial-box">
                <div className="testimonial-image" />
                <div className="testimonial-counter">01</div>
              </div>
              <a href="/testimonialsdetailpage" className="testimonial-link">LEES GETUIGENIS</a>
            </div>
            <div className="testimonial-wrapper">
              <Title style="testimonial-title" text="Bert Goosens" />
              <div className="testimonial-box">
                <div className="testimonial-image" />
                <div className="testimonial-counter">02</div>
              </div>
              <a href="/testimonialsdetailpage" className="testimonial-link">LEES GETUIGENIS</a>
            </div>
            <div className="testimonial-wrapper">
              <Title style="testimonial-title" text="Victor Gouhie" />
              <div className="testimonial-box">
                <div className="testimonial-image" />
                <div className="testimonial-counter">03</div>
              </div>
              <a href="/testimonialsdetailpage" className="testimonial-link">LEES GETUIGENIS</a>
            </div>
            <Footer />
          </GridWrapper>
        </GridWrapper>
      </React.Fragment>
    );
  }
}

export default StatementPage;
