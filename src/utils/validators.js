export const validators = {
	email: (field, message = 'Не корректный Email') => {
		if (!/^\S+@\S+\.\S+$/.test(field.value)) {
			field.setCustomValidity(message)
		} else {
			field.setCustomValidity('')
		}
	},
	minLength: (field, { value, message = '' }) => {
		if (field.value.length < value) {
			field.setCustomValidity(message)
		} else {
			field.setCustomValidity('')
		}
	},
	confirmPwd: (field, fieldPassword, { message }) => {
		if (field.value !== fieldPassword.value) {
			field.setCustomValidity(message)
		} else {
			field.setCustomValidity('')
		}
	},
	required: (field, message = 'Заполните поле') => {
		if (field.value.trim().length === 0) {
			field.setCustomValidity(message)
		}
	},
}
