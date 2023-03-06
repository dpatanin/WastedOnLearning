import { Heading } from '@chakra-ui/react';

export default function FailedResultItem({ err }: { err: Error }) {
  return (
    <Heading size="sm" textAlign="left" w="100%">
      {err.message}
    </Heading>
  );
}
