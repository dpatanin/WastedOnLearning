import { Box, Heading, HStack } from '@chakra-ui/react';

export default function FileDurationItem({
  name,
  dur,
}: {
  name: string;
  dur: number;
}) {
  function formatTime(seconds: number) {
    const d = Math.floor(seconds / 86400);
    const h = Math.floor((seconds % 86400) / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = Math.round(seconds % 60);

    const time = [
      h < 10 ? '0' + h : h,
      m < 10 ? '0' + m : m,
      s < 10 ? '0' + s : s,
    ].join(':')

    return d ? `${d} Days, ${time}` : time
  }

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
