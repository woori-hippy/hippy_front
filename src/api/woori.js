import axios from "axios";

//전 계좌 조회
export const allAcountRequest = async (token) => {
  const response = await axios({
    method: "post",
    url:
      "https://openapi.wooribank.com:444/oai/wb/v1/finance/getIndivAllAccInfo",
    data: {
      dataHeader: {
        UTZPE_CNCT_IPAD: "",
        UTZPE_CNCT_MCHR_UNQ_ID: "",
        UTZPE_CNCT_TEL_NO_TXT: "",
        UTZPE_CNCT_MCHR_IDF_SRNO: "",
        UTZ_MCHR_OS_DSCD: "",
        UTZ_MCHR_OS_VER_NM: "",
        UTZ_MCHR_MDL_NM: "",
        UTZ_MCHR_APP_VER_NM: "",
      },
      dataBody: {},
    },
    headers: {
      appkey: process.env.REACT_APP_WOORIAPI_KEY,
      token: token,
    },
  });
  return response.dataBody;
};

//인증 - 토큰받기
export const wooriTokenRequest = async ({ COMC_DIS, HP_NO, HP_CRTF_AGR_YN, FNM, RRNO_BFNB, ENCY_RRNO_LSNM }) => {
  const response = await axios({
    method: "post",
    url: "https://hippy.dnatuna.fun/api/woori/wooriToken",
    data: {
      COMC_DIS: "3", 
      HP_NO: "01023963177",
      HP_CRTF_AGR_YN: "Y", 
      FNM: "김건훈",
      RRNO_BFNB: "980325",
      ENCY_RRNO_LSNM: "1218815"
    }  
  });
  return response.dataBody;
};

//휴대폰 인증 완료
export const phoneRequest = async (phone) => {
  const response = await axios({
    method: "post",
    url: "https://openapi.wooribank.com:444/oai/wb/v1/login/getCellCerti",
    data: {
      dataHeader: {
        UTZPE_CNCT_IPAD: "",
        UTZPE_CNCT_MCHR_UNQ_ID: "",
        UTZPE_CNCT_TEL_NO_TXT: "",
        UTZPE_CNCT_MCHR_IDF_SRNO: "",
        UTZ_MCHR_OS_DSCD: "",
        UTZ_MCHR_OS_VER_NM: "",
        UTZ_MCHR_MDL_NM: "",
        UTZ_MCHR_APP_VER_NM: "",
      },
      dataBody: {
        RRNO_BFNB: phone.RRNO_BFNB,
        ENCY_RRNO_LSNM: phone.ENCY_RRNO_LSNM,
        ENCY_SMS_CRTF_NO: phone.ENCY_SMS_CRTF_NO,
        CRTF_UNQ_NO: phone.CRTF_UNQ_NO,
      },
    },
    headers: {
      appkey: process.env.REACT_APP_WOORIAPI_KEY,
    },
  });
  return response.dataBody;
};
