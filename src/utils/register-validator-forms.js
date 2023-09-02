import { validators } from './validators'

export const registerValidatorForms = (registerData) => {
	Object.values(registerData).forEach(({ el, options }) => {
		Object.keys(options)
			.reverse()
			.forEach((validatorName) => {
				if (validatorName === 'confirmPwd') {
					validators[validatorName](
						el,
						registerData[options[validatorName].fieldNamePassword].el,
						options[validatorName],
					)
				} else {
					validators[validatorName](el, options[validatorName])
				}
			})
	})
}
