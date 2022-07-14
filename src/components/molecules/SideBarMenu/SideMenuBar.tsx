import React from 'react'
import Icons from '../../atoms/Icons/Icons'
import Grid from '@material-ui/core'

import { sideBarIconList } from '../../../Constants/constants'

const SideMenuBar = () => {
  return (
    <>
      <Grid container>
          {
              sideBarIconList.map(result=>{
                  return (
                      <>
                       <Grid item>
              <Icons imgSrc={result.src} />

                       </Grid>
                      </>
                  )
            })
          }
         
      </Grid>
    </>
  )
}

export default SideMenuBar