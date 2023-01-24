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
import { MdBuild } from 'react-icons/md';
import { AudienceType, CalParams, ContentType } from '../lib/types';

export default function ParamSettings({
  params,
  onInputChange,
}: {
  params: CalParams;
  onInputChange: (params: CalParams) => void;
}) {
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
          <Select
            variant="filled"
            onChange={(e) => {
              onInputChange({
                readingSpeed: params.readingSpeed,
                imageViewTime: params.imageViewTime,
                complexityFactor: params.complexityFactor,
                advanced: params.advanced,
                contentType: e.target.value as ContentType,
                audienceType: params.audienceType,
              });
            }}
            disabled={params.advanced}
          >
            <option value={ContentType.INFORMATIVE}>Informative</option>
            <option value={ContentType.MARKETING}>Marketing</option>
            <option value={ContentType.EDUCATIONAL}>Educational</option>
            <option value={ContentType.SCIENTIFIC}>Scientific</option>
          </Select>
        </Box>
        <Box w={{ base: '100%', md: '40%' }}>
          <Text px="2" pb="2" color="white">
            Audience
          </Text>
          <Select
            variant="filled"
            onChange={(e) => {
              onInputChange({
                readingSpeed: params.readingSpeed,
                imageViewTime: params.imageViewTime,
                complexityFactor: params.complexityFactor,
                advanced: params.advanced,
                contentType: params.contentType,
                audienceType: e.target.value as AudienceType,
              });
            }}
            disabled={params.advanced}
          >
            <option value={AudienceType.ADULTS}>Adults</option>
            <option value={AudienceType.STUDENTS}>Students</option>
            <option value={AudienceType.ELDERLY}>Elderly</option>
            <option value={AudienceType.NON_NATIVE}>Non-native speaker</option>
          </Select>
        </Box>
        <Button
          rightIcon={<MdBuild />}
          onClick={() =>
            onInputChange({
              readingSpeed: params.readingSpeed,
              imageViewTime: params.imageViewTime,
              complexityFactor: params.complexityFactor,
              advanced: !params.advanced,
              contentType: params.contentType,
              audienceType: params.audienceType,
            })
          }
          alignSelf="flex-end"
        >
          Advanced Settings
        </Button>
      </Stack>

      <Collapse in={params.advanced} animateOpacity>
        <Stack direction={{ base: 'column', md: 'row' }}>
          <Box w={{ base: '100%', md: '40%' }}>
            <Text px="2" pb="2" color="white">
              Words per minute
            </Text>
            <NumberInput
              defaultValue={params.readingSpeed}
              min={10}
              max={1000}
              variant="filled"
              allowMouseWheel
              onChange={(_str, val) => {
                onInputChange({
                  readingSpeed: val,
                  imageViewTime: params.imageViewTime,
                  complexityFactor: params.complexityFactor,
                  advanced: params.advanced,
                  contentType: params.contentType,
                  audienceType: params.audienceType,
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
              defaultValue={params.imageViewTime}
              min={0.01}
              max={8.0}
              step={0.01}
              variant="filled"
              allowMouseWheel
              onChange={(_str, val) => {
                onInputChange({
                  readingSpeed: params.readingSpeed,
                  imageViewTime: val,
                  complexityFactor: params.complexityFactor,
                  advanced: params.advanced,
                  contentType: params.contentType,
                  audienceType: params.audienceType,
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
              defaultValue={params.complexityFactor}
              min={0.1}
              max={5.0}
              step={0.1}
              variant="filled"
              allowMouseWheel
              onChange={(_str, val) => {
                onInputChange({
                  readingSpeed: params.readingSpeed,
                  imageViewTime: params.imageViewTime,
                  complexityFactor: val,
                  advanced: params.advanced,
                  contentType: params.contentType,
                  audienceType: params.audienceType,
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
