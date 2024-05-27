import briImage from "@/public/images/bri.jpeg";
import mitratelImage from "@/public/images/mitratel.jpeg";

import gallery1 from "@/public/images/gallery/1.png";
import gallery2 from "@/public/images/gallery/2.png";
import gallery3 from "@/public/images/gallery/3.png";
import gallery4 from "@/public/images/gallery/4.png";
import gallery5 from "@/public/images/gallery/5.png";

export const FAQs = [
  {
    title: "Apa itu PT. Djangkar Miring Indonesia?",
    answer:
      "Perusahaan yang bergerak dalam bidang jasa pelaksana konstruksi, yang melayani produk dan jasa konstruksi bangunan sipil, elektrikal dan mekanikal.",
  },
  {
    title: "Apa saja material yang dipakai?",
    answer:
      "Batu Bata, Semen, Pasir, Batu Kerikil, Besi Beton, Kayu, Genteng, Triplek, Paku, Pipa-pipa, Cat, Kemarik, dan lain lain. Bahan material untuk kontruksi dapat disesuaikan sesuai keperluan dan keinginan client.",
  },

  {
    title: "Apa saja jenis pekerjaan kontruksi yang dilakukan?",
    answer: [
      "Kontruksi Jaringan Transmisi Telekomunikasi",
      "Kontruksi Bangunan Gedung",
      "Mekanikal dan Elektrikal",
      "Kontruksi Bangunan Sipil",
    ],
  },
  {
    title: "Jam berapa kantor beroperasi?",
    answer: "Kami bekerja dari senin sampai jumat di pukul 08.00 hingga 17.00.",
  },
];

export const HIGHLIGHT = [
  {
    title: "Bank Rakyat Indonesia",
    description:
      "PT Bank Rakyat Indonesia Tbk atau biasa disingkat menjadi BRI, adalah sebuah badan usaha milik negara Indonesia yang menyediakan berbagai macam jasa keuangan.",
    image: briImage.src,
  },
  {
    title: "Dayamitra Telekomunikasi Tbk",
    description:
      "PT Dayamitra Telekomunikasi Tbk adalah anak usaha Telkom Indonesia yang bergerak di bidang penyediaan infrastruktur telekomunikasi.",
    image: mitratelImage.src,
  },
];

export const GALLERY_IMAGES = [gallery1, gallery2, gallery3, gallery5];
