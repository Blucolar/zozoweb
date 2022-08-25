import React, { useEffect, useState } from "react";
import AdminLayout from "../../components/Admin/AdminLayout";
import Table from "../../components/Table/Table";
import Modal from "../../components/modal/modal";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { adminSingleEvent, getAllEventsList } from "../../services/admin";
import {
	getAllEvents,
	getSingleEvent,
} from "../../store/slices/adminSlice/adminEventSlice";
import Pagination from "../../components/Pagination";
import { formatNumber, paginate } from "../../utils";
import Loader from "../../components/loader";

function Bids() {
	const [modalDisplay, setModalDisplay] = useState(false);

	const dispatch = useDispatch();
	const { allEvent, isLoading } = useSelector(
		(state) => state.adminEvent.allEvents
	);

	const { singleEventLoading, event } = useSelector(
		(state) => state.adminEvent.singleEvent
	);
	const [currentPage, setCurrentPage] = useState(1);
	const pageSize = 10;
	const handlePageChange = (page) => {
		setCurrentPage(page);
	};
	const viewDetails = (id) => {
		dispatch(getSingleEvent(id));
		setModalDisplay((modalDisplay) => !modalDisplay);
	};

	useEffect(() => {
		dispatch(getAllEvents());
	}, [dispatch]);

	const thead = [
		"No",
		"Product",
		"Gate fee",
		"Min Bid",
		"Start time",
		"End Time",
		"Approved",
		"Final Price",
		"Winners",
	];

	const paginatedData = paginate(allEvent, currentPage, pageSize);

	return (
		<AdminLayout>
			<div className="pt-10 pb-20 mt-1" style={{ backgroundColor: "#E5E5E5" }}>
				<h3 className="py-20 text-5xl font-semibold pl-20 mt-1 text-semibold text-black">
					Bids
				</h3>

				{!allEvent ? (
					<div className="h-screen" style={{ marginTop: "-160px" }}>
						<Loader />
					</div>
				) : (
					<>
						<Table
							name="adminBids"
							thead={thead}
							data={paginatedData}
							isSearch={true}
							isFilter={true}
							isExport={true}
							viewDetails={viewDetails}
						/>

						<Pagination
							items={allEvent.length}
							currentPage={currentPage}
							onPageChange={handlePageChange}
							pageSize={pageSize}
						/>
					</>
				)}
			</div>

			<Modal
				title="Bid Information"
				display={modalDisplay}
				close={viewDetails}
				height="500px"
			>
				<div className={` overflow-y-auto`}>
					{!event ? (
						<div className="" style={{ marginTop: "25%" }}>
							<Loader />
						</div>
					) : (
						<>
							<div className=" w-5/12  mx-auto items-center">
								<img
									src={event.product.images.main}
									className="rounded-lg h-4/12 "
								/>
							</div>
							<div
								style={{ backgroundColor: "#F3F3F3" }}
								className=" rounded-3xl w-11/12 mx-auto my-10 text-black"
							>
								<div className="w-full border-b border-gray-400 ">
									<h3 className="pt-10 pl-10 pb-7 text-3xl text-black">
										Basic Information
									</h3>
								</div>
								<div className="px-20 py-10 flex">
									<div className="font-semibold text-2xl">
										<p className=" my-10">Product name: </p>
										<p className=" my-10">Minimum Bid: </p>
										<p className=" my-10">Merchant name: </p>
										<p className=" mb-10">Phone number :</p>
										<p className="mb-10">Email :</p>
										{event.winner && (
											<>
												<p className=" my-10">Winner: </p>
												<p className=" my-10">Winner's Phone number: </p>
												<p className=" my-10">Final Bid: </p>
												<p className=" my-10">Payment made: </p>
											</>
										)}
									</div>
									<div className="ml-20  text-2xl">
										<p className=" my-10 pt-1">{event.product.name}</p>
										<p className=" my-10 pt-1">
											{formatNumber(event.minimum_amount)}
										</p>
										<p className=" my-10 pt-1">Akinpelumi Lade </p>
										<p className="text-2xl mb-10">0903747665155 </p>
										<p className="text-2xl mb-10">taotao@gmail.com </p>
										{event.winner && (
											<>
												<p className="text-2xl mb-10">
													{`${event.winner.customer.account.last_name} ${event.winner.customer.account.first_name} `}{" "}
												</p>
												<p className="text-2xl mb-10">
													{event.winner.customer.account.phone_number}
												</p>
												<p className="text-2xl mb-10">
													{formatNumber(event.winner.amount)}{" "}
												</p>

												<p className="text-2xl mb-10">
													{event.winner.payment_made ? "Yes" : "No"}
												</p>
											</>
										)}
									</div>
								</div>
							</div>
						</>
					)}
				</div>
			</Modal>
		</AdminLayout>
	);
}

export default Bids;
