// const KakaoLogin = useCallback((e) => {
//   Kakao.Auth.login({
//     success: (response) => {
//       console.log(response);

//       axios({
//         method: "get",
//         url: "/oauth/kakao",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: response.access_token,
//         },
//       }).then((res) => {
//         console.log(res.headers);
//         //localStorage.setItem("Set-Cookie", res.data.token);
//         alert("로그인 되었습니다.");
//         props.history.push("/");
//       });
//     },
//     fail: (error) => {
//       alert(JSON.stringify(error));
//     },
//   });
// });
