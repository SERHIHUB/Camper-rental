import CamperList from "../../components/CamperList/CamperList.jsx";
import { Section, Container } from "../../shared";

const CatalogPage = () => {
  return (
    <div>
      <Section>
        <Container>
          <CamperList />
        </Container>
      </Section>
    </div>
  );
};

export default CatalogPage;
