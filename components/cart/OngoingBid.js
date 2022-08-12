import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { _getBiddingEventByStatus } from "../../store/slices/eventsSlice";
import styles from "../../styles/cart.module.scss";

const OngoingBid = () => {
	const dispatch = useDispatch();
	const { user } = useSelector((state) => state.auth.customer);
	const { events } = useSelector((state) => state.events.ongoingBids);

	useEffect(() => {
		dispatch(_getBiddingEventByStatus({ status: "ongoing" }));
	}, [dispatch]);

	return (
		<div className={`${styles.ob_container} `}>
			{events && events.length > 0 && (
				<div>
					<table className="w-full border-separate  border-spacing-y-20">
						<thead>
							<tr>
								<th className="">Items</th>
								<th className="">Access amount</th>
								<th className="">Minimum Bid</th>
								<th className="">Timer</th>
							</tr>
						</thead>
						<tbody>
							{events.map((item, index) => {
								return (
									<tr key={index} className="text-2xl">
										<td className="flex items-center">
											<img
												src={item.product.images.main}
												width="100px"
												height="100px"
											/>
											<span className="ml-5">
												{item.product.name.substr(0, 20)}
											</span>
										</td>
										<td>
											#{" "}
											<span>{Number(item.access_amount).toLocaleString()}</span>
										</td>
										<td>
											#{" "}
											<span>
												{Number(item.minimum_amount).toLocaleString()}
											</span>
										</td>
										<td> {item.end_time}</td>
									</tr>
								);
							})}
						</tbody>
					</table>
				</div>
			)}
			{events && events.length < 1 && (
				<p className="justify-center">You currently have no ongoing Bids</p>
			)}
		</div>
	);
};

export default OngoingBid;
