import React from 'react'
import Icons from '../../atoms/Icons/Icons'
import Grid from '@material-ui/core'

const SideMenuBar = (data) => {
  return (
    <>
      <Grid container>
          <Grid item>
              <Icons imgSrc={"logo.svg"} />

          </Grid>
          <Grid item>
              <Icons imgSrc={"icon1.svg"} />
              
          </Grid>
          <Grid item>
              <Icons imgSrc={"icon2.svg"} />
              
          </Grid>
          <Grid item>
              <Icons imgSrc={"icon3.svg"} />
              
          </Grid>
          <Grid item>
              <Icons imgSrc={"icon4.svg"} />
              
          </Grid>
          <Grid item>
              <Icons imgSrc={"icon5.svg"} />
              
          </Grid>
      </Grid>
    </>
  )
}

export default SideMenuBar