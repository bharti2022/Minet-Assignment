/* eslint-disable react/jsx-no-undef */
import React from 'react'
import {Grid} from '@material-ui/core'
import Avatars from '../../atoms/Avatars/Avatars'
import Typography from '../../atoms/Typography/Typography'
import Icons from '../../atoms/Icons/Icons'
import Graph from '../Graph/Graph'

const DiscoverAssetCard = (data) => {
  return (
  <>
    <Grid container>
         <Grid item>
           <Avatars iconSrc={data.iconSrc}/>          
         </Grid>
         <Grid item>
            <Grid item>
              <Typography variant="body1">
                        {data.company}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1">
                        {data.company}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1">
                        {data.money}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1">
                        {data.time}
              </Typography>
            </Grid>

         </Grid>
         <Grid item>
              <Graph graphData={data.graph}/>
            </Grid>
    </Grid>
  </>
    
  )
}

export default DiscoverAssetCard