import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
  useBoolean,
} from "@chakra-ui/react";
import { FC, FormEvent } from "react";
import { useHistory } from "react-router";
import { handleAddQuestion } from "../redux/actions/questions";
import { useAppDispatch, useAppSelector } from "../utils/hooks";

interface QFormProps {}
const QForm: FC<QFormProps> = (props) => {
  const dispatch = useAppDispatch();
  const authedUser = useAppSelector(({ authedUser }) => authedUser) as string;
  const [loading, setLoading] = useBoolean();
  const history = useHistory();

  function handleSubmit(evt: FormEvent<HTMLFormElement>) {
    evt.preventDefault();
    const data = new FormData(evt.currentTarget);
    const optionOneText = data.get("optionOne") as string;
    const optionTwoText = data.get("optionTwo") as string;
    setLoading.on();
    dispatch(
      handleAddQuestion({ optionOneText, optionTwoText, author: authedUser })
    )
      .then(() => history.push("/"))
      .catch(() => setLoading.off());
  }
  return (
    <form style={{ textAlign: "center" }} onSubmit={handleSubmit}>
      <fieldset>
        <Text as="legend" fontSize="xl" mb="5">
          Create new question
        </Text>
        <FormControl mb="3">
          <FormLabel>Would you rather:</FormLabel>
          <Input type="text" name="optionOne" required />
        </FormControl>
        <FormControl mb="3">
          <FormLabel>Or</FormLabel>
          <Input type="text" name="optionTwo" required />
        </FormControl>
      </fieldset>
      <Button type="submit" colorScheme="teal" w="100%" isLoading={loading}>
        Submit
      </Button>
    </form>
  );
};

export default QForm;
