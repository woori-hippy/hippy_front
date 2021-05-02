/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";
import React, { useEffect, useRef, useState } from "react";
import Container from "@material-ui/core/Container";
import Header from "./Header";
import Footer from "./Footer.jsx";
import Grid from "@material-ui/core/Grid";
import { Typography, Box, Button } from "@material-ui/core";
import ImageUploader from "react-images-upload";
import { getHash } from "../api/ipfs";
import { useHistory } from "react-router";

export default function CreateNFT({ user, onCreateNFT }) {
  const history = useHistory();
  const btnRef = useRef();
  const [buffer, setBuffer] = useState(null);
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState([]);

  const onDrop = (file) => {
    setFile({
      ...file,
      file,
    });
    if (btnRef.current) {
      btnRef.current.setAttribute("disabled", "visible");
    }
  };

  const captureFile = () => {
    const uploadedFile = file.file[0];
    const reader = new window.FileReader();
    reader.readAsArrayBuffer(uploadedFile);

    reader.onloadend = () => {
      setBuffer(Buffer(reader.result));
    };
  };

  useEffect(() => {
    if (buffer) {
      getHash(buffer, setLoading).then((ipfsHash) => {
        onCreateNFT(ipfsHash);
        history.push("/mypage");
      });
    }
  }, [buffer]);

  return (
    <React.Fragment>
      {loading && (
        <div
          css={css`
            z-index: 10;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            background: rgba(0, 0, 0, 0.3);
          `}
        >
          <div
            css={css`
              width: 5rem;
              height: 5rem;
              border-radius: 50%;
              border: 5px solid gray;
              border-top: 5px solid #3887a6;
              border-right: 5px solid #60a4bf;
              border-bottom: 5px solid #a0c9d9;
              border-bottom: 5px solid transparent;
              animation: spin 2s linear infinite;

              @keyframes spin {
                0% {
                  transform: rotate(0deg);
                }
                100% {
                  transform: rotate(360deg);
                }
              }
            `}
          ></div>
        </div>
      )}
      <Header user={user} />
      <Container maxWidth="md">
        <Grid
          container
          spacing={2}
          sx={{ display: "flex", flexDirection: "row" }}
        >
          <Grid item xs={12}>
            <Typography
              component="h2"
              sx={{
                fontSize: "2rem",
                margin: "3rem",
              }}
              align="center"
              color="#1B7EA6"
            >
              File upload
            </Typography>
          </Grid>
          <Grid container item xs={12} justifyContent="center">
            <ImageUploader
              style={{
                border: "1.5px dashed #1B7EA6",
                borderRadius: "10px",
              }}
              withPreview={true}
              withIcon={true}
              onChange={onDrop}
              imgExtension={[".jpg", ".gif", ".png", ".gif"]}
              maxFileSize={5242880}
              buttonText="이미지 업로드"
              buttonStyles={{
                fontSize: "1rem",
                backgroundColor: "#60A4BF",
              }}
              label="NFT로 만들 당신의 디지털 자산을 업로드해주세요"
              labelStyles={{ fontSize: "1rem" }}
              singleImage={true}
              fileSizeError="파일 사이즈가 너무 큽니다"
              fileTypeError="파일의 확장자가 지원하지 않는 확장자 입니다"
            />
            <Button
              ref={btnRef}
              style={{
                width: "20rem",
                height: "3rem",
                boxShadow: "none",
                borderRadius: "50px",
                backgroundColor: "#3887A6",
                marginTop: "5rem",
                fontWeight: "bold",
              }}
              variant="contained"
              size="large"
              onClick={captureFile}
            >
              NFT 생성하기!
            </Button>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </React.Fragment>
  );
}
