import { Box, Drawer, DrawerContent, useDisclosure } from "@chakra-ui/react";

import SideBarContent from "./SideBarContent";

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
