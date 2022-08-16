import { useDispatch, useSelector } from "react-redux";
import { logOutCustomer } from "../../store/slices/authSlice";
import logo from "../../public/images/logo-colored.png";
import searchIcon from "../../assets/search.svg";
import cartImg from "../../assets/cart.svg";
import wishlist from "../../assets/wishlist.svg";
import profile from "../../assets/profile.svg";
import Link from "next/link";
import breadcrumb from "../../assets/breadcrumb.svg";
import Image from "next/image";
import Button from "../ui/Button";
import styles from "../../styles/Nav.module.scss";

function Nav() {
	const dispatch = useDispatch();
	const { user } = useSelector((state) => state.auth.customer);
	const { cart } = useSelector((state) => state.cart);
	return (
		<>
			<header className={`${styles.header}`}>
				<div className={styles.content}>
					<div>
						<Link href="/">
							<p>
								<Image src={logo} alt="Zozo Logo" />
							</p>
						</Link>
					</div>
					<div className=" flex justify-around">
						<div
							className={`${styles.search} flex  items-center mr-4 align-center`}
						>
							<div>
								<input placeholder="Search" type="text" />
							</div>
							<span>
								{" "}
								<Image src={searchIcon} alt="Search" width={20} />
							</span>
						</div>
						<Link href="/wishlist">
							<p className="px-5 pt-4 ">
								<Image src={wishlist} alt="Wishlist" width={20} />
								{cart.length > 0 && (
									<span
										className="bg-red-600 px-3 text-white"
										style={{ borderRadius: "50%" }}
									>
										{cart.length}
									</span>
								)}
							</p>
						</Link>
						<div className="px-5 flex items-center cursor-pointer">
							<Link href="/cart">
								<svg
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M20.01 19.26C19.82 19.26 19.63 19.19 19.48 19.04L14.53 14.09C14.24 13.8 14.24 13.32 14.53 13.03C14.82 12.74 15.3 12.74 15.59 13.03L20.54 17.98C20.83 18.27 20.83 18.75 20.54 19.04C20.39 19.19 20.2 19.26 20.01 19.26Z"
										fill="#292D32"
									/>
									<path
										d="M10.1095 18.4297C9.37946 18.4297 8.67946 18.1397 8.16946 17.6197L3.92945 13.3797C2.85945 12.3097 2.85945 10.5597 3.92945 9.48966L10.9995 2.41969C12.0695 1.34969 13.8195 1.34969 14.8895 2.41969L19.1295 6.65968C19.6495 7.17968 19.9395 7.86968 19.9395 8.59968C19.9395 9.32968 19.6495 10.0297 19.1295 10.5397L12.0595 17.6097C11.5395 18.1497 10.8495 18.4297 10.1095 18.4297ZM12.9395 3.11967C12.6195 3.11967 12.2995 3.23966 12.0595 3.48966L4.98947 10.5597C4.49947 11.0497 4.49947 11.8397 4.98947 12.3297L9.22946 16.5697C9.69946 17.0397 10.5195 17.0397 10.9995 16.5697L18.0695 9.49967C18.3095 9.25967 18.4395 8.94967 18.4395 8.61967C18.4395 8.28967 18.3095 7.96966 18.0695 7.73966L13.8295 3.49967C13.5795 3.23967 13.2595 3.11967 12.9395 3.11967Z"
										fill="#292D32"
									/>
									<path
										d="M8 21.75H2C1.59 21.75 1.25 21.41 1.25 21C1.25 20.59 1.59 20.25 2 20.25H8C8.41 20.25 8.75 20.59 8.75 21C8.75 21.41 8.41 21.75 8 21.75Z"
										fill="#292D32"
									/>
									<path
										d="M13.63 15.7394C13.44 15.7394 13.25 15.6693 13.1 15.5193L6.03 8.44937C5.74 8.15937 5.74 7.67937 6.03 7.38938C6.32 7.09938 6.8 7.09938 7.09 7.38938L14.16 14.4594C14.45 14.7494 14.45 15.2293 14.16 15.5193C14.02 15.6693 13.82 15.7394 13.63 15.7394Z"
										fill="#292D32"
									/>
								</svg>
							</Link>
						</div>

						<Link href="/profile">
							<p className="px-5 pt-4 ">
								<Image src={profile} alt="Profile" width={20} />
							</p>
						</Link>

						{!user && (
							<>
								<Link href="/login">
									<p className=" mr-9 px-8 pt-3 font-medium text-2xl">Log in</p>
								</Link>

								<Link href="/signup">
									<p>
										<Button
											name="SIGN UP"
											paddingY="7px"
											paddingX="30px"
											fontSize="14px"
										/>
									</p>
								</Link>
							</>
						)}

						{user && (
							<button onClick={() => dispatch(logOutCustomer())}>Logout</button>
						)}
					</div>
				</div>
			</header>

			<div className={styles.nav}>
				<div className={styles.content}>
					<ul className=" flex py-5 ml-5 align-center">
						<Link href="/">
							<li className="pt-2">
								<Image src={breadcrumb} alt="Menu" />
							</li>
						</Link>

						<Link href="/how-to-bid">
							<li>
								<p> How to Bid</p>
							</li>
						</Link>

						<Link href="/">
							<li>
								<p> Start Bidding</p>
							</li>
						</Link>

						<Link href="/about">
							<li>
								<p> About</p>
							</li>
						</Link>

						<Link href="/contact">
							<li>
								<p> Contact</p>
							</li>
						</Link>

						<Link href="/">
							<li>
								<p> Help</p>
							</li>
						</Link>
					</ul>
				</div>
			</div>
		</>
	);
}

export default Nav;
