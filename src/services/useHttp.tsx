import { useState } from 'react';
import axios from "axios";

const BASE_URL = "http://localhost:3000/api/v1"

interface requestProps {
    method: "get" | "post" | "put" | "delete",
    url: string,
    body?: any
}

const useHttp = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(null);
    const token = localStorage.getItem('token') || "";
    const sendHttpRequest = async ({method, url, body} : requestProps) => {
    
        setIsLoading(true);
        await axios[method](BASE_URL + url, body,
            {
                headers: {
                  'token': token
                }
            }
        ).then((response) => {
            const data = response.data;

            if (url === "/signin") {
                localStorage.setItem("token", data.token);
            }
            return data;
        }).catch (async (error: any) => {
            console.log("error  : ", error);
            
            const reqError = await error?.response?.data?.message || "Something went wrong!";
            setIsError(reqError);
            return reqError;
        }).finally(() => {
            setIsLoading(false);
        })
    
    }
    
    return { isLoading, isError, sendHttpRequest}
}

export default useHttp;