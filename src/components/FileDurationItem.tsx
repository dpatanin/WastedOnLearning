import { Box, Heading, HStack, Icon, Spinner } from '@chakra-ui/react';
import { useState } from 'react';
import { MdCancel } from 'react-icons/md';

export default function FileDurationItem({
  name,
  dur,
}: {
  name: string;
  dur: Promise<number>;
}) {
  enum DurState {
    PENDING,
    DONE,
    ERROR,
  }

  const [duration, setDuration] = useState(0);
  const [state, setState] = useState(DurState.PENDING);

  dur
    .then((val) => {
      setDuration(val);
      setState(DurState.DONE);
    })
    .catch(() => setState(DurState.ERROR));

  const durDisplay = () => {
    if (state === DurState.DONE) {
      return <Box>{duration} min.</Box>;
    } else if (state === DurState.ERROR) {
      return <Icon as={MdCancel} color="red.500" />;
    } else {
      return (
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="sm"
        />
      );
    }
  };

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
        {durDisplay()}
      </Box>
    </HStack>
  );
}
