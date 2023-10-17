import { Box, Flex, Spacer } from "@chakra-ui/react";
import { useState } from "react";
import Chatbox from "../components/Chatbox";
import MyChats from "../components/MyChats";
import SideDrawer from "../components/miscellaneous/SideDrawer";
import { ChatState } from "../Context/ChatProvider";

const Chatpage = () => {
  const [fetchAgain, setFetchAgain] = useState(false);
  const { user } = ChatState();

  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}

      <Box d="flex" justifyContent="space-between" w="100%" h="91.5vh" p="10px">
        <Flex>
          {user && <MyChats fetchAgain={fetchAgain} />}
          <Spacer />
          {user && (
            <Chatbox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
          )}
        </Flex>
      </Box>
    </div>
  );
};

export default Chatpage;
