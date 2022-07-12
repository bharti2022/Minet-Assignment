import Avatars from "../../atoms/Avatars/Avatars";
import Button from "../../atoms/Buttons/Button";
import Icons from "../../atoms/Icons/Icons";
import Typography from "../../atoms/Typography/Typography";

const OrderSummary = (data, selling) => {
  const sellclick=()=>{
     //uupdate sell
  }
  const buyclick=()=>{
    //update buy//
  }
  
  return (
    <>
      <div>
        {selling ? (
          <Typography variant="subtitile2">{"You are buying"}</Typography>
        ) : (
          <Typography variant="subtitile2">{"You are selling"}</Typography>
        )}
        <Typography variant="h4">{data.btc}</Typography>
        <Typography variant="h6">{data.btc}</Typography>
        <Typography variant="h5">{data.money}</Typography>
        <Grid container>
          <Grid item>
            <Avatars iconSrc="card.svg" />
            <Typography variant="subtitle2">Payment Method</Typography>
          </Grid>
          <Grid item>
            <Icons imgSrc={"dots.svg"} />
          </Grid>
          <Grid item>
            <Avatars iconSrc="delivery.svg" />
            <Typography variant="subtitle2">Delivery fees</Typography>
          </Grid>
          <Grid item>
            <Icons imgSrc={"dots.svg"} />
          </Grid>
          <Grid item>
            <Avatars iconSrc="wallet.svg" />
            <Typography variant="subtitle2">Deposit to</Typography>
          </Grid>
          <Grid item>
            {selling ? <Button onclick={buyclick}>BUY NOW</Button> : <Button onclick={sellclick}>SELL NOW</Button>}
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default OrderSummary;
