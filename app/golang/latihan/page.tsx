import CodeReview from "@/components/CodeReview";

const GO_TASKS = [
  "Buat fungsi luasPersegi(sisi int) int yang mengembalikan luas.",
  "Buat struct Mahasiswa (Nama, Umur) dan cetak isinya dari main().",
  "Buat fungsi bagi(a, b int) (int, error) yang menolak pembagian nol.",
  "Jumlahkan semua elemen sebuah slice []int lalu cetak hasilnya.",
];

const GO_STARTER = `package main

import "fmt"

func main() {
	fmt.Println(luasPersegi(5))
}

func luasPersegi(sisi int) int {
	return sisi * sisi
}`;

export default function GolangLatihanPage() {
  return (
    <div>
      <div className="eyebrow">Latihan koding + AI</div>
      <h2 className="section-title" style={{ margin: "6px 0 4px" }}>Latihan Koding Go</h2>
      <p className="section-desc">
        Kerjakan tantangan atau tempel kode Go-mu, lalu minta AI menilai, menemukan bug, dan memberi versi
        perbaikannya (idiomatis Go).
      </p>
      <CodeReview subject="golang" lang="Go" tasks={GO_TASKS} starter={GO_STARTER} storeKey="goCode" />
    </div>
  );
}
