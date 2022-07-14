import React from 'react'
import {Grid} from '@material-ui/core'
import Typography from '../../atoms/Typography/Typography'
import TradeCards from '../../molecules/TradeCards/TradeCards'

const TradesCardGrid = (data) => {
  return (
    <>
    <Grid container direction='row'>
      
      <Grid item><Typography variant="body1">{"Name"}</Typography></Grid>
      <Grid item><Typography variant="body1">{"Price"}</Typography></Grid>
      <Grid item><Typography variant="body1">{"Change"}</Typography></Grid>
      <Grid item><Typography variant="body1">{"Market Gap"}</Typography></Grid>
      <Grid item><Typography variant="body1">{"Watch"}</Typography></Grid>
       
    </Grid>
        <Grid container>
          {data.map(result=>{
           return <Grid item>
              <TradeCards data={result} />
              </Grid>
          })}

        </Grid>
    </>
  )
}

export default TradesCardGrid