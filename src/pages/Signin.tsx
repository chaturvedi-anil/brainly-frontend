import { useRef } from 'react';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';

import useHttp from '../services/useHttp';

const Signin = () => {

    const { isLoading, isError, sendHttpRequest } = useHttp();
    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    
    
    const handleSubmit = async () => {
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;

        if(!username || !password){
             console.log("All field should be present");
        } else {
            const responseData = await sendHttpRequest({
                method: "post",
                url: "/signin",
                body: { username, password }
            });
            
            if (isError) {
                console.log("Error : ", isError);
            } else {
                console.log("responseData ", responseData);
            }
        }
 
        if (usernameRef.current) usernameRef.current.value = "";
        if (passwordRef.current) passwordRef.current.value = "";
        
     }
    return (
        <div className='h-screen w-screen bg-white flex items-center justify-center'>
            <div className='flex flex-col min-w-96 justify-center border-2 p-8 rounded-xl'>

                <div className='flex flex-col items-center mb-10'>
                    <h2 className='text-4xl font-bold text-purple-600'>
                        Login
                    </h2>
                    <span className='text-md text-gray-500'>
                        Welcome back!
                    </span>
                </div>

                <div className='flex flex-col items-center'>
                    <Input 
                        type='text'
                        placeholder='Enter your username...'
                        size='lg'
                        ref={usernameRef}
                    />
                    <Input 
                        type='password'
                        placeholder='Enter your password...'
                        size='lg'
                        ref={passwordRef}
                    />
                </div>

                <div className="mt-4 flex justify-center">
                    <Button 
                        variant="primary"
                        onClickHandler={handleSubmit}
                        text="Login"
                        size="lg"
                        extraClass="w-full flex justify-center text-xl"
                        loading={isLoading}
                        disabled={isLoading}
                    />
                </div>
            </div>
        </div>
    )
}

export default Signin