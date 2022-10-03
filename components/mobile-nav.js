import { useState } from 'react';
import { useRouter } from 'next/router';
import mobile from '@/styles/Mobile.module.css';
import { FaSearch, FaBars } from 'react-icons/fa';
import { GrClose } from 'react-icons/gr';

export default function Header() {
	const [isNavExpanded, setIsNavExpanded] = useState(false);

	const [term, setTerm] = useState('');

	const router = useRouter();

	const handleSubmit = (e) => {
		e.preventDefault();
		router.push(`/search?term=${term}`);
		setTerm('');
	};

	return (
		<div className={mobile.mobileHeader}>
			<a href="/">
				<div className={mobile.logoContainer}>
					<p>The First Drop logo</p>
				</div>
			</a>

			<button
				className={mobile.burgerIconContainer}
				onClick={() => {
					setIsNavExpanded(!isNavExpanded);
				}}
			>
				{isNavExpanded ? (
					<GrClose className={mobile.burgerIcon} />
				) : (
					<FaBars className={mobile.burgerIcon} />
				)}
			</button>

			<nav
				className={
					isNavExpanded ? `${mobile.visibleMainNav}` : `${mobile.hiddenMainNav}`
				}
			>
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
					<li>
						<div className={mobile.search}>
							<form onSubmit={handleSubmit}>
								<input
									type="text"
									placeholder="Search"
									value={term}
									onChange={(e) => setTerm(e.target.value)}
								/>
							</form>
						</div>
					</li>
				</ul>
			</nav>
		</div>
	);
}
