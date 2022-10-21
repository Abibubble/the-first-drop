import styles from '@/styles/Desktop.module.css'
import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function DesktopNav() {
  const [term, setTerm] = useState('')

  const router = useRouter()

  const handleSubmit = e => {
    e.preventDefault()
    router.push(`/search?term=${term}`)
    setTerm('')
  }

  return (
    <div className={styles.desktopHeader}>
      <Link href="/">
        <a>
          <div className={styles.logoContainer}>
            <p>The First Drop logo</p>
          </div>
        </a>
      </Link>

      <div className={styles.search}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search"
            value={term}
            onChange={e => setTerm(e.target.value)}
            title="search"
          />
          <input type="submit" placeholder="Submit" />
        </form>
      </div>

      <nav className={styles.mainNav}>
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
        </ul>
      </nav>
    </div>
  )
}
