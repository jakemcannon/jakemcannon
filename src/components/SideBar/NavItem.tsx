import NextLink from "next/link";
import { Flex, Link } from "@chakra-ui/react";

interface NavItemProps {
  name: string;
  route: string;
}

export default function NavItem({ name, route }: NavItemProps) {
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
