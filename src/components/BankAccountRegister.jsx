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
} from "@material-ui/core";
import SendIcon from '@material-ui/icons/Send';
import AccountConfirm from "./AccountConfirm";
import IdentityConfirm from "./IdentityConfirm";
import { TryRounded } from "@material-ui/icons";

const bankList = [
  {
    value: '1',
    label: "우리은행",
  },
  {
    value: '2',
    label: "우리은행",
  },
  {
    value: '3',
    label: "우리은행",
  },
  {
    value: '4',
    label: "우리은행",
  },
  {
    value: '5',
    label: "우리은행",
  },
];

export default function BankAccountRegister(user) {
  // state
  const [selectedBank, setSelectedBank] = React.useState('');
  const [newWindow, setNewWindow] = React.useState({
    identity: false,
    account: false
  });
  const [snackBar, setSnackBar] = React.useState(false);
  const [userInfos, setUserInfos] = React.useState({
    bankName: "",
    account: '',
    firstNIN: '', // National Identification Number
    lastNIN: '',
    phoneNum: '',
    certificationNum: ''
  })
  

  // handle methods
  const handleBankSelect = (event) => {
    setSelectedBank(event.target.value);
    setUserInfos({
      ...userInfos,
      bankName: bankList[event.target.value-1].label
    })
  };
  const handleTextInput = (event) => {   
    const { name, value } = event.target
    setUserInfos({
      ...userInfos,
      [name]: value
    })
  }
  const sendMessage = () => {
    if (userInfos.phoneNum) {
      setSnackBar(true);
    }
  }
  const handleSnackBarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackBar(false);
  };
  const showWindow = (event) => {
    const id = event.currentTarget.id
    setNewWindow({
      ...newWindow,
      [id]: true
    })
  }

  return (
      <React.Fragment>
        {newWindow.identity ? <IdentityConfirm onClose={() => {setNewWindow(false)}} /> : null }
        {newWindow.account ? <AccountConfirm onClose={() => {setNewWindow(false)}} /> : null }
        <Header user={user} />
        <Container maxWidth="md">
            <Box>
              <Grid
                container
                spacing={0}            
                sx={{ display: "flex", flexDirection: "row" }}
              >
                <Grid item xs={12} alignContent="center" justifyContent="center">
                    <Typography
                        component="h2"
                        sx={{
                          fontSize: "1.5rem",
                          marginTop: "3rem"
                        }}
                        align="center"
                        color="#1B7EA6">
                      은행 계좌 등록하기
                    </Typography>
                    <Typography
                      component="h2"
                      sx={{
                        fontSize: "0.9rem",
                        margin: "2rem"
                      }}
                      align="center"
                      color="#585858">
                      디지털 자산을 구매 및 판매할 때<br></br> 사용할 현금 거래 은행 계좌를 등록해주세요!
                    </Typography>
                </Grid>
                <Grid container item xs={12} justifyContent="center" sx={{ flexDirection: "row", margin: "0rem auto" }}>
                  <Button
                    id="identity"
                    variant="contained"
                    color="primary"
                    sx={{margin: "3rem", width: "25rem", height: "3.4rem", fontSize: "1rem", backgroundColor: "#3887A6"}}
                    onClick={showWindow}
                  >
                    본인 인증하기
                  </Button>
                </Grid>
                <Grid container item xs={12} justifyContent="center" sx={{ flexDirection: "column" }}>
                  <TextField
                    required
                    select
                    label="은행 선택"
                    value={selectedBank}
                    onChange={handleBankSelect}
                    helperText="거래 은행을 선택해주세요"
                    variant="outlined"
                    sx={{width: "13rem", margin: "0rem auto"}}
                  >
                    {bankList.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                  <TextField 
                    name="account"
                    required
                    label="계좌 번호 입력" 
                    variant="outlined"
                    sx={{margin: "1rem auto", width: "25rem"}}
                    id="outlined-helperText"
                    helperText="본인의 계좌 번호를 입력해주세요"
                    onChange={handleTextInput}
                  />
                  <Grid container item xs={6} justifyContent="center" sx={{ flexDirection: "row", margin: "0rem auto" }}>
                  <TextField
                    name="firstNIN" 
                    required
                    label="주민등록번호 앞자리" 
                    variant="outlined"
                    sx={{margin: "1rem 0.5rem", width: "12rem"}}
                    helperText="주민등록번호 앞자리를 입력해주세요"
                    onChange={handleTextInput}
                  />
                  <TextField 
                    name="lastNIN"
                    required
                    type={false ? 'text' : 'password'}
                    label="주민등록번호 뒷자리" 
                    variant="outlined"
                    sx={{margin: "1rem 0.5rem", width: "12rem"}}
                    helperText="주민등록번호 뒷자리를 입력해주세요"
                    onChange={handleTextInput}
                  />
                  </Grid>
                </Grid>
                <Grid container item xs={6} justifyContent="center" sx={{ flexDirection: "row", margin: "0rem auto" }}>
                  <TextField 
                    name="phoneNum"
                    required
                    label="휴대폰 번호 입력" 
                    variant="outlined"
                    sx={{margin: "0.5rem", width: "16rem"}}
                    helperText="휴대폰 번호를 입력해주세요"
                    onChange={handleTextInput}
                  />
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{margin: "0.5rem", width: "8rem", height: "3.4rem", fontSize: "1rem", backgroundColor: "#3887A6"}}
                    endIcon={<SendIcon>send</SendIcon>}
                    onClick={sendMessage}
                  >
                    보내기
                  </Button>
                </Grid>
                <Grid container item xs={12} justifyContent="center" sx={{ flexDirection: "row", margin: "0rem auto" }}>
                  <Snackbar open={snackBar} autoHideDuration={2000} anchorOrigin={{vertical: 'top', horizontal: 'center'}} onClose={handleSnackBarClose}>
                    <Alert severity="success" variant="filled" onClose={handleSnackBarClose}>
                      인증 번호가 전송되었습니다!
                    </Alert>
                  </Snackbar>
                </Grid>
                <Grid container item xs={6} justifyContent="center" sx={{ flexDirection: "row", margin: "0rem auto" }}>
                  <TextField 
                    name="certificationNum"
                    required
                    label="인증 번호 입력" 
                    variant="outlined"
                    sx={{margin: "0.5rem", width: "16rem"}}
                    helperText="인증 번호를 입력해주세요"
                    onChange={handleTextInput}
                  >
                    
                  </TextField>
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{margin: "0.5rem", width: "8rem", height: "3.4rem", fontSize: "1rem", backgroundColor: "#3887A6"}}
                  >
                    확인
                  </Button>                
                  <Grid container item xs={12} justifyContent="center" sx={{ flexDirection: "row", margin: "0rem auto" }}>
                    <Button
                      id="account"
                      variant="contained"
                      color="primary"
                      sx={{margin: "0.5rem", width: "25rem", height: "3.4rem", fontSize: "1rem", backgroundColor: "#1B7EA6"}}
                      onClick={showWindow}
                    >
                      계좌 정보 확인하기
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
        </Container>
        <Footer title="Hippy" description="Hippy" />
      </React.Fragment>
  );
}
