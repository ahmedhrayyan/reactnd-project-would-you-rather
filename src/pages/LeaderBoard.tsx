import { Container } from "@chakra-ui/layout";
import { FC } from "react";
import Leader from "../components/Leader";
import { computeScore } from "../utils/helpers";
import { useAppSelector } from "../utils/hooks";

interface LeaderBoardProps {}
const LeaderBoard: FC<LeaderBoardProps> = (props) => {
  const users = useAppSelector(({ users }) => users);
  return (
    <Container maxW="container.md">
      {Object.values(users)
        .slice()
        .sort((a, b) => computeScore(b) - computeScore(a))
        .map((user) => (
          <Leader user={user} key={user.id} />
        ))}
    </Container>
  );
};

export default LeaderBoard;
