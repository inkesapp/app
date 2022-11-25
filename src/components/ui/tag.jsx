import React, { useContext, useState } from 'react';
import { ThemeContext } from '../../context.js';
import {
  FormErrorMessage,
  useDisclosure,
  SimpleGrid,
  Button,
  IconButton,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
  FormLabel,
  Stack,
  Box,
  FormControl,
  Input,
  Select,
} from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';

export const TagsGroup = ({ tags, fileName }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <SimpleGrid columns={2}>
      {tags &&
        tags.map((tag, i) => (
          <Tag color={theme[tag.color]} text={tag.text} key="{i}" />
        ))}
      {tags.length === 0 && <AddTagButton tags={tags} fileName={fileName} />}
    </SimpleGrid>
  );
};

const Tag = ({ text, color }) => {
  return (
    <Button
      width="max-content"
      bg={color}
      _hover={{ bg: color }}
      h="20px"
      color="white"
      p="5px"
    >
      {text}
    </Button>
  );
};

const AddNewTagForm = ({
  tagText,
  setTagText,
  tagColor,
  setTagColor,
  onSubmit,
  colors,
}) => {
  const { theme } = useContext(ThemeContext);
  const [isError, setIsError] = useState(false);

  const updateTagColor = (color) => {
    console.log('pushing update tag color', color, tagColor);
    if (color) {
      setTagColor(color.target.value);
    } else {
      setTagColor(getRandomColor);
    }
  };

  const submitNewTag = (e) => {
    if (tagText === '') {
      setIsError(true);
      return;
    }
    onSubmit(e);
  };

  return (
    <Stack spacing="12px">
      <FormControl isInvalid={isError}>
        <FormLabel fontSize="sm">Text</FormLabel>
        <Input
          borderColor={theme.lightGray}
          type="text"
          value={tagText}
          onChange={(e) => {
            setIsError(false);
            setTagText(e.target.value);
          }}
        />
        {isError && <FormErrorMessage>Enter tag name</FormErrorMessage>}
      </FormControl>
      <FormControl>
        <FormLabel fontSize="sm">Color</FormLabel>
        <Select
          value={tagColor}
          onChange={updateTagColor}
          borderColor={theme.lightGray}
        >
          {colors.map((color, i) => (
            <option style={{ backgroundColor: theme.black }} key={i}>
              {color}
            </option>
          ))}
        </Select>
      </FormControl>
      <Box pt="8px" alignSelf="flex-end">
        <Button
          variant="ghost"
          size="sm"
          fontSize="lg"
          _hover={{ bg: theme[tagColor.toLowerCase()] }}
          onClick={submitNewTag}
        >
          Submit
        </Button>
      </Box>
    </Stack>
  );
};

export const AddTagButton = ({ tags, fileName }) => {
  const { theme } = useContext(ThemeContext);
  const { onOpen, onClose, isOpen } = useDisclosure();

  const colors = ['Red', 'Green'];
  const getRandomColor = () =>
    colors[Math.floor(Math.random() * colors.length)];

  const [tagColor, setTagColor] = useState(getRandomColor());
  const [tagText, setTagText] = useState('');

  const onSubmit = (e) => {
    console.log(tagColor, tagText);
    onClose(e);
  };

  const customOnOpen = (e) => {
    setTagText('');
    setTagColor(getRandomColor());
    onOpen(e);
  };

  return (
    <Popover onClose={onClose} onOpen={customOnOpen} isOpen={isOpen}>
      <PopoverTrigger>
        <IconButton
          size="xs"
          w="max-content"
          bg="none"
          icon={<AddIcon />}
          _hover={{ bg: theme.black, color: theme.white }}
          color={theme.lightGray}
        />
      </PopoverTrigger>
      <PopoverContent bg={theme.darkGray} border="none">
        <PopoverBody>
          <AddNewTagForm
            setTagText={setTagText}
            tagText={tagText}
            setTagColor={setTagColor}
            tagColor={tagColor}
            onSubmit={onSubmit}
            colors={colors}
          />
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};
