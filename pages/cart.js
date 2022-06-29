import React, {useEffect} from "react";
import CustomerLayout from "../components/CustomerLayout";
import Link from "next/link";
import Button from "../components/ui/Button";
import styles from "./../styles/cart.module.scss";
import Image from "next/image";
import box1 from "./../assets/emptybox.png";
import box2 from "./../assets/cartoon.png";



const Cart = () => {
  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    console.log(loggedInUser)
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    }
  }, []);

  return (
    <CustomerLayout>
      <h1>Your Cart</h1>
      <div className="cart-wrapper flex justify-between gap-10 mt-20">
        <div className={` ${styles.cart} bg-white w-2/3`}>
          <div className="flex gap-16 mt-20">
            <div>
              <Image src={box2} alt="cart" width={200} height={200} />
            </div>
            <div>
              <h1 className="text-black">Your Zozo cart is empty</h1>
              <p className={`${styles.purple_text} mt-3`}>Bid on today's deals</p>
              <div className="flex gap-10 mt-12">
                <div className="">
                  <Link href="/checkout">
                    <a>
                    <Button
                      name="SIGN IN TO YOUR ACCOUNT"
                      paddingY="7px"
                      paddingX="30px"
                      fontSize="14px"
                      width="270px"
                    />
                    </a>
                  </Link>
                </div>
                <div>
                  <Link href="/signup">
                    <a>
                    <Button
                      name="SIGN UP NOW"
                      paddingY="7px"
                      paddingX="30px"
                      fontSize="14px"
                      bgColor="white"
                      color="black"
                    />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
         
        </div>
        <div className={`${styles.white_strip}`}></div>
        <div className="bg-white w-1/3 p-10">
          <h1 className="text-black">Bid Summary</h1>
          <div className="p-20">
          <Image src={box1} width={200} height={200}/>
          </div>
          <p className={`${styles.bid_text}`}>Don't miss out on great deals! Start shopping or log in to view products added.</p>
        </div>
      </div>
    </CustomerLayout>
  );
};

export default Cart;