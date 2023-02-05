import React from "react";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import { Text } from "../typo";
import { Input } from "../form";


function TabPanel(props) {
const { children, value, index, ...other } = props;

return (
    <div
    role="tabpanel"
    hidden={value !== index}
    id={`simple-tabpanel-${index}`}
    aria-labelledby={`simple-tab-${index}`}
    {...other}
    >
    {value === index && (
        <Box sx={{ p: 3 }}>
        <Typography>{children}</Typography>
        </Box>
    )}
    </div>
);
}

function a11yProps(props) {
return {
    id: `simple-tab-${props.index}`,
    'aria-controls': `simple-tabpanel-${props.index}`,
};
}

export function TabCom({label,content}) {
const [value, setValue] = React.useState(0);

const handleChange = (event, newValue) => {
    setValue(newValue);
};


return (
    <Box sx={{ width: '100%' }}>
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
        {
          label &&
          label?.map((label,key)=>(
              <Tab label={label} {...a11yProps(key)} key={key}/>
          ))  
        }
        </Tabs>
    </Box>
    {
        content &&
        content?.map((content,key)=>(
            <TabPanel value={value} index={key} key={key}>
                {content}
            </TabPanel>
        ))
    }
    </Box>
);
}
