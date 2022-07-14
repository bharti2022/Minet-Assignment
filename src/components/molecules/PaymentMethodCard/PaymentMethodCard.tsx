import React from "react";
import Typography from "../../atoms/Typography/Typography";

const PaymentMethodCard = (data) => {
  return (
    <>
      <div>
        <Typography>{"Payment Method"}</Typography>
        <Grid conatiner>
          <Grid item>
            <Typography>{data.coin}</Typography>
          </Grid>
          <Grid item>
            <Typography>{"Total Balance-$" + data.coin}</Typography>
            <Grid item>
                <Typography>{"Default"}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default PaymentMethodCard;
