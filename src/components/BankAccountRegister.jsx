import * as React from "react";
import Container from "@material-ui/core/Container";
import Header from "./Header";
import Footer from "./Footer.jsx";
import Grid from "@material-ui/core/Grid";
import {
  Typography,
  Box,
  Button,
  TextField,
  MenuItem,
  Alert,
  Snackbar,
  useMediaQuery,
} from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import AccountConfirm from "./AccountConfirm";

const currencies = [
  {
    value: "1",
    label: "우리은행",
  },
  {
    value: "2",
    label: "우리은행",
  },
  {
    value: "3",
    label: "우리은행",
  },
  {
    value: "4",
    label: "우리은행",
  },
  {
    value: "5",
    label: "우리은행",
  },
];

export default function BankAccountRegister(user) {
  const [currency, setCurrency] = React.useState("");
  const [newWindow, setNewWindow] = React.useState(false);

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  const sendMessage = () => {
    handleSendClick();
  };

  const [open, setOpen] = React.useState(false);

  const handleSendClick = () => {
    setOpen(true);
  };

  const handleSendClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const showWindow = () => {
    setNewWindow(true);
  };

  return (
    <React.Fragment>
      {newWindow ? (
        <AccountConfirm
          onClose={() => {
            setNewWindow(false);
          }}
        />
      ) : null}
      <Header user={user} />
      <Container maxWidth="md">
        <Grid
          container
          alignContent="center"
          justifyContent="center"
          sx={{ flexDirection: "column" }}
        >
          <Grid
            item
            container
            xs={12}
            alignContent="center"
            justifyContent="center"
            sx={{ flexDirection: "column" }}
          >
            <Typography
              component="h2"
              sx={{
                fontSize: "1.5rem",
                marginTop: "3rem",
              }}
              align="center"
              color="#1B7EA6"
            >
              은행 계좌 등록하기
            </Typography>
            <Typography
              component="h2"
              sx={{
                fontSize: "0.9rem",
                margin: "2rem",
              }}
              align="center"
              color="#585858"
            >
              디지털 자산을 구매 및 판매할 때<br></br> 사용할 현금 거래 은행
              계좌를 등록해주세요!
            </Typography>
          </Grid>
          <Grid
            container
            item
            xs={6}
            spacing={2}
            justifyContent="center"
            sx={{ flexDirection: "row", margin: "0rem auto" }}
          >
            <TextField
              required
              select
              label="은행 선택"
              value={currency}
              onChange={handleChange}
              helperText="거래 은행을 선택해주세요"
              variant="outlined"
              sx={{ width: "13rem", margin: "0rem auto" }}
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <Grid container item xs={12}>
              <TextField
                required
                label="계좌 번호 입력"
                variant="outlined"
                sx={{ width: "100%" }}
                id="outlined-helperText"
                helperText="본인의 계좌 번호를 입력해주세요"
              />
            </Grid>

            <Grid container item xs={12} md={6}>
              <TextField
                required
                label="주민등록번호 앞자리"
                variant="outlined"
                sx={{ width: "100%" }}
                helperText="주민등록번호 앞자리를 입력해주세요"
              />
            </Grid>
            <Grid container item xs={12} md={6}>
              <TextField
                required
                type={false ? "text" : "password"}
                label="주민등록번호 뒷자리"
                variant="outlined"
                sx={{ width: "100%" }}
                helperText="주민등록번호 뒷자리를 입력해주세요"
              />
            </Grid>
          </Grid>
          <Grid
            container
            item
            xs={6}
            justifyContent="center"
            spacing={2}
            sx={{ flexDirection: "row", margin: "0rem auto" }}
          >
            <Grid container item xs={12} md={8}>
              <TextField
                required
                label="휴대폰 번호 입력"
                variant="outlined"
                sx={{ width: "100%" }}
                helperText="휴대폰 번호를 입력해주세요"
              />
            </Grid>
            <Grid container item xs={12} md={4}>
              <Button
                variant="contained"
                color="primary"
                sx={{
                  width: "100%",
                  height: "3.4rem",
                  fontSize: "1rem",
                  backgroundColor: "#3887A6",
                }}
                endIcon={<SendIcon>send</SendIcon>}
                onClick={sendMessage}
              >
                보내기
              </Button>
            </Grid>
          </Grid>
          <Grid
            container
            item
            xs={12}
            justifyContent="center"
            sx={{ flexDirection: "row", margin: "0rem auto" }}
          >
            <Snackbar
              open={open}
              autoHideDuration={6000}
              onClose={handleSendClose}
            >
              <Alert
                severity="success"
                variant="filled"
                onClose={handleSendClose}
                severity="success"
              >
                인증 번호가 전송되었습니다!
              </Alert>
            </Snackbar>
          </Grid>
          <Grid
            container
            item
            xs={6}
            spacing={2}
            justifyContent="center"
            sx={{ flexDirection: "row", margin: "0rem auto" }}
          >
            <Grid container item xs={12} md={8}>
              <TextField
                required
                label="인증 번호 입력"
                variant="outlined"
                sx={{ width: "100%" }}
                helperText="인증 번호를 입력해주세요"
              />
            </Grid>
            <Grid container item xs={12} md={4}>
              <Button
                variant="contained"
                color="primary"
                sx={{
                  width: "100%",
                  height: "3.4rem",
                  fontSize: "1rem",
                  backgroundColor: "#3887A6",
                }}
              >
                확인
              </Button>
            </Grid>

            <Grid
              container
              item
              xs={12}
              justifyContent="center"
              sx={{ flexDirection: "row", margin: "0rem auto" }}
            >
              <Button
                variant="contained"
                color="primary"
                sx={{
                  width: "100%",
                  height: "3.4rem",
                  fontSize: "1rem",
                  backgroundColor: "#1B7EA6",
                  marginBottom: "5rem",
                }}
                onClick={showWindow}
              >
                계좌 정보 확인하기
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <Footer title="Hippy" description="Hippy" />
    </React.Fragment>
  );
}
