import React, { useEffect } from 'react'
import {Grid } from '@material-ui/core'
import Icons from '../../atoms/Icons/Icons'
import Typography from '../../atoms/Typography/Typography'
import Button from '../../atoms/Buttons/Button'

const Payment = (data,Buy) => {
    const updateData=(data)=>{
        //update the buy and sell data
    }
    useEffect(()=>{
       
    },[])
  return (
    <>
    <Grid container></Grid>
    <Grid item>
         <Icons imgSrc={"success.png"}/>
    </Grid>
    <Grid item>
         <Typography variant='h3'>{data.balance}</Typography>
    </Grid>
    {
            Buy? <>
            <Typography variant='body2'>{"Purchase is completed, please check your balance in your crypto wallet"}</Typography>
            <Button onclick={updateData(data)}>{"BUY CRYPTO"}</Button>            <Button>{"GO TO USD COIN"}</Button>

            </>:<>
            <Typography variant='body2'>{"Sell is completed, please check your balance in your crypto wallet"}</Typography>
            <Button onclick={updateData(data)}>{"SELL CRYPTO"}</Button>            <Button>{"GO TO USD COIN"}</Button>
</>
    }
    </>
  )
}

export default Payment