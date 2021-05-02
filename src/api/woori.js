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
export const wooriTokenRequest = async (
  COMC_DIS,
  HP_NO,
  HP_CRTF_AGR_YN,
  FNM,
  RRNO_BFNB,
  ENCY_RRNO_LSNM
) => {
  const response = await axios({
    method: "post",
    url: "/api/woori/wooriToken",
    data: {
      COMC_DIS: COMC_DIS,
      HP_NO: HP_NO,
      HP_CRTF_AGR_YN: HP_CRTF_AGR_YN,
      FNM: FNM,
      RRNO_BFNB: RRNO_BFNB,
      ENCY_RRNO_LSNM: ENCY_RRNO_LSNM,
    },
  });

  return response.data;
};

//휴대폰 인증 완료
export const phoneRequest = async (phone) => {
  const response = await axios({
    method: "post",
    url: "/api/woori/phone",
    data: {
      RRNO_BFNB: phone.RRNO_BFNB,
      ENCY_RRNO_LSNM: phone.ENCY_RRNO_LSNM,
      ENCY_SMS_CRTF_NO: phone.ENCY_SMS_CRTF_NO,
      CRTF_UNQ_NO: phone.CRTF_UNQ_NO,
    },
  });
  return response.data;
};
