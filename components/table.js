import React, { ReactNode } from 'react'
import styles from '@/styles/Table.module.css';

export default function Table({ ...props }) {
  return (
    <table
      className={styles.main}
    >
      {props.children}
    </table>
  )
}
