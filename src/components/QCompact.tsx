import { Box, Divider, Text, Avatar, HStack, Flex, Button } from "@chakra-ui/react";
import { truncate } from "lodash-es";
import { FC } from "react";
import { formatDate } from "../utils/helpers";
import { useAppSelector } from "../utils/hooks";

interface QCompactProps {
  question: Question;
}
const QCompact: FC<QCompactProps> = ({ question }) => {
  const author = useAppSelector(({ users }) => users[question.author]);
  return (
    <Box bgColor="white" borderRadius="xl" px="5" py="4" shadow="xl">
      <Flex align="center" justify="space-between">
        <HStack>
          <Avatar src={author.avatarURL} name={author.name} />
          <Text>{author.name}</Text>
        </HStack>
        <Text color="gray" fontSize="sm">
          {formatDate(question.timestamp)}
        </Text>
      </Flex>
      <Divider my="3" />
      <Box>
        <Text fontWeight="bold">Would you rather</Text>
        <Text>{truncate(question.optionOne.text, { length: 14 })}</Text>
        <Box textAlign="end">
          <Button colorScheme="teal">View Poll</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default QCompact;
