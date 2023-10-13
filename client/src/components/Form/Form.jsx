/* eslint-disable no-useless-escape */
import { useFormik } from 'formik'
import * as Yup from 'yup'

import Button from '../Button/Button'
import FormGroup from './FormGroup/FormGroup'
import Input from './FormGroup/Input'
import TextArea from './FormGroup/TextArea'

const initialValues = {
	name: '',
	password: '',
	email: '',
	link: '',
}

function Form() {
	const onSubmit = (values) => {
		console.log('Form values: ', values)
	}

	const validationSchema = Yup.object({
		name: Yup.string().required('This field is required'),
		email: Yup.string()
			.email('Invalid email format')
			.required('This field is required'),
		link: Yup.string().required('This field is required'),
		password: Yup.string().required('This field is required'),
	})

	const formik = useFormik({
		initialValues,
		onSubmit,
		validationSchema,
	})

	return (
		<form className='w-[800px]' onSubmit={formik.handleSubmit}>
			<FormGroup>
				<Input
					id='name'
					name='name'
					label='Name'
					placeholder='Justin Bieber'
					errorMessage={formik.touched.name && formik.errors.name}
					value={formik.values.name}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
				/>
				<Input
					id='email'
					name='email'
					label='email'
					placeholder='justin@info.com'
					errorMessage={formik.touched.email && formik.errors.email}
					value={formik.values.email}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
				/>
				<Input
					id='password'
					type='password'
					name='password'
					label='password'
					placeholder='*****'
					errorMessage={formik.touched.password && formik.errors.password}
					value={formik.values.password}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
				/>
			</FormGroup>

			<FormGroup>
				<Input
					id='link'
					name='link'
					label='link'
					placeholder='http//f8.com'
					errorMessage={formik.touched.link && formik.errors.link}
					value={formik.values.link}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
				/>
			</FormGroup>
			<FormGroup>
				<TextArea placeholder='Shortly describe your project' />
			</FormGroup>

			<Button type='submit' className='w-full mt-6'>
				submit
			</Button>
		</form>
	)
}

export default Form
