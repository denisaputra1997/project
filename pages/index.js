import Head from 'next/head'
import Link from 'next/link'
import Footer from '../comps/Footer'
import Navbar from '../comps/Navbar'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <>
    <Head>
      <title>Deni Saputra | Beranda</title>
      <meta name="keywords" content="deni" />
    </Head>

      <div>
      <h1>Wellcome</h1>
            <p>welcome to my name list blog, this is a simple project to display a list of names using nextjs. 
              and the data I use comes from jsonplaceholder. there are 3 menus namely list of names, homepage, about me</p>
            
      </div>

    <div>
      <Link href="/about">
        <a className={styles.btn}>See About</a>
        </Link>
      
    </div>
    </>
  )
}
