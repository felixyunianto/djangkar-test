import Link from "next/link";
import styles from "./styles.module.scss";
export default function Hero() {
  return (
    <div className={styles.hero}>
      <video
        loop
        muted
        autoPlay
        preload="auto"
        // onCanPlayThrough={() => {
        //   setLoading(false);
        // }}
      >
        <source src={"/videos/hero-background.mp4"} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={styles.backdrop}>
        <div className={styles.title}>
          <span className={styles.highlight}>Wujudkan</span> Bangunan sesuai{" "}
          <span className={styles.highlight}>keinginan-mu</span>
        </div>
        <div className={styles.description}>
          Mengutamakan pemenuhan kebutuhan, kepuasan, dan keselamatan pelanggan.
        </div>
        <Link href="/contact-us" className={styles.button_contact}>
          Kontak Kami
        </Link>
      </div>
    </div>
  );
}
