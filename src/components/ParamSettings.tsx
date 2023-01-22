import {
  Box,
  Button,
  Collapse,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Select,
  Stack,
  Text,
} from '@chakra-ui/react';
import { useState } from 'react';
import { MdBuild } from 'react-icons/md';
import { CalParams } from '../calculator/controller';

export default function ParamSettings({
  params,
  onInputChange,
}: {
  params: CalParams;
  onInputChange: (params: CalParams) => void;
}) {
  const [advanced, setAdvanced] = useState(false);

  const readingSpeed = params.readingSpeed;
  const imageViewTime = params.imageViewTime;
  const complexityFactor = params.complexityFactor;

  return (
    <Stack spacing={4} textAlign="left">
      <Stack
        spacing={4}
        direction={{ base: 'column', md: 'row' }}
        align="stretch"
      >
        <Box w={{ base: '100%', md: '40%' }}>
          <Text px="2" pb="2" color="white">
            Content type
          </Text>
          <Select variant="filled">
            <option value="option1">Option 1 very very very long</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
        </Box>
        <Box w={{ base: '100%', md: '40%' }}>
          <Text px="2" pb="2" color="white">
            Audience
          </Text>
          <Select variant="filled">
            <option value="option4">Option 1</option>
            <option value="option5">Option 2</option>
            <option value="option6">Option 3</option>
          </Select>
        </Box>
        <Button
          rightIcon={<MdBuild />}
          onClick={() => setAdvanced(!advanced)}
          alignSelf="flex-end"
        >
          Advanced Settings
        </Button>
      </Stack>

      <Collapse in={advanced} animateOpacity>
        <Stack direction={{ base: 'column', md: 'row' }}>
          <Box w={{ base: '100%', md: '40%' }}>
            <Text px="2" pb="2" color="white">
              Words per minute
            </Text>
            <NumberInput
              value={readingSpeed}
              min={10}
              max={200}
              variant="filled"
              allowMouseWheel
              onChange={(_str, val) => {
                onInputChange({
                  readingSpeed: val,
                  imageViewTime,
                  complexityFactor,
                });
              }}
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </Box>
          <Box w={{ base: '100%', md: '40%' }}>
            <Text px="2" pb="2" color="white">
              Seconds per image
            </Text>
            <NumberInput
              value={imageViewTime}
              min={10}
              max={20}
              variant="filled"
              allowMouseWheel
              onChange={(_str, val) => {
                onInputChange({
                  readingSpeed,
                  imageViewTime: val,
                  complexityFactor,
                });
              }}
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </Box>
          <Box w={{ base: '100%', md: '40%' }}>
            <Text px="2" pb="2" color="white">
              Complexity factor
            </Text>
            <NumberInput
              value={complexityFactor}
              min={1}
              max={20}
              variant="filled"
              allowMouseWheel
              onChange={(_str, val) => {
                onInputChange({
                  readingSpeed,
                  imageViewTime,
                  complexityFactor: val,
                });
              }}
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </Box>
        </Stack>
      </Collapse>
    </Stack>
  );
}
