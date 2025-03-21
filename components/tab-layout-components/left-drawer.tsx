import { Button, ButtonText } from "@/components/ui/button";
import { Ionicons } from "@expo/vector-icons";
import {
  Drawer,
  DrawerBackdrop,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
} from "@/components/ui/drawer";
import { Heading } from "@/components/ui/heading";
import { Divider } from "@/components/ui/divider";
import { Text } from "@/components/ui/text";
import React from "react";
import { router } from "expo-router";

import { leftDrawerStyles as styles } from "@/styles/TabLayoutStyles";

export default function LeftDrawer() {
  const [showDrawer, setShowDrawer] = React.useState(false);
  return (
    <>
      <Ionicons
        onPress={() => {
          setShowDrawer(true);
        }}
        name="menu"
        size={30}
        color="black"
        style={styles.icon}
      />

      <Drawer
        isOpen={showDrawer}
        onClose={() => {
          setShowDrawer(false);
        }}
        size="lg"
        anchor="left"
      >
        <DrawerBackdrop />
        <DrawerContent>
          <Ionicons
            onPress={() => {
              setShowDrawer(false);
            }}
            name="close"
            size={50}
            color="black"
            className="absolute right-4 top-4 z-10"
          />
          <DrawerHeader className="mb-8">
            <Heading size="3xl">Cześć.</Heading>
          </DrawerHeader>
          <DrawerBody>
            <Text size="2xl" className="ml-3">
              Witam
            </Text>
            <Divider className="my-3" />
            <Text size="2xl" className="ml-3">
              Witam
            </Text>
            <Divider className="my-3" />
            <Text size="2xl" className="ml-3">
              Witam
            </Text>
            <Divider className="my-3" />
            <Text size="2xl" className="ml-3">
              Witam
            </Text>
          </DrawerBody>
          <DrawerFooter>
            <Button
              className="flex-1 bg-red-500"
              onPress={() => {
                setShowDrawer(false);
                router.replace("/(auth)/sign-in"); // routing back isn't working for some reason
              }}
            >
              <ButtonText>Wyloguj</ButtonText>
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
