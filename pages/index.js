import Image from 'next/image';
import Layout from '@/components/layout';
import Button from '@/components/button';

export default function Home() {
	return (
		<>
			<Layout>
				<h1>Welcome to The First Drop!</h1>

        <p>Test homepage</p>
				<Button>Test button</Button>
			</Layout>
		</>
	);
}
