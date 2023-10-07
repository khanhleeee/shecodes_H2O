import Button from './components/Button/Button'
import Card from './components/Card/Card'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

function App() {
	return (
		<div id='App' className='p-2'>
			<h2>Button</h2>
			<div className='flex mb-8'>
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
			<hr />
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
			</div>
		</div>
	)
}

export default App
