import * as React from 'react';
import {
  Button,
  TextField,
  Grid
} from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import NewWindow from 'react-new-window'
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

export default function IdentityConfirm({onClose}) {
  const handleClose = () => {
    onClose()
  }

  return (
    <NewWindow
      title="본인 인증"
      features={{width: "600", height: "500"}}
      >
      <Typography align="center"> 
      <Grid container spacing={2}>
      <Grid item xs={6} justifyContent="center" sx={{ flexDirection: "row", margin: "0rem auto" }}>
      <TextField
                    name="firstNIN" 
                    required
                    label="주민등록번호 앞자리" 
                    variant="outlined"
                    sx={{margin: "1rem 0.5rem", width: "12rem"}}
                    helperText="주민등록번호 앞자리를 입력해주세요"
                    
                  />
                  
                  </Grid>
                  <Grid item xs={6} justifyContent="center" sx={{ flexDirection: "row", margin: "0rem auto" }}>
      <TextField
                    name="firstNIN" 
                    required
                    label="주민등록번호 앞자리" 
                    variant="outlined"
                    sx={{margin: "1rem 0.5rem", width: "12rem"}}
                    helperText="주민등록번호 앞자리를 입력해주세요"
                    
                  />
                  
                  </Grid>
                  </Grid>
      </Typography>
      <Typography align="center" margin="2rem" fontWeight="bold" fontSize="1.2rem"> 
        으ㅏ르ㅏ님어리ㅏㅁ너라ㅣㄴㅇ므라ㅣㄴ어라ㅣㅓㄴㅁ라ㅣㅓㅁ니ㅏㅇ
      </Typography>
      <Typography align="center" margin="2rem" fontSize="1.5rem" color="#3887A6"> 
        1002-253-49309-392923
      </Typography>
      <Typography align="center" margin="2rem" fontSize="1.5rem"> 
        <Button align="center" variant="contained" size="large"
          sx={{marginTop: "4rem", backgroundColor: "#3887A6"}} onClick={handleClose}>
            계좌 등록하기
        </Button>
      </Typography> 
    </NewWindow>
  );
}
