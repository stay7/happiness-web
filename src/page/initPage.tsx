import * as React from "react";
import { useEffect } from "react";
import { Button } from "@mui/material";
import { useRecoilState } from "recoil";
import { accessTokenState, refreshTokenState } from "../state/authState";
import useLocalStorage from "../hooks/useLocalStorage";
import { useNavigate } from "react-router-dom";
import Layout from "../components/layout";
import kakaoLoginButton from "../static/kakao_login_medium_narrow.png";
import naverLoginButton from "../static/naver_login.png";

const InitPage = () => {
  const [accessToken, setAccessToken] =
    useRecoilState<string>(accessTokenState);
  const [refreshToken, setRefreshToken] =
    useRecoilState<string>(refreshTokenState);
  const [storageAccessToken, saveAccessToken] = useLocalStorage(
    "accessToken",
    ""
  );
  const [storageRefreshToken, saveRefreshToken] = useLocalStorage(
    "refreshToken",
    ""
  );
  const navigate = useNavigate();

  const KAKAO_AUTH_URL = process.env["REACT_APP_KAKAO_AUTH_URL"];
  const NAVER_AUTH_URL = process.env["REACT_APP_NAVER_AUTH_URL"];

  useEffect(() => {
    if (storageAccessToken) {
      // @ts-ignore
      setAccessToken(storageAccessToken);
    }

    if (storageRefreshToken) {
      // @ts-ignore
      setRefreshToken(storageRefreshToken);
    }

    if (accessToken && refreshToken) {
      // navigate("/home")
    }
  }, [accessToken, refreshToken]);

  return (
    <>
      <Layout>
        <div>
          init page
          <div>this is login page</div>
          <div>{accessToken}</div>
          <div>{refreshToken}</div>
          <a href={KAKAO_AUTH_URL}>
            <img src={kakaoLoginButton} alt="kakao login button" />
          </a>
          <a href={NAVER_AUTH_URL}>
            <img src={naverLoginButton} alt="naver login button" />
          </a>
          <Button
            onClick={async () => {
              // const {accessToken, refreshToken} = await authStore.signup()
              // @ts-ignore
              saveAccessToken(accessToken);
              // @ts-ignore
              saveRefreshToken(refreshToken);

              setAccessToken(accessToken);
              setRefreshToken(refreshToken);
              navigate("/home");
            }}
          >
            signup
          </Button>
        </div>
      </Layout>
    </>
  );
};

export default InitPage;
