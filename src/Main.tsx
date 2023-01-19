import { Container, Heading, Image, Stack, Text } from '@chakra-ui/react';

export default function Main() {
  return (
    <Container maxW="4xl">
      <Stack
        textAlign={'center'}
        spacing={{ base: 6, md: 8 }}
        py={{ base: 14, md: 24 }}
      >
        <Image src="/icon.svg" boxSize="120px" alignSelf="center" />
        <Heading
          fontWeight={600}
          fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
          color="white"
        >
          WastedOnLearning
        </Heading>
        <Text color={'white'} fontSize="xl">
          Estimate the time required to complete an eLearning or a set of
          courses. Upload the file(s), define the content & target audience and
          receive an estimation how long it would take them.
        </Text>
      </Stack>
    </Container>
  );
}
