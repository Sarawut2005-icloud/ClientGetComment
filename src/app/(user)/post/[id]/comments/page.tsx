import Link from "next/link";
import styles from "./comment.module.css";

type Comment = {
  id: number;
  name: string;
  email: string;
  body: string;
};

type Props = {
  params: { id: string };
};

export default async function PostCommentsPage({ params }: Props) {
  const { id: postId } = await params;
  let comments: Comment[] = [];

  try {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}/comments`,
      { cache: "no-store" }
    );
    comments = await res.json();
  } catch (e) {
    console.error(e);
  }

  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Comments of Post #{postId}</h1>
        <Link href="/" className={styles.backBtn}>Back to Home</Link>
      </header>
      <section className={styles.commentList}>
        {comments.map((c) => (
          <article key={c.id} className={styles.commentCard}>
            <h3>{c.name}</h3>
            <p className={styles.email}>{c.email}</p>
            <p>{c.body}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
