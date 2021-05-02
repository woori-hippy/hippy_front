import axios from "axios";

// 프로필 조회
export const profileRequest = async () => {
  const response = await axios({
    method: "get",
    url: "/profile",
  });
  return response.data.user;
};

// 우리 은행 계좌 수정
export const accountChangeReqeust = async (wooriAccount, wooriToken) => {
  const response = await axios({
    method: "patch",
    url: "/profile/woori",
    data : {
      wooriAccount: wooriAccount,
      wooriToken: wooriToken
    }
  });
  return response.data;
};