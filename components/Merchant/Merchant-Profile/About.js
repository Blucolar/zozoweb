import React from "react";
import { EditIcon } from "../../../public/svg/icons";
import styles from "../../../styles/merchant-profile.module.scss";
import Button from "../../ui/Button";

function About({ canEdit, isEdit }) {
	return (
		<div className={`${styles.profile_form} w-11/12 mx-auto`}>
			<div className="flex items-center justify-between w-1/5">
				<h4> Contact Information</h4>

				<span
					className="flex items-center mt-8 cursor-pointer"
					onClick={canEdit}
				>
					<p className="mr-3">Edit</p>
					<EditIcon />
				</span>
			</div>

			<div className="flex items-center">
				<div className={styles.labels}>
					<p>Name:</p>
					<p>Phone number:</p>
					<p>Email: </p>
					<p>Defaut address:</p>
					<h4>Basic Information</h4>
					<p>Birthday:</p>
					<p>Gender:</p>
				</div>

				<div className={styles.details}>
					<input
						defaultValue="Akinpelumi Lade"
						className={`${!isEdit ? "border-b-2 border-black " : ""}`}
						disabled={isEdit}
					/>

					<input
						defaultValue="0903747665155"
						className={`${!isEdit ? "border-b-2 border-black " : ""}`}
						disabled={isEdit}
					/>
					<input
						defaultValue="AkinpelumiLade23@gmail.com"
						className={`${!isEdit ? "border-b-2 border-black " : ""}`}
						disabled={isEdit}
					/>
					<input
						defaultValue="5, trademark, mushin street lagos"
						className={`${!isEdit ? "border-b-2 border-black " : ""} mb-20`}
						disabled={isEdit}
					/>

					<div className="mt-20"> </div>
					<input
						defaultValue="May 15, 1995"
						className={`${!isEdit ? "border-b-2 border-black " : ""}`}
						disabled={isEdit}
					/>

					<input
						defaultValue="Male"
						className={`${!isEdit ? "border-b-2 border-black " : ""}`}
						disabled={isEdit}
					/>
				</div>

				
			</div>
			{!isEdit && (
				<div className="mt-20">
					<p>Hello world</p>
					<Button
						name="Cancel"
						bgColor="#7D7D7D"
						isBoxShadow={true}
						paddingX="50px"
						paddingY="8px"
						border="none"
					/>

					<span className="ml-5">
						<Button
							name="Save"
							isBoxShadow={true}
							paddingX="60px"
							paddingY="8px"
							border="none"
						/>
					</span>
				</div>
			)}
		</div>
	);
}

export default About;
