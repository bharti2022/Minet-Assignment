/* eslint-disable react/jsx-no-undef */
import React from 'react'
import Icons from '../../atoms/Icons/Icons'
import Typography from '../../atoms/Typography/Typography'
import Grid from '@material-ui/core'
import TradeCards from '../../molecules/TradeCards/TradeCards'
import USDCoin from '../../molecules/USDCoin/USDCoin'

const MyPortFolio = (data) => {
  return (
   <>
      <Grid container>
          <Grid item>
             <Typography variant='body1'>{"My Portfolio"}</Typography>
          </Grid>
          <Grid item>
            <Icons imgSrc={"refreshIcon.png"}/>

          </Grid>
          <Grid item>
          <Icons imgSrc={"menu.png"}/>
          </Grid>
          <Grid item>
             <Grid container>
                {
                  data.map(data:any=>{
                    <TradeCards data={data} />
                  })
                }
             </Grid>
          </Grid>
          <Grid item>
          <Typography variant='body1'>{"Total balance"}</Typography>
          <Typography variant='body1'>{"$"+data.totalmoney}</Typography>
          </Grid>
          <Grid item>
            <Grid container>
              <Typography>{"My Wallets"}</Typography>
              <Grid item>  <USDCoin data={data.wallet}/></Grid>
              <Grid item>
          <Typography variant='body1'>{"Recent Transactions"}</Typography>
          <Typography variant='body1'>{"View All"}</Typography>

          </Grid>
            </Grid>
            <Grid item>
              <Icons imgSrc={imgSrc}/>
            </Grid>

          </Grid>
      </Grid>
   </>
  )
}

export default MyPortFolio