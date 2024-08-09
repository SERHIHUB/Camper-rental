import clsx from "clsx";
import CamperList from "../../components/CamperList/CamperList.jsx";
import { Section, Container } from "../../shared";
import css from "./CatalogPage.module.css";

const CatalogPage = () => {
  return (
    <div>
      <Section>
        <Container>
          <h2>Catalog page</h2>
          <CamperList />
        </Container>
      </Section>
    </div>
  );
};

export default CatalogPage;
