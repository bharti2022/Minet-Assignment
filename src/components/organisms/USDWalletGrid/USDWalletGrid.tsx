/* eslint-disable array-callback-return */
import React from 'react'
import {Grid} from "@material-ui/core"
import USDCoin from '../../molecules/USDCoin/USDCoin'
import Typography from '../../atoms/Typography/Typography'
import Transaction from '../../molecules/Transactions/Transaction'

const USDWalletGrid = (data) => {
  return (
    <>
      <Grid container>
          <Grid item>
              <USDCoin data={data}/>
          </Grid>
          <Grid item>
               <Typography variant='body1'>{"Wallet"}</Typography>
          </Grid>
          <Grid item>
                <Grid item>{"Total balance"}</Grid>
                <Grid item>{data.balance}</Grid>
          </Grid>
          <Grid item>
               {data.map(result=>{
                 <>
                 <Transaction data={result}/>
                 </>
               })}
          </Grid>

      </Grid>
    </>
  )
}

export default USDWalletGrid