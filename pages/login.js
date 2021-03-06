import { useState } from "react";
import { useRouter } from 'next/router'
import { EyeOn, EyeOff, GoogleIcon } from "../public/svg/icons";
import { LoginBanner } from "../public/svg/images";
import Button from "../components/ui/Button";
import Link from "next/link";
import styles from "../styles/login.module.scss";

export default function Index() {
  const router = useRouter()

  const [inputType, setInputType] = useState("password");

  function loginHandler(e) {
    e.preventDefault();
    const token = "qwertyuiop"
    localStorage.setItem("token", token)
  
    router.push('/cart')

  }

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div>
          <LoginBanner />
        </div>
        <form onSubmit={loginHandler}>
          <h1>Welcome Back</h1>
          <Link href="/">
            <a className={styles["google-auth"]}>
              <GoogleIcon />
              Continue with Google
            </a>
          </Link>
          <span>OR</span>
          <div className={styles["form-group"]}>
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className={styles["form-group"]}>
            <label htmlFor="password">Password</label>
            <input type={inputType} id="password" name="password" />
            {inputType === "text" ? (
              <EyeOff onClick={() => setInputType("password")} />
            ) : (
              <EyeOn onClick={() => setInputType("text")} />
            )}
          </div>
          <div className="df aic asst fw">
            <div className="df aic">
              <input type="checkbox" id="checkbox" name="checkbox" />
              <label htmlFor="checkbox">Remember me</label>
            </div>
            <Link href="/forgot-password">
              <a className={styles["forgot-password"]}>Forgot password?</a>
            </Link>
          </div>
          <Button
            name="Log in"
            width="100%"
            paddingY="10px"
            isBoxShadow={true}
          />

          <p>
            Don&apos;t have an account?
            <Link href="/signup"> Sign up for free!</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
