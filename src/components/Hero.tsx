import { Flex, Heading } from "@chakra-ui/react";

export const Hero = () => (
  <Flex
    bgGradient="linear(to-br, green.600, teal.200)"
    bgClip="text"
    px={4}
    py={16}
  >
    <Heading size="2xl">
      Ramadhan
      <br />
      Journal
    </Heading>
  </Flex>
);
