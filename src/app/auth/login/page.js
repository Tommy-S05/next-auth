'use client'
import {Button, TextField} from "@mui/material";
import {useRef} from "react";
import {signIn} from "next-auth/react";

export default function LoginPage() {
    const email = useRef('');
    const password = useRef('');
    const onSubmit = async() => {
        const result = await signIn('credentials', {
            email: email.current,
            password: password.current,
            redirect: true,
            callbackUrl: '/'
        })
    };
    return (
        <main className={"flex min-h-screen items-center justify-center bg-gradient-to-br from-cyan-300 to-sky-600"}>
            <div className={'px-7 py-4 shadow bg-white rounded-md flex flex-col gap-2'}>
                <TextField
                    id="outlined-required"
                    label="Email"
                    onChange={(e) => {
                        email.current = e.target.value;
                    }}
                />
                <TextField
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    onChange={(e) => {
                        password.current = e.target.value
                    }}
                />
                <Button onClick={onSubmit} variant={'contained'} className={'bg-blue-500'}>
                    Login
                </Button>
            </div>
        </main>
    )
}