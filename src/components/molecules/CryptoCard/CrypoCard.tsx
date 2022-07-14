/* eslint-disable react/jsx-no-undef */
import React from 'react'
import {Grid} from '@material-ui/core'
import Avatars from '../../atoms/Avatars/Avatars'

const CrypoCard = (data) => {
  return (
    <Grid container>
          <Grid item>
                <Avatars iconSrc={data.iconSrc} />
          </Grid>
          <Grid item>
                {data.name}
          </Grid>
          <Grid item>
                {data.money}
          </Grid>
    </Grid>
  )
}

export default CrypoCard