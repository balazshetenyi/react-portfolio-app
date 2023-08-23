import { Heading, HStack, Image, Text, VStack, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <Box bg='white' color='black' borderRadius={8} w='md' >
      <VStack>
        <Image src={imageSrc} alt={title} borderRadius={8} />
        <VStack p={4} spacing={4} align='flex-start'>
          <Heading as='h4' size='md'>{title}</Heading>
          <Text color='blackAlpha.600'>{description}</Text>
          <a href='#'>
            <HStack>
              <Text>See more </Text>
              <FontAwesomeIcon icon={ faArrowRight } />
            </HStack>
          </a>
        </VStack>
      </VStack>
    </Box>
  );
};

export default Card;
