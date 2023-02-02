/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";
import React, { Fragment, useRef, useState } from "react";
import Container from "@mui/material/Container";
import Header from "./Header";
import Footer from "./Footer.jsx";
import Grid from "@mui/material/Grid";
import {
  Typography,
  Box,
  Button,
  TextField,
  Checkbox,
  FormControlLabel,
  Select,
  MenuItem,
  useMediaQuery,
} from "@mui/material";
import { useLocation } from "react-router";
import useInternalRouter from "../pages/useInternalRouter";

export default function CreateProduct({ user, onCreateProduct }) {
  const router = useInternalRouter();
  const location = useLocation();

  const nft = location.state.nft;

  const nameRef = useRef();
  const priceRef = useRef();
  const [isAction, setIsAction] = useState(false);
  const [tag, setTag] = useState("Digital Art");

  const toggleIsAction = () => {
    setIsAction((isAction) => !isAction);
    console.log(isAction);
  };
  const isMobile = useMediaQuery("(max-width: 568px)");

  const handleCreateProduct = (e) => {
    e.preventDefault();
    onCreateProduct({
      tokenId: nft.tokenId,
      price: priceRef.current.value,
      isAcution: isAction,
      name: nameRef.current.value,
      src: `https://ipfs.io/ipfs/${nft.ipfsHash}`,
      tag: tag,
    });
    router.push("/mypage");
  };

  return (
    <Fragment>
      <Header user={user} />
      <Container
        maxWidth="sm"
        css={
          isMobile &&
          css`
            padding: 2rem;
          `
        }
      >
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          direction="column"
          pt={1}
          pb={1}
        >
          <Grid item xs={12}>
            <img
              src={`https://ipfs.io/ipfs/${nft.ipfsHash}`}
              alt="nft"
              css={css`
                height: 250px;
              `}
            />
          </Grid>
          <Typography component="h1" variant="h5">
            상품 등록하기
          </Typography>
          <Box
            component="form"
            noValidate
            sx={{
              width: "100%", // Fix IE11 issue.
              mt: 1,
            }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="상품 이름"
              name="name"
              type="text"
              autoFocus
              autoComplete="name"
              inputRef={nameRef}
            />
            <Select
              labelId="tag"
              id="tag"
              value={tag}
              required
              fullWidth
              label="tag"
              onChange={(e) => {
                setTag(e.target.value);
              }}
            >
              <MenuItem value="Digital Art">Digital Art</MenuItem>
              <MenuItem value="Animation">Animation</MenuItem>
              <MenuItem value="Virtual Reality">Virtual Reality</MenuItem>
            </Select>
            <TextField
              margin="normal"
              required
              fullWidth
              name="price"
              label="가격"
              type="text"
              id="price"
              inputRef={priceRef}
            />
            <FormControlLabel
              control={
                <Checkbox
                  value="remember"
                  color="primary"
                  onChange={toggleIsAction}
                />
              }
              label="경매로 등록하기"
            />
            <Button
              color="inherit"
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                color: "white",
                backgroundColor: "#3887A6",
                mt: 3,
                mb: 2,
              }}
              onClick={handleCreateProduct}
            >
              등록
            </Button>
          </Box>
        </Grid>
      </Container>
      <Footer />
    </Fragment>
  );
}
