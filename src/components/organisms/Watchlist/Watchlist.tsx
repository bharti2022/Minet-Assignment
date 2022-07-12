import { Grid } from "@material-ui/core";
import { useEffect, useState } from "react";
import {Icons} from "../../atoms/Icons/Icons";
import Typography from "../../atoms/Typography/Typography";
import DiscoverAssetCard from "../../molecules/DiscoverAssetsCards/DiscoverAssetCard";
import IconWithLabel from "../../molecules/IconWithLabel/IconWithLabel";
import MyPortfolioValue from "../MyPortfolioValue/MyPortfolioValue";

const Watchlist = () => {
const [data,setData]=useState([])
  const getWishlist=()=>{
    //get all data for wishlist

  }
  useEffect(()=>{
    getWishlist()
  })

  return (
    <>
      <Grid container>
        <Grid item>
            <Grid container>
                <Grid item> 
                    <Typography variant="body1" >{"Watchlist"}</Typography>
                </Grid>
                <Grid item> 
                    <Typography variant="body1" >{"Discover assets"}</Typography>
                </Grid>
                <Grid item> 
                <IconWithLabel imgSrc={"edit.png"} text={"Edit"}/>
                </Grid>
                <Grid item> 
                <Icons imgSrc={"window.png"}/>
                </Grid>
                <Grid item> 
                <Icons imgSrc={"menu.png"}/>
                </Grid>
            </Grid>
        </Grid>
        <Grid item>
             <DiscoverAssetCard data={data}/>
        </Grid>
        <Grid item>
           <MyPortfolioValue data={data} />
        </Grid>
      </Grid>
      
    </>
  );
};

export default Watchlist;
