import { Container, Heading, Icon, Image, Stack, Text } from '@chakra-ui/react';
import { useCallback, useMemo } from 'react';
import { useDropzone } from 'react-dropzone';
import { TfiUpload } from 'react-icons/tfi';
import funnyMessage from './funnyMessages';

export default function Main() {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    // Do something with the files
  }, []);
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({ onDrop });

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isDragAccept, isDragReject]
  );

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
        <div className="container">
          <div {...getRootProps({ style })}>
            <input {...getInputProps()} />
            <Icon as={TfiUpload} />
            {isDragActive ? (
              <p>{funnyMessage()}</p>
            ) : (
              <p>Drag 'n' drop some files here, or click to select files.</p>
            )}
          </div>
        </div>
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
