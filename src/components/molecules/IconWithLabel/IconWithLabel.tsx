/* eslint-disable react/jsx-no-undef */
import Icons from '../../atoms/Icons/Icons'
import Grid from '@material-ui/core'
import Typography from '../../atoms/Typography/Typography'

const IconWithLabel = (data) => {
  return (
   <>
   <Grid container>
       <Grid item>
       <Icons imgSrc={data.imgSrc}></Icons>
       </Grid>
       <Grid item>
         <Typography variant='body1'> {data.text}</Typography>
       </Grid>
   </Grid>
   
   </>
  )
}

export default IconWithLabel