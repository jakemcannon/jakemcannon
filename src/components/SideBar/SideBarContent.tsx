import { Box } from "@chakra-ui/react";

import NavItem from "./NavItem";

interface LinkItemProps {
  name: string;
  route: string;
}

const LinkItems: Array<LinkItemProps> = [
  { name: "Home", route: "/" },
  { name: "Algorithms", route: "/algorithms" },
  { name: "Patterns", route: "/patterns" },
];

export default function SideBarContent() {
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
