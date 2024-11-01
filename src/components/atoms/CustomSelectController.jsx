"use client";

import React, { useEffect, useState } from "react";
import { Controller } from "react-hook-form";
import CustomSelect from "./CustomSelect";
import Image from "next/image";
import { InfoCircleIcon } from "./theme-icons";

const CustomSelectController = ({
	label,
	required,
	onInputChange,
	formatCreateLabel,
	name,
	control,
	helpTxt,
	validation,
	error,
	closeMenuOnSelect,
	inputClass,
	options,
	isLoading,
	getOptionLabel,
	getOptionValue,
	handleChangeFunc,
	onCreateOption,
	placeholder,
	maxSelect,
	isMulti,
	tooltip,
	isCreatable,
}) => {
	const [isMounted, setIsMounted] = useState(false);
	useEffect(() => setIsMounted(true), []);
	if (isMounted) {
		return (
			<div className="flex w-full flex-col items-start h-full gap-2 z-10">
				{label && (
					<label className="paragraph-2-medium flex items-center gap-1">
						{label} {required && <span className="text-red-500">*</span>}
						{tooltip && (
							<InfoCircleIcon className="text-theme-gray-400 size-4" />
						)}
					</label>
				)}
				<Controller
					name={name}
					control={control}
					rules={validation}
					render={({ field: { onChange, value = [], ref } }) => (
						<CustomSelect
							ref={ref}
							options={options}
							placeholder={placeholder}
							onChange={(e) => {
								onChange(e);
								handleChangeFunc && handleChangeFunc(e);
							}}
							onInputChange={onInputChange}
							isLoading={isLoading}
							closeMenuOnSelect={closeMenuOnSelect}
							value={value}
							inputClass={inputClass}
							error={error}
							getOptionLabel={getOptionLabel}
							getOptionValue={getOptionValue}
							maxSelect={maxSelect}
							isMulti={isMulti}
							isCreatable={isCreatable}
							onCreateOption={onCreateOption}
							formatCreateLabel={formatCreateLabel}
						/>
					)}
				/>
				{helpTxt && (
					<span className="text-theme-secondary text-xs md:text-sm">
						{helpTxt}
					</span>
				)}
				{error && error?.message && (
					<span className="text-red-500 text-xs md:text-sm">
						{error?.message}
					</span>
				)}
			</div>
		);
	} else {
		return null;
	}
};

export default CustomSelectController;
