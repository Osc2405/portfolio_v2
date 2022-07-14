import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import {useRouter} from 'next/router'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Oscar Portfolio</title>
        <meta name="description" content="Portfolio as developer and data scientist" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <h1>Portfolio</h1>
        <Link href='/projects'><a>Projects</a></Link>
      </main>
    </div>
  )
}
