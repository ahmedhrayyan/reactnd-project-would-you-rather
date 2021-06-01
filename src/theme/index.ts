import { extendTheme } from "@chakra-ui/react";

export default extendTheme({
  components: {
    Container: {
      baseStyle: {
        maxW: "container.xl",
      },
    },
  },
});
