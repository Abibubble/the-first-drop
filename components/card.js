import React, { ReactNode } from 'react'
import styles from '@/styles/Card.module.css';

export default function Card({ ...props }) {
  return (
    <div
      className={styles.main}
    >
      {props.children}
    </div>
  )
}
