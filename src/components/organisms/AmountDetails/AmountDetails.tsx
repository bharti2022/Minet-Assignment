import Typography from "../../atoms/Typography/Typography"
import Grid from '@material-ui/core'
import Icons from "../../atoms/Icons/Icons"

export const AmountDetails = (data) => {
  return (
    <>
      <div>
        <Typography variant="body1">{"Amount details"}</Typography>
        <Grid container>
          <Grid item>
              <Typography variant="sibtitle1">{"$"+data}</Typography>
          </Grid>
          <Grid item>
            <Button> {"Sell max"}</Button>
          </Grid>
        </Grid>
        <Icons imgSrc={line}/>
        <Typography variant="subtitle2">{data.info}</Typography>
        <Grid container>
          <Grid item>
             <Typography variant="body1">{data}</Typography>
          </Grid>
          <Grid item>
             <Typography variant="body1">{data.company}</Typography>
          </Grid>

        </Grid>
      </div>
    </>
  )
}
