export const ReactFormLayout = ({
	handleSubmit,
	errors,
	register,
	isValid,
	refSubmitBtn,
}) => {
	return (
		<>
			<>
				<form className="form" onSubmit={handleSubmit}>
					<h2 className="title">React form</h2>
					<div className="form-control">
						<label htmlFor="email">Email</label>
						<input id="email" type="text" {...register('email')} />
						<div className="validation">
							{errors?.email && <small>{errors.email.message}</small>}
						</div>
					</div>
					<div className="form-control">
						<label htmlFor="password">Пароль</label>
						<input id="password" type="password" {...register('password')} />
						<div className="validation">
							{errors?.password && <small>{errors.password.message}</small>}
						</div>
					</div>
					<div className="form-control">
						<label htmlFor="confirm">Повторите пароль</label>
						<input id="confirm" type="text" {...register('confirm')} />
						<div className="validation">
							{errors?.confirm && <small>{errors.confirm.message}</small>}
						</div>
					</div>

					<button
						type="submit"
						ref={refSubmitBtn}
						disabled={!isValid}
						className="btn btn-primary"
					>
						Зарегистрироваться
					</button>
				</form>
			</>
		</>
	)
}
