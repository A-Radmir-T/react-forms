import { checkFormValidity } from '../utils'
import { logDOM } from '@testing-library/react'

export const handleFormErrors = (fieldEls, currentFieldName = '', touchedField) => {
	const formState = {
		fields: { [currentFieldName]: { touched: true } },
		errors: {},
		isValid: false,
		focusSubmit: false,
	}

	const lastField = Object.values(fieldEls).at(-1)

	if (checkFormValidity(fieldEls) && lastField.name === currentFieldName) {
		formState.isValid = true
		formState.focusSubmit = true
		return formState
	}
	if (checkFormValidity(fieldEls)) {
		formState.isValid = true
		return formState
	}

	Object.values(fieldEls).forEach((el) => {
		formState.errors[el.name] = el.validationMessage
	})

	if (touchedField) {
		const newErrors = Object.keys(touchedField).reduce((acc, fieldName) => {
			acc[fieldName] = formState.errors[fieldName]
			return acc
		}, {})

		formState.errors = newErrors
	}

	return formState
}
