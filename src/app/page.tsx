import Link from "next/link";
import PostSearch from "./(user)/post/components/PostSearch";
import styles from "@/styles/Home.module.css";

export default function HomePage() {
  const quickIds = [1, 8, 10, 79];

  return (
    <main className={styles.container}>
      <header className={styles.hero}>
        <div>
          <h1 className={styles.title}>Shortcut to Post Comments</h1>
          <p className={styles.subtitle}>
            Quick Shortcut
          </p>
        </div>
        <div className={styles.heroActions}>
          <PostSearch />
        </div>
      </header>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>test</h2>
        <div className={styles.grid}>
          {quickIds.map((id) => (
            <article key={id} className={styles.card}>
              <div className={styles.cardHead}>
                <div className={styles.cardBadge}>post #{id}</div>
                <div className={styles.cardMeta}>Comments shortcut</div>
              </div>
              <p className={styles.cardDesc}>
                เปิดดูคอมเมนต์ของโพสต์ <strong>#{id}</strong>
              </p>
              <div className={styles.cardActions}>
                <Link href={`/post/${id}/comments`} className={styles.btnPrimary}>
                  เปิดหน้า
                </Link>
                <a
                  href={`https://jsonplaceholder.typicode.com/posts/${id}/comments`}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.btnGhost}
                >
                  ดู API
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
