import React, { useEffect } from 'react'

import Typography from '../../atoms/Typography/Typography'
import {Grid} from '@material-ui/core'
import CrypoCard from '../../molecules/CryptoCard/CrypoCard'
import PaymentMethodCard from '../../molecules/PaymentMethodCard/PaymentMethodCard'
import { AmountDetails } from '../AmountDetails/AmountDetails'

const WatchlistBar = () => {
  const [data,setData]=useState([])
  const fetchData=()=>{
    //api call to get data
    setData(data)
  }
  useEffect(()=>{
      fetchData()
  },[])
  const markSelected=()=>{
   //mark card coin as seleected for sell or purchase
  }
  

  return (
    <>
     <Grid container>
       <Grid item>
           <Typography variant="subtitle1">Buy Crypto</Typography>
       </Grid>
       <Grid item>
            <Typography variant='body1'>Choose Crypto</Typography>
             {
               data.map(result=>
                {
                  return (<>
                  <Grid item >
                    <CrypoCard data={result} onclick={markSelected()}/>

                  </Grid>
                  </>)
                }
                
                 
              )
             }
       </Grid>
       <Grid item>
         <PaymentMethodCard data={data}/>
       </Grid>
       <Grid item>
          <AmountDetails data={data}/>
       </Grid>
     </Grid>
    </>
  )
}

export default WatchlistBar