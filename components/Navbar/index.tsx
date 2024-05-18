"use client";

import { useEffect, useState } from "react";
import cn from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";

import logo from "@/public/images/logo-dmi.png";

import styles from "./styles.module.scss";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [navBg, setNavBg] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const changeNavBackground = () => {
    setNavBg(window.scrollY > 80);
  };

  const activeNavbar = (path: string) => {
    return pathname === path;
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavBackground);
    return () => {
      window.removeEventListener("scroll", changeNavBackground);
    };
  }, []);

  return (
    <div className={cn(styles.navbar)}>
      <div
        className={cn(
          styles.bg_nav,
          (navBg ||
            (pathname !== "/" && pathname !== "/contact-us")) &&
            styles.active
        )}
      />
      <div
        className={cn(
          styles.navbar_container,
          (navBg ||
            (pathname !== "/" && pathname !== "/contact-us")) &&
            styles.with_bg
        )}
      >
        <div className={styles.logo}>
          <img src={logo.src} alt="logo" />
        </div>

        <div className={cn(styles.menu_links, isOpen && styles.active)}>
          <Link
            onClick={() => setIsOpen(false)}
            href={"/"}
            className={cn(
              styles.menu_items,
              activeNavbar("/") && styles.active
            )}
          >
            Beranda
          </Link>
          <Link
            onClick={() => setIsOpen(false)}
            href={"/about"}
            className={cn(
              styles.menu_items,
              activeNavbar("/about") && styles.active
            )}
          >
            Tentang
          </Link>
          <Link
            onClick={() => setIsOpen(false)}
            href={"/service"}
            className={cn(
              styles.menu_items,
              activeNavbar("/service") && styles.active
            )}
          >
            Layanan Kami
          </Link>
          <Link
            onClick={() => setIsOpen(false)}
            href={"/contact-us"}
            className={cn(styles.menu_items)}
          >
            Kontak Kami
          </Link>

          <div className={styles.information}>
            <div>Telepon:</div>
            <div className={styles.value}>(0274) 501-3820</div>
            <div className={styles.value}>+62 881-2763-664</div>
          </div>
          <div className={styles.information}>
            <div>Alamat:</div>
            <div className={styles.value}>
              Jl. Monjali, Ruko Gemawang, No. 1 dan 2, Sinduadi, Mlati,
              Kabupaten Sleman, Daerah Istimewa Yogyakarta.
            </div>
          </div>
        </div>

        <div
          className={cn(
            styles.burger_menu,
            pathname === "/contact-us" && styles.burger_contact,
            isOpen && styles.active
          )}
          onClick={toggleMenu}
        >
          <div className={styles.burger_bar} />
          <div className={styles.burger_bar} />
          <div className={styles.burger_bar} />
        </div>
      </div>
    </div>
  );
}
