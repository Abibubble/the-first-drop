import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '@/styles/Mobile.module.css'
import { FaSearch, FaBars } from 'react-icons/fa'
import { GrClose } from 'react-icons/gr'

export default function Header() {
  const [isNavExpanded, setIsNavExpanded] = useState(false)

  const [term, setTerm] = useState('')

  const router = useRouter()

  const handleSubmit = e => {
    e.preventDefault()
    router.push(`/search?term=${term}`)
    setTerm('')
  }

  return (
    <div className={styles.mobileHeader}>
      <Link href="/">
        <a>
          <div className={styles.logoContainer}>
            <p>The First Drop logo</p>
          </div>
        </a>
      </Link>

      <button
        className={styles.burgerIconContainer}
        onClick={() => {
          setIsNavExpanded(!isNavExpanded)
        }}
        title="Toggle mobile menu"
      >
        {isNavExpanded ? (
          <GrClose className={styles.burgerIcon} />
        ) : (
          <FaBars className={styles.burgerIcon} />
        )}
      </button>

      <nav
        className={
          isNavExpanded ? `${styles.visibleMainNav}` : `${styles.hiddenMainNav}`
        }
      >
        <ul>
          {/* All users */}
          <li>
            <Link href="/all-coasters">
              <a>All Coasters</a>
            </Link>
          </li>
          <li>
            <Link href="/all-parks">
              <a>All Parks</a>
            </Link>
          </li>
          {/* Logged in only */}
          <li>
            <Link href="/profile">
              <a>Profile</a>
            </Link>
          </li>
          <li>
            <Link href="/my-coasters">
              <a>My Coasters</a>
            </Link>
          </li>
          <li>
            <Link href="/my-parks">
              <a>My Parks</a>
            </Link>
          </li>
          <li>
            <Link href="/wish-list">
              <a>Wish List</a>
            </Link>
          </li>
          <li>
            <Link href="/submit">
              <a>Submit</a>
            </Link>
          </li>
          <li>
            <Link href="/logout">
              <a>Logout</a>
            </Link>
          </li>
          {/* Logged out only */}
          <li>
            <Link href="/login">
              <a>Login</a>
            </Link>
          </li>
          <li>
            <div className={styles.search}>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Search"
                  value={term}
                  onChange={e => setTerm(e.target.value)}
                  title="search"
                />
                <input type="submit" placeholder="Submit" value="Submit" />
              </form>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  )
}
