import clsx from "clsx";
import { Container, Section } from "../../shared";
import css from "./HomePage.module.css";

const HomePage = () => {
  return (
    <>
      <Section>
        <Container className={css.homeContainer}>
          <h2>Home page</h2>
        </Container>
      </Section>
    </>
  );
};

export default HomePage;
