import styles from '@/styles/Desktop.module.css';
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function DesktopNav() {
	const [term, setTerm] = useState('');

	const router = useRouter();

	const handleSubmit = (e) => {
		e.preventDefault();
		router.push(`/search?term=${term}`);
		setTerm('');
	};

	return (
		<div className={styles.desktopHeader}>
			<a href="/">
				<div className={styles.logoContainer}>
					<p>The First Drop logo</p>
				</div>
			</a>

			<div className={styles.search}>
				<form onSubmit={handleSubmit}>
					<input
						type="text"
						placeholder="Search"
						value={term}
						onChange={(e) => setTerm(e.target.value)}
					/>
				</form>
			</div>

			<nav className={styles.mainNav}>
				<ul>
					{/* All users */}
					<li>
						<a href="/articles">All Coasters</a>
					</li>
					<li>
						<a href="/videos">All Parks</a>
					</li>
					{/* Logged in only */}
					<li>
						<a href="/authors">Profile</a>
					</li>
					<li>
						<a href="/categories">My Coasters</a>
					</li>
					<li>
						<a href="/categories">My Parks</a>
					</li>
					<li>
						<a href="/categories">My Wish List</a>
					</li>
					<li>
						<a href="/categories">Submit</a>
					</li>
					<li>
						<a href="/about">Logout</a>
					</li>
					{/* Logged out only */}
					<li>
						<a href="/about">Login</a>
					</li>
				</ul>
			</nav>
		</div>
	);
}
