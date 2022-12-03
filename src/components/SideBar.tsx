import {
  Box,
  Drawer,
  DrawerContent,
  Flex,
  Link,
  useDisclosure,
} from "@chakra-ui/react";

interface LinkItemProps {
  name: string;
  route: string;
}

const LinkItems: Array<LinkItemProps> = [
  { name: "Home", route: "/" },
  { name: "Algorithms", route: "/algorithms" },
  { name: "Patterns", route: "/patterns" },
];

interface NavItemProps {
  name: string;
  route: string;
}

import NextLink from "next/link";

function NavItem({ name, route }: NavItemProps) {
  return (
    <Link
      href={route}
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
      as={NextLink}
    >
      <Flex
        align="center"
        p="2"
        mx="4"
        borderRadius="md"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "cyan.300",
          color: "white",
        }}
      >
        {name}
      </Flex>
    </Link>
  );
}

function SideBarContent() {
  return (
    <Box
      // THIS IS A PROBLEM LINE
      //   w={{ base: "full", md: 60 }}
      // THIS IS THE PROBLEM LINE
      // pos="fixed"
      h="full"
    >
      <Box pt={5}>
        {LinkItems.map((link) => (
          <NavItem key={link.name} name={link.name} route={link.route} />
        ))}
      </Box>
    </Box>
  );
}

export default function SideBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minH="100vh">
      <SideBarContent />
      <Drawer
        isOpen={false}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SideBarContent />
        </DrawerContent>
      </Drawer>
    </Box>
  );
}
