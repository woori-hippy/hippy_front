import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import Mypage from "../components/Mypage";
import { getProducts } from "../modules/products";
import { getNFTProfile } from "../modules/user";

const MypageContainer = (props) => {
  const history = useHistory();
  const user = useSelector((state) => state.user.user);
  const { data, loading, error } = useSelector(
    (state) => state.user.nftProfile
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNFTProfile());
  }, [dispatch]);

  useEffect(() => {
    if (!user.data) history.push("/");
  }, [history, user]);

  if (loading && !data) return <div>로딩중...</div>;
  if (error) return <div>에러 발생!</div>;
  if (!data) return null;

  return <Mypage nftProfile={data} user={user} />;
};

export default MypageContainer;
