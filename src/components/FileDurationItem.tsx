import { Box, Heading, HStack } from '@chakra-ui/react';

export default function FileDurationItem({
  name,
  dur,
}: {
  name: string;
  dur: number;
}) {
  return (
    <HStack>
      <Heading
        size="sm"
        overflow="hidden"
        whiteSpace="nowrap"
        textOverflow="ellipsis"
        textAlign="left"
        w="85%"
      >
        {name}
      </Heading>
      <Box w="15%" alignSelf="right">
        {dur} min.
      </Box>
    </HStack>
  );
}
