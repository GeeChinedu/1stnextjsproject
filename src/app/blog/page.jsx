import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import Link from 'next/link';

async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

const BlogPost = async () => {
  const data = await getData();
  return (
    <div className={styles.maincontainer}>
      {data.map((item) => (
        <Link href="/blog/testId" className={styles.container} key={item.id}>
          <div className={styles.imgeContainer}>
            <Image
              className={styles.image}
              src="https://images.pexels.com/photos/259554/pexels-photo-259554.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
              width={400}
              height={250}
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.body}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default BlogPost;