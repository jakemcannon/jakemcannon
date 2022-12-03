import Image from "next/image";

import { Flex, Link, Text, VStack } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Flex>
        <VStack>
          <Image src={"/profile_pic.JPG"} width={340} height={580} />
          <Text fontSize="xs">portrait by Cameron Miller</Text>
        </VStack>
        <VStack align={"left"} padding={10} justify={"center"}>
          <Text>
            Hi my name is Jake this site is a WIP. It is mostly a place to store
            notes about algorithms and tech.
          </Text>
          <Link isExternal href={"https://github.com/jakemcannon"}>
            github
          </Link>
        </VStack>
      </Flex>
    </>
  );
}
