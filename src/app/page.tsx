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
        <h2 className={styles.sectionTitle}>click</h2>

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

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>คำอธิบาย & การใช้งาน</h2>
        <div className={styles.note}>
          <p>
             หน้า <code>/post/[id]/comments</code> เป็น Server Component ที่ดึงข้อมูลจาก
            <code>jsonplaceholder.typicode.com</code> (เราใช้ <code>fetch</code> แบบ no-store) — หาก
            เกิด network error เช่น DNS/Proxy ให้ตรวจการเชื่อมต่อหรือทดสอบ API โดยตรง
          </p>
          <p> พิมพ์ตัวเลขในช่องด้านบนแล้วกด Go เพื่อไปยังหน้าคอมเมนต์ของโพสต์นั้น</p>
        </div>
      </section>

      <footer className={styles.footer}>
        <div>test</div>
        <div className={styles.footerRight}>
          <Link href="/post/1/comments" className={styles.footerLink}>Post 1</Link>
          <Link href="/post/8/comments" className={styles.footerLink}>Post 8</Link>
          <Link href="/post/10/comments" className={styles.footerLink}>Post 10</Link>
          <Link href="/post/79/comments" className={styles.footerLink}>Post 79</Link>
        </div>
      </footer>
    </main>
  );
}
