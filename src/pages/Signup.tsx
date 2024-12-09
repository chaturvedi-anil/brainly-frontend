import Input from '../components/ui/Input';
import Button from '../components/ui/Button';

const Signup = () => {
  return (
    <div className='h-screen w-screen bg-white flex items-center justify-center'>
        <div className='flex flex-col justify-center border-2 p-8 rounded-xl'>

            <div className='flex flex-col items-center mb-10'>
                <h2 className='text-4xl font-bold text-purple-600'>
                    Create Your New Account
                </h2>
                <span className='text-md text-gray-500'>
                    Welcome! Please enter your details
                </span>
            </div>

            <div className='flex flex-col items-center'>
                <Input 
                    type='text'
                    placeholder='Enter your username...'
                    size='lg'
                    onChangeHandler={() => console.log("username : ")}
                />
                <Input 
                    type='password'
                    placeholder='Enter your password...'
                    size='lg'
                    onChangeHandler={() => console.log("username : ")}
                />
                <Input 
                    type='password'
                    placeholder='Re-type password...'
                    size='lg'
                    onChangeHandler={() => console.log("username : ")}
                />
            </div>

            <div className="mt-4 flex justify-center">
                <Button 
                    variant="primary"
                    onClickHandler={() => {
                    console.log("submit button");
                    }}
                    text="Signup"
                    size="lg"
                    extraClass="w-full flex justify-center text-xl"
                    loading={false}
                    disabled={false}
                />
            </div>
        </div>
    </div>
  )
}

export default Signup