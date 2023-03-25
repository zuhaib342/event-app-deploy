import { useState } from "react";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "../firebase/Firebase";

// import "../styles/Home.module.css"
import styles from "../styles/Home.module.css";
import { auth } from "../firebase/Firebase";
import Router from "next/router";
import { useRouter } from 'next/router'

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loader, setLoader] = useState(false);
    const router = useRouter();
    const onSubmitHandler = async () => {
        try {
            setLoader(true);

            await signInWithEmailAndPassword(auth, email, password)


            toast.success("Successfully login!");
            router.push("/");
        } catch (e) {
            toast.error(e.message);
            console.log("====================================");
            console.log(e);
            console.log("====================================");
        } finally {
            setLoader(false);
        }
    };
    return (
        <div className={styles.container}>
            <ToastContainer/>
            <div className={styles.card}>
            <h1>
                Login form
            </h1>


            <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter your email" />
            <br />
            <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Enter your password" />
            <br />
            {loader ? <button >Loading...</button> :
                <button onClick={onSubmitHandler} >Login</button>}
            </div>
       

        </div>
    )
};
export default Login 
