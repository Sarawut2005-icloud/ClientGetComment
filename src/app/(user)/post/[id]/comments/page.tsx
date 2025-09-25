import React from "react";
import styles from "./comment.module.css";

type Comment = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

type Props = {
  params: { id: string };
};

async function getComments(postId: string): Promise<Comment[]> {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}/comments`,
    { cache: "no-store" } 
  );
  if (!res.ok) {
    throw new Error(`Failed to fetch comments for post ${postId}`);
  }
  return res.json();
}

export default async function PostCommentsPage({ params }: Props) {
  const postId = params.id;
  let comments: Comment[] = [];

  try {
    comments = await getComments(postId);
  } catch (err: any) {
    return (
      <main className={styles.container}>
        <section className={styles.panel}>
          <h1 className={styles.title}>Comments for post #{postId}</h1>
          <p className={styles.error}>เกิดข้อผิดพลาดในการดึงข้อมูล: {err.message}</p>
        </section>
      </main>
    );
  }

  return (
    <main className={styles.container}>
      <section className={styles.panel}>
        <header className={styles.header}>
          <h1 className={styles.title}>Comments for post #{postId}</h1>
          <p className={styles.subtitle}>
            จำนวน {comments.length} 
          </p>
        </header>

        <ul className={styles.list}>
          {comments.map((c) => (
            <li key={c.id} className={styles.card}>
              <div className={styles.cardHeader}>
                <div className={styles.avatar}>{c.name.charAt(0).toUpperCase()}</div>
                <div className={styles.meta}>
                  <div className={styles.name}>{c.name}</div>
                  <div className={styles.email}>{c.email}</div>
                </div>
              </div>
              <p className={styles.body}>{c.body}</p>
              <div className={styles.footer}>
                <span className={styles.postTag}>post #{c.postId}</span>
                <span className={styles.commentId}>#{c.id}</span>
              </div>
            </li>
          ))}
        </ul>

        <nav className={styles.shortcut}>
          <a href={`/post/${Math.max(1, Number(postId) - 1)}/comments`} className={styles.link}>
            ← prev
          </a>
          <a href={`/post/${Number(postId) + 1}/comments`} className={styles.link}>
            next →
          </a>
          <a href="/post/1/comments" className={styles.linkPrimary}>
            shortcut: post 1
          </a>
        </nav>
      </section>
    </main>
  );
}
