import React from 'react'
import Avatars from '../../atoms/Avatars/Avatars'
import Icons from '../../atoms/Icons/Icons'
import Typography from '../../atoms/Typography/Typography'
import Grid from '@material-ui/core'

const TradeCards = (data) => {
  return (
   <>
     <Grid container>
        <Grid item>
           <Avatars icobSRc={data.iconSrc}></Avatars>
        </Grid>
        <Grid item>
             <Grid item>
                  <Typography>{data.coin}</Typography>
             </Grid>
             <Grid item>
                  <Typography>{data.coinCompany}</Typography>
             </Grid>
        </Grid>
        <Grid item>
                  <Typography>{"$"+data.money}</Typography>
             </Grid>
             <Grid item>
                  <Typography>{"$"+data.change}</Typography>
             </Grid>
             <Grid item>
                  <Typography>{"$"+data.marketCap}</Typography>
             </Grid>
             <Grid item>
                  <Icons imgSrc="star.svg"></Icons>
             </Grid>
     </Grid>
   </>
  )
}

export default TradeCards