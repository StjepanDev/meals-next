import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Head from 'next/head';
import styles from '../styles/404.module.css';

function NotFound() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      //router.go(1)..

      router.push('/');
    }, 2000);
  }, []);

  return (
    <>
      <Head>
        <title>Error</title>
        <meta name="keywords" content="Error page" />
      </Head>
      <div className={styles.btn}>
        <h1>404 Not-Found</h1>
        <p>
          <Link href="/">Home</Link>
        </p>
      </div>
    </>
  );
}

export default NotFound;
