// --- KİŞİSEL BİLGİLER VERİTABANI --- //
const veri = {
    profil: {
        isim: "Muhammet Gölpınar",
        unvan: "Bilişim Teknolojileri Öğrencisi",
        resim: "profil.jpg",
        hakkimda: "Teknolojiyi sadece tüketen değil, üreten tarafta olmayı hedefleyen bir bilişim teknolojileri öğrencisiyim. Yazılım geliştirme, web uygulamaları ve yapay zeka alanlarında kendimi sürekli geliştiriyorum. Disiplinli çalışma alışkanlığım ve meraklı yapım sayesinde yeni teknolojileri hızlıca öğrenir, projelerle pekiştiririm. Amacım, gelecekte kullanıcıların hayatını kolaylaştıran etkili ve yenilikçi çözümler geliştirmektir."
    },
    iletisim: {
        eposta: "muhammetgolpinar@gmail.com",
        telefon: "+90 555 045 2658",
        konum: "Gazi Mah. 1413 sok. No:16/6 Sultangazi / İstanbul",
        websitesi: "https://muhammetgolpinar.github.io",
        linkedin: "https://www.linkedin.com/in/muhammet-g%C3%B6lpinar-10875a379"
    },
    egitim: [
        { yil: "2023 - Günümüz", okul: "Şehit Büyükelçi İsmail Erez Mesleki ve Teknik Anadolu Lisesi ", bolum: "Bilişim Teknolojileri Alanı" },
        { yil: "2019 - 2023", okul: "Veysel Sacıhan İmam Hatip Ortaokulu", bolum: "Ortaokul Eğitimi" },
        { yil: "2015 - 2019", okul: "Gazi İlköğretim Okulu", bolum: "İlkokul Eğitimi" }
    ],
    // --- YENİ EKLENEN BAŞARILAR BÖLÜMÜ --- //
    basarilar: [
        { 
            baslik: "Ayın Öğrencisi (2025-2026)", 
            detay: "Kasım Ayı Öğrencisi",
            aciklama: "2025-2026 Eğitim Öğretim Yılı kapsamında Kasım Ayı Öğrencisi seçildim. Disiplinli çalışma ve sorumluluk bilincimin takdir edilmesinden gurur duydum." 
        },
        { 
            baslik: "Ayın Öğrencisi (2024-2025)", 
            detay: "Aralık Ayı Öğrencisi",
            aciklama: "2024-2025 Eğitim Öğretim Yılı kapsamında Aralık Ayı Öğrencisi seçildim. Olumlu tutumum ve çalışma disiplinimle bu başarıyı elde ettim." 
        },
        { 
            baslik: "9. Sınıf Okul Birinciliği", 
            detay: "2023-2024 Eğitim Yılı",
            aciklama: "9. sınıflar arasında okul birincisi olarak başarılı bir dönem geçirdim. Hedef odaklı yaklaşımım ve öğretmenlerimin desteğiyle bu başarıyı kazandım." 
        },
        { 
            baslik: "10. Sınıf Sınıf Birinciliği", 
            detay: "Akademik Başarı",
            aciklama: "10. sınıfta da akademik başarımı sürdürerek sınıf birincisi oldum. Disiplinli çalışma anlayışımı istikrarlı bir şekilde devam ettirdim." 
        },
        { 
            baslik: "Bilişim Teknolojileri Bölüm Birinciliği", 
            detay: "9. Sınıftan İtibaren",
            aciklama: "Şu anda 11. sınıf öğrencisiyim ve 9. sınıftan bu yana bölüm birincisi olarak eğitimimi sürdürmekteyim." 
        }
    ],
    proje: {
        logo: "logo.png",
        baslik: "MuGöl PORTAL Projesi",
        aciklama: "MuGöl PORTAL, kullanıcıların farklı ihtiyaçlarına tek bir platform üzerinden ulaşmasını sağlayan çok yönlü bir web projesidir. Haber, oyun, araçlar ve dijital içerikleri sade bir arayüzde bir araya getirir. Tasarım ve geliştirme süreci baştan sona yapay zekanın desteğiyle yürütülmüş olup platform sürekli güncellenerek gelişmeye devam etmektedir.",
        link: "https://mugol-portal.github.io"
    },
    yetenekler: [
        { kategori: "Programlama", ikon: "fa-code", liste: ["HTML5", "CSS3", "JavaScript", "Python", "Java", "C#"] },  
        { kategori: "Yapay Zeka", ikon: "fa-robot", liste: ["Claude", "Google AI Studio", ] },
        { kategori: "Ortam & Git", ikon: "fa-terminal", liste: ["VS Code", "Visual Studio", "GitHub", "IDLE Python"] },
        { kategori: "Web & Veri Tabanı", ikon: "fa-database", liste: ["WordPress", "SQL", "MS Access"] }, 
        { kategori: "Tasarım & Ofis", ikon: "fa-pen-nib", liste: ["Canva", "Photoshop", "After Effects", ] },
        { kategori: "Yabancı Dil", ikon: "fa-language", liste: ["İngilizce"] } 
    ],
    kulupler: [
        {
            baslik: "Değerler Kulübü",
            tur: "Okul İçi",
            ikon: "fa-mosque",
            aciklama: "Değerler Kulübü kapsamında okul mescidimizin temiz ve düzenli kalması için gönüllü olarak çalışmalar yaptık. Mescidin temizliği, düzeni ve hijyenine dikkat ederek öğrencilerin daha temiz ve huzurlu bir ortamda ibadet edebilmesine katkı sağladık. Bu çalışma sayesinde sorumluluk alma, yardımlaşma ve topluma faydalı olma bilinci kazandık."
        },
        {
            baslik: "Çevre Koruma Kulübü",
            tur: "Okul İçi",
            ikon: "fa-leaf",
            aciklama: "Çevre Koruma Kulübü kapsamında sıfır atık, yeşil dönüşüm, doğa ve çevre bilinci üzerine çeşitli çalışmalar gerçekleştirdik. \"Bir Fidanım Olsun\" etkinliği ile fidan dikerek doğaya katkı sağladık. Ayrıca sokak hayvanlarının ihtiyaçlarına destek olmak amacıyla onlar için su bıraktık. Bu çalışmalar sayesinde çevreyi koruma, doğaya duyarlılık ve sosyal sorumluluk bilinci kazandık."
        },
        {
            baslik: "Satranç Kulübü",
            tur: "Okul İçi",
            ikon: "fa-chess",
            aciklama: "Satranç Kulübü kapsamında okulda düzenlenen satranç turnuvasında görev aldım. Turnuva sürecinde organizasyon, düzen ve koordinasyon konularında sorumluluk üstlenerek ekip çalışması ve iletişim becerilerimi geliştirdim."
        },
        {
            baslik: "Kütüphanecilik ve Edebiyat Kulübü",
            tur: "Okul İçi",
            ikon: "fa-book-open",
            aciklama: "Kütüphanecilik ve Edebiyat Kulübü bünyesinde yürütülen \"Okulumuzda Okuma Kültürü Oluşturuyoruz\" projesinde aktif görev aldım. Proje kapsamında kitap okuma alışkanlığını teşvik etmeye yönelik etkinliklerin planlanması, içerik hazırlanması ve duyuru çalışmalarında yer aldım. Bu süreçte takım çalışması, iletişim ve organizasyon becerilerimi geliştirdim."
        }
    ],
    etkinlikler: [
        {
            baslik: "6 Ekim İstanbul'un İşgalden Kurtuluşu Günü Kutlama Programı",
            ikon: "fa-flag"
        },
        {
            baslik: "10 Kasım Atatürk'ü Anma Töreni",
            ikon: "fa-star"
        },
        {
            baslik: "12 Mart İstiklal Marşı'nın Kabulü Programı",
            ikon: "fa-music"
        },
        {
            baslik: "18 Mart Çanakkale Zaferi ve Şehitleri Anma Töreni",
            ikon: "fa-dove"
        },
        {
            baslik: "19 Mayıs Atatürk'ü Anma, Gençlik ve Spor Bayramı Töreni",
            ikon: "fa-running"
        },
        {
            baslik: "Medeniyet Okumaları Projesi",
            ikon: "fa-book"
        },
        {
            baslik: "Ben Okuyorum İstanbul Okuyor Projesi",
            ikon: "fa-book-reader"
        }
    ],
    etkinliklerAciklama: "Bu etkinlik ve projelerde aktif görev alarak organizasyon, ekip çalışması ve iletişim becerilerimi geliştirdim. Katıldığım her etkinlik sorumluluk bilincimi ve sosyal yönümü güçlendirdi.",
    sertifikalar: [
        { isim: "Anthropic Claude Eğitimi", kurum: "BTK AKADEMİ" },
        { isim: "Yapay Zekaya Giriş", kurum: "BTK AKADEMİ" },
        { isim: "HTML5 İLE WEB GELİŞTİRME", kurum: "BTK AKADEMİ" },
        { isim: "CSS TEMELLERİ", kurum: "BTK AKADEMİ" },
        { isim: "ChatGPT Eğitimi", kurum: "BTK AKADEMİ" }
    ]
};

// --- BİLGİLERİ HTML'E AKTARMA İŞLEMİ --- //
document.addEventListener("DOMContentLoaded", () => {
    // 1. Banner & Profil
    document.getElementById("banner-img").src = veri.profil.resim;
    document.getElementById("banner-name").innerText = veri.profil.isim;
    document.getElementById("banner-title").innerText = veri.profil.unvan;
    document.getElementById("about-text").innerText = veri.profil.hakkimda;

    // 2. İletişim Bilgileri
    document.getElementById("contact-email").innerHTML = `<i class="fas fa-envelope"></i> <a href="mailto:${veri.iletisim.eposta}">${veri.iletisim.eposta}</a>`;
    document.getElementById("contact-phone").innerHTML = `<i class="fas fa-phone"></i> <span>${veri.iletisim.telefon}</span>`;
    document.getElementById("contact-location").innerHTML = `<i class="fas fa-map-marker-alt"></i> <span>${veri.iletisim.konum}</span>`;
    document.getElementById("contact-web").innerHTML = `<i class="fas fa-globe"></i> <a href="${veri.iletisim.websitesi}" target="_blank">muhammetgolpinar.github.io</a>`;
    document.getElementById("contact-linkedin").innerHTML = `<i class="fab fa-linkedin"></i> <a href="${veri.iletisim.linkedin}" target="_blank">LinkedIn</a>`;

    // 3. Eğitim Listesi
    const egitimContainer = document.getElementById("education-list");
    veri.egitim.forEach(egt => {
        egitimContainer.innerHTML += `
            <div class="edu-item">
                <div class="edu-year">${egt.yil}</div>
                <div class="edu-school">${egt.okul}</div>
                <div class="edu-dep">${egt.bolum}</div>
            </div>
        `;
    });

    // 4. Başarılar (Yeni Eklenen Fonksiyon)
    const basariContainer = document.getElementById("achievements-list"); // HTML'de bu ID'li bir div olduğundan emin olun
    if(basariContainer) {
        veri.basarilar.forEach(basari => {
            basariContainer.innerHTML += `
                <div class="achievement-item">
                    <h5><i class="fas fa-trophy"></i> ${basari.baslik}</h5>
                    <small>${basari.detay}</small>
                    <p>${basari.aciklama}</p>
                </div>
            `;
        });
    }

    // 5. Proje
    document.getElementById("project-logo").src = veri.proje.logo;
    document.getElementById("project-title").innerText = veri.proje.baslik;
    document.getElementById("project-desc").innerText = veri.proje.aciklama;
    document.getElementById("project-link").href = veri.proje.link;

    // 6. Yetenekler
    const yeteneklerContainer = document.getElementById("skills-grid");
    veri.yetenekler.forEach(yet => {
        let spanlar = yet.liste.map(item => `<span>${item}</span>`).join("");
        let isLanguage = yet.kategori === "Yabancı Dil" ? "lang-box" : ""; 
        yeteneklerContainer.innerHTML += `
            <div class="skill-box ${isLanguage}">
                <h4><i class="fas ${yet.ikon}"></i> ${yet.kategori}</h4>
                <div class="skill-tags">${spanlar}</div>
            </div>
        `;
    });

    // 7. Sertifikalar
    const sertifikaContainer = document.getElementById("cert-list");
    if (sertifikaContainer) {
        veri.sertifikalar.forEach(sert => {
            sertifikaContainer.innerHTML += `
                <div class="cert-item">
                    <div class="cert-icon"><i class="fas fa-award"></i></div>
                    <div>
                        <h5>${sert.isim}</h5>
                        <p>${sert.kurum}</p>
                    </div>
                </div>
            `;
        });
    }

    // 8. Etkinlik & Projeler
    const etkinliklerContainer = document.getElementById("etkinlikler-list");
    if (etkinliklerContainer) {
        veri.etkinlikler.forEach((etk, i) => {
            etkinliklerContainer.innerHTML += `
                <div class="etkinlik-item">
                    <div class="etkinlik-no">${i + 1}</div>
                    <div class="etkinlik-icon"><i class="fas ${etk.ikon}"></i></div>
                    <div class="etkinlik-baslik">${etk.baslik}</div>
                </div>
            `;
        });
        const aciklamaEl = document.getElementById("etkinlikler-aciklama");
        if (aciklamaEl) aciklamaEl.innerText = veri.etkinliklerAciklama;
    }

    // 9. Kulüp Üyelikleri
    const kulupler = document.getElementById("kulupler-list");
    if (kulupler) {
        veri.kulupler.forEach(kulup => {
            kulupler.innerHTML += `
                <div class="kulup-item">
                    <div class="kulup-icon"><i class="fas ${kulup.ikon}"></i></div>
                    <div class="kulup-body">
                        <div class="kulup-header">
                            <h5>${kulup.baslik}</h5>
                            <span class="kulup-badge">${kulup.tur}</span>
                        </div>
                        <p>${kulup.aciklama}</p>
                    </div>
                </div>
            `;
        });
    }
});

