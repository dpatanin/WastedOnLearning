import {
  Box,
  Container,
  Heading,
  Icon,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';
import { useCallback, useMemo, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { TfiUpload } from 'react-icons/tfi';
import { accept, controller } from './calculator/controller';
import funnyMessage from './funnyMessages';

export default function Main() {
  const [duration, setDuration] = useState(0);

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      controller(acceptedFiles[0]).then((duration) => setDuration(duration));
    },
    [setDuration]
  );

  const { getRootProps, getInputProps, isDragAccept, isDragReject } =
    useDropzone({ onDrop, accept });

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isDragAccept, isDragReject]
  );

  const dropZoneMessage = () => {
    if (isDragAccept) {
      return funnyMessage();
    } else if (isDragReject) {
      return 'This filetype is currently not supported. You can either extend it yourself or kindly open an issue on github.';
    } else {
      return [
        'Drag `n` drop some files here, or click to select files.',
        <br key="newLine" />,
        'Supported Filetypes: ',
        Object.values(accept).map((val) => val + ','),
      ];
    }
  };

  return (
    <Container maxW="4xl">
      <Stack
        textAlign={'center'}
        spacing={{ base: 6, md: 8 }}
        py={{ base: 8, md: 14 }}
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
        <Text>Placeholder for settings.</Text>
        <Box className="container">
          <Box {...getRootProps({ style })}>
            <input {...getInputProps()} />
            <Icon as={TfiUpload} />
            <Text>{dropZoneMessage()}</Text>
          </Box>
        </Box>
        <Text>Duration: {duration}</Text>
      </Stack>
    </Container>
  );
}

const baseStyle = {
  alignItems: 'center',
  padding: '20px',
  borderWidth: 2,
  borderRadius: 2,
  borderColor: '#eeeeee',
  borderStyle: 'dashed',
  color: 'white',
  outline: 'none',
  transition: 'border .05s ease-in-out',
  cursor: ' pointer',
};

const acceptStyle = {
  borderColor: '#00e676',
};

const rejectStyle = {
  borderColor: '#ff1744',
};
