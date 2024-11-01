export const VALIDATION = {
	email: {
		required: "This field is required",
		pattern: {
			value: /^\S+@\S+\.\S+$/,
			message: "Please enter a valid email address",
		},
	},
	required: {
		required: "This field is required",
	},
	number: {
		pattern: {
			value: /^[0-9]+$/,
			message: "Only Numeric Value Allowed",
		},
	},
};
