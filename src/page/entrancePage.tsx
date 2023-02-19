import * as React from "react";
import styled from "styled-components";
import { SocialLoginButton, SocialProvider } from "../components/socialLoginButton";
import { BearLayout } from "../components/layouts/bearLayout";

const EntrancePage = () => {
  return (
    <>
      <BearLayout>
        <LayoutContainer>
          <LoginBox>
            <LoginTitle />
            <SocialButtonContainer>
              <SocialLoginButton provider={SocialProvider.KAKAO} />
              <SocialLoginButton provider={SocialProvider.NAVER} />
              <SocialLoginButton provider={SocialProvider.GOOGLE} />
            </SocialButtonContainer>
            <SkipTextContainer>
              <SkipText style={{ color: "#BCBCBC" }}>일단 둘러볼래요</SkipText>
              <SkipText style={{ color: "#4F4F4F" }}>나중에 만들기</SkipText>
            </SkipTextContainer>
          </LoginBox>
        </LayoutContainer>
      </BearLayout>
    </>
  );
};

const LoginTitle = () => {
  return <Title>하모니 로그인</Title>;
};

const LayoutContainer = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: #f7f5ee;
`;

const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 610px;
  height: 410px;
  text-align: center;
  border: 1px solid #d8d8d8;
  background-color: white;
`;

const SocialButtonContainer = styled.div`
  margin: 30px 0;
`;

const SkipTextContainer = styled.div``;

const SkipText = styled.span`
  font-size: 14px;
  padding: 0 3px;
  cursor: pointer;
`;

const Title = styled.div`
  font-size: 24px;
  line-height: 29px;
  font-weight: 700;
`;
export default EntrancePage;
