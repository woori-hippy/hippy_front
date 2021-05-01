import * as React from "react";
import Container from "@material-ui/core/Container";
import Header from "./Header";
import Footer from "./Footer.jsx";
import Grid from "@material-ui/core/Grid";
import { Typography, Box, Button } from "@material-ui/core";
import ImageUploader from "react-images-upload";
import IpfsApi from "ipfs-api";

export default function NFTCreate({ user }) {
  // connect to ipfs daemon API server
  const ipfsApi = IpfsApi({
    host: "ipfs.infura.io",
    port: 5001,
    protocol: "https",
  });

  // state
  const [uploadedFileInfo, setUploadedFileInfo] = React.useState({
    buffer: null,
    ipfsHash: "",
  });
  const [file, setFile] = React.useState([]);

  React.useEffect(() => {
    if (uploadedFileInfo.buffer) {
      ipfsApi.files
        .add(uploadedFileInfo.buffer)
        .then((result) => {
          setUploadedFileInfo({
            ...uploadedFileInfo,
            ipfsHash: result[0].hash,
          });
          console.log(result[0].hash); // 추출된 해시값
        })
        .catch((error) => console.log(error));
    }
  }, [uploadedFileInfo.buffer]);

  const onCreateNFT = () => {
    captureFile();
  };

  const onDrop = (file) => {
    setFile({
      ...file,
      file,
    });
    if (btnRef.current) {
      btnRef.current.setAttribute("disabled", "visible");
    }
  };

  let btnRef = React.useRef();

  // 업로드한 파일의 크기 체크 및 저장
  const captureFile = () => {
    const uploadedFile = file.file[0];
    const reader = new window.FileReader();
    reader.readAsArrayBuffer(uploadedFile);

    reader.onloadend = () => {
      setUploadedFileInfo({
        ...uploadedFileInfo,
        buffer: Buffer(reader.result),
      });
    };
  };

  return (
    <React.Fragment>
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
              onClick={onCreateNFT}
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
