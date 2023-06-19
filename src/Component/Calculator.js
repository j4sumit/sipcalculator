import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Sip from './Sip';
import LumpSum from './LumpSum';
import '../App.css'


export default function Calculator() {
  const [value, setValue] = useState('1');
  const [selectedTab, setSelectedTab] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setSelectedTab(newValue);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Box sx={{ width: '700px', border: '1px solid #ccc', borderRadius: '8px', padding: '20px' }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 0, borderColor: 'divider' }}> {/* Set borderBottom to 0 */}
            <TabList
              onChange={handleChange}
              aria-label="lab API tabs example"
              sx={{ '& .MuiTabs-indicator': { display: 'none' } }} // Remove the underline
            >
              <Tab
                label="SIP"
                value="1"
                sx={{
                  color: selectedTab === '1' ? '#00d09c' : '#7c7e8c',
                  fontWeight: 'bold', // Make the font bold
                  '&.Mui-selected': {
                    color: '#00d09c',
                    backgroundColor: '#e5faf5',
                    borderRadius: "25px",
                    padding : "8px",
                    height: "20px",
                  },
                }}
              />
              <Tab
                label="LumpSum"
                value="2"
                sx={{
                  color: selectedTab === '2' ? '#00d09c' : '#7c7e8c',
                  fontWeight: 'bold', // Make the font bold
                  '&.Mui-selected': {
                    color: '#00d09c',
                    backgroundColor: '#e5faf5',
                    borderRadius: '25px',
                  },
                }}
              />
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
