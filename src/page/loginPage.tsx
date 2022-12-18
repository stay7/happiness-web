import * as React from "react";
import {Button} from "@mui/material";
import {useRecoilState} from "recoil";
import {accessTokenState, refreshTokenState} from "../domain/auth/authState";
import authStore from "../domain/auth/authStore";
import useLocalStorage from "../hooks/useLocalStorage";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

const LoginPage = () => {
    const [accessToken, setAccessToken] = useRecoilState<string>(accessTokenState)
    const [refreshToken, setRefreshToken] = useRecoilState<string>(refreshTokenState)
    const [storageAccessToken, saveAccessToken] = useLocalStorage("accessToken", "")
    const [storageRefreshToken, saveRefreshToken] = useLocalStorage("refreshToken", "")
    const navigate = useNavigate()

    useEffect(() => {
        if(storageAccessToken) {
            // @ts-ignore
            setAccessToken(storageAccessToken)
        }

        if(storageRefreshToken) {
            // @ts-ignore
            setRefreshToken(storageRefreshToken)
        }

        if(accessToken && refreshToken) {
            // navigate("/home")
        }
    }, [accessToken, refreshToken])


    return (
        <div>login page
            <div>this is login page</div>
            <div>{accessToken}</div>
            <div>{refreshToken}</div>
            <Button onClick={async () => {
                const {accessToken, refreshToken} = await authStore.signup()
                console.log('accessToken:' + accessToken)
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
    )
};

export default LoginPage;