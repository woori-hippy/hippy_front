/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

const NFTThumb = ({ nft }) => {
  return (
    <Card
      sx={{
        width: "15rem",
        height: 250,
        boxShadow: "2px 3px 10px 0px rgba(117,117,117,0.5)",
      }}
    >
      <img
        src={`https://ipfs.io/ipfs/${nft.ipfsHash}`}
        css={css`
          width: 100%;
          height: 100%;
          object-fit: cover;
        `}
        alt="nft"
      />
    </Card>
  );
};

export default React.memo(NFTThumb);
