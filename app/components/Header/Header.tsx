import Image from 'next/image';
import Link from 'next/link';
import styles from './Header.module.css';
import CustomLink from './Link';
import ContactLink from '../ContactLink/ContactLink';

const INSTAGRAM_LINK = 'https://www.instagram.com/photos.by.brent';

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/">
        <h1>Zot goe racing</h1>
        <p>by Brent Timmermans</p>
      </Link>
      <div>
        <nav>
          <ul>
            <li>
              <ContactLink />
            </li>
          </ul>
          <ul className={styles.socials}>
            <li>
              <Link href={INSTAGRAM_LINK}>
                <Image
                  src="/icons/instagram.svg"
                  alt="Instagram icon"
                  width={16}
                  height={16}
                />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
