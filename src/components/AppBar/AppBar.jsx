import css from "./AppBar.module.css";
import { Container, Section } from "../../shared";
import Navigation from "../Navigation/Navigation.jsx";

const AppBar = () => {
  return (
    <Container>
      <Section>
        <Navigation />
      </Section>
    </Container>
  );
};

export default AppBar;
