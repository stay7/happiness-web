// @flow
import * as React from "react";
import {Button} from "@mui/material";
import {useRecoilState} from "recoil";
import {accessTokenState, refreshTokenState} from "../domain/auth/authState";
import authStore from "../domain/auth/authStore";
import useLocalStorage from "../hooks/useLocalStorage";

const LoginPage = () => {
    const [accessToken, setAccessToken] = useRecoilState<string>(accessTokenState)
    const [refreshToken, setRefreshToken] = useRecoilState<string>(refreshTokenState)
    const [, saveAccessToken] = useLocalStorage("accessToken", "")
    const [, saveRefreshToken] = useLocalStorage("refreshToken", "")

    return (
        <div>login page
            <div>{accessToken}</div>
            <div>{refreshToken}</div>
            <Button onClick={async () => {
                const {accessToken, refreshToken} = await authStore.signup()
                // @ts-ignore
                saveAccessToken(accessToken)
                // @ts-ignore
                saveRefreshToken(refreshToken)

                setAccessToken(accessToken)
                setRefreshToken(refreshToken)
            }}>
                signup
            </Button>
        </div>
    )
};

export default LoginPage;