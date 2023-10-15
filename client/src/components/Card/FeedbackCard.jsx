import Customer from '../../assets/imgs/customer1.png'
import StartIcon from '../../assets/icons/star.png'

function FeedbackCard({ avatar, name, role }) {
	return (
		<div className='fb-card w-[500px] flex flex-col items-center bg-[#ffeded03] p-4 rounded-2xl'>
			<div className='relative group overflow-hidden'>
				<img className='rounded-2xl' src={Customer} alt='avatar' />
				<div className='absolute top-4 left-6 text-black'>
					<p className='font-bold text-transparent text-xl bg-clip-text bg-gradient-to-r from-[#48DCFD] to-[#725BFF]'>
						Steve Jobs
					</p>
					<p className='text-[#c3c3c3]'>CEO of Apples</p>
				</div>
				<div className='group-hover:top-[30%] absolute bg-[#454545]/80 backdrop-blur-lg p-4 rounded-2xl top-[80%] left-0 right-0 bottom-0 transition-all duration-500'>
					<div className='flex items-center text-black mt-2'>
						<p className='text-2xl font-bold mr-2'>Hài lòng</p>
						<img src={StartIcon} alt='icon' />
						<span className='font-bold'>5</span>
					</div>
					<p className='mt-4 text-black'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Eaque, adipisci! Praesentium rerum, quaerat commodi accusamus
						vero, reprehenderit eius dignissimos tempora pariatur eos,
						consequatur culpa aliquam fuga? Maiores cum accusantium odit.
					</p>
				</div>
			</div>
		</div>
	)
}

export default FeedbackCard
