import { useState } from 'react'
import { handleFormErrors } from '../handlers'
import { registerValidatorForms } from '../utils'

export const useMyForm = () => {
	const initialFormState = { isValid: false, errors: {}, focusSubmit: false }
	const [fieldsValue, setFieldsValue] = useState({})
	const [formState, setFormState] = useState(initialFormState)
	const [touchedFields, setTouchedFields] = useState({})

	const fieldEls = {}
	let formControlData = {}
	const updateFormState = (currentFieldName = '', updateFields = null) => {
		registerValidatorForms(formControlData)
		const newFormState = handleFormErrors(fieldEls, currentFieldName, updateFields)
		setFormState({ ...newFormState, ...newFormState })
	}

	return {
		handleSubmit: (fn) => (event) => {
			event.preventDefault()
			updateFormState()
			fn(fieldsValue)
		},
		reset: () => {
			setFormState(initialFormState)
			setFieldsValue({})
			setTouchedFields({})
			Object.values(fieldEls).forEach((el) => {
				el.value = ''
			})
		},
		formState,
		formControl: (name, value = '', options = {}) => {
			return {
				defaultValue: value,
				onFocus: () => {
					if (!touchedFields[name]) setTouchedFields({ ...touchedFields, [name]: true })
				},
				onBlur: () => {
					updateFormState(name, touchedFields)
				},
				onChange: (event) => {
					const { target } = event
					setFieldsValue({ ...fieldsValue, [name]: target.value })
					updateFormState(name, touchedFields)
				},
				ref: (ref) => {
					if (ref) {
						formControlData[name] = { el: ref, options }
						fieldEls[ref.name] = ref
					}
				},
			}
		},
	}
}
