import {Tabs,Tab} from '@material-ui/core'
import { useState } from 'react';
export type Props={

    panel1:string,
    panel2:string,


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

                        <Tab label={/*tab name 1 */}></Tab>
                        <Tab label={/*tab name 2*/}></Tab>
                        
                      </Tabs>
                      <TabPanel value={value} index={0}>
                        {props.panel1}
                      </TabPanel>
                      <TabPanel value={value} index={1}>
                        {props.panel2}
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
