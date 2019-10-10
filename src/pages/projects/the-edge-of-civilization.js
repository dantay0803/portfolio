import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import '../../styles/bootstrap-4.3.1.min.css';
import Layout from '../../components/layout/layout';
import SEO from '../../components/seo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'gatsby-plugin-modal-routing';

const StyledContainer = styled(Container)`
  padding: 0;
  margin: 0;
  padding-bottom: 2rem;
  text-align: center;
`;

const TheEdgeofCivilization = () => (
  <Layout>
    <SEO
      title='The Edge of Civilization'
      description={
        'Information on my portfolio project The Edge of Civilization'
      }
      pathname={'/projects/the-edge-of-civilization'}
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
          <h1 className='center'>The Edge of Civilization</h1>
          <hr className='hrTitle' />
        </Col>
      </Row>
      <Row noGutters>
        <Col xs={{ span: 10, offset: 1 }} md={{ span: 6, offset: 3 }}>
          <p>
            The Edge of Civilization is a First Person survival game created in
            the Unreal 4 Engine as part of my 3D Level Design Class at
            University.
          </p>
          <iframe
            title='The Edge of Civilization Gameplay Video'
            src='https://www.youtube.com/embed/56GOOdiHXV8'
            frameBorder='0'
            allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
            className='embeddedVideo'></iframe>
          <p>
            The class involved us working in teams of two to design and create a
            level for a game. The initial idea for the game was proposed by me
            then the team built on this idea to polish the idea for the game
            out. As no one on the team was familiar with C++ and because we only
            had 6 weeks to create the game after spending the first 6 weeks on
            the design document, the team opted to use Unreal’s Blueprint
            system. My roles in the team were to work on the design document,
            act as the Team Leader and do all of the coding for the game as I
            was the strongest programmer out of the team.
          </p>
          <p>
            During the project I learned how to use the engine's level creation
            tools to help my team mate build the structure of the level before
            starting to work on the interactivity. The game features a number of
            interactivity from using Trigger Boxes to change the brightness of
            lights to give the light a flickering on effect, making objects
            disappear and playing voice over audio when interacting with objects
            in the level. The game also features two enemies that use Unreal’s
            Navmesh in order to path find to the player and chase them through
            the level. Doing this simple required me to place a Navmesh object
            on the first and second floor of the level then call a Simple Move
            to Actor function in the blueprint of the enemies.
          </p>
          <iframe
            title='The Edge of Civilization Download Link'
            frameBorder='0'
            src='https://itch.io/embed/66495?border_width=2'
            className='itchLink'></iframe>
          <p>
            I also decided to add in level streaming to the game so that the
            only floor of the level that is loaded at any time is the one the
            player is on. Even though the game is not that large or intensive I
            felt that this was a good thing to implement as it gives me
            experience on always optimising games for the players experience and
            reinforces the learning of optimising your games for players. Once
            the player gets in the elevator to change floor then a blueprint
            that detects what floor the player is currently on before unloading
            it and loading in the new floor is called once the elevator door is
            closed. I also decided to add in subtitles for all of the voice over
            in the game as I am a fan of turning subtitles on whenever I play
            games and it was something that I wanted to gain experience with. I
            also got some more practice with using particles in this game as I
            created two different particle effects, one was for the smoke at the
            intro sequence of the game and the second was running water in the
            shower room of the game where the player is chased by the first
            enemy.
          </p>
        </Col>
      </Row>
    </StyledContainer>
  </Layout>
);

export default TheEdgeofCivilization;
