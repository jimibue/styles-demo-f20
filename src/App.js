import React from "react";
import { Header, Button, Segment, Card, Icon } from "semantic-ui-react";
import styled from "styled-components";
import { COLORS } from "./styles/styles";

const App = () => (
  <AppContainer>
    <Header as="h1" textAlign="center">
      My Portfolios
    </Header>
    <Segment as={Transparent}>
      <HeaderText fSize="large">My Projects</HeaderText>
    </Segment>
    <Segment as={Transparent}>
      <HeaderText fSize="small">Contact</HeaderText>
    </Segment>
    <Segment as={Transparent}>
      <HeaderText>About</HeaderText>
    </Segment>
  </AppContainer>
);

// when writing within the `` in a styled it is css syntax unless
// we interpolating than it is js

const AppContainer = styled.div`
  background: linear-gradient(
    to bottom right,
    ${COLORS.PRIMARY},
    ${COLORS.SECONDARY}
  );
`;

const Transparent = styled.div`
  background: transparent !important; //in css files this is frowned upon and should be spariningly, it is more common to use when using components/css libraries
`;

const fontSize = (size) => {
  switch (size) {
    case "large":
      return "4em";
    case "small":
      return "3em";
    default:
      return "2em";
  }
};

// Nice thing about styled componets, pass props change styles for a component
// define this once and reuse many times
const HeaderText = styled.h1`
  color: white !important;
  text-align: center;
  font-size: ${(props) => fontSize(props.fSize)} !important;
`;

// when I interpolate I can write js code

export default App;
