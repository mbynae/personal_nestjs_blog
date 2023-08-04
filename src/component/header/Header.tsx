import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Link href="/">Practice BLOG</Link>
            </div>
            <nav className={styles.menu}>
                <li>
                    <Link href="/">HOME</Link>
                </li>
                <li>
                    <Link href="/about">ABOUT</Link>
                </li>
                <li>
                    <Link href="/posts">POSTS</Link>
                </li>
                <li>
                    <Link href="/contact">CONTACT</Link>
                </li>
            </nav>
        </header>
    );
}
