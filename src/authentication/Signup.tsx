// import { useState } from "react";
// import { getAuth, createUserWithEmailAndPassword } from "../firebase/Firebase";
// // import "../styles/Home.module.css"
// import styles from "../styles/Home.module.css";
// import { auth } from "../firebase/Firebase";
// import {useRouter} from "next/router";
// import { toast } from "react-toastify";

// const Signup = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [loader, setLoader] = useState(false);
//   const router=useRouter()

//   const onSubmitHandler = async () => {
//     try {
//       setLoader(true);
//       const auth = getAuth();
//       await createUserWithEmailAndPassword(auth, email, password);

//       toast.success("Successfully signed up!");
//       router.push("/Login");
//     } catch (e) {
//       toast.error(e.message);
//     } finally {
//       setLoader(false);
//     }
//   };

//   return (
//     <div className={styles.container}>
//       <div className={styles.card}>
//         <h2>Sign Up</h2>
//         <input
//           type="text"
//           placeholder="Name"
//           onChange={(e) => setName(e.target.value)}
//         />
//         <input
//           type="text"
//           placeholder="Email"
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         {loader ? (
//           <button disabled>Loading...</button>
//         ) : (
//           <button onClick={onSubmitHandler}>Sign Up</button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Signup;
