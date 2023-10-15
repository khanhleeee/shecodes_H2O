import { useEffect, useState } from 'react'

import ArrowRight from '../../assets/icons/arrow_right.svg'
import FeedbackCard from '../../components/Card/FeedbackCard'
import HightLightCard from '../../components/Card/HightLightCard'
import HomePics from '../../assets/imgs/home-about_img.png'
import LogoUp from '../../assets/logo_up.png'
import LogoUpHorizontal from '../../assets/logo_up_horizontal.png'
import LogoUpOnly from '../../assets/LogoUpOnly.png'
import Piece1 from '../../assets/imgs/piece1.png'
import QA from '../../components/Q&A/Q&A'
import SearchBar from '../../components/SearchBar/SearchBar'
import Sponsor1 from '../../assets/sponsors/sponsor1.png'
import Sponsor2 from '../../assets/sponsors/sponsor2.png'
import Sponsor3 from '../../assets/sponsors/sponsor3.png'
import Text1 from '../../assets/imgs/text1.png'
import partnerUpApi from '../../config/partnerupdb'

function Home() {
	const [companiesOfMonth, setCompaniesOfMonth] = useState([])

	useEffect(() => {
		const getCompanies = async () => {
			const res = await partnerUpApi.getCompanyList({
				params: {
					pageIndex: 1,
					pageSize: 4,
				},
			})
			setCompaniesOfMonth(res.data || [])
		}
		getCompanies()
	}, [])

	return (
		<div id='home' className=''>
			{/* OVERVIEW */}
			<section
				id='overview'
				className='px-16 h-screen bg-home-about bg-cover'
			>
				<div className='container mx-auto h-full flex items-center'>
					<div>
						<img className='h-[300px] mb-8 select-none' src={LogoUp} />
						<SearchBar buttonSearch />
					</div>
					<div>
						<img src={HomePics} alt='' />
					</div>
				</div>
			</section>

			{/* SPONSOR CAROUSEL */}
			<div className='w-full h-8 py-8 overflow-hidden'>
				<div className='h-full w-[calc(250px * 6)] animate-scroll flex items-center'>
					{Array.apply(null, Array(4)).map(() => (
						<>
							<img className='h-8 px-8' src={Sponsor1} alt='sponsor' />
							<img className='h-2 px-8' src={Sponsor2} alt='sponsor' />
							<img className='h-4 px-8' src={Sponsor3} alt='sponsor' />
						</>
					))}
				</div>
			</div>

			{/* HIGHTLIGHT */}
			<section className='px-16 py-[60px] font-extrabold'>
				<div className='container flex items-center'>
					<h2>Tốt hơn</h2>
					<div className='bg-[#FFE95C] w-[400px] py-4 mx-6 rounded-full overflow-hidden'>
						<div className='h-full w-[calc(250px * 6)] animate-scrollFoward flex items-center'>
							{Array.apply(null, Array(6)).map((x, i) => (
								<div key={i}>
									<img className='mx-12' src={ArrowRight} alt='' />
								</div>
							))}
						</div>
					</div>
					<h2>Nhanh hơn</h2>
				</div>
				<div className='flex pt-4 w-full'>
					<h2>Tìm kiếm miễn phí</h2>
					<img className='h-[62px] ml-4' src={Text1} alt='text' />
					<img className='h-[62px] ml-4' src={Piece1} alt='text' />
				</div>
				<div className='flex pt-4'>
					<img className='h-[62px]' src={LogoUpHorizontal} alt='text' />
					<div className='bg-[#FE480D] flex-1 py-4 mx-6 rounded-full overflow-hidden'>
						<div className='h-full w-[calc(250px * 6)] animate-scrollFoward flex items-center'>
							{Array.apply(null, Array(4)).map((x, i) => (
								<div key={i} className='flex items-center px-6'>
									<p className='text-lg'>Kết nối ngay</p>
									<img src={ArrowRight} alt='' />
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			<section
				id='partners-of-month'
				className='min-h-[500px] flex flex-col items-center bg-home-partners bg-cover'
			>
				<h2 className='pt-36 pb-8'>Đối tác của tháng</h2>
				<p className='font-bold'>
					Chúng tôi tự hào giới thiệu Đối tác của tháng, giúp nổi bật sự
					hợp tác và đóng góp đặc biệt vào cộng đồng của chúng tôi.
				</p>
				<div className='container grid grid-cols-4 gap-4 py-10 place-items-center px-32'>
					{companiesOfMonth.map((company) => (
						<HightLightCard key={company.accountId} item={company} />
					))}
				</div>
			</section>

			<section id='feedback' className='w-full bg-[#151515]'>
				<div className='container mx-auto text-white py-14 px-32'>
					<h2>
						Đối tác của{' '}
						<span className='uppercase text-primary-500'>Partner Up</span>{' '}
						nói gì?
					</h2>
					<div className='flex items-center py-10 gap-4'>
						<FeedbackCard />
						<div>
							<FeedbackCard />
						</div>
						<FeedbackCard />
					</div>
				</div>
			</section>

			<section>
				<div className='container p-32 flex'>
					<div className='flex flex-col'>
						<h2 className='text-6xl'>Hỏi đáp cùng</h2>
						<img className='w-[500px]' src={LogoUpOnly} alt='' />
					</div>
				</div>
			</section>
			<section>
				<QA></QA>
			</section>
		</div>
	)
}

export default Home
