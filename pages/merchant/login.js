import React from "react";
import Image from "next/image";
import logo from "../../assets/logo.svg";
import robot from "../../assets/robot.svg";
import login from "../../assets/login.svg";
import google from "../../assets/google.svg";
import styles from "../../styles/Merchantlogin.module.scss";
import Button from "../../components/ui/Button";
import Link from "next/link";

const MerchantLogin = () => {
  return (
    <div>
      <div className="flex">
        <div className="w-1/2">
          <div className="pt-20">
            <Image src={logo} />
          </div>
          <h2 className="text-center pt-20">Welcome Back</h2>
          <div className="mt-10 text-center">
            <Image src={google} />
          </div>
          <h3 className="text-center">-OR-</h3>
          <form className={`${styles.form}`}>
            <label for="email">Email Address</label>
            <br />
            <input type="text" id="email" name="email" />
            <br />
            <label for="password">Password</label>
            <br />
            <input type="text" id="password" name="password" />
            <br />
           
          </form>
          <div className="flex gap-96">
            <div>
                <input type="checkbox" name="Remember me" id="" />
                <label for="rememberme">Remember me</label>
            
            </div>
            <div>
                <Link href="/merchant/forgot-password">
                    Forgot Password?
                </Link>
            </div>
          </div>
          <div className="mt-60">
            <Button
              name="LOG IN"
              paddingY="7px"
              paddingX="30px"
              fontSize="14px"
              width="600px"
            />
          </div>
          
          <div className="pl-60">
            Don't have an account?
            <Link href="/merchant/signup " className={`${styles.purple}`}>Sign up for free</Link>
          </div>
        </div>
        <div className="w-1/2">
          <Image src={login} />
        </div>
      </div>
    </div>
  );
};

export default MerchantLogin;
