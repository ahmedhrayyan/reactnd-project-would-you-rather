import { Avatar, Box, Divider, Flex, HStack, Text } from "@chakra-ui/react";
import { FC } from "react";
import { computeScore } from "../utils/helpers";

interface LeaderProps {
  user: User;
}
const Leader: FC<LeaderProps> = ({ user }) => {
  return (
    <Box bgColor="white" borderRadius="xl" px="5" py="4" shadow="xl" mb="8">
      <Flex align="center" justify="space-between">
        <HStack>
          <Avatar src={user.avatarURL} name={user.name} />
          <Text>{user.name}</Text>
        </HStack>
        <Text fontSize="sm" color="teal">
          <strong>SCORE:</strong> {computeScore(user)}
        </Text>
      </Flex>
      <Divider my="3" />
      <Box px="5">
        <Text mb="3">
          Number of answers: {Object.keys(user.answers).length}
        </Text>
        <Text>Number of questions: {user.questions.length}</Text>
      </Box>
    </Box>
  );
};

export default Leader;
