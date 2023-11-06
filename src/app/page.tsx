import Image from 'next/image'

import Slide from '@/components/Slide'
import Navbar from '@/components/Navbar'

export default function Home() {
	return (
		<main className='flex'>
			<h1 className='min-w-full'>Portfolio</h1>
			<Navbar />
			<Slide />
			<Slide />
		</main>
	)
}
