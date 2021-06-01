import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Collapse,
  Container,
  Flex,
  IconButton,
  Link,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import { Link as RLink, NavLink } from "react-router-dom";
import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../utils/hooks";
import { logout } from "../redux/actions/authedUser";

const navItems = [
  { name: "Home", path: "/" },
  { name: "New Question", path: "/add" },
  { name: "Leaderboard", path: "/leaderboard" },
];
interface HeaderProps {
  expand?: "md" | "lg" | "xl";
}
const Header: FC<HeaderProps> = ({ expand = "md" }) => {
  const dispatch = useAppDispatch();
  const currUser = useAppSelector(({ authedUser, users }) =>
    authedUser ? users[authedUser] : null
  );

  const { isOpen, onToggle } = useDisclosure();

  function handleLogout() {
    dispatch(logout());
  }

  return (
    <Box as="header">
      <Container>
        <Flex py="3" align="center" justifyContent="space-between">
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
            display={{ base: "inline-block", [expand]: "none" }}
          />

          <Link
            as={RLink}
            to="/"
            textTransform="uppercase"
            textDecor="underline"
            fontWeight="bold"
            fontSize="lg"
            py="1"
          >
            wyr
          </Link>
          {/* Desktop nav */}
          <Box as="nav" d={{ base: "none", [expand]: "block" }}>
            <Nav direction="row" />
          </Box>
          <Popover>
            <PopoverTrigger>
              <Button colorScheme="teal">{currUser?.name}</Button>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverBody>
                <Button variant="link" py="1" w="100%" onClick={handleLogout}>
                  Log out
                </Button>
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </Flex>
        <Collapse in={isOpen} animateOpacity>
          <Box as="nav" display={{ [expand]: "none" }}>
            <Nav />
          </Box>
        </Collapse>
      </Container>
    </Box>
  );
};

interface NavProps {
  direction?: "row" | "column";
}
const Nav: FC<NavProps> = ({ direction }) => (
  <Stack as="ul" direction={direction} listStyleType="none">
    {navItems.map(({ name, path }, i) => (
      <li key={i}>
        <Link
          as={NavLink}
          exact
          to={path}
          px="3"
          py="1"
          sx={{
            "&.active": {
              color: "teal",
              textDecor: "underline",
            },
          }}
        >
          {name}
        </Link>
      </li>
    ))}
  </Stack>
);

export default Header;
