import * as React from 'react';
import {
  Button
} from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import NewWindow from 'react-new-window'
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

export default function AccountConfirm({onClose}) {
  const handleClose = () => {
    onClose()
  }

  return (
    <NewWindow
      title="계좌 정보 확인"
      features={{width: "400", height: "500"}}
      >
      <Typography align="center"> 
        <CheckCircleIcon 
          sx={{fontSize: "3rem", color: "#3887A6", marginTop: "7rem"}}
        />
      </Typography>
      <Typography align="center" margin="2rem" fontWeight="bold" fontSize="1.2rem"> 
        계좌 인증에 성공했습니다!
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
