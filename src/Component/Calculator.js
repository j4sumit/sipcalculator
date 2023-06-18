import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Sip from './Sip';
import LumpSum from './LumpSum';

export default function Calculator() {
  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Box sx={{ width: '600px', border: '1px solid #ccc', borderRadius: '8px', padding: '20px' }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="SIP" value="1" />
              <Tab label="LumpSum" value="2" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <Sip />
          </TabPanel>
          <TabPanel value="2">
            <LumpSum />
          </TabPanel>
        </TabContext>
      </Box>
    </div>
  );
}