"use client";
import React from "react";
import Select from "react-select";
import CreatableSelect from "react-select/creatable";

const CustomSelect = ({
	maxSelect,
	isLoading,
	ref,
	inputClass,
	isCreatable,
	placeholder,
	options,
	onChange,
	closeMenuOnSelect,
	formatCreateLabel,
	onCreateOption,
	onInputChange,
	getOptionLabel,
	getOptionValue,
	value,
	isMulti,
	...restSelectProp
}) => {
	if (isCreatable) {
		return (
			<div className="w-full flex flex-col items-start gap-1">
				<CreatableSelect
					ref={ref}
					unstyled
					value={value}
					options={options}
					maxMenuHeight={150}
					isOptionDisabled={() => value?.length >= maxSelect}
					isLoading={isLoading}
					placeholder={placeholder || "Select.."}
					getOptionLabel={getOptionLabel}
					getOptionValue={getOptionValue}
					onInputChange={onInputChange}
					onCreateOption={onCreateOption}
					formatCreateLabel={formatCreateLabel}
					className={`w-full border border-theme-gray-300 rounded-lg flex items-center justify-between text-sm sm:text-base bg-theme-gray-50 ${inputClass}`}
					classNames={{
						input: () => "[&_input:focus]:ring-0",
						control: () => "w-full h-full px-3 py-2 md:px-4 md:py-3 rounded-lg",
						valueContainer: () => "gap-1",
						multiValue: () =>
							"bg-theme-primary px-2 py-1 rounded-md text-theme-primary bg-opacity-10 gap-2 text-sm capitalize",
						menu: () =>
							"rounded-xl bg-theme-white border border-theme-primary border-opacity-10 p-1.5 mt-1 shadow-xl",
						option: ({ isFocused, isSelected }) => {
							if (isSelected) {
								return "hover:cursor-pointer bg-theme-primary-800 text-theme-white px-3 py-2 md:px-3 md:py-2 rounded-lg my-0.5 ";
							} else if (isFocused) {
								return "hover:cursor-pointer bg-theme-primary-800 bg-opacity-10 text-theme-primary-900 px-3 py-2 md:px-3 md:py-2 rounded-lg my-0.5";
							} else {
								return "hover:bg-theme-primary-800 hover:bg-opacity-5 transition-all my-0.5 hover:text-theme-primary px-3 py-2 md:px-3 md:py-2 rounded-lg ";
							}
						},
					}}
					{...restSelectProp}
					closeMenuOnSelect={closeMenuOnSelect || false}
					isMulti={isMulti || false}
					onChange={(e) => {
						onChange(e);
					}}
				/>
			</div>
		);
	} else {
		return (
			<div className="w-full flex flex-col items-start gap-1">
				<Select
					ref={ref}
					unstyled
					value={value}
					options={options}
					maxMenuHeight={150}
					isOptionDisabled={() => value?.length >= maxSelect}
					isLoading={isLoading}
					placeholder={placeholder || "Select.."}
					getOptionLabel={getOptionLabel}
					getOptionValue={getOptionValue}
					onInputChange={onInputChange}
					className={`w-full border border-theme-gray-300 rounded-lg flex items-center justify-between text-xs md:text-sm ${inputClass} bg-theme-gray-50`}
					classNames={{
						input: () => "[&_input:focus]:ring-0",
						control: () => "w-full h-full px-3 py-2 md:px-4 md:py-3 rounded-lg",
						valueContainer: () => "gap-1",
						multiValue: () =>
							"bg-theme-primary-800 px-2 py-1 rounded-md text-theme-primary-800 bg-opacity-10 gap-2 text-sm capitalize",
						menu: () =>
							"rounded-xl bg-theme-white border border-theme-primary border-opacity-10 p-1.5 mt-1 shadow-xl",
						option: ({ isFocused, isSelected }) => {
							if (isSelected) {
								return "hover:cursor-pointer bg-theme-primary-800 text-theme-white px-3 py-2 md:px-3 md:py-2 rounded-lg my-0.5 ";
							} else if (isFocused) {
								return "hover:cursor-pointer bg-theme-primary-800 bg-opacity-10 text-theme-primary-900 px-3 py-2 md:px-3 md:py-2 rounded-lg my-0.5";
							} else {
								return "hover:bg-theme-primary-800 hover:bg-opacity-5 transition-all my-0.5 hover:text-theme-primary px-3 py-2 md:px-3 md:py-2 rounded-lg ";
							}
						},
						dropdownIndicator: () =>
							"w-4 h-4 md:w-auto md:h-auto flex items-center justify-center",
					}}
					{...restSelectProp}
					closeMenuOnSelect={closeMenuOnSelect || false}
					isMulti={isMulti || false}
					onChange={(e) => {
						onChange(e);
					}}
				/>
			</div>
		);
	}
};

export default CustomSelect;
