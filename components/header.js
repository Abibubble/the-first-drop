import DesktopNav from './desktop-nav';
import MobileNav from './mobile-nav';
import styles from '@/styles/Header.module.css';

export default function Header() {
	return (
		<header className={styles.header}>
			<DesktopNav />
			<MobileNav />
		</header>
	);
}