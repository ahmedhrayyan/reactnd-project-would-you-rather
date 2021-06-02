import { Button } from "@chakra-ui/button";
import { FormControl } from "@chakra-ui/form-control";
import { Text } from "@chakra-ui/layout";
import { Select } from "@chakra-ui/select";
import { FC, FormEvent } from "react";
import { setAuthedUser } from "../redux/actions/authedUser";
import { useAppDispatch, useAppSelector } from "../utils/hooks";

interface SignInProps {}
const SignIn: FC<SignInProps> = (props) => {
  const dispatch = useAppDispatch();
  const users = useAppSelector((state) => state.users);

  function handleSubmit(evt: FormEvent<HTMLFormElement>) {
    evt.preventDefault();
    const user = new FormData(evt.currentTarget).get("user");
    dispatch(setAuthedUser(user as string));
  }

  return (
    <form onSubmit={handleSubmit} style={{ textAlign: "center" }}>
      <fieldset>
        <Text as="legend" fontSize="2xl" mb="5" color="teal" fontWeight="bold">
          Sign In
        </Text>
        <FormControl mb="3">
          <Select placeholder="Select a User" name="user" required>
            {Object.values(users).map((user) => (
              <option key={user.id} value={user.id}>
                {user.name}
              </option>
            ))}
          </Select>
        </FormControl>
        <Button colorScheme="teal" w="100%" type="submit">
          Sign In
        </Button>
      </fieldset>
    </form>
  );
};

export default SignIn;
