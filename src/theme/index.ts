import { extendTheme } from "@chakra-ui/react";

export default extendTheme({
  styles: {
    global: {
      "body": {
        bgColor: "#f8f8f8"
      }
    }
  },
  components: {
    Container: {
      baseStyle: {
        maxW: "container.xl",
      },
    },
  },
});
