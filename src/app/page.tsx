import Image from 'next/image'
import Slide from '@/components/Slide'

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col items-center justify-between p-24'>
			<h1>Portfolio</h1>
			<Slide />
		</main>
	)
}
