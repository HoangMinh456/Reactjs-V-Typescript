import { useLocalStorage } from '@/hooks/useStorage';
import { signinForm } from '@/interfaces/signin';
import { signupForm } from '@/interfaces/signup';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const Singin = () => {
    const [toggle, setToggle] = useState(false);
    const [, setUser] = useLocalStorage('user', {})

    function toggleAuth() {
        setToggle(!toggle);
    }

    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            email: "",
            password: ""
        }
    });

    const signin = useMutation({
        mutationFn: async (user: signinForm) => {
            const { data } = await axios.post(`http://localhost:8080/api/signin`, user);
            return data
        },
        onSuccess: (data) => {
            toast.success('Đăng nhập thành công');
            setUser(data);
        }
    })

    const onSubmitSignin = (dataSignin: signinForm) => {
        signin.mutate(dataSignin);
    }

    return (
        <section className={"auth"} id="auth">
            {/* Login */}
            <div className="form-auth sign-in">
                <form onSubmit={handleSubmit(onSubmitSignin)}>
                    <h1>Sign In</h1>
                    <div className="social-icons">
                        <a href="#" className="icon"><i className="fa-brands fa-google-plus-g" /></a>
                        <a href="#" className="icon"><i className="fa-brands fa-facebook-f" /></a>
                        <a href="#" className="icon"><i className="fa-brands fa-github" /></a>
                    </div>
                    <span>or use your email password</span>
                    <input type="email" {...register('email')} placeholder="Email" />
                    <input type="password" {...register('password')} placeholder="Password" />
                    <a href="#">Forget Your Password?</a>
                    <button>Sign In</button>
                </form>
            </div>
            <div className="toggle-auth">
                <div className="toggle">
                    <div className="toggle-panel toggle-right">
                        <h1>Hello, Friend!</h1>
                        <p>Register with your personal details to use all of site features</p>
                        <Link to={`/signup`} className='hidden'>Sign Up</Link>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Singin
