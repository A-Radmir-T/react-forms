import { MyFormLayout } from './my-form-layout'
import { useMyForm } from '../../hooks/use-my-form'
import { useRef } from 'react'
import { useForm } from 'react-hook-form'

export const MyForm = () => {
	const {
		handleSubmit,
		formControl,
		formState: { errors, isValid, focusSubmit },
		reset,
	} = useMyForm()

	const refBtnSubmit = useRef(null)
	if (focusSubmit) {
		setTimeout(() => {
			refBtnSubmit.current.focus()
		})
	}

	const onSubmit = (data) => {
		console.log(data)
		reset()
	}

	const { register } = useForm()

	return (
		<MyFormLayout
			refBtnSubmit={refBtnSubmit}
			formControl={formControl}
			handleSubmit={handleSubmit(onSubmit)}
			errors={errors}
			isValid={isValid}
		/>
	)
}
