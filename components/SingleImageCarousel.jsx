import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { Box, Flex } from '@chakra-ui/react';
import Image from 'next/image';
import { BsArrow90DegLeft, BsArrowRight } from 'react-icons/bs';
import { AiFillLeftCircle, AiFillRightCircle } from 'react-icons/ai';

const SingleImageCarousel = ({ images }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: 'start',
  });
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);
  return (
    <Box pos="relative">
      <Box overflow="hidden" ref={emblaRef}>
        <Flex gap={4}>
          {images.map((image) => {
            return (
              <Box
                h={[96, '500px', '600px']}
                width={['auto', null, '600px']}
                key={image.id}
              >
                <Image
                  src={image.url}
                  layout="fill"
                  alt={image.id}
                  objectFit="cover"
                />
              </Box>
            );
          })}
        </Flex>
      </Box>
      <Box
        top="27%"
        pos="absolute"
        onClick={scrollPrev}
        shadow="xl"
        cursor={'pointer'}
      >
        <AiFillLeftCircle size={36} color="#f3f8f9" />
      </Box>
      <Box
        top="27%"
        right={0}
        pos="absolute"
        shadow="xl"
        cursor={'pointer'}
        onClick={scrollNext}
      >
        <AiFillRightCircle size={36} color="#f3f8f9" />
      </Box>
    </Box>
  );
};

export default SingleImageCarousel;
