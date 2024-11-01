"use client";
import Button from "@/components/atoms/Button";
import { CustomAccordian } from "@/components/atoms/CustomAccordian";
import CustomInput from "@/components/atoms/CustomInput";
import CustomSelectController from "@/components/atoms/CustomSelectController";
import { TrashOutlinedIcon } from "@/components/atoms/theme-icons";
import { DUMMY_OPTIONS } from "@/constants";
import { VALIDATION } from "@/constants/validation";
import React from "react";
import { useFieldArray, useForm } from "react-hook-form";

const PersonalInformationForm = () => {
	const {
		register,
		control,
		handleSubmit,
		reset,
		getValues,
		setValue,
		setError,
		watch,
		formState: { errors },
	} = useForm({
		mode: "all",
		defaultValues: {
			phones: [{ type: "", number: "" }],
			emails: [{ type: "", email: "" }],
		},
	});
	const {
		fields: phoneFields,
		append: appendPhone,
		remove: removePhone,
	} = useFieldArray({
		control,
		name: "phones",
	});
	const {
		fields: emailFields,
		append: appendEmail,
		remove: removeEmail,
	} = useFieldArray({
		control,
		name: "emails",
	});
	const handleFormSubmit = (data) => {
		console.log("Data on Submit", data);
	};
	return (
		<form
			onSubmit={handleSubmit(handleFormSubmit)}
			className="w-full max-w-[816px] flex flex-col items-start md:gap-2 p-4 pt-0"
		>
			<CustomAccordian title="Personal Info" index="1">
				<div className="w-full grid grid-cols-1 lg:grid-cols-2 h-auto gap-4">
					<CustomInput
						label="First Name"
						type="text"
						name="sFirstName"
						register={register}
						inputClass={errors?.sFirstName && "error-input"}
						placeholder="Enter Name"
						validation={VALIDATION.required}
						required
						error={errors?.sFirstName}
					/>
					<CustomInput
						label="Last Name"
						type="text"
						name="sLastName"
						register={register}
						inputClass={errors?.sLastName && "error-input"}
						validation={VALIDATION.required}
						placeholder="Enter Name"
						required
						error={errors?.sLastName}
					/>
					<CustomInput
						label="Company"
						type="text"
						name="sCompany"
						register={register}
						placeholder="Enter Company"
						inputClass={errors?.sCompany && "error-input"}
						validation={VALIDATION.required}
						required
						error={errors?.sCompany}
					/>
					<CustomInput
						label="Job Title"
						type="text"
						name="sJobTitle"
						register={register}
						inputClass={errors?.sJobTitle && "error-input"}
						placeholder="Enter Job Title"
						validation={VALIDATION.required}
						required
						error={errors?.sJobTitle}
					/>
					<div className="lg:col-span-2">
						<CustomSelectController
							name="sReasonYouJoined"
							control={control}
							closeMenuOnSelect
							validation={VALIDATION.required}
							error={errors?.sReasonYouJoined}
							label="What is the main reason you joined Rentesy?"
							options={DUMMY_OPTIONS}
							inputClass={errors?.sReasonYouJoined && "error-input"}
							required
						/>
					</div>
					<div className="lg:col-span-2">
						<CustomSelectController
							name="sAccountingExperience"
							control={control}
							closeMenuOnSelect
							validation={VALIDATION.required}
							error={errors?.sAccountingExperience}
							label="Rate your level of accounting experience from 1-10"
							options={DUMMY_OPTIONS}
							inputClass={errors?.sAccountingExperience && "error-input"}
							required
						/>
					</div>
				</div>
			</CustomAccordian>

			<CustomAccordian title="Contact Info" index="2">
				<div className="flex flex-col items-start gap-4 w-full">
					<div className="flex flex-col items-start gap-4 w-full">
						{phoneFields.map((item, index) => {
							return (
								<div
									key={index}
									className="p-6 rounded-md bg-theme-gray-100 w-full flex flex-col gap-3"
								>
									<div className="w-full flex items-center gap-4 flex-wrap justify-between">
										<p className="paragraph-1-bold text-theme-gray-900">
											Phone
										</p>
										{phoneFields.length > 1 && (
											<button onClick={() => removePhone(index)}>
												<TrashOutlinedIcon className="size-5 text-gray-800 hover:opacity-75 transition-all" />
											</button>
										)}
									</div>
									<div className="w-full grid grid-cols-1 lg:grid-cols-2 h-auto gap-4">
										<CustomSelectController
											name={`phones[${index}].type`}
											control={control}
											closeMenuOnSelect
											validation={VALIDATION.required}
											error={errors?.phones?.[index]?.type}
											label="Type"
											options={DUMMY_OPTIONS}
											tooltip
											inputClass={
												errors?.phones?.[index]?.type && "error-input"
											}
											required
										/>
										<CustomInput
											label="Number"
											type="text"
											name={`phones[${index}].number`}
											register={register}
											inputClass={
												errors?.phones?.[index]?.number && "error-input"
											}
											placeholder="Enter Number"
											validation={VALIDATION.required}
											required
											error={errors?.phones?.[index]?.number}
										/>
									</div>
								</div>
							);
						})}
						<button
							type="button"
							onClick={() => appendPhone({ type: "", number: "" })}
							className="paragraph-2-medium text-theme-primary-700 hover:text-opacity-75 transition-all"
						>
							+ Add Phone Number
						</button>
					</div>
					<div className="flex flex-col items-start gap-4 w-full">
						{emailFields.map((item, index) => {
							return (
								<div
									key={index}
									className="p-6 rounded-md bg-theme-gray-100 w-full flex flex-col gap-3"
								>
									<div className="w-full flex items-center gap-4 flex-wrap justify-between">
										<p className="paragraph-1-bold text-theme-gray-900">
											Email
										</p>
										{emailFields.length > 1 && (
											<button onClick={() => removeEmail(index)}>
												<TrashOutlinedIcon className="size-5 text-gray-800 hover:opacity-75 transition-all" />
											</button>
										)}
									</div>
									<div className="w-full grid grid-cols-1 lg:grid-cols-2 h-auto gap-4">
										<CustomSelectController
											name={`emails[${index}].type`}
											control={control}
											closeMenuOnSelect
											validation={VALIDATION.required}
											error={errors?.emails?.[index]?.type}
											label="Type"
											options={DUMMY_OPTIONS}
											tooltip
											inputClass={
												errors?.emails?.[index]?.type && "error-input"
											}
											required
										/>
										<CustomInput
											label="Email"
											type="email"
											name={`emails[${index}].email`}
											register={register}
											inputClass={
												errors?.emails?.[index]?.email && "error-input"
											}
											placeholder="Enter Email"
											validation={VALIDATION.email}
											required
											error={errors?.emails?.[index]?.email}
										/>
									</div>
								</div>
							);
						})}
						<button
							type="button"
							onClick={() => appendEmail({ type: "", email: "" })}
							className="paragraph-2-medium text-theme-primary-700 hover:text-opacity-75 transition-all"
						>
							+ Add Email
						</button>
					</div>
				</div>
			</CustomAccordian>
			<CustomAccordian title="Address" index="3">
				<div className="flex flex-col items-start gap-4 w-full">
					<div className="w-full grid grid-cols-1 lg:grid-cols-2 h-auto gap-4">
						<CustomInput
							label="Street 1"
							type="text"
							name="sStreetAddres1"
							register={register}
							inputClass={errors?.sStreetAddres1 && "error-input"}
							placeholder="Enter Street 1"
							validation={VALIDATION.required}
							required
							error={errors?.sStreetAddres1}
						/>
						<CustomInput
							label="Street 2"
							type="text"
							name="sStreetAddres2"
							register={register}
							inputClass={errors?.sStreetAddres2 && "error-input"}
							placeholder="Enter Street 2"
							validation={VALIDATION.required}
							required
							error={errors?.sStreetAddres2}
						/>
						<CustomInput
							label="City"
							type="text"
							name="sCity"
							register={register}
							inputClass={errors?.sCity && "error-input"}
							placeholder="Enter City"
							validation={VALIDATION.required}
							required
							error={errors?.sCity}
						/>
						<CustomInput
							label="State"
							type="text"
							name="sState"
							register={register}
							inputClass={errors?.sState && "error-input"}
							placeholder="Enter State"
							validation={VALIDATION.required}
							required
							error={errors?.sState}
						/>
						<CustomInput
							label="Country"
							type="text"
							name="sCountry"
							register={register}
							inputClass={errors?.sCountry && "error-input"}
							placeholder="Enter Country"
							validation={VALIDATION.required}
							required
							error={errors?.sCountry}
						/>
						<CustomInput
							label="Zip Code"
							type="number"
							name="nZipCode"
							register={register}
							inputClass={errors?.nZipCode && "error-input"}
							placeholder="Enter Code"
							validation={VALIDATION.required}
							required
							error={errors?.nZipCode}
						/>
					</div>
				</div>
			</CustomAccordian>
			<CustomAccordian title="Time Zone" index="5">
				<div className="flex flex-col items-start gap-4 w-full">
					<div className="w-full">
						<CustomSelectController
							name="sTimeZone"
							control={control}
							closeMenuOnSelect
							validation={VALIDATION.required}
							error={errors?.sTimeZone}
							label="Time Zone"
							options={DUMMY_OPTIONS}
							inputClass={errors?.sTimeZone && "error-input"}
							required
						/>
					</div>
				</div>
			</CustomAccordian>
			<Button type="submit" className="ml-auto mt-4">
				Save Changes
			</Button>
		</form>
	);
};

export default PersonalInformationForm;
