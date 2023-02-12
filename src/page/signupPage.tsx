import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Button, TextField } from "@mui/material";
import { Buffer } from "buffer";
import authStore from "../store/authStore";
import useLocalStorage from "../hooks/useLocalStorage";

export const SignupPage = () => {
  const [searchParam, _] = useSearchParams();
  const email = Buffer.from(
    searchParam.get("email") || "",
    "base64"
  ).toString();
  const provider = Buffer.from(
    searchParam.get("provider") || "",
    "base64"
  ).toString();
  const [nickname, setNickname] = useState<string>("");
  const [accessToken, saveAccessToken] = useLocalStorage("accessToken", "");
  const [refreshToken, saveRefreshToken] = useLocalStorage("refreshToken", "");
  const navigate = useNavigate();

  return (
    <Container>
      <div>{email}</div>
      <div>{provider}</div>
      <div>{navigator.language}</div>
      <div>
        <TextField label="이메일" type="text" value={email} disabled={true} />
        <TextField
          label="닉네임"
          type="text"
          value={nickname}
          onChange={(
            event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
          ) => {
            // @ts-ignore
            setNickname(event.target.value);
          }}
        />
      </div>
      <Button
        onClick={async () => {
          const { accessToken, refreshToken } = await authStore.signup({
            email: email,
            nickname: nickname,
            lang: "ko",
            socialProvider: provider,
          });
          // @ts-ignore
          saveAccessToken(accessToken);
          // @ts-ignore
          saveRefreshToken(refreshToken);
          navigate("/home");
        }}
      >
        가입
      </Button>
    </Container>
  );
};

const Container = styled.div``;
