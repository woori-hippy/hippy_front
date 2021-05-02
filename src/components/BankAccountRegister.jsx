import React, { useState } from "react";
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
import IdentityConfirm from "./IdentityConfirm";
import { phoneRequest, wooriTokenRequest } from "../api/woori";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";

const bankList = [
  { value: "1", label: "우리은행" },
  { value: "2", label: "우리은행" },
  { value: "3", label: "우리은행" },
  { value: "4", label: "우리은행" },
  { value: "5", label: "우리은행" },
];

export default function BankAccountRegister(user) {
  // states
  const [selectedBank, setSelectedBank] = useState("");
  const [newWindow, setNewWindow] = useState({
    identity: false,
    account: false,
  });
  const [snackBar, setSnackBar] = useState(false);
  const [userInfos, setUserInfos] = useState({
    bankName: "",
    account: "",
    firstNIN: "", // National Identification Number (주민등록번호)
    lastNIN: "",
    phoneNum: "",
    certificationNum: "",
    token: "",
    wooriAccount: "",
  });
  const [disable, setDisable] = useState({
    certification: false,
    bankName: true,
    account: true,
    phoneNum: true,
    certificationNum: true,
  });

  // handle methods
  const handleGetToken = (
    COMC_DIS,
    HP_NO,
    HP_CRTF_AGR_YN,
    FNM,
    RRNO_BFNB,
    ENCY_RRNO_LSNM
  ) => {
    wooriTokenRequest(
      COMC_DIS,
      HP_NO,
      HP_CRTF_AGR_YN,
      FNM,
      RRNO_BFNB,
      ENCY_RRNO_LSNM
    ).then((response) => {
      // api call
      setUserInfos({
        ...userInfos,
        token: response.data.dataBody.CRTF_UNQ_NO,
      });
      setDisable({
        ...disable,
        certification: true,
        bankName: false,
        account: false,
        phoneNum: false,
        certificationNum: false,
      });
    });
  };
  const handleBankSelect = (event) => {
    setSelectedBank(event.target.value);
    setUserInfos({
      ...userInfos,
      bankName: bankList[event.target.value - 1].label,
    });
  };
  const handleTextInput = (event) => {
    const { name, value } = event.target;
    setUserInfos({
      ...userInfos,
      [name]: value,
    });
  };
  const sendMessage = () => {
    if (userInfos.phoneNum) {
      setSnackBar(true);
    }
  };
  const handleSnackBarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackBar(false);
  };
  const showCertificationWindow = () => {
    setNewWindow({
      ...newWindow,
      identity: true,
    });
  };
  const showAccountWindow = () => {
    const phone = {
      RRNO_BFNB: userInfos.firstNIN,
      ENCY_RRNO_LSNM: userInfos.lastNIN,
      ENCY_SMS_CRTF_NO: userInfos.certificationNum,
      CRTF_UNQ_NO: userInfos.token,
    };
    phoneRequest(phone).then((response) => {
      // api call
      setUserInfos({
        ...userInfos,
        wooriAccount: response.data.dataBody.REPT_FA[0].CUS_USG_ACNO,
      });
    });
    setNewWindow({
      ...newWindow,
      account: true,
    });
  };

  const isMobile = useMediaQuery("(max-width: 568px)");

  return (
    <React.Fragment>
      {newWindow.identity ? (
        <IdentityConfirm
          handleGetToken={handleGetToken}
          onClose={() => {
            setNewWindow(false);
          }}
        />
      ) : null}
      {newWindow.account ? (
        <AccountConfirm
          wooriToken={userInfos.token}
          wooriAccount={userInfos.wooriAccount}
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
            xs={isMobile ? 10 : 6}
            spacing={2}
            justifyContent="center"
            sx={{ flexDirection: "row", margin: "0rem auto" }}
          >
            <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <VerifiedUserIcon
                sx={{
                  color: "#1B7EA6",
                  width: "8rem",
                  height: "8rem",
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                id="identity"
                variant="contained"
                disabled={disable.certification}
                sx={{
                  margin: "3rem 0",
                  width: "100%",
                  height: "3.4rem",
                  fontSize: "1rem",
                  backgroundColor: "#3887A6",
                }}
                onClick={showCertificationWindow}
              >
                {disable.certification ? "본인 인증 완료!" : "본인 인증하기"}
              </Button>
            </Grid>
          </Grid>
          <Grid
            container
            item
            xs={isMobile ? 10 : 6}
            spacing={2}
            justifyContent="center"
            sx={{ flexDirection: "row", margin: "0rem auto" }}
          >
            <Grid item xs={12}>
              <TextField
                required
                select
                disabled={disable.bankName}
                label="은행 선택"
                value={selectedBank}
                onChange={handleBankSelect}
                helperText="거래 은행을 선택해주세요"
                variant="outlined"
                sx={{ width: "100%" }}
              >
                {bankList.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>

            <Grid container item xs={12}>
              <TextField
                name="account"
                required
                disabled={disable.bankName}
                label="계좌 번호 입력"
                variant="outlined"
                sx={{ width: "100%" }}
                id="outlined-helperText"
                helperText="본인의 계좌 번호를 입력해주세요"
                onChange={handleTextInput}
              />
            </Grid>
          </Grid>
          <Grid
            container
            item
            xs={isMobile ? 10 : 6}
            justifyContent="center"
            spacing={2}
            sx={{ flexDirection: "row", margin: "0rem auto" }}
          >
            <Grid container item xs={12} md={8}>
              <TextField
                name="phoneNum"
                required
                disabled={disable.bankName}
                label="휴대폰 번호 입력"
                variant="outlined"
                sx={{ width: "100%" }}
                helperText="휴대폰 번호를 입력해주세요"
                onChange={handleTextInput}
              />
            </Grid>
            <Grid container item xs={12} md={4}>
              <Button
                disabled={disable.bankName}
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
              open={snackBar}
              autoHideDuration={2000}
              anchorOrigin={{ vertical: "top", horizontal: "center" }}
              onClose={handleSnackBarClose}
            >
              <Alert
                severity="success"
                variant="filled"
                onClose={handleSnackBarClose}
              >
                인증 번호가 전송되었습니다!
              </Alert>
            </Snackbar>
          </Grid>
          <Grid
            container
            item
            xs={isMobile ? 10 : 6}
            spacing={2}
            justifyContent="center"
            sx={{ flexDirection: "row", margin: "0rem auto" }}
          >
            <Grid container item xs={12} md={8}>
              <TextField
                name="certificationNum"
                required
                disabled={disable.bankName}
                label="인증 번호 입력"
                variant="outlined"
                sx={{ width: "100%" }}
                helperText="인증 번호를 입력해주세요"
                onChange={handleTextInput}
              ></TextField>
            </Grid>
            <Grid container item xs={12} md={4}>
              <Button
                disabled={disable.bankName}
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
              <Snackbar
                open={snackBar}
                autoHideDuration={2000}
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
                onClose={handleSnackBarClose}
              >
                <Alert
                  severity="success"
                  variant="filled"
                  onClose={handleSnackBarClose}
                >
                  인증 번호가 전송되었습니다!
                </Alert>
              </Snackbar>
            </Grid>
            <Grid
              container
              item
              xs={12}
              justifyContent="center"
              sx={{ flexDirection: "row", margin: "0rem auto" }}
            >
              <Button
                id="account"
                disabled={disable.bankName}
                variant="contained"
                color="primary"
                sx={{
                  width: "100%",
                  height: "3.4rem",
                  fontSize: "1rem",
                  backgroundColor: "#1B7EA6",
                  marginBottom: "5rem",
                }}
                onClick={showAccountWindow}
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
