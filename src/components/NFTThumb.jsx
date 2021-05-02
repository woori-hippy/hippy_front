/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@material-ui/core";
import React from "react";
import { Link, useHistory } from "react-router-dom";

const NFTThumb = ({ nft }) => {
  const history = useHistory();
  const handleSale = () => {
    nft.productId
      ? history.push(`/product/${nft.productId}`)
      : history.push({
          pathname: "/createproduct",
          state: { nft: nft },
        });
  };
  return (
    <Card
      sx={{
        width: "15rem",
        boxShadow: "2px 3px 10px 0px rgba(117,117,117,0.5)",
      }}
    >
      <Grid
        container
        justifyContent="flex-end"
        alignItems="center"
        sx={{ color: "gray", height: "40px" }}
      ></Grid>
      <CardMedia
        sx={{ height: 250, backgroundSize: "contain" }}
        image={`https://ipfs.io/ipfs/${nft.ipfsHash}`}
        title={null}
      />
      <Button onClick={handleSale} sx={{ width: "100%", height: "100%" }}>
        {nft.productId ? "판매중" : "판매하기"}
      </Button>
    </Card>
  );
};

export default React.memo(NFTThumb);