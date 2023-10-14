// import Button from './components/Button/Button'
// import Card from './components/Card/Card'
// import CheckBox from './components/Checkbox/Checkbox'
// import RadioButton from './components/RadioButton/RadioButton'
// import SearchBar from './components/SearchBar/SearchBar'
// import Form from './components/Form/Form'

// import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

import ListBusinessPage from './pages/ListBusinessPage'

function App() {
	return (
		<div id='App' className='p-2'>
			{/* <h2>Button</h2>
			<div className='flex py-4 mb-8'>
				<Button>Primary</Button>
				<Button secondary>Secondary</Button>
				<Button outlined>Outlined</Button>
				<Button text onClick={() => console.log('hello')}>
					Text
				</Button>
				<Button
					icon={<MagnifyingGlassIcon className='h-5 w-5 font-bold' />}
				/>
			</div>
			<h2>Card</h2>
			<Card></Card>
			<h2>Radio Button </h2>
			<RadioButton></RadioButton>
			<h2>CheckBox</h2>
			<CheckBox></CheckBox>
			<hr />
			<h2>Search Bar</h2>
			<div className='flex items-center gap-4 py-4 mb-8'>
				<SearchBar />
				<SearchBar buttonSearch={true} />
			</div>
			<hr />
			<h2>Form</h2>
			<div className='py-8'>
				<Form />
			</div>
			<h2>Texts</h2>
			<div className='flex flex-col gap-y-4'>
				<h1>Heading 1</h1>
				<h2>Heading 2</h2>
				<h3>Heading 3</h3>
				<h4>Heading 4</h4>
				<h5>Heading 5</h5>
				<h6>Heading 6</h6>
				<p>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit.
					Exercitationem repellat tempore corrupti deserunt illo ducimus
					numquam tenetur pariatur provident, ea culpa voluptas consequatur
					repellendus dolorum laborum quae quas magni id.
				</p>
			</div> */}
			<ListBusinessPage></ListBusinessPage>
		</div>
	)
}

export default App
