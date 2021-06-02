import {
  Box,
  Divider,
  Text,
  Avatar,
  HStack,
  Flex,
  Button,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  VStack,
  Heading,
  CircularProgress,
  useBoolean,
  CircularProgressLabel,
} from "@chakra-ui/react";
import { FC, FormEvent, useMemo } from "react";
import { formatDate } from "../utils/helpers";
import { useAppDispatch, useAppSelector } from "../utils/hooks";
import cx from "classnames";
import { handleAddAnswer } from "../redux/actions/questions";

const options: ["optionOne", "optionTwo"] = ["optionOne", "optionTwo"];
interface QProps {
  question: Question;
}
const Q: FC<QProps> = ({ question }) => {
  const dispatch = useAppDispatch();
  const author = useAppSelector(({ users }) => users[question.author]);
  const authedUser = useAppSelector(({ authedUser }) => authedUser) as string;
  const votes =
    question.optionOne.votes.length + question.optionTwo.votes.length;

  const votedFor = useMemo(() => {
    const { optionOne, optionTwo } = question;
    return optionOne.votes.includes(authedUser)
      ? "optionOne"
      : optionTwo.votes.includes(authedUser)
      ? "optionTwo"
      : null;
  }, [authedUser, question]);

  const [loading, setLoading] = useBoolean();
  function handleAnswer(evt: FormEvent<HTMLFormElement>) {
    evt.preventDefault();
    const answer = new FormData(evt.currentTarget).get("answer") as
      | "optionOne"
      | "optionTwo";

    setLoading.on();
    dispatch(handleAddAnswer({ authedUser, answer, qid: question.id }))
      .then(() => {
        setLoading.off();
      })
      .catch(() => {
        setLoading.off();
      });
  }

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
        {votedFor === null && (
          <form onSubmit={handleAnswer}>
            <FormControl as="fieldset">
              <FormLabel as="legend" fontWeight="bold" mb="4">
                Would You Rather:{" "}
              </FormLabel>
              <RadioGroup defaultValue="optionOne">
                <VStack align="start">
                  <Radio value="optionOne" name="answer">
                    {question.optionOne.text}
                  </Radio>
                  <Radio value="optionTwo" name="answer">
                    {question.optionTwo.text}
                  </Radio>
                </VStack>
              </RadioGroup>
            </FormControl>
            <Box textAlign="end">
              <Button colorScheme="teal" type="submit" isLoading={loading}>
                Submit
              </Button>
            </Box>
          </form>
        )}
        {!!votedFor && (
          <Box>
            <Heading size="md" mb="5">
              Results
            </Heading>
            <VStack
              align="start"
              sx={{
                ".active p": {
                  color: "teal",
                  textDecor: "underline",
                },
              }}
            >
              {options.map((option, i) => (
                <Box className={cx({ active: votedFor === option })} key={i}>
                  <CircularProgress
                    value={(question[option].votes.length / votes) * 100}
                    size="60px"
                    me="3"
                  >
                    <CircularProgressLabel>
                      {((question[option].votes.length / votes) * 100).toFixed(
                        0
                      )}
                      %
                    </CircularProgressLabel>
                  </CircularProgress>
                  <Box d="inline-block" verticalAlign="middle">
                    <Text>Would you rather {question[option].text}?</Text>
                    <small color="gray.300">
                      {question[option].votes.length} out of {votes}
                      {votedFor === option && " (Your vote)"}
                    </small>
                  </Box>
                </Box>
              ))}
            </VStack>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Q;
