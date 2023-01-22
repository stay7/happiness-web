import * as React from "react";
import {Button} from "@mui/material";
import {useRecoilState} from "recoil";
import {accessTokenState, refreshTokenState} from "../state/authState";
import authStore from "../store/authStore";
import useLocalStorage from "../hooks/useLocalStorage";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import Layout from "../components/layout";
import kakaoLoginButton from "../static/kakao_login_medium_narrow.png"

const LoginPage = () => {
    const [accessToken, setAccessToken] = useRecoilState<string>(accessTokenState)
    const [refreshToken, setRefreshToken] = useRecoilState<string>(refreshTokenState)
    const [storageAccessToken, saveAccessToken] = useLocalStorage("accessToken", "")
    const [storageRefreshToken, saveRefreshToken] = useLocalStorage("refreshToken", "")
    const navigate = useNavigate()

    const CLIENT_ID = "49337afa0c28846233d9674785019fab"
    const REDIRECT_URI = "http://localhost:8080/oauth/kakao/code"
    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;

    useEffect(() => {
        if (storageAccessToken) {
            // @ts-ignore
            setAccessToken(storageAccessToken)
        }

        if (storageRefreshToken) {
            // @ts-ignore
            setRefreshToken(storageRefreshToken)
        }

        if (accessToken && refreshToken) {
            // navigate("/home")
        }
    }, [accessToken, refreshToken])


    return (
        <>
            <Layout>
                <div>login page
                    <div>this is login page</div>
                    <div>{accessToken}</div>
                    <div>{refreshToken}</div>
                    <a href={KAKAO_AUTH_URL}>
                        <img src={kakaoLoginButton} alt="kakao login button"/>
                    </a>
                    <Button onClick={async () => {
                        const {accessToken, refreshToken} = await authStore.signup()
                        // @ts-ignore
                        saveAccessToken(accessToken)
                        // @ts-ignore
                        saveRefreshToken(refreshToken)

                        setAccessToken(accessToken)
                        setRefreshToken(refreshToken)
                        navigate("/home")
                    }}>
                        signup
                    </Button>
                </div>
            </Layout>
        </>

    )
};

export default LoginPage;