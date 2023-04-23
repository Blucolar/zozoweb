import styles from "../../styles/watchlist.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { _getCustomerEvents } from "../../store/slices/eventsSlice";
import { useEffect } from "react";
import { truncateString } from "../../utils";
import useWindowDimension from "../../hooks/useWindowDimension";

export const Events = ({ item }) => {
	let thead = ["Item", "Access amount", "Stake", "Final Price", "Status"];
	const { width } = useWindowDimension();
	return (
		<>
			{width >= 780 && (
				<div
					className={`${styles.bid_history} flex mt-10 mb-9 w-10/12 mx-auto`}
				>
					<div className={`w-2/12`}>
						{" "}
						{new Date(item.bidding_event.end_time).toDateString()}
					</div>
					<div className={`w-10/12`}>
						<div
							className={` ${
								item.paymentApproved || !item.paymentApproved
									? "bg-green-600"
									: "bg-red-600"
							}  text-white text-2xl p-4`}
						>
							{item.paymentApproved || !item.paymentApproved ? "Won" : "LOST"}
						</div>

						<table
							className="w-full"
							id={styles.customers}
							cellSpacing="0"
							cellPadding="0"
						>
							<thead>
								<tr>
									<th>Items</th>
									<th>Access Bid</th>
									<th>Stake</th>
									<th>Final Price</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td className="flex justify-center">
										<img
											src={item.bidding_event.product.images.main}
											className="mr-3"
										/>
										{truncateString(item.bidding_event.product.name, 50)}
									</td>
									<td>
										&#x20A6;{" "}
										{Number(item.bidding_event.access_amount).toLocaleString()}
									</td>
									<td>&#x20A6; {Number(item.stake).toLocaleString()}</td>
									<td>
										{" "}
										&#x20A6;{" "}
										{Number(item.bidding_event.last_amount).toLocaleString()}
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			)}

			{width < 780 && item && (
				<div
					className={` grid grid-cols-2  text-2xl my-8 py-5  px-5  ${styles.mobile_div}`}
				>
					<div
						className="py-9 pl-8  shadow-lg font-bold"
						style={{ background: "#F3F3F3" }}
					>
						<ul>
							{thead.map((item, index) =>
								item !== "No" ? (
									<td key={index} className="block py-4">
										{item}
									</td>
								) : (
									""
								)
							)}
						</ul>
					</div>
					<div className="py-9  pl-5 bg-white  shadow-lg ">
						<ul className="px-2">
							<td className="block py-4">
								{truncateString(item.bidding_event.product.name, 20)}
							</td>
							<td className="block py-4">
								{" "}
								&#x20A6;{" "}
								{Number(item.bidding_event.access_amount).toLocaleString()}
							</td>
							<td className="block py-4">
								{" "}
								&#x20A6; {Number(item.stake).toLocaleString()}
							</td>
							<td>
								{" "}
								&#x20A6;{" "}
								{Number(item.bidding_event.last_amount).toLocaleString()}
							</td>
							<td className="block py-4">
								{item.paymentApproved || !item.paymentApproved ? "Won" : "LOST"}
							</td>
						</ul>
					</div>
				</div>
			)}
		</>
	);
};

const BidHistory = () => {
	const dispatch = useDispatch();
	const { user } = useSelector((state) => state.auth.customer);
	const { events } = useSelector((state) => state.events.customer);

	useEffect(() => {
		if (user) dispatch(_getCustomerEvents(user.customer.id));
	}, [dispatch]);
	return (
		<div className={`${styles.bid_history} pb-60`}>
			{events &&
				events.length > 0 &&
				events.map((item, index) => {
					return <Events key={index} item={item} />;
				})}

			{events && events.length < 1 && (
				<p className="justify-center text-center mt-20 ">
					You haven't participated in any Bidding events
				</p>
			)}
			{!user && (
				<p className="justify-center text-center mt-20 ">
					Please Login to view your History
				</p>
			)}
		</div>
	);
};

export default BidHistory;
