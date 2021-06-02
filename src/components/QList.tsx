import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { FC } from "react";
import { useAppSelector } from "../utils/hooks";
import QCompact from "./QCompact";

interface QListProps {}
const QList: FC<QListProps> = (props) => {
  const currUser = useAppSelector(
    ({ users, authedUser }) => users[authedUser as string]
  );
  const questions = useAppSelector(({ questions }) => questions);

  return (
    <Tabs colorScheme="teal">
      <TabList mb="3">
        <Tab>Unanswered Questions</Tab>
        <Tab>Answered Questions</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          {Object.values(questions)
            .filter((q) => !Object.keys(currUser.answers).includes(q.id))
            .map((q) => (
              <QCompact question={q} />
            ))}
        </TabPanel>
        <TabPanel>
          {Object.keys(currUser.answers).map((qid) => (
            <QCompact question={questions[qid]} />
          ))}
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default QList;
