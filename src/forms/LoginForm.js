import React, {useState} from 'react';
import Input from "../components/Input";
import Button from "../components/Button";
import {login} from "../api/server";
import {Link} from "react-router-dom";

const LoginForm = () => {
    const [state,setState]=useState({
        email:'',
        password:''
    })
    const handleChange=({target:{name,value}})=>{
        setState({...state,[name]:value})
    }
    const handleSubmit=async (e)=>{
        e.preventDefault();
        let response=await login(state)
    }
    return (
        <form className={"flex flex-col space-y-4"} onSubmit={handleSubmit}>
            <h3 className={"text-2xl font-extrabold"}>Login</h3>
            <Input label={"Email"} name={'email'} type={'email'} onChange={handleChange} required />
            <Input label={"Password"} name={'password'} onChange={handleChange} required />
            <Button type={'submit'}>Login</Button>
            <Link to={'/auth/register'} className={'w-full text-center text-black underline hover:font-bold transition-all ease-in-out'}>Do not have an Account? Register</Link>
        </form>
    );
};

export default LoginForm;