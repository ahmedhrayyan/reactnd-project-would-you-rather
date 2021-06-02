import {
  Avatar,
  Box,
  Divider,
  Flex,
  HStack,
  Text,
} from "@chakra-ui/react";
import { FC } from "react";

interface LeaderProps {
  user: User;
}
const Leader: FC<LeaderProps> = ({ user }) => {
  return (
    <Box bgColor="white" borderRadius="xl" px="5" py="4" shadow="xl">
      <Flex align="center" justify="space-between">
        <HStack>
          <Avatar src={user.avatarURL} name={user.name} />
          <Text>{user.name}</Text>
        </HStack>
        <Text fontSize="sm" color="teal">
          <strong>SCORE:</strong>&nbsp;
          {Object.keys(user.answers).length + user.questions.length}
        </Text>
      </Flex>
      <Divider my="3" />
      <Box px="5">
        <Text mb="3">No of answer questions: {Object.keys(user.answers).length}</Text>
        <Text>No of created questions: {user.questions.length}</Text>
      </Box>
    </Box>
  );
};

export default Leader;
