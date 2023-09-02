import { ReactFormLayout } from './react-form-layout'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useRef } from 'react'

export const ReactForm = () => {
	const fieldsSchema = yup.object({
		email: yup
			.string()
			.matches(/^\S+@\S+\.\S+$/, 'Не корректный Email')
			.required('Заполните поле'),
		password: yup.string().min(6, 'Должно быть не меньше 6 символов'),
		confirm: yup.string().oneOf([yup.ref('password'), null], 'Пароль не совпадает'),
	})

	const {
		handleSubmit,
		register,
		formState: { isValid, errors },
	} = useForm({
		mode: 'onChange',
		resolver: yupResolver(fieldsSchema),
	})

	const refSubmitBtn = useRef(null)
	if (isValid) {
		setTimeout(() => {
			refSubmitBtn.current.focus()
		})
	}
	const onSubmit = (data) => {
		console.log(data)
	}
	return (
		<ReactFormLayout
			errors={errors}
			handleSubmit={handleSubmit(onSubmit)}
			register={register}
			isValid={isValid}
			refSubmitBtn={refSubmitBtn}
		/>
	)
}
