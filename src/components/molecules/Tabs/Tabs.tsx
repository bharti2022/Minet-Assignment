import {Tabs,Tab} from '@material-ui/core'
import { useState } from 'react';
export type Props={
    synopsis:string,
    name:string,
    author:string

}

const Tabss =(props:Props)=>{
    const [value, setValue] = useState(0);
  const handleTabs = (event, val) => {
    setValue(val);
  };
   return(
    <>
     <Tabs
                        value={value}
                        onChange={handleTabs}
                        TabIndicatorProps={{
                          style: {
                            backgroundColor: "rgba(44, 224, 128, 1)",
                          },
                        }}
                        
                      >
                        <Tab label="Synopsis" value={0}></Tab>
                        <Tab label="Who is it for?"></Tab>
                        <Tab label="About the Author"></Tab>
                      </Tabs>
                      <TabPanel value={value} index={0}>
                        {props.synopsis}
                      </TabPanel>
                      <TabPanel value={value} index={1}>
                        {props.name}
                      </TabPanel>
                      <TabPanel value={value} index={2}>
                        {props.author}
                      </TabPanel>
    </>
   )

}
function TabPanel(props) {
    const { children, value, index } = props;
  
    return (
      <>
        {index === value && (
          <p style={{ color: "rgba(3, 49, 75, 1)" }}>{children}</p>
        )}
      </>
    );
  }
export default Tabss