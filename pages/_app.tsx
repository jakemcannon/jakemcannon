import type { AppProps } from "next/app";

import { Box, Center, ChakraProvider, Flex } from "@chakra-ui/react";

import { theme } from "../theme";
import SideBar from "@/src/components/SideBar/SideBar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <ChakraProvider theme={theme}>
        <Flex>
          <SideBar />
          <Flex flex="1" flexDir="column" grow={100}>
            <Center>
              <Box padding={1} w={[400, 500, 700, 800]} mt={5}>
                <Component {...pageProps} />
              </Box>
            </Center>
          </Flex>
        </Flex>
      </ChakraProvider>
    </div>
  );
}

export default MyApp;
