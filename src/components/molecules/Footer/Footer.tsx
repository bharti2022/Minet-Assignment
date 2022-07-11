/* eslint-disable react/jsx-no-undef */
import {Grid} from '@material-ui/core'
import Typography from '../../atoms/Typography/Typography'
import DropDownList from '../DropDownList/DropDownList'
import Button from '../../atoms/Buttons/Button'

const Footer = () => {
  return (
    <>
      <Grid container>
          <Grid item>
              <Typography variant={'body1'} >{"Dashboard"}</Typography>
          </Grid>
          <Grid item>
              <Typography variant={'body1'}>{"Careers"}</Typography>
          </Grid>
          <Grid item>
              <Typography variant={'body1'}>{"Legal & Privacy"}</Typography>
          </Grid>
          <Grid item>
              <Typography variant={'body1'}>{"2021 Minet"}</Typography>
          </Grid>
          <Grid item>
               <DropDownList/>
          </Grid>
          <Grid item>
              <Button>{"NEED HELP"}</Button>
          </Grid>
      </Grid>
    </>
  )
}

export default Footer