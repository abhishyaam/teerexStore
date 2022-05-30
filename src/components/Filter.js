import { Box, Checkbox, FormControlLabel, Typography } from '@mui/material';
import React from 'react';

const Filter = ({ title, filterArr, handleOnChange }) => {
  return (
    <Box sx={{ m: 1, p: 1, display: 'flex', flexDirection: 'column' }}>
      <Typography variant='h6'>{title}</Typography>
      {filterArr &&
        filterArr.map((item, i) => (
          <FormControlLabel
            key={`item-${i}`}
            control={
              <Checkbox
                onChange={({ target: { checked } }) =>
                  handleOnChange(item, checked)
                }
              />
            }
            label={<Typography sx={{ fontSize: 14 }}>{item}</Typography>}
            sx={{ '& .MuiSvgIcon-root': { fontSize: 12 } }}
          />
        ))}
    </Box>
  );
};

export default Filter;
