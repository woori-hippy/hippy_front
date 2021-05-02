import React, {useRef} from 'react';
import {
  Button,
  TextField,
  Grid
} from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import NewWindow from 'react-new-window'
import NumberFormat from 'react-number-format';



export default function IdentityConfirm({onClose, handleGetToken}) {
  // refs
  const firstNINRef = useRef() // National Identity Number (주민등록번호)
  const lastNINRef = useRef()
  const phoneNumberRef = useRef()
  
  // handle methods
  const handleCertification = (e) => {
    e.preventDefault();
    const firstNIN = firstNINRef.current.value
    const lastNIN = lastNINRef.current.value
    const phoneNumber = phoneNumberRef.current.value
    console.log("앞자리", firstNIN, "타입", typeof firstNIN) 
    handleGetToken("3", phoneNumber, "Y", "김건훈", firstNIN, lastNIN) // api call
    onClose()
  }

  // third-parties
  const NumberFormatCustom = (maxLength) => { 
    let formatString = "";
    for (let i=0; i < maxLength; i++) formatString += "#";
    const format = React.forwardRef(function NumberFormatCustom(props, ref) {
      const { ...other } = props;
      return (
        <NumberFormat
          {...other}
          getInputRef={ref}
          decimalScale={10000000}
          isNumericString
          allowNegative={false}
          format={formatString}
        />
      );
    });
    return format
  }
  
  return (
    <NewWindow
      title="본인 인증"
      features={{width: "600", height: "500"}}
      >
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Typography
              component="h2"
              sx={{
                fontSize: "1.5rem",
                marginTop: "2rem",
                marginLeft: "3rem"
              }}
              align="left"
              color="#1B7EA6">
            본인 인증
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography align="left" sx={{marginTop: "1rem", marginLeft: "3rem"}}>
            주민등록번호
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <TextField
            required
            autoFocus={true}
            variant="outlined"
            InputProps={{inputComponent: NumberFormatCustom(6)}}
            sx={{margintTop: "1rem", marginLeft: "3rem", width: "14rem", WebkitAppearance: "none"}}
            helperText="주민등록번호 앞자리를 입력해주세요"
            inputRef={firstNINRef}>
            </TextField>
        </Grid>
        <Grid item xs={6}>
          <TextField
            required
            variant="outlined"
            InputProps={{inputComponent: NumberFormatCustom(7)}}
            sx={{width: "14rem"}}
            helperText="주민등록번호 뒷자리를 입력해주세요"
            inputRef={lastNINRef}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography align="left" sx={{marginTop: "1rem", marginLeft: "3rem"}}>
            휴대폰 번호
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField 
            name="phoneNum"
            required
            variant="outlined"
            InputProps={{inputComponent: NumberFormatCustom(11)}}
            sx={{width: "14rem", marginLeft: "3rem"}}
            helperText="휴대폰 번호를 입력해주세요"
            inputRef={phoneNumberRef}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            sx={{marginLeft: "3rem", marginTop: "2rem", width: "14rem", height: "3rem", fontSize: "1rem", backgroundColor: "#3887A6"}}
            onClick={handleCertification} >
            인증하기
          </Button>
        </Grid>

      </Grid>
    </NewWindow>
  );
}





