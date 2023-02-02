/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";
import { Button, Card, CardMedia, Grid } from "@mui/material";
import React from "react";
import useInternalRouter from "../pages/useInternalRouter";

const NFTThumb = ({ nft }) => {
  const router = useInternalRouter();
  const handleSale = () => {
    nft.productId
      ? router.push(`/product/${nft.productId}`)
      : router.push({
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
      {nft.productId ? (
        <Button
          onClick={handleSale}
          sx={{ width: "100%", height: "100%", color: "#1B7EA6" }}
        >
          판매중
        </Button>
      ) : (
        <Button
          onClick={handleSale}
          sx={{ width: "100%", height: "100%", color: "black" }}
        >
          판매하기
        </Button>
      )}
    </Card>
  );
};

export default React.memo(NFTThumb);
