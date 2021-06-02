import { Container } from "@chakra-ui/layout";
import { FC } from "react";
import QList from "../components/QList";

interface HomeProps {}
const Home: FC<HomeProps> = () => {
  return (
    <Container as="main" maxW="container.md" mt="10">
      <QList />
    </Container>
  );
};

export default Home;
