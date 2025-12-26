"use client";

import { useMemo, useState } from "react";

type Row = { day: number; topic: string; note: string };

const month1: Row[] = [
  {
    day: 1,
    topic: "Sayılar, pozitif–negatif, mutlak değer",
    note: "İşaret, büyüklük ve |x| kavramı",
  },
  {
    day: 2,
    topic: "Doğal–tam–rasyonel–irrasyonel",
    note: "Sayı kümeleri ve karşılaştırma",
  },
  {
    day: 3,
    topic: "Aralık gösterimi",
    note: "(a,b), [a,b], (−∞, a] yazımı ve anlamı",
  },
  {
    day: 4,
    topic: "Eşitsizlik çözme",
    note: "Bir ve iki taraflı eşitsizlikler",
  },
  { day: 5, topic: "Üslü sayılar", note: "Üs kuralları ve hesaplama" },
  { day: 6, topic: "Köklü sayılar", note: "Köklü ifadelerin sadeleştirilmesi" },
  { day: 7, topic: "Tekrar + soru", note: "İlk 6 günün karışık soruları" },
  {
    day: 8,
    topic: "Cebirsel ifadeler sadeleştirme",
    note: "Payda, ortak çarpan, toplama–çıkarma",
  },
  {
    day: 9,
    topic: "Çarpanlara ayırma (temel)",
    note: "Ortak çarpan, iki terimli ifadeler",
  },
  {
    day: 10,
    topic: "Çarpanlara ayırma (ileri)",
    note: "İkinci derece, özel çarpanlar",
  },
  { day: 11, topic: "Doğrusal denklem", note: "ax + b = c tipi denklemler" },
  {
    day: 12,
    topic: "İki bilinmeyenli denklem",
    note: "İki denklem – iki bilinmeyen çözümleri",
  },
  { day: 13, topic: "Oran–orantı", note: "Orantı kurma ve problem çözme" },
  { day: 14, topic: "Tekrar", note: "Cebirsel ifadeler ve denklemler" },
  {
    day: 15,
    topic: "Fonksiyon kavramı",
    note: "Tanım kümesi, değer kümesi, eşleme",
  },
  { day: 16, topic: "Grafik okuma", note: "f(x) grafiklerinden bilgi çekme" },
  { day: 17, topic: "Polinom fikri", note: "Polinom yazımı, derece, terimler" },
  {
    day: 18,
    topic: "Rasyonel fonksiyon fikri",
    note: "Pay/payda fonksiyonları, tanımsızlık",
  },
  {
    day: 19,
    topic: "Ters fonksiyon sezgi",
    note: "f⁻¹(x) mantığı, x↔y değişimi",
  },
  {
    day: 20,
    topic: "Parabol sezgi",
    note: "y = ax² + bx + c grafiği, tepe noktası",
  },
  { day: 21, topic: "Tekrar", note: "Fonksiyon ve grafik konuları" },
  { day: 22, topic: "Yaklaşma mantığı", note: "“x → a” fikrine hazırlık" },
  { day: 23, topic: "Sağ–sol yaklaşma", note: "Sağdan ve soldan davranış" },
  {
    day: 24,
    topic: "Grafikte yaklaşma",
    note: "Grafik üstünden limit sezgisi",
  },
  {
    day: 25,
    topic: "Fonksiyon davranışı",
    note: "Uzakta ve yakınlarda ne yapıyor?",
  },
  {
    day: 26,
    topic: "Basit limit örnekleri",
    note: "Formel limitten önce alıştırmalar",
  },
  { day: 27, topic: "Mini sınav", note: "1. ayın zayıf yerlerini görme" },
  { day: 28, topic: "Genel tekrar", note: "Sayılar, cebir, fonksiyonlar" },
  { day: 29, topic: "Genel tekrar", note: "Grafik ve limit sezgisi" },
  { day: 30, topic: "Genel tekrar", note: "Karışık test ve soru çözümü" },
];

const month2: Row[] = [
  {
    day: 31,
    topic: "Kümeler – fonksiyon",
    note: "Kümeler, bağıntı ve fonksiyon ilişkisi",
  },
  {
    day: 32,
    topic: "Fonksiyon bileşkesi – ters",
    note: "f∘g, g∘f ve ters fonksiyon uygulamaları",
  },
  {
    day: 33,
    topic: "Üstel – logaritmik fonksiyon",
    note: "e tabanı, log kuralları ve grafik",
  },
  {
    day: 34,
    topic: "Trigonometrik fonksiyonlar",
    note: "sin, cos, tan ve temel kimlikler",
  },
  { day: 35, topic: "Tekrar", note: "Fonksiyon türleri ve kombinasyonları" },
  {
    day: 36,
    topic: "Limit kuralları",
    note: "Toplama, çarpma, bölme, sabit çarpan",
  },
  {
    day: 37,
    topic: "Sıkıştırma (sandviç)",
    note: "Limitte sıkıştırma teoremi kullanımı",
  },
  {
    day: 38,
    topic: "Tek taraflı limit",
    note: "Sağ ve sol limitin farklı olması durumu",
  },
  { day: 39, topic: "Sonsuz limit", note: "Limitin ±∞ olması durumları" },
  {
    day: 40,
    topic: "Limit örnekleri",
    note: "Alıştırmalar, farklı tip limitler",
  },
  { day: 41, topic: "Tekrar", note: "Limit konusunun genel pekiştirmesi" },
  {
    day: 42,
    topic: "Süreklilik",
    note: "Bir noktada ve aralıkta sürekli olma",
  },
  {
    day: 43,
    topic: "Süreksizlik türleri",
    note: "Atlamalı, sonsuz, kaldırılabilir süreksizlik",
  },
  {
    day: 44,
    topic: "Türev fikri",
    note: "Türev = anlık değişim oranı, grafik yorumu",
  },
  { day: 45, topic: "Türev tanımı", note: "Limit tanımından türev çıkarımı" },
  {
    day: 46,
    topic: "Türev kuralları",
    note: "Polinom ve basit fonksiyonların türevi",
  },
  { day: 47, topic: "Zincir kuralı", note: "Bileşik fonksiyonların türevi" },
  { day: 48, topic: "Tekrar", note: "Limit–süreklilik–türev bağını görmek" },
  { day: 49, topic: "Trig türevleri", note: "sin, cos, tan, cot türevleri" },
  { day: 50, topic: "Üstel–log türev", note: "eˣ ve loga(x) türevleri" },
  { day: 51, topic: "Kapalı fonksiyon", note: "Dolaylı (implicit) türev alma" },
  { day: 52, topic: "Yüksek mertebe türev", note: "f'', f‴ ve daha yukarısı" },
  {
    day: 53,
    topic: "Rolle – Ortalama değer",
    note: "Türevle ilgili temel teoremler",
  },
  { day: 54, topic: "Tekrar", note: "Türev teoremleri ve örnekler" },
  { day: 55, topic: "Artan–azalan", note: "Türeve göre fonksiyon davranışı" },
  { day: 56, topic: "Maks–min", note: "Yerel ve global maksimum–minimum" },
  { day: 57, topic: "Konkavlık – büküm", note: "İkinci türevle şekil analizi" },
  { day: 58, topic: "L’Hôpital", note: "Belirsizliklerde türevle limit bulma" },
  {
    day: 59,
    topic: "Genel tekrar",
    note: "Limit, türev ve uygulamalar karışık",
  },
  {
    day: 60,
    topic: "Deneme + analiz",
    note: "Deneme sınavı, yanlış analiz defteri",
  },
];

function Table({ rows, active }: { rows: Row[]; active: boolean }) {
  return (
    <table className={`month-table ${active ? "active" : ""}`}>
      <thead>
        <tr>
          <th>Gün</th>
          <th>Konu</th>
          <th>Kısa Not</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((r, idx) => (
          <tr key={r.day} style={{ ["--row-index" as any]: idx }}>
            <td>
              <span className="day-pill">
                <span className="day-pill-dot" /> {r.day}
              </span>
            </td>
            <td>{r.topic}</td>
            <td>{r.note}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default function Page() {
  const [month, setMonth] = useState<"m1" | "m2">("m1");

  // const tipText = useMemo(() => {
  //   return "İpucu · satırların üzerine gel, konuyu oku";
  // }, []);

  return (
    <div className="app-frame">
      <header>
        <div className="title-block">
          <div className="subtitle">mat i / üniversite 1. sınıf</div>
          <div className="title">60 Günlük Çalışma Programı</div>
        </div>

        <div className="badge">
          <span className="badge-dot" />
          <span>günde ~2 saat</span>
        </div>
      </header>

      <div className="controls">
        <div className="toggle-group">
          <button
            className={`toggle-btn ${month === "m1" ? "active" : ""}`}
            onClick={() => setMonth("m1")}
            type="button"
          >
            Ay 1 — Temel
          </button>
          <button
            className={`toggle-btn ${month === "m2" ? "active" : ""}`}
            onClick={() => setMonth("m2")}
            type="button"
          >
            Ay 2 — Müfredat
          </button>
        </div>

        <div className="info-line">{"geliştirme aşamasındadır."}</div>
      </div>

      <div className="tables-container">
        {month === "m1" ? (
          <Table rows={month1} active />
        ) : (
          <Table rows={month2} active />
        )}
      </div>

      <footer>
        <center>
          matematik i · temel + müfredat ·{" "}
          <u>
            başta <mark>Ceyda hocama</mark> olmak üzere tüm Matematik hocalarıma
            teşekkür ederim.
          </u>
        </center>
        <br />
        <center>
          hazırlayan:{" "}
          <a
            href="http://hattab.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            trs-1342
          </a>{" "}
          · {new Date().getFullYear()}
        </center>
      </footer>
    </div>
  );
}
