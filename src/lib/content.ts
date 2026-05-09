export type Locale = "tr" | "en" | "it" | "es";

export const LOCALES: { code: Locale; label: string }[] = [
  { code: "tr", label: "TR" },
  { code: "en", label: "EN" },
  { code: "it", label: "IT" },
  { code: "es", label: "ES" },
];

/**
 * Single source of truth: ALL content is authored in Turkish here.
 * EN/IT/ES are generated automatically via translation (see `lib/translate.ts`).
 */
export const trContent = {
  nav: {
    name: "MUSA ÇİVİOĞLU",
    items: {
      about: "Hakkımda",
      experience: "Deneyim",
      education: "Eğitim",
      languages: "Diller",
      skills: "Yetenekler",
      contact: "İletişim",
    },
    downloadCv: "CV İndir",
    openMenu: "Menüyü aç",
    closeMenu: "Menüyü kapat",
    translating: "Çeviriliyor...",
  },
  hero: {
    name: "Musa Çivioğlu",
    title: "İNGİLİZCE ÖĞRETMENİ | TERCÜMAN | POLYGOT",
    description:
      "Haziran 2026 itibarıyla Hasan Kalyoncu Üniversitesi İngilizce Öğretmenliği (ELT) bölümünden mezun oldum. Profesyonel çevirmen ve Pura Tercüme’nin kurucusu olarak; çok dilli ve çok kültürlü geçmişimle eğitim, çeviri ve girişimciliği bir araya getirerek güvenilir ve iletişim odaklı çözümler sunuyorum.",
    ctaDownload: "CV İndir",
    ctaContact: "İletişime Geç",
    badges: {
      en: "İngilizce C1",
      it: "İtalyanca C1",
      es: "İspanyolca C1",
      founder: "Kurucu",
    },
    card: {
      initials: "MÇ",
      role: "Tercüman & Öğretmen",
      langs: "Tercüman & Öğretmen",
      brand: "Pura Tercüme | Özel Go Akademi",
      edu: "ELT · Haziran 2026",
      country: "Türkiye",
      tagline: "Premium, güven odaklı dil hizmetleri.",
    },
    photoAlt: "Musa Çivioğlu profil fotoğrafı",
  },
  about: {
    title: "Hakkımda",
    p1: "Haziran 2026 itibarıyla Hasan Kalyoncu Üniversitesi İngilizce Öğretmenliği (ELT) bölümünden mezun oldum. Aynı zamanda Anadolu Üniversitesi İşletme bölümünde eğitimime devam etmekteyim.",
    p2: "İtalya ve Türkiye’de edindiğim eğitim deneyimleri sayesinde uluslararası bir bakış açısı kazandım. Bu süreç, çok dilli ve çok kültürlü iletişim becerilerimi ileri düzeyde geliştirmeme katkı sağladı.",
    p3: "Profesyonel kariyerimi çeviri ve dil hizmetleri alanında sürdürmekteyim. Farklı çeviri ajanslarında edindiğim deneyimlerin ardından kurucusu olduğum Pura Tercüme bünyesinde; İngilizce, İtalyanca, İspanyolca ve Türkçe başta olmak üzere 100’den fazla dilde profesyonel çeviri hizmetleri sunmaktayım.",
    cards: {
      field: { k: "Ana Alan", v: "İngilizce Öğretmenliği" },
      business: { k: "İş", v: "Pura Tercüme | Özel Go Akademi" },
      focus: { k: "Odak", v: "Çeviri, Yapay Zekâ, Eğitim" },
    },
  },
  experience: {
    title: "Deneyim",
    items: [
      {
        role: "Kurucu & Profesyonel Çevirmen",
        company: "Pura Tercüme",
        date: "2024 – Günümüz",
        location: "Antalya, TÜRKİYE",
        bullets: [
          "İngilizce, İtalyanca, İspanyolca ve Türkçe dillerinde çok dilli çeviri hizmetleri sunma",
          "Müşteri iletişimi, fiyatlandırma, teslimat ve kalite kontrol süreçlerini yönetme",
          "Hukuki, akademik, resmi ve ticari belgeler üzerinde çalışma",
          "Terim doğruluğunu, biçim tutarlılığını ve zamanında teslimatı sağlama",
          "Güven ve kalite odaklı profesyonel bir dil hizmeti markası inşa etme",
        ],
      },
      {
        role: "Serbest Çevirmen",
        company: "Çeşitli Çeviri Ajansları",
        date: "2023 – Günümüz",
        location: "Uzaktan / TÜRKİYE",
        note: "Ajanslar: Aspendos Translation and Consultancy Services Inc., Vizyon Tercüme, ONAT Tercüme, Express Tercüme",
        bullets: [
          "Sıkı teslim tarihlerinde yüksek kaliteli çeviriler teslim etme",
          "İngilizce, İtalyanca, Türkçe ve İspanyolca çeviri projelerinde uzmanlaşma",
          "Ajanslar ve müşterilerle profesyonel iletişimi sürdürme",
          "Resmi, akademik ve genel çeviri belgeleri üzerinde çalışma",
        ],
      },
      {
        role: "Eğitim & İdari Destek",
        company: "Özel Gül Ocak Eğitim Kurumu",
        date: "",
        location: "Antalya, TÜRKİYE",
        bullets: [
          "Öğrenci kayıt ve organizasyon süreçlerine destek olma",
          "Öğretmen koordinasyonu ve ders planı takibinde yardımcı olma",
          "Veli iletişimi ve öğrenci performans takibine katkı sağlama",
          "Eğitsel planlama ve kurumsal gelişim süreçlerine katılma",
        ],
      },
      {
        role: "ELT Stajyer Öğretmen",
        company: "Öğretmenlik Uygulaması",
        date: "",
        location: "Gaziantep, TÜRKİYE",
        bullets: [
          "İlkokul ve ortaokul düzeyindeki öğrenenler için ders planları hazırlama ve uygulama",
          "Öğrenci merkezli sınıf etkinlikleri tasarlama",
          "İletişimsel dil öğretimi tekniklerini kullanma",
          "Kelime, konuşma, dinleme, okuma ve yazma etkinlikleri için materyal geliştirme",
          "Sınıf yönetimi ve öğrenen katılımı konusunda deneyim kazanma",
        ],
      },
    ],
  },
  education: {
    title: "Eğitim",
    items: [
      {
        school: "Hasan Kalyoncu Üniversitesi",
        program: "İngilizce Öğretmenliği (ELT) Lisans",
        date: "Haziran 2026",
      },
      {
        school: "Anadolu Üniversitesi",
        program: "İşletme Lisans",
        date: "Eyl 2021 – Ara 2025",
      },
      {
        school: "Istituto Leonardo da Vinci",
        program: "Lise Diploması – Bilgisayar Bilimleri",
        date: "2013 – 2018",
      },
    ],
    note: "İtalya ve Türkiye’de eğitim alarak güçlü bir çok kültürlü ve çok dilli altyapı geliştirdim.",
  },
  languages: {
    title: "Diller",
    items: [
      { name: "Türkçe", level: "Ana dil", value: 100 },
      { name: "İngilizce", level: "C1 – İleri", value: 99 },
      { name: "İtalyanca", level: "C1 – İleri", value: 99 },
      { name: "İspanyolca", level: "C1 – İleri", value: 99 },
      { name: "Fransızca", level: "C1 – İleri", value: 99 },
    ],
  },
  skills: {
    title: "Yetenekler",
    groups: [
      {
        title: "Çeviri",
        items: [
          "Profesyonel çeviri",
          "Resmi belge çevirisi",
          "Hukuki & akademik çeviri",
          "Terim yönetimi",
          "Biçimlendirme & kalite kontrol",
        ],
      },
      {
        title: "Öğretim",
        items: [
          "Ders planlama",
          "Sınıf yönetimi",
          "Materyal geliştirme",
          "İletişimsel Dil Öğretimi",
          "Öğrenci merkezli öğrenme",
        ],
      },
      {
        title: "İş",
        items: [
          "Girişimcilik",
          "Müşteri iletişimi",
          "Fiyatlandırma & teslimat yönetimi",
          "Marka geliştirme",
          "Organizasyon ve planlama",
        ],
      },
      {
        title: "Teknoloji & Yapay Zekâ",
        items: [
          "YZ araçları",
          "Wordwall",
          "Canva",
          "CapCut",
          "Temel web geliştirme",
          "Next.js başlangıç düzeyi",
          "Tailwind CSS başlangıç düzeyi",
        ],
      },
    ],
  },
  certificates: {
    title: "Sertifikalar",
    items: [
      {
        title: "Teach English Now! Foundational Principles",
        issuer: "Coursera",
        date: "2026",
        description:
          "Hasan Kalyoncu Üniversitesi tarafından sağlanan eğitim destek fırsatı kapsamında tamamlanmıştır.",
        // Add your certificate images here:
        // Place files under: `public/certificates/`
        // Example paths:
        // - /certificates/teach-english-now.jpg
        // - /certificates/certificate-2.jpg
        // - /certificates/certificate-3.jpg
        image: "/certificates/teach-english-now.jpg",
        link: "#",
      },
 
      {
  title: "ECDL Full Standart – Avrupa Bilgisayar Yetkinlik Sertifikası",
  issuer: "ECDL",
  date: "2015",
  description:
    "İtalya’da alınan bu sertifika kapsamında temel bilgisayar kullanımı, dijital araçlar ve ofis uygulamaları alanlarında uluslararası düzeyde yetkinlik kazanılmıştır.",
  image: "/certificates/ecdl-full-standart.jpg",
  link: "#",
},

{
  title: "E-Tech – Teaching with Technology",
  issuer: "Orta Doğu Teknik Üniversitesi (ODTÜ)",
  date: "2022",
  description:
    "Eğitim teknolojileri, dijital öğretim araçları ve teknoloji destekli öğretim yöntemleri üzerine gerçekleştirilen program başarıyla tamamlanmıştır.",
  image: "/certificates/e-tech-teaching-with-technology.jpg",
  link: "#",
},

{
  title: "İspanyolca C1 Eğitimi",
  issuer: "Dil Eğitim Programı",
  date: "2025",
  description:
    "MUDANYA ÜNİVERSİTESİ Sürekli Eğitim Uygulama ve Araştırma Merkezi tarafından gerçekleştirilen 120 Saatlik C1 SEVİYE GENEL İSPANYOLCA EĞİTİMİ sertifika programını tamamlayarak bu belgeyi almaya hak kazanmıştır.",
  image: "/certificates/isp.jpg",
  link: "#",
},

{
  title: "Fransızca C1 Eğitimi",
  issuer: "Dil Eğitim Programı",
  date: "2025",
  description:
   "MUDANYA ÜNİVERSİTESİ Sürekli Eğitim Uygulama ve Araştırma Merkezi tarafından gerçekleştirilen 120 Saatlik C1 SEVİYE GENEL FRANSIZCA EĞİTİMİ sertifika programını tamamlayarak bu belgeyi almaya hak kazanmıştır.",
  image: "/certificates/fransizca.jpg",
  link: "#",
},

{
  title: "Kişisel Stres Yönetimi",
  issuer: "Çevrim İçi Eğitim Programı",
  date: "2020",
  description:
    "Stres yönetimi, zaman planlaması ve baskı altında etkili karar verme becerileri üzerine gerçekleştirilen eğitim başarıyla tamamlanmıştır.",
  image: "/certificates/kisisel-stres-yonetimi.jpg",
  link: "#",
},

{
  title: "Liderlik",
  issuer: "Çevrim İçi Eğitim Programı",
  date: "2017",
  description:
    "Liderlik, ekip yönetimi, iletişim ve problem çözme becerileri üzerine gerçekleştirilen eğitim programı başarıyla tamamlanmıştır.",
  image: "/certificates/liderlik.jpg",
  link: "#",
},

    ],
  },
       volunteer: {
                    title: "Sivil Toplum Kuruluş Faaliyetleri",
                    items: [
                      {
                        title: "Türk Kızılay - Manavgat Yangınları",
                        date: "2021",
                        description:
                          "Türk Kızılay ailesi ile tanışmama katkı sağladı.",
                      },

                      {
                        title: "Genç Kızılay HKÜ Topluluk Başkanlığı",
                        date: "2021 - 2023",
                        description:
                          "Üniversite topluluk başkanlığını yürüttüm ve bu süre zarfında onlarca etkinlik planlamasında katkıda bulundum.",
                      },

                      {
                        title: "Genç Kızılay Gaziantep İl Yönetimi",
                        date: "2023 - 2024",
                        description:
                          "Gaziantep Üniversitesi, Hasan Kalyoncu Üniversitesi ve Gaziantep İslam Bilim ve Teknoloji Üniversitesi'ndeki toplulukların işleyişlerini, faaliyetlerini ve genel durumlarını takip ederek düzenli raporlama süreçlerinde görev aldım. Etkinlik planlama ve onay süreçlerini yönettim.",
                      },

                      {
                        title: "Genç Kızılay Şahinbey (Gaziantep) İlçe Başkanlığı",
                        date: "2024 - 2024",
                        description:
                          "Şahinbey ilçesinde sosyal yardımlaşma faaliyetleri, etkinlik organizasyonları ve toplumsal farkındalık çalışmaları yürüttüm.",
                      },
                    ],
                  },
  projects: {
    title: "Projeler / İş Odağı",
    items: [
      {
        title: "Pura Tercüme",
        description:
          "Resmi, akademik, hukuki ve çok dilli iletişime odaklanan profesyonel çeviri ve dil hizmetleri markası.",
      },
      {
        title: "Eğitim Teknolojileri",
        description:
          "Ders planlama, öğrenci takibi ve eğitim yönetimini geliştirmek için dijital araçlara ve YZ destekli sistemlere ilgi.",
      },
      {
        title: "YZ Destekli İçerik",
        description:
          "Eğitim ve iş iletişimi için YZ tabanlı video üretimi, seslendirme araçları ve dijital içerik üretimi.",
      },
    ],
  },
  contact: {
    title: "Bağlantı Kuralım",
    text: "Profesyonel çeviri hizmetleri, eğitim projeleri ve uluslararası iş birlikleri için benimle iletişime geçebilirsiniz.",
    emailLabel: "E-posta",
    locationLabel: "Konum",
    location: "Türkiye",
    sendEmail: "E-posta Gönder",
    downloadCv: "CV İndir",
  },
  footer: {
    text: "© 2026 MUSA ÇİVİOĞLU. Tüm hakları saklıdır.",
  },
} as const;

export type Content = typeof trContent;

