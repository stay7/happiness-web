import styled from "styled-components";
import googleLoginImg from "../static/google.png";
import naverLoginImg from "../static/naver.png";
import kakaoLoginImg from "../static/kakao.png";

export enum SocialProvider {
  KAKAO = "kakao",
  NAVER = "naver",
  GOOGLE = "google",
}

interface ISocialLoginProp {
  provider: SocialProvider;
}

export const SocialLoginButton = ({ provider }: ISocialLoginProp) => {
  const img = imgSrc(provider);

  return (
    <Container>
      <a href={authUrl(provider)}>
        <img
          src={img}
          alt="login button"
        />
      </a>
    </Container>
  );
};

function imgSrc(type: SocialProvider): string {
  switch (type) {
    case SocialProvider.KAKAO:
      return kakaoLoginImg;
    case SocialProvider.NAVER:
      return naverLoginImg;
    case SocialProvider.GOOGLE:
      return googleLoginImg;
  }
}

function authUrl(type: SocialProvider) {
  switch (type) {
    case SocialProvider.GOOGLE:
      return process.env["REACT_APP_GOOGLE_AUTH_URL"];
    case SocialProvider.NAVER:
      return process.env["REACT_APP_NAVER_AUTH_URL"];
    case SocialProvider.KAKAO:
      return process.env["REACT_APP_KAKAO_AUTH_URL"];
  }
}

const Container = styled.div`
  margin: 6px 0;
`;
