import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Container,
  Heading,
  HStack,
  Icon,
  IconButton,
  Image,
  Spinner,
  Stack,
  StackDivider,
  Text,
  Tooltip,
} from '@chakra-ui/react';
import { useCallback, useMemo, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { IoCloseOutline, IoDownloadOutline } from 'react-icons/io5';
import { TfiUpload } from 'react-icons/tfi';
import { utils, writeFileXLSX } from 'xlsx';
import { accept, controller } from '../calculator/controller';
import FileDurationItem from '../components/FileDurationItem';
import ParamSettings from '../components/ParamSettings';
import { baseParams } from '../lib/factors';
import funnyMessage from '../lib/funnyMessages';
import {
  calComplexityFactor,
  calImageViewTime,
  calReadingSpeed,
  formatTime,
} from '../lib/helper';
import { CalSettings } from '../lib/types';

export default function Main() {
  const [isLoading, setIsLoading] = useState(false);
  const [fileDurArr, setFileDurArr] = useState<[string, number][]>([]);
  const [calParams, setCalParams] = useState<CalSettings>({
    readingSpeed: calReadingSpeed(
      baseParams.contentType,
      baseParams.audienceType
    ),
    imageViewTime: calImageViewTime(baseParams.contentType),
    complexityFactor: calComplexityFactor(
      baseParams.contentType,
      baseParams.audienceType
    ),
    advanced: baseParams.advanced,
    contentType: baseParams.contentType,
    audienceType: baseParams.audienceType,
  });

  const onInputChange = (params: CalSettings) => {
    if (!calParams.advanced || (calParams.advanced && !params.advanced)) {
      setCalParams({
        readingSpeed: calReadingSpeed(params.contentType, params.audienceType),
        imageViewTime: calImageViewTime(params.contentType),
        complexityFactor: calComplexityFactor(
          params.contentType,
          params.audienceType
        ),
        advanced: params.advanced,
        contentType: params.contentType,
        audienceType: params.audienceType,
      });
    } else {
      setCalParams(params);
    }
  };

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      setIsLoading(true);
      Promise.all(
        acceptedFiles.map((file) =>
          controller(
            file,
            calParams.readingSpeed,
            calParams.imageViewTime,
            calParams.complexityFactor
          )
        )
      ).then((val) => {
        setIsLoading(false);
        setFileDurArr(fileDurArr.concat(val));
      });
    },
    [fileDurArr, setFileDurArr, calParams]
  );

  const { getRootProps, getInputProps, isDragAccept, isDragReject } =
    useDropzone({ onDrop, accept, disabled: isLoading });

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
      ...(isLoading ? disabledStyle : {}),
    }),
    [isDragAccept, isDragReject, isLoading]
  );

  const dropZoneMessage = () => {
    if (isLoading) {
      return 'processing...';
    } else if (isDragAccept) {
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

  const exportExcel = useCallback(() => {
    const data = fileDurArr.map((f) => {
      return { Filename: f[0], Duration: formatTime(f[1]) };
    });

    const ws = utils.json_to_sheet(data);
    const wb = utils.book_new();

    utils.book_append_sheet(wb, ws, 'Data');
    writeFileXLSX(wb, 'learning_duration.xlsx');
  }, [fileDurArr]);

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

        <ParamSettings params={calParams} onInputChange={onInputChange} />

        <Box className="container">
          <Box {...getRootProps({ style })}>
            <input {...getInputProps()} />
            <Icon as={TfiUpload} />
            <Text>{dropZoneMessage()}</Text>
          </Box>
        </Box>

        {(fileDurArr.length > 0 || isLoading) && (
          <Card>
            <CardHeader>
              <HStack justifyContent="flex-end">
                <Tooltip label="Download Excel" aria-label="download tooltip">
                  <IconButton
                    aria-label="download"
                    icon={<IoDownloadOutline />}
                    onClick={exportExcel}
                  />
                </Tooltip>
                <Tooltip label="Clear list" aria-label="clear tooltip">
                  <IconButton
                    aria-label="claer"
                    icon={<IoCloseOutline />}
                    alignSelf="right"
                    onClick={() => setFileDurArr([])}
                  />
                </Tooltip>
              </HStack>
            </CardHeader>

            <CardBody>
              <Stack divider={<StackDivider />} spacing="4">
                {fileDurArr.map((file, idx) => (
                  <Box key={file[0] + idx}>
                    <FileDurationItem name={file[0]} dur={file[1]} />
                  </Box>
                ))}
                {isLoading && (
                  <Spinner
                    size="xl"
                    alignSelf="center"
                    thickness="4px"
                    speed="0.65s"
                    emptyColor="gray.200"
                    color="blue.500"
                  />
                )}
              </Stack>
            </CardBody>
          </Card>
        )}
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
  cursor: 'pointer',
};

const acceptStyle = {
  borderColor: '#00e676',
};

const rejectStyle = {
  borderColor: '#ff1744',
};

const disabledStyle = {
  borderColor: '#808080',
};
