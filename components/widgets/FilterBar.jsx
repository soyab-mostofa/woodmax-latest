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

const FilterBar = ({ allCategories }) => {
  console.log(allCategories);
  return (
    <Stack mb={4} direction={['column', 'row']}>
      <Select>
        {allCategories.map((c) => (
          <option key={c} value={c}>
            {c.toUpperCase()}
          </option>
        ))}
      </Select>
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
