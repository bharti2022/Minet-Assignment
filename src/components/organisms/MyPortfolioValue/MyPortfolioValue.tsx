import React from "react";
import Icons from "../../atoms/Icons/Icons";
import Typography from "../../atoms/Typography/Typography";
import Grid from '@mui/material'
import Tabss from "../../molecules/Tabs/Tabs";
import { timesTabs } from "../../../Constants/constants";


const MyPortfolioValue = (data: { icon: any; percent: string; money: string; graph: any; }) => {
  return (
    <>
      {" "}
      <div>MyPortfolioValue</div>
      <Grid container>
          <Grid item>
                <Typography >{"Total Investment"}</Typography>
          </Grid>
          <Grid item>
                <Icons imgSrc={data.icon}></Icons>
                <Typography>{data.percent}</Typography>
          </Grid>
          <Grid item>
                <Typography >{data.money}</Typography>
          </Grid>
          <Grid item>
             
            
                      <Tabss data={timesTabs}/>
               {/* display diff time tabs */}
            
          </Grid>
          <Grid item>
             <Icons imgSrc={data.graph}/>
             </Grid>
      </Grid>
    </>
  );
};

export default MyPortfolioValue;
