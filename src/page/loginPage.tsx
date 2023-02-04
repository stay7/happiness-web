import {useNavigate, useSearchParams} from "react-router-dom";
import {useEffect} from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import {Buffer} from 'buffer';

export const LoginPage = () => {
    const [searchParma, setSearchParam] = useSearchParams()
    const accessToken = Buffer.from(searchParma.get('access_token') || "", 'base64').toString()
    const refreshToken = Buffer.from(searchParma.get('refresh_token') || "", 'base64').toString()
    const [storageAccessToken, saveAccessToken] = useLocalStorage("accessToken", "")
    const [storageRefreshToken, saveRefreshToken] = useLocalStorage("refreshToken", "")
    const navigate = useNavigate()


    useEffect(() => {
        // @ts-ignore
        saveAccessToken(accessToken)
        // @ts-ignore
        saveRefreshToken(refreshToken)
        navigate('/home')
    }, [])

    return (
        <div>
            hi
            {accessToken}
            {refreshToken}
        </div>
    )
}