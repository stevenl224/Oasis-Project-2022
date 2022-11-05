import * as React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

function LinearDeterminate(props) {

  return (
    <Box sx={{ width: '100%' }}>
      <LinearProgress variant="determinate" value={props.spentSoFar / props.totalToSpend * 100} />
    </Box>
  );
}


export default LinearDeterminate
