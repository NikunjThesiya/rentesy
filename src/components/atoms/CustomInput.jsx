"use client";
import React from "react";

const CustomInput = ({
	label,
	type,
	required,
	placeholder,
	name,
	inputMode,
	register,
	inputClass,
	defaultValue,
	baseClass,
	validation,
	error,
	caption,
	onChange,
	disabled,
	rows,
}) => {
	const setRegister = register && register(name, validation);
	const numberInputClass = type === "number" ? "appearance-none" : "";
	return (
		<div
			className={`w-full h-auto flex flex-col items-start gap-2 ${
				baseClass ? baseClass : ""
			}`}
		>
			{label && (
				<p className="paragraph-2-medium">
					{label} {required && <span className="text-red-500">*</span>}
				</p>
			)}
			<div className="w-full flex flex-col items-start gap-1">
				{type === "textarea" ? (
					<textarea
						disabled={disabled}
						name={name}
						rows={rows || 5}
						placeholder={placeholder}
						defaultValue={defaultValue}
						{...setRegister}
						onChange={(e) => {
							setRegister.onChange(e);
							onChange && onChange(e);
						}}
						className={`bg-theme-gray-50 border border-theme-gray-300 outline-none w-full px-3 py-2.5 md:px-4 md:py-3 focus:ring-0 rounded-lg text-xs md:text-sm disabled:cursor-not-allowed disabled:border-theme-primary disabled:border-opacity-50 disabled:text-theme-primary disabled:text-opacity-50 ${inputClass} ${numberInputClass}`}
					/>
				) : (
					<input
						disabled={disabled}
						name={name}
						type={type}
						inputMode={inputMode}
						placeholder={placeholder}
						defaultValue={defaultValue}
						onWheel={(e) => type === "number" && e.target.blur()}
						{...setRegister}
						onChange={(e) => {
							setRegister.onChange(e);
							onChange && onChange(e);
						}}
						className={`bg-theme-gray-50 border border-theme-gray-300 outline-none w-full px-3 py-2.5 md:px-4 md:py-3 focus:ring-0 rounded-lg text-xs md:text-sm disabled:cursor-not-allowed disabled:border-theme-primary disabled:border-opacity-50 disabled:text-theme-primary disabled:text-opacity-50 ${inputClass}`}
					/>
				)}
				{caption && <p className="text-xs sm:text-sm">{caption}</p>}
			</div>
			{error && error?.message && (
				<span className="text-red-500 text-xs md:text-sm">
					{error?.message}
				</span>
			)}
		</div>
	);
};

export default CustomInput;
