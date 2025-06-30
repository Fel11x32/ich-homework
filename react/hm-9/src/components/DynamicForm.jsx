import React from 'react'
import { useForm } from 'react-hook-form'
import styles from './DynamicForm.module.css'

const DynamicForm = () => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm()

	const onSubmit = data => {
		console.log(data)
		alert(JSON.stringify(data))
	}

	const firstFieldValue = watch('firstField')

	const showSecondField = firstFieldValue && firstFieldValue.length >= 3

	return (
		<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
			<div className={styles.formGroup}>
				<label className={styles.label}>First Field</label>
				<input
					{...register('firstField', {
						required: 'Required',
						minLength: { value: 3, message: 'Min 3 characters' },
					})}
					className={styles.input}
				/>
				{errors.firstField && (
					<p className={styles.error}>{errors.firstField.message}</p>
				)}
			</div>

			{showSecondField && (
				<div className={styles.formGroup}>
					<label className={styles.label}>Second Field</label>
					<input
						{...register('secondField', { required: 'Required' })}
						className={styles.input}
					/>
					{errors.secondField && (
						<p className={styles.error}>{errors.secondField.message}</p>
					)}
				</div>
			)}

			<button type='submit' className={styles.button}>
				Submit
			</button>
		</form>
	)
}

export default DynamicForm
