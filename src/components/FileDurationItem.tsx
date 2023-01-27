import { Box, Heading, HStack } from '@chakra-ui/react';
import { formatTime } from '../lib/helper';

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
        {formatTime(dur)}
      </Box>
    </HStack>
  );
}
