import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Sip from './Sip';
import LumpSum from './LumpSum.js';

export default function Calculator() {
  const [value, setValue] = useState('1');
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="SIP" value="1" />
            <Tab label="Lumpsum" value="2" />          
          </TabList>
        </Box>
        <TabPanel value="1">
          {value === '1' && <Sip />}
        </TabPanel>
        <TabPanel value="2">
          {value === '2' && <LumpSum />}
        </TabPanel>
      </TabContext>
    </Box>
  );
}