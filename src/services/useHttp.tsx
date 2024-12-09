import React, { useState } from 'react';
import axios from "axios";

const BASE_URL = "http://localhost:3000/api/v1"

interface requestProps {
    method: "get" | "post" | "put" | "delete",
    url: string,
    body?: any
}
const useHttp = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const sendHttpRequest = async ({method, url, body} : requestProps) => {
        
        setIsLoading(true);
        await axios[method](BASE_URL + url, body).then((response) => {
            const data = response.data;
            return data;
        }).catch ((error: any) => {
            const reqError = error?.response?.data?.message || "Something went wrong!";
            setIsError(reqError);
            return null;
        }).finally(() => {
            setIsLoading(false);
        })
    
    }
    
    return { isLoading, isError, sendHttpRequest}
}

export default useHttp;