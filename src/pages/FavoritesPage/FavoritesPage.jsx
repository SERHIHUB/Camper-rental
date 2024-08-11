import FavoritesList from "../../components/FavoritesList/FavoritesList";
import { Container, Section } from "../../shared";

const FavoritePage = () => {
  return (
    <div>
      <Section>
        <Container>
          <FavoritesList />
        </Container>
      </Section>
    </div>
  );
};

export default FavoritePage;
