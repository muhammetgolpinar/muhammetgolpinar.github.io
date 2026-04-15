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
        websitesi: "https://mugol-portal.github.io",
        linkedin: "https://www.linkedin.com/in/muhammet-g%C3%B6lpinar-10875a379"
    },
    egitim: [
        { yil: "2023 - Günümüz", okul: "Şehit Büyükelçi İsmail Erez Mesleki ve Teknik Anadolu Lisesi ", bolum: "Bilişim Teknolojileri Alanı" },
        { yil: "2019 - 2023", okul: "Veysel Sacıhan İmam Hatip Ortaokulu", bolum: "Ortaokul Eğitimi" },
        { yil: "2015 - 2019", okul: "Gazi İlköğretim Okulu", bolum: "İlkokul Eğitimi" }
    ],
    proje: {
        logo: "logo.png",
        baslik: "MuGöl PORTAL Projesi",
        aciklama: "MuGöl PORTAL, kullanıcıların farklı ihtiyaçlarına tek bir platform üzerinden hızlı ve pratik şekilde ulaşmasını sağlayan çok yönlü bir web projesidir; haber, oyun, araçlar ve çeşitli dijital içerikleri sade ve anlaşılır bir arayüzle bir araya getirerek zaman kaybını azaltır ve kullanıcı deneyimini ön planda tutar. Bu projenin tasarımı ve geliştirilmesi baştan sona yapay zekanın desteğiyle gerçekleştirilmiştir. Sürekli güncellenen yapısı sayesinde yeni özelliklerle gelişmeye devam eden platform, sadece bir web sitesi olmanın ötesinde dijital dünyayı daha düzenli, erişilebilir ve kullanışlı hale getirmeyi amaçlamaktadır.",
        link: "https://mugol-portal.github.io"
    },
    yetenekler: [
        { kategori: "Programlama", ikon: "fa-code", liste: ["HTML5", "CSS3", "JavaScript", "Python", "Java", "C#"] },
        { kategori: "Yapay Zeka", ikon: "fa-robot", liste: ["Claude", "Google AI Studio", "Prompt Eng."] },
        { kategori: "Ortam & Git", ikon: "fa-terminal", liste: ["VS Code", "Visual Studio", "Git & GitHub", "IDLE"] },
        { kategori: "Web & Veri Tabanı", ikon: "fa-database", liste: ["WordPress", "SQL", "MS Access"] },
        { kategori: "Tasarım & Ofis", ikon: "fa-pen-nib", liste: ["Canva", "Photoshop", "After Effects", "MS Word"] },
        { kategori: "Yabancı Dil", ikon: "fa-language", liste: ["İngilizce"] } 
    ],
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
    // 1. Banner
    document.getElementById("banner-img").src = veri.profil.resim;
    document.getElementById("banner-name").innerText = veri.profil.isim;
    document.getElementById("banner-title").innerText = veri.profil.unvan;
    
    // 2. Hakkımda
    document.getElementById("about-text").innerText = veri.profil.hakkimda;

    // 3. İletişim
    document.getElementById("contact-email").innerHTML = `<i class="fas fa-envelope"></i> <a href="mailto:${veri.iletisim.eposta}">${veri.iletisim.eposta}</a>`;
    document.getElementById("contact-phone").innerHTML = `<i class="fas fa-phone"></i> <span>${veri.iletisim.telefon}</span>`;
    document.getElementById("contact-location").innerHTML = `<i class="fas fa-map-marker-alt"></i> <span>${veri.iletisim.konum}</span>`;
    document.getElementById("contact-web").innerHTML = `<i class="fas fa-globe"></i> <a href="${veri.iletisim.websitesi}" target="_blank">mugol-portal.github.io</a>`;
    document.getElementById("contact-linkedin").innerHTML = `<i class="fab fa-linkedin"></i> <a href="${veri.iletisim.linkedin}" target="_blank">LinkedIn Profilim</a>`;

    // 4. Proje
    document.getElementById("project-logo").src = veri.proje.logo;
    document.getElementById("project-title").innerText = veri.proje.baslik;
    document.getElementById("project-desc").innerText = veri.proje.aciklama;
    document.getElementById("project-link").href = veri.proje.link;

    // 5. Eğitim
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
    veri.sertifikalar.forEach(sert => {
        sertifikaContainer.innerHTML += `
            <div class="cert-item">
                <i class="fas fa-award"></i>
                <div>
                    <h5>${sert.isim}</h5>
                    <p>${sert.kurum}</p>
                </div>
            </div>
        `;
    });
});
