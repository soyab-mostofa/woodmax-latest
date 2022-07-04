import React from 'react';
import {
  Select,
  Box,
  RangeSliderTrack,
  RangeSliderThumb,
  RangeSlider,
  Stack,
  RangeSliderFilledTrack,
} from '@chakra-ui/react';
import useStore from '../../features/store';

const FilterBar = () => {
  const filterProducts = useStore((state) => state.filterProducts);
  const filteredProducts = useStore((state) => state.filteredProducts);

  console.log(filteredProducts);
  return (
    <Stack direction={['column', 'row']}>
      <Select></Select>
      <RangeSlider
        defaultValue={[10, 90]}
        onChangeEnd={(val) => filterProducts(val)}
      >
        <RangeSliderTrack>
          <RangeSliderFilledTrack />
        </RangeSliderTrack>
        <RangeSliderThumb index={0} />
        <RangeSliderThumb index={1} />
      </RangeSlider>
    </Stack>
  );
};

export default FilterBar;
