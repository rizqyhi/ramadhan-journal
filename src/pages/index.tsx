import {
  Box,
  Flex,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  StackDivider,
  useColorMode,
  VStack,
} from "@chakra-ui/react";
import { CheckCircleIcon, AddIcon } from "@chakra-ui/icons";

import { Hero } from "../components/Hero";
import { Container } from "../components/Container";
import { useState } from "react";

const Index = () => {
  const { colorMode } = useColorMode();
  const bgColor = { light: "white", dark: "gray.900" };
  const color = { light: "gray.700", dark: "gray.100" };
  const [newActivity, setNewActivity] = useState("");
  const [activities, setActivities] = useState([
    "Tarawih",
    "Tadarus",
    "Kajian",
    "Sunnah rawatib",
    "Pengajian Gus Mus",
    "Ngaji Kitab Gus Yusuf Fast FM Magelang",
  ]);

  const [days, setDays] = useState([
    { date: 1, day: "Ahd" },
    { date: 2, day: "Sen" },
    { date: 3, day: "Sel" },
    { date: 4, day: "Rab" },
    { date: 5, day: "Kam" },
  ]);

  return (
    <Container
      height="100vh"
      maxWidth="container.sm"
      mx="auto"
      alignItems="initial"
      bg={bgColor[colorMode]}
      color={color[colorMode]}
    >
      <Hero />

      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1440 400"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 0,400 C 0,400 0,200 0,200 C 74.2564102564103,189.76666666666665 148.5128205128206,179.53333333333333 223,174 C 297.4871794871794,168.46666666666667 372.20512820512806,167.63333333333335 462,180 C 551.7948717948719,192.36666666666665 656.6666666666667,217.93333333333334 744,207 C 831.3333333333333,196.06666666666666 901.1282051282053,148.63333333333335 984,139 C 1066.8717948717947,129.36666666666665 1162.820512820513,157.53333333333333 1241,174 C 1319.179487179487,190.46666666666667 1379.5897435897436,195.23333333333335 1440,200 C 1440,200 1440,400 1440,400 Z"
          stroke="none"
          strokeWidth="0"
          fill="#38b2acff"
        ></path>
      </svg>

      <VStack
        spacing={6}
        alignItems="inherit"
        divider={<StackDivider borderColor="gray.200" />}
      >
        <Flex>
          <Box w="40%"></Box>
          {days.map((day) => (
            <Box key={day.date} textAlign="center" flex="1">
              {day.date}
              <br />
              {day.day}
            </Box>
          ))}
        </Flex>
        {activities.map((activity) => (
          <Flex key={activity}>
            <Box w="40%" px="4" noOfLines={2}>
              {activity}
            </Box>
            {days.map((day) => (
              <Flex
                key={day.date}
                textAlign="center"
                flex="1"
                alignItems="center"
                justifyContent="center"
              >
                <CheckCircleIcon w={6} h={6} color="blackAlpha.400" />
              </Flex>
            ))}
          </Flex>
        ))}

        <InputGroup size="lg">
          <Input
            pr="4.5rem"
            placeholder="Tadarus malam"
            value={newActivity}
            onChange={(event) => setNewActivity(event.target.value)}
          />
          <InputRightElement>
            <IconButton
              colorScheme="teal"
              aria-label="Tambah aktivitas"
              icon={<AddIcon />}
              onClick={() => {
                setActivities(activities.concat([newActivity]));
                setNewActivity("");
              }}
            />
          </InputRightElement>
        </InputGroup>
      </VStack>

      <Box px={4} pb={8} pt={24} textAlign="center">
        Made with ❤️ by{" "}
        <Link href="https://twitter.com/rizqyhi" isExternal={true}>
          @rizqyhi
        </Link>
      </Box>
    </Container>
  );
};

export default Index;
