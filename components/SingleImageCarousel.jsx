import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { Box, Flex } from '@chakra-ui/react';
import Image from 'next/image';

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
    <Box>
      <Box overflow="hidden" ref={emblaRef}>
        <Flex gap={4}>
          {images.map((image) => {
            return (
              <Box h={96} width={{ base: 'auto', md: 'lg' }} key={image.id}>
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
      <button onClick={scrollPrev}>Prev</button>
      <button onClick={scrollNext}>Next</button>
    </Box>
  );
};

export default SingleImageCarousel;
