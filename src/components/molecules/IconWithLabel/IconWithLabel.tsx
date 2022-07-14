/* eslint-disable react/jsx-no-undef */
import Icons from '../../atoms/Icons/Icons'
import Grid from '@material-ui/core'
import Typography from '../../atoms/Typography/Typography'

const IconWithLabel = ({imgSrc,text}:{imgSrc:string,text:string}) => {
  return (
   <>
   <Grid container>
       <Grid item>
       <Icons imgSrc={imgSrc}></Icons>
       </Grid>
       <Grid item>
         <Typography variant='body1'> {text}</Typography>
       </Grid>
   </Grid>
   
   </>
  )
}

export default IconWithLabel