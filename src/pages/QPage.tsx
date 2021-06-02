import { FC } from "react";
import { Redirect, useParams } from "react-router";
import { useAppSelector } from "../utils/hooks";
import Q from "../components/Q";
import { Container } from "@chakra-ui/layout";

interface QPageProps {}
const QPage: FC<QPageProps> = (props) => {
  const questions = useAppSelector(({ questions }) => questions);
  const { id } = useParams<{ id: string }>();
  const curr = questions[id];

  if (!curr) return <Redirect to="/404" />;

  return (
    <Container maxW="container.md" mt="10">
      <Q question={curr} />
    </Container>
  );
};

export default QPage;
