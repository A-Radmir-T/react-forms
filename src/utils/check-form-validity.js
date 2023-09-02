export const checkFormValidity = (fields) => {
	return Object.values(fields).every((field) => field.checkValidity())
}
