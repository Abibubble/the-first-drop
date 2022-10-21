import React, { ReactNode } from 'react'
import styles from '@/styles/Button.module.css'

export default function Button({ href, onClick, ariaLabel, ...props }) {
  let elementType
  if (href) {
    elementType = 'a'
  }

  return (
    <button
      as={elementType}
      {...(href && { href: href })}
      target={href ? '_blank' : '_self'}
      rel={href ? 'noopener noreferrer' : ''}
      aria-label={ariaLabel ? ariaLabel : 'Button'}
      onClick={onClick}
      className={styles.main}
    >
      <span>{props.children}</span>
    </button>
  )
}
