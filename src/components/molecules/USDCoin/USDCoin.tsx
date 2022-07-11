import {Grid} from "@material-ui/core";
import Avatars from "../../atoms/Avatars/Avatars";
import Button from "../../atoms/Buttons/Button";
import {Typography} from "../../atoms/Typography/Typography";

const USDCoin = (data) => {
  return (
    <Grid container>
      <Grid item>
        <Avatars iconSrc={data.iconSrc} />
      </Grid>
      <Grid item>
        <Grid item>
          <Typography variant="h5" >{data.coin}</Typography>
        </Grid>
        <Grid item>
          <Typography variant="h5" >{"Cash"}</Typography>
        </Grid>
      </Grid>
      <Grid item>
          <Button >{"CASH DEPOSIT"}</Button>
        </Grid>
        <Grid item>
          <Button>{"WITHDRAWAL"}</Button>
        </Grid>
    </Grid>
  );
};

export default USDCoin;
