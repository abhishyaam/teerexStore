import { Box, Stack, Typography, Slider } from '@mui/material';
import React, { useState } from 'react';
import { TeeRexState } from '../context';
import {
  FILTER_BY_COLOR,
  FILTER_BY_GENDER,
  FILTER_BY_TYPE,
  FILTER_BY_PRICE,
} from '../context/actions';
import Filter from './Filter';
const Filters = () => {
  const { filtersState: { filterParams } = {}, filtersDispatch } =
    TeeRexState();

  const { colors, maxPrice = 500, types, genders } = filterParams || {};

  const [filterColors, setFilterColors] = useState([]);
  const [filterTypes, setFilterTypes] = useState([]);
  const [filterGenders, setFilterGenders] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 500]);

  const handleColorSelect = (color, checked) => {
    const filteredColors = checked
      ? [...filterColors, color]
      : filterColors.filter((filterColor) => color !== filterColor);
    setFilterColors(filteredColors);
    filtersDispatch({ type: FILTER_BY_COLOR, payload: filteredColors });
  };

  const handleTypeSelect = (type, checked) => {
    const filteredTypes = checked
      ? [...filterTypes, type]
      : filterTypes.filter((filterType) => type !== filterType);
    setFilterTypes(filteredTypes);
    filtersDispatch({ type: FILTER_BY_TYPE, payload: filteredTypes });
  };

  const handleGenderSelect = (gender, checked) => {
    const filteredGenders = checked
      ? [...filterGenders, gender]
      : filterGenders.filter((filterGender) => gender !== filterGender);
    setFilterGenders(filteredGenders);
    filtersDispatch({ type: FILTER_BY_GENDER, payload: filteredGenders });
  };

  const handlePriceRangeSelect = (a, value) => {
    filtersDispatch({ type: FILTER_BY_PRICE, payload: value });
  };

  return (
    <Stack
      sx={{ width: 200 }}
      justifyContent='flex-start'
      alignItems='flex-start'
    >
      <Filter
        handleOnChange={handleColorSelect}
        filterArr={colors}
        title='Colors'
      />

      <Filter
        handleOnChange={handleTypeSelect}
        filterArr={types}
        title='Types'
      />

      <Filter
        handleOnChange={handleGenderSelect}
        filterArr={genders}
        title='Genders'
      />

      <Box sx={{ m: 0.5, p: 1, width: '75%' }}>
        <Typography variant='h6'>Price</Typography>
        <Slider
          sx={{ width: '100%' }}
          value={priceRange}
          max={maxPrice}
          valueLabelDisplay='auto'
          onChange={({ target: { value } }) => setPriceRange(value)}
          onChangeCommitted={handlePriceRangeSelect}
        />
      </Box>
    </Stack>
  );
};

export default Filters;
