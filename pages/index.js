import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Inventory</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
<h1>main section</h1>
      </main>

      <footer className={styles.footer}>
<p>footer</p>
      </footer>
    </div>
  )
}
