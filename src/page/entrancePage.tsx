import * as React from "react";
import styled from "styled-components";
import { SocialLoginButton, SocialProvider } from "../components/socialLoginButton";
import { BearLayout } from "../components/layouts/bearLayout";
import { Title, WhiteBox } from "../components/commonStyles/happinessComponents";

const EntrancePage = () => {
  return (
    <>
      <BearLayout>
        <WhiteBox style={{ width: "610px", height: "410px" }}>
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
        </WhiteBox>
      </BearLayout>
    </>
  );
};

const LoginTitle = () => {
  return <Title>하모니 로그인</Title>;
};

const SocialButtonContainer = styled.div`
  margin: 30px 0;
`;

const SkipTextContainer = styled.div``;

const SkipText = styled.span`
  font-size: 14px;
  padding: 0 3px;
  cursor: pointer;
`;

export default EntrancePage;
