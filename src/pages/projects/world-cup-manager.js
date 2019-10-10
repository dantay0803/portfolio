import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import '../../styles/bootstrap-4.3.1.min.css';
import Layout from '../../components/layout/layout';
import SEO from '../../components/seo';
import googlePlay from '../../images/google-play-badge.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'gatsby-plugin-modal-routing';
import wcmMainMenu from '../../images/worldcupmanager/wcmMainMenu.png';
import wcmInstructions from '../../images/worldcupmanager/wcmInstructions.png';
import wcmGroup from '../../images/worldcupmanager/wcmGroup.png';
import wcmKnockout from '../../images/worldcupmanager/wcmKnockout.png';

const StyledContainer = styled(Container)`
  padding: 0;
  margin: 0;
  padding-bottom: 2rem;
  text-align: center;

  .appImages {
    width: 100%;
    margin: 1rem;
    padding: 0.5rem;
  }
`;

const WorldCupManager = () => (
  <Layout>
    <SEO
      title='World Cup Manager'
      description={'Information on my portfolio project World Cup Manager'}
      pathname={'/projects/world-cup-manager'}
    />
    <StyledContainer fluid>
      <Row noGutters>
        <Col xs={{ span: 1, offset: 11 }}>
          <Link to={'/#projects'} className='noUnderline'>
            <FontAwesomeIcon icon={faWindowClose} size='1x' />
          </Link>
        </Col>
      </Row>
      <Row noGutters>
        <Col xs={{ span: 8, offset: 2 }}>
          <h1>World Cup Manager</h1>
          <hr className='hrTitle' />
        </Col>
      </Row>
      <Row noGutters>
        <Col xs={{ span: 10, offset: 1 }} md={{ span: 6, offset: 3 }}>
          <p>
            World Cup manager was created as part of a three man team for our
            computer project class, our brief was to create a piece of software
            from a list as part of a random team of people that do not know each
            other. My team decided to make a mobile application that allowed
            people to save game outcomes about the world cup and have it update
            tables and outcomes.
          </p>
        </Col>
      </Row>
      <Row noGutters>
        <Col xs='12' md={{ span: 4, offset: 2 }}>
          <img
            src={wcmMainMenu}
            alt='World Cup Manager Main Menu'
            className='img-responsive appImages'
            fluid
          />
        </Col>
        <Col xs='12' md='4'>
          <img
            src={wcmInstructions}
            alt='World Cup Instructions'
            className='img-responsive appImages'
            fluid
          />
        </Col>
      </Row>
      <Row noGutters>
        <Col xs={{ span: 10, offset: 1 }} md={{ span: 6, offset: 3 }}>
          <p>
            The application displays the matches to be played in the tournament
            and then takes in user input of score from each game. Once the
            scores have been entered the application will update the group
            stages by filling in the points, goals, goal difference and other
            information to the group tables. After the group stage the
            application displays the knockout stages and once again it takes a
            score input and will graphically display which teams move on further
            into the tournament. It can also be used to simulate made up
            outcomes in a world cup situation and can also be used for future
            tournaments as well. During the tournament the application had over
            ten thousand downloads with our highest daily download total hitting
            250.
          </p>
        </Col>
      </Row>
      <Row noGutters>
        <Col xs='12' md={{ span: 4, offset: 2 }}>
          <img
            src={wcmGroup}
            alt='World Cup Group Stage'
            className='img-responsive appImages'
            fluid
          />
        </Col>
        <Col xs='12' md='4'>
          <img
            src={wcmKnockout}
            alt='World Cup Manager Knockout Stage'
            className='img-responsive appImages'
            fluid
          />
        </Col>
      </Row>
      <Row noGutters>
        <Col xs={{ span: 10, offset: 1 }} md={{ span: 6, offset: 3 }}>
          <p>
            My role is the team was to get resources, compile minutes of
            meetings and help with half of the documentation; my main task was
            to create 75 of the 100 flags that could be used in a world cup
            tournament as no good quality version of these flags were available
            for download. I had a lot of fun designing and creating the
            application as well as learning a lot making it, it was a challenge
            at first to make such an application in a short period of time with
            people I have never spoken to before but I feel the outcome of the
            final product was fantastic.
          </p>
        </Col>
      </Row>
      <Row noGutters>
        <Col xs='12' md={{ span: 4, offset: 4 }}>
          <a
            href='https://play.google.com/store/apps/details?id=framework.core&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'
            target='_blank'
            rel='noopener noreferrer'
            className='noUnderline'>
            <img
              src={googlePlay}
              alt='Google Play Badge'
              className='appStoreBadge'
              fluid
            />
          </a>
        </Col>
      </Row>
    </StyledContainer>
  </Layout>
);

export default WorldCupManager;
