export const MyFormLayout = ({
	handleSubmit,
	formControl,
	errors,
	refBtnSubmit,
	isValid,
}) => {
	return (
		<>
			<form className="form" onSubmit={handleSubmit}>
				<h2 className="title">My form</h2>

				<div className="form-control">
					<label htmlFor="email">Email</label>
					<input
						name="email"
						id="email"
						type="email"
						{...formControl('email', '', {
							required: 'Это поле обязательно к заполнению',
							email: 'Введите корректный Email',
						})}
					/>
					<div className="validation">
						{errors.email && <small>{errors.email}</small>}
					</div>
				</div>

				<div className="form-control">
					<label htmlFor="password">Пароль</label>
					<input
						name="password"
						id="password"
						type="password"
						{...formControl('password', '', {
							required: 'Это поле обязательно к заполнению',
							minLength: {
								value: 6,
								message: 'Минимальное колличество символов 6',
							},
						})}
					/>
					<div className="validation">
						{errors.password && <small>{errors.password}</small>}
					</div>
				</div>

				<div className="form-control">
					<label htmlFor="confirm">Повторите пароль</label>
					<input
						name="confirm"
						id="confirm"
						type="password"
						{...formControl('confirm', '', {
							required: 'Это поле обязательно к заполнению',
							confirmPwd: {
								fieldNamePassword: 'password',
								message: 'Пароли должны совподать',
							},
						})}
					/>
					<div className="validation">
						{errors.confirm && <small>{errors.confirm}</small>}
					</div>
				</div>

				<button
					disabled={!isValid}
					ref={refBtnSubmit}
					type="submit"
					className="btn btn-primary"
				>
					Зарегистрироваться
				</button>
			</form>
		</>
	)
}
