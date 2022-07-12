import React from "react";
import Icons from "../../atoms/Icons/Icons";
import Typography from "../../atoms/Typography/Typography";

const MyPortfolioValue = (data) => {
  return (
    <>
      {" "}
      <div>MyPortfolioValue</div>
      <Grig conatiner>
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
             <Grid item>
                      {data.time1}
             </Grid>
             <Grid item>
             {data.time2}
             </Grid>
             <Grid item>
             {data.time3}
             </Grid>
             <Grid item>
             {data.time4}
             </Grid>
             <Grid item>
             {data.time5}
             </Grid>
             <Grid item>
             {data.time6}
             </Grid>
          </Grid>
          <Grid item>
             <Icons imgSrc={data.graph}/>
             </Grid>
      </Grig>
    </>
  );
};

export default MyPortfolioValue;
