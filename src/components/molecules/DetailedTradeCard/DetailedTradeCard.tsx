/* eslint-disable react/jsx-no-undef */
import React from "react";
import Avatars from "../../atoms/Avatars/Avatars";
import { Grid } from "@material-ui/core";
import Icons from "../../atoms/Icons/Icons";
import Button from "../../atoms/Buttons/Button";
import Typography from "../../atoms/Typography/Typography";

const DetailedTradeCard = ({ data }) => {
  return (
    <>
      <Grid container>
        <Grid item>
          <Avatars iconSrc={data.iconSrc} />
        </Grid>
        <Grid item>
          <Grid item>{data.company}</Grid>
          <Grid item>
            <Icons imgSrc={"upIcon.svg"} />
          </Grid>
          <Grid item>{data.percent}</Grid>
        </Grid>
        <Grid item>
          <Grid item>{"Marketcap"}</Grid>
          <Grid item>{data.marketcap}</Grid>
        </Grid>
        <Grid item>
          <Grid item>{"Vol.24H"}</Grid>
          <Grid item>{data.vol}</Grid>
        </Grid>
        <Grid item>
          <Grid item>{"Circulating Supply"}</Grid>
          <Grid item>{data.supply}</Grid>
        </Grid>
        <Grid item>
             <Button ><Icons imgSrc={data.imgSrc}/><Typography variant="body1">Added To WatchList </Typography></Button>
        </Grid>
      </Grid>
    </>
  );
};

export default DetailedTradeCard;
