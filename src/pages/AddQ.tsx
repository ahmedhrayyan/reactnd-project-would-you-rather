import { Container } from "@chakra-ui/layout";
import { FC } from "react";
import QForm from "../components/QForm";

interface AddQProps {}
const AddQ: FC<AddQProps> = () => {
  return (
    <Container as="main" maxW="container.md">
      <QForm />
    </Container>
  );
};

export default AddQ;
