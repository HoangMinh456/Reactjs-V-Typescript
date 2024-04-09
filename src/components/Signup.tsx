import { signinForm } from '@/interfaces/signin';
import { signupForm } from '@/interfaces/signup';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Signup = () => {
    const [toggle, setToggle] = useState(true);

    function toggleAuth() {
        setToggle(!toggle);
    }

    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
        }
    });

    const signup = useMutation({
        mutationFn: async (user: signupForm) => {
            const { data } = await axios.post(`http://localhost:8080/api/signup`, user);
            return data
        }
    })

    const onSubmitSignup = (dataSignup: signupForm) => {
        signup.mutate(dataSignup)
    }

    return (
        <section className={"auth active"} id="auth">
            {/* Resgier  */}
            <div className="form-auth sign-up" >
                <form onSubmit={handleSubmit(onSubmitSignup)}>
                    <h1>Create Account</h1>
                    <div className="social-icons">
                        <a href="#" className="icon"><i className="fa-brands fa-google-plus-g" /></a>
                        <a href="#" className="icon"><i className="fa-brands fa-facebook-f" /></a>
                        <a href="#" className="icon"><i className="fa-brands fa-github" /></a>
                    </div>
                    <span>or use your email for registeration</span>
                    <input type="text" {...register('name')} placeholder="Name" />
                    <input type="email" {...register('email')} placeholder="Email" />
                    <input type="password" {...register('password')} placeholder="Password" />
                    <input type="password" {...register('confirmPassword')} placeholder="Confirm Password" />
                    <button>Sign Up</button>
                </form>
            </div>
            <div className="toggle-auth">
                <div className="toggle">
                    <div className="toggle-panel toggle-left">
                        <h1>Welcome Back!</h1>
                        <p>Enter your personal details to use all of site features</p>
                        <Link to={`/signin`} className="hidden">Sign In</Link>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Signup
