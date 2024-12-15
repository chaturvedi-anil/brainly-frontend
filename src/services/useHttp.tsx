import { useState } from 'react';
import axios, { AxiosRequestConfig } from "axios";

const BASE_URL = "http://localhost:3000/api/v1"

interface requestProps {
    method: "get" | "post" | "put" | "delete",
    url: string,
    body?: any,
}

const useHttp = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(null);
    
    const sendHttpRequest = async ({method, url, body} : requestProps) => {
        const headers = {token: localStorage.getItem("token") || ""};

        const reqConfig: AxiosRequestConfig = {
            method, url: `${BASE_URL}${url}`,
            headers, ...(body && {data: body})
        }

        try {
            setIsLoading(true);
            setIsError(null);
            const responseData = await axios(reqConfig);
            if (url === "/signin") {
                localStorage.setItem("token", responseData.data?.token);
            }
            return responseData.data;
        } catch (error: any) {
            
            const errorMessage =
                error.response?.data?.message || error.message || "An unexpected error occurred.";

            setIsError(errorMessage);
            throw new Error(errorMessage);
        } finally {
            setIsLoading(false);
        }
        
    }
    
    return { isLoading, isError, sendHttpRequest}
}

export default useHttp;