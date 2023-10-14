/* eslint-disable react-hooks/rules-of-hooks */
import { useNavigate } from 'react-router'

import Form from '../../components/Form/Form'
import Logo from '../../assets/logo.png'
import LoginImg from '../../assets/imgs/login.png'

import './Login.css'

import { useFormik } from 'formik'
import * as Yup from 'yup'

import Button from '../../components/Button/Button'
import FormGroup from '../../components/Form/FormGroup/FormGroup'
import Input from '../../components/Form/FormGroup/Input'

const initialValues = {
	name: '',
	password: '',
}

function Login() {
	const navigate = useNavigate()

	const onSubmit = (values) => {
		localStorage.setItem('user', JSON.stringify(values))

		navigate('/')
	}

	const validationSchema = Yup.object({
		email: Yup.string()
			.email('Invalid email format')
			.required('This field is required'),
		password: Yup.string().required('This field is required'),
	})

	const formik = useFormik({
		initialValues,
		onSubmit,
		validationSchema,
	})

	return (
		<div className='container flex gap-20 mx-auto px-32 py-24'>
			<div className='flex-1'>
				<div>
					<img className='h-20' src={Logo} alt='logo' />
				</div>
				<div>
					<h2>Đăng nhập</h2>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
				</div>
				<div className='mt-16'>
					<Form onSubmit={formik.handleSubmit}>
						<FormGroup>
							<Input
								id='email'
								name='email'
								label='email'
								placeholder='khanh@info.com'
								errorMessage={
									formik.touched.email && formik.errors.email
								}
								value={formik.values.email}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
							/>
						</FormGroup>
						<FormGroup>
							<Input
								id='password'
								type='password'
								name='password'
								label='password'
								placeholder='*****'
								errorMessage={
									formik.touched.password && formik.errors.password
								}
								value={formik.values.password}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
							/>
						</FormGroup>
						<Button className='w-full mt-6'>Đăng nhập</Button>
					</Form>
				</div>
			</div>
			<div>
				<img className='w-[500px]' src={LoginImg} alt='' />
			</div>
		</div>
	)
}

export default Login
