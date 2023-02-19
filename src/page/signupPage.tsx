import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Buffer } from "buffer";
import authStore from "../store/authStore";
import useLocalStorage from "../hooks/useLocalStorage";
import { BearLayout } from "../components/layouts/bearLayout";
import { Input, Title, WhiteBox } from "../components/commonStyles/happinessComponents";
import { OnChange } from "../types/commonTypes.";
import { HamoneyButton } from "../components/commonStyles/HamoneyButton";

export const SignupPage = () => {
  const [searchParam, _] = useSearchParams();
  const email = Buffer.from(searchParam.get("email") || "", "base64").toString();
  const provider = Buffer.from(searchParam.get("provider") || "", "base64").toString();
  const [spaceCode, setSpaceCode] = useState<string>("");
  const [nickname, setNickname] = useState<string>("");
  const [accessToken, saveAccessToken] = useLocalStorage("accessToken", "");
  const [refreshToken, saveRefreshToken] = useLocalStorage("refreshToken", "");
  const navigate = useNavigate();

  return (
    <BearLayout>
      <Container>
        <SignupTitle />

        <FormBox>
          <SubTitleBox>
            <SubTitle>개인정보 입력</SubTitle>
            <Notice>*는 필수영역입니다</Notice>
          </SubTitleBox>
          <SignupInput
            placeholder="이메일"
            type="text"
            value={email}
            disabled={true}
          />
          <SignupInput
            placeholder="닉네임"
            type="text"
            value={nickname}
            onChange={(event: OnChange) => {
              // @ts-ignore
              setNickname(event.target.value);
            }}
          />
          <SignupInput
            placeholder="함께할 하모니스페이스 코드"
            type="number"
            value={spaceCode}
            onChange={(event: OnChange) => {
              setSpaceCode(event.target.value);
            }}
            disabled={false}
          />
        </FormBox>

        <span>함께 사용하려면 하모니 스페이스 초대 코드를 입력해주세요</span>
        <span>경로</span>

        <SignupButton
          title="하모니 시직하기"
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
        />
      </Container>
    </BearLayout>
  );
};

const Container = styled(WhiteBox)`
  align-items: center;
  width: 610px;
  height: 560px;
  padding-top: 60px;
  padding-bottom: 70px;
`;

const SignupTitle = () => <Title>하모니 회원가입</Title>;

const SignupInput = styled(Input)`
  width: 100%;
`;

const SignupButton = styled(HamoneyButton)`
  min-width: 380px;
  min-height: 50px;
  margin-top: 37px;
`;

const Notice = styled.span`
  font-size: 10px;
  line-height: 12px;
  color: #f12f2f;
`;

const SubTitle = styled.div`
  font-size: 17px;
  line-height: 14px;
  font-weight: 700;
`;

const SubTitleBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  min-width: 380px;
  margin-bottom: 4px;
`;

const FormBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 380px;
  min-width: 380px;
  margin-top: 60px;
`;
