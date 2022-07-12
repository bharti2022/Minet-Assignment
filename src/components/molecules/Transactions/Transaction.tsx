import { Grid } from "@material-ui/core";
import Avatars from "../../atoms/Avatars/Avatars";
import Icons from "../../atoms/Icons/Icons";
import Typography from "../../atoms/Typography/Typography";

const Transaction = (data) => {
  return (
    <>
      <Grid container>
        <Grid item>
          <Typography> {data.date}</Typography>
        </Grid>
        <Grid item>
          <Avatars iconSrc={data.iconSrc}></Avatars>
        </Grid>
        <Grid item>
          <Grid item>
            <Typography iconSrc={data.iconSrc}></Typography>
          </Grid>
          <Grid item>
              <Typography variant="body1">{"From"+data.user}</Typography>
               <Typography variant="body1">{"Purchased"}</Typography>
          </Grid>
        </Grid>
        <Grid item>
            <Typography iconSrc={data.iconSrc}>{"+"+data.btc}</Typography>
            <Typography iconSrc={data.iconSrc}>{"$"+data.money}</Typography>

          </Grid>
      </Grid>
    </>
  );
};

export default Transaction;
