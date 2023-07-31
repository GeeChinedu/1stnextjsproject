import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import { notFound } from 'next/navigation';

async function getData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    return notFound();
  }

  return res.json();
}

const BlogPost = async ({ params }) => {
  const data = await getData(params.id);
  return (
    <div classNmae={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            quaerat deleniti optio dolores, ex debitis expedita amet, corrupti
            sapiente iure doloremque odio. Placeat nostrum temporibus
            repudiandae illo. Voluptates dolores aspernatur dolore facilis?
          </p>
          <div className={styles.author}>
            <Image
              className={styles.avatar}
              alt=""
              // fill={true}
              width={40}
              height={40}
              src="/profilepic.jpg"
            />
            <span className={styles.username}>Nneka Emere</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            className={styles.image}
            alt=""
            fill={true}
            // width={300}
            // height={200}
            src="/mountain.jpg"
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid,
          corrupti corporis sint ullam culpa ratione. Nobis molestiae aliquid
          numquam aperiam quia tempore cum! Soluta dolor, in cumque suscipit
          officiis error nostrum, ex ullam unde voluptatibus inventore, impedit
          accusamus maiores hic? Repellendus nesciunt quos nam adipisci nisi
          aliquid, atque cum harum, in, tenetur vel delectus placeat veniam
          maiores libero suscipit consequatur repudiandae quaerat cupiditate
          exercitationem hic reprehenderit. Excepturi ratione ex dicta soluta
          mollitia autem, quibusdam doloremque iure ducimus
          <br />
          <br />
          nulla nihil dolorem perspiciatis iusto, pariatur blanditiis non
          voluptatibus impedit, numquam officia voluptates velit porro? Natus in
          assumenda ut aperiam deleniti repellat quam non odit accusantium
          tempore? Pariatur soluta temporibus sapiente debitis quae non, sunt
          iusto tenetur modi placeat
          <br />
          <br />
          totam veritatis consectetur libero consequuntur vero sit corporis
          praesentium facilis at amet voluptatum tempore molestiae. Tempora,
          quasi. Nulla ducimus, tenetur repellat amet, voluptates illo in
          eligendi, animi quidem velit atque officia natus? Libero atque
          asperiores vel iusto inventore ullam modi esse! Id, excepturi ipsam!
          Voluptate reprehenderit ullam optio modi alias dolorum natus labore
          impedit vero qui illo iusto perspiciatis delectus similique sapiente,
          consequuntur repellat. Impedit consequuntur laudantium deserunt iure
          et perspiciatis esse ipsam architecto, exercitationem aperiam numquam,
          dolores natus quisquam consequatur minus, velit animi!
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
