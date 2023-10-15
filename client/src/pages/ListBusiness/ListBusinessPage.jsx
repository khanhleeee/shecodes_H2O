import { useEffect, useState } from 'react'
import { useFormik } from 'formik'

// import Card from "../components/Card/Card"
import CompanyCard from '../../components/Card/CompanyCard'
import CheckBox from '../../components/Checkbox/Checkbox'
import RadioButton from '../../components/RadioButton/RadioButton'
import background from '../../assets/background.png'
import partnerUpApi from '../../config/partnerupdb'
import Button from '../../components/Button/Button'
import { useParams } from 'react-router'

function ListBusinessPage() {
	const [companyList, setCompanyList] = useState([])
	const [suggestCompanyList, setSuggestCompanyList] = useState([])
	const [services, setServices] = useState([])

	let { province, categories } = useParams()

	const initialValues = {
		province: '',
		categories: '',
		services: '',
		budget: '',
	}

	const onSubmit = async (values) => {
		if (values.budget) {
			switch (values.budget) {
				case '10000000+':
					values.budget = [10000000, 50000000]
					break
				case '5000000+1':
					values.budget = [5000000, 10000000]
					break
				default:
					values.budget = [0, 5000000]
			}
		}
		const res = await partnerUpApi.getCompanyList({
			params: {
				...values,
				categories: values.categories[0],
			},
		})
		setCompanyList(res.data || [])
	}

	const formik = useFormik({
		initialValues,
		onSubmit,
	})

	useEffect(() => {
		const getCompanies = async () => {
			let result = []
			if (province && categories) {
				result = await partnerUpApi.getCompanyList({
					params: {
						pageIndex: 1,
						pageSize: 10,
						province,
						categories,
					},
				})
			} else {
				result = await partnerUpApi.getCompanyList({
					params: {
						pageIndex: 1,
						pageSize: 10,
					},
				})
			}
			setCompanyList(result.data)
		}
		getCompanies()
	}, [])

	useEffect(() => {
		const getCompanies = async () => {
			const result = await partnerUpApi.getCompanyList({
				params: {
					pageIndex: 1,
					pageSize: 10,
					services: 'Website & App',
				},
			})
			setSuggestCompanyList(result.data)
		}
		getCompanies()
	}, [])

	useEffect(() => {
		const getServices = async () => {
			const res = await partnerUpApi.getServices()
			setServices(res.data || [])
		}
		getServices()
	}, [])

	return (
		<>
			<div className='bg-gradient-to-b from-[#D0DBF5] to-white'>
				{/* Intro */}
				<div className='relative'>
					<div className='absolute top-0 left-20 right-19 bottom-0 flex items-center justify-center text-black text-4xl font-bold'>
						<span>Kết nối&nbsp;</span>
						<span className='text-orange-600'>doanh nghiệp&nbsp;</span>
						<span>ngay!</span>
					</div>
					<div className='absolute top-0 left-32 mt-11 flex items-center justify-center text-black text-sm font-bold'></div>

					<div className='absolute top-24 left-20 right-19 bottom-0 flex items-center justify-center text-black text-sm font-bold'>
						Thousands of jobs in the computer, engineering and technology
						sectors are waiting for you.
					</div>
					<img
						src={background}
						alt='Background Image'
						className='object-cover w-full h-full'
					/>
				</div>

				<div className='container mx-auto px-10'>
					{/* Suggested companies */}
					<div className='mb-14'>
						<h3 className='mt-10 mb-4 text-3xl'>
							Gợi ý doanh nghiệp tương tự
						</h3>
						<div className='grid grid-cols-3 gap-8'>
							{suggestCompanyList.map((item) => (
								<CompanyCard noDesc key={item.accountId} item={item} />
							))}
						</div>
					</div>
					<div className='flex'>
						{/* Company list */}
						<div className=''>
							<h3 className='text-3xl mb-4'>3177 doanh nghiệp</h3>
							<div className='grid grid-cols-2 gap-8'>
								{companyList.map((item) => (
									<CompanyCard key={item.accountId} item={item} />
								))}
							</div>
						</div>
						{/* Filter */}
						<div className='flex-[70%] ml-20 bg-white mt-[54px] p-4 rounded-lg h-fit'>
							<h4 className='mb-4'>Lọc theo</h4>
							<form onSubmit={formik.handleSubmit}>
								<div role='group' aria-labelledby='my-radio-group'>
									<p className='font-bold'>Vị trí</p>
									<RadioButton
										name='province'
										id='hcm'
										label='Hồ Chí Minh'
										value='Hồ Chí Minh'
										onChange={formik.handleChange}
										onBlur={formik.handleBlur}
									/>
									<RadioButton
										name='province'
										id='hn'
										label='Hà Nội'
										value='Hà Nội'
										onChange={formik.handleChange}
										onBlur={formik.handleBlur}
									/>
									<RadioButton
										name='province'
										id='dn'
										label='Đà Nẵng'
										value='Đà Nẵng'
										onChange={formik.handleChange}
										onBlur={formik.handleBlur}
									/>
								</div>

								<div role='group' aria-labelledby='my-radio-group'>
									<p className='font-bold'>Lĩnh vực</p>
									<CheckBox
										name='categories'
										id='cn'
										label='Công nghệ'
										value='Công nghệ'
										onChange={formik.handleChange}
										onBlur={formik.handleBlur}
									/>
									<CheckBox
										name='categories'
										id='gd'
										label='Giáo dục'
										value='Giáo dục'
										onChange={formik.handleChange}
										onBlur={formik.handleBlur}
									/>
									<CheckBox
										name='categories'
										id='mk'
										label='Marketing'
										value='Marketing'
										onChange={formik.handleChange}
										onBlur={formik.handleBlur}
									/>
									<CheckBox
										name='categories'
										id='tk'
										label='Thiết kế'
										value='Thiết kế'
										onChange={formik.handleChange}
										onBlur={formik.handleBlur}
									/>
								</div>
								<div>
									<p className='font-bold'>Dịch vụ</p>
									<select
										id='services'
										name='services'
										className='border outline-none px-4 py-2 mt-4 w-full'
										value={formik.values.field}
										onChange={formik.handleChange}
										onBlur={formik.handleBlur}
									>
										<option defaultValue='' value='' disabled>
											Dịch vụ
										</option>
										{services.map((item) => (
											<option key={item.id} value={item.name}>
												{item.name}
											</option>
										))}
									</select>
								</div>

								<div>
									<p className='font-bold mt-4'>Ngân sách</p>
									<select
										id='services'
										name='services'
										className='border outline-none px-4 py-2 mt-4 w-full'
										value={formik.values.field}
										onChange={formik.handleChange}
										onBlur={formik.handleBlur}
									>
										<option defaultValue='' value='' disabled>
											Ngân sách
										</option>
										<option value='-5000000'>Dưới 5 triệu</option>
										<option value='5000000+1'>
											Từ 5 triệu - 10 triệu
										</option>
										<option value='10000000+'>Trên 10 triệu</option>
									</select>
								</div>

								<Button className='w-full mt-8' outlined>
									Tìm kiếm
								</Button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default ListBusinessPage
