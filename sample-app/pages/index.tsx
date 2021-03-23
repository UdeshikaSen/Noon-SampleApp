import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Layout from "../components/layout";
import { GetServerSideProps } from 'next'
import { LayoutProps } from '../types/custom-types';

export default function Home({posts}: LayoutProps) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Favor-It</title>
        <link rel="icon" href="/favicon.ico" />
        </Head>
        <Layout posts={posts} />
    </div>
  )
}

/**
 * Fetch posts from the server when loading page at first
 * @param context Next page context
 * @returns Post data as props
 */
export const getServerSideProps: GetServerSideProps = async (context) => {
   const res = await fetch('http://localhost:3000/posts')
   const postsData = await res.json()
  // const postsData = fetchPosts("home");
  return {
      props: {
          posts: postsData,
      },
  }
}