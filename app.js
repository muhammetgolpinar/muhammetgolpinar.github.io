/* İndirilen görsellerde kare/düz zeminli logoları yuvarlak çerçeveye tam oturtmak için:
   görselin dört köşesi opak ve beyaz değilse "kare logo" sayılır. */
window.logoKare=function(im){
  if(im.__kare!==undefined)return im.__kare;
  var r=false;
  try{
    var c=document.createElement('canvas');c.width=c.height=16;
    var g=c.getContext('2d');g.drawImage(im,0,0,16,16);
    var n=0;[[1,1],[14,1],[1,14],[14,14]].forEach(function(p){
      var d=g.getImageData(p[0],p[1],1,1).data;
      if(d[3]>200&&(d[0]*.299+d[1]*.587+d[2]*.114)<235)n++;
    });
    r=n>=3;
  }catch(e){r=false}
  try{im.__kare=r}catch(e){}
  return r;
};
var veri={
egitim:[["Şehit Büyükelçi İsmail Erez Mesleki ve Teknik Anadolu Lisesi","Bilişim Teknolojileri Alanı","2023 - Günümüz"]],
sertifikalar:[["Çalışanların Temel İş Sağlığı ve Güvenliği Eğitimi","T.C. Millî Eğitim Bakanlığı","Kasım 2026",[]],
["Kent Yaşamı","T.C. Millî Eğitim Bakanlığı","Kasım 2026",[]],
["Sağlıklı Beslenme","T.C. Millî Eğitim Bakanlığı","Kasım 2026",[]],
["Çevrim İçi Toplantı Uygulaması: Microsoft Teams Kullanımı","Enstitü İstanbul İSMEK","Kasım 2026",[]],
["Microsoft Word Kullanımı","Enstitü İstanbul İSMEK","Kasım 2026",[]],
["Windows 11 İşletim Sistemi","BTK Akademi","Kasım 2026",[]],
["İşletim Sistemlerine Giriş","BTK Akademi","Kasım 2026",[]],
["Aile İçi Teknoloji Okuryazarlığı","BTK Akademi","Kasım 2026",[]],
["Microsoft Word Temelleri","BTK Akademi","Kasım 2026",[]],
["Su Okuryazarlığı","T.C. Millî Eğitim Bakanlığı","Kasım 2026",[]],
["Kuraklıkla Mücadele","T.C. Millî Eğitim Bakanlığı","Kasım 2026",[]],
["Türk Sosyal Hayatında Aile","T.C. Millî Eğitim Bakanlığı","Kasım 2026",[]],
["Bireysel Gelişim ve Kültürel Farkındalık Eğitimi","T.C. Millî Eğitim Bakanlığı","Kasım 2026",[]],
["Çevre - Ekoloji Okuryazarlığı","T.C. Millî Eğitim Bakanlığı","Kasım 2026",[]],
["Medya Okuryazarlığı","BTK Akademi","Kasım 2026",[]],
["Genel İş Sağlığı ve Güvenliği","Bilgeİş","Kasım 2026",[]],
["Ekolojik Bilinç Yaklaşımı","Enstitü İstanbul İSMEK","Kasım 2026",[]],
["İstanbul\u2019un Edebi, Tarihi ve Kültürel Hafızası","Enstitü İstanbul İSMEK","Kasım 2026",[]],
["Sürdürülebilir Yaşam ve Kentsel Ekoloji","Enstitü İstanbul İSMEK","Kasım 2026",[]],
["Geri Dönüşüm ve Sıfır Atık","T.C. Millî Eğitim Bakanlığı","Kasım 2026",[]],
["Copilot","BTK Akademi","Kasım 2026",[]],
["Sosyal Medya İçerik Üretimi (Hedef Kitle Analizi ve Stratejik İletişim)","BTK Akademi","Kasım 2026",[]],
["Sağlıklı Yaşam - Teknoloji ve Kumar Bağımlılığı","T.C. Millî Eğitim Bakanlığı","Kasım 2026",[]],
["İş Sağlığı ve Güvenliği","T.C. Millî Eğitim Bakanlığı","Kasım 2026",[]],
["Kültür Okuryazarlığı","BTK Akademi","Kasım 2026",[]],
["Vatandaşlık Okuryazarlığı","BTK Akademi","Kasım 2026",[]],
["Öğrenmeyi Öğrenme","T.C. Millî Eğitim Bakanlığı","Kasım 2026",[]],
["Üretken Yapay Zekaya Giriş","BTK Akademi","Kasım 2026",[]],
["Prompt Mühendisliği","BTK Akademi","Kasım 2026",[]],
["Dijital Okuryazarlık (Orta Seviye)","T.C. Millî Eğitim Bakanlığı","Kasım 2026",[]],
["Sürdürülebilirlik Okuryazarlığı","BTK Akademi","Kasım 2026",[]],
["Nesnelerin İnterneti (Temel Seviye)","T.C. Millî Eğitim Bakanlığı","Kasım 2026",[]],
["Meslek Etiği","T.C. Millî Eğitim Bakanlığı","Kasım 2026",[]],
["Dijital Becerilerin Geliştirilmesi","T.C. Millî Eğitim Bakanlığı","Kasım 2026",[]],
["Dijital Yaşam Becerileri","Bilgeİş","Kasım 2026",[],"odtu"],
["Dijital Tehditlerle Başa Çıkma","Enstitü İstanbul İSMEK","Kasım 2026",[]],
["Yapay Zeka Dünyasına Giriş","BTK Akademi","Ekim 2026",[]],
["Dijital Okuryazarlık","BTK Akademi","Ekim 2026",[]],
["Dijital Okuryazarlık (YEĞİTEK)","BTK Akademi","Ekim 2026",[]],
["Dijital Okuryazarlık (Temel Seviye)","T.C. Millî Eğitim Bakanlığı","Ekim 2026",[]],
["201: HTML5 &amp; CSS","Turkcell Geleceği Yazanlar","Ekim 2026",[]],
["İnternette Güvenliğinizi Arttırın","Bilgeİş","Ekim 2026",[]],
["101: HTML","Turkcell Geleceği Yazanlar","Ekim 2026",[]],
["Temel HTML ve CSS","Enstitü İstanbul İSMEK","Ekim 2026",[]],
["Bilgi Teknolojilerine Giriş","BTK Akademi","Ekim 2026",[]],
["Yapay Zeka Okuryazarlığı","T.C. Millî Eğitim Bakanlığı","Ekim 2026",[]],
["Bilgi Okuryazarlığı","BTK Akademi","Ekim 2026",[]],
["Yapay Zeka Uygulamaları","BTK Akademi","Ekim 2026",[]],
["Herkes İçin Yapay Zeka I","Bilgeİş","Ekim 2026",[]],
["CSS","Bilgeİş","Ekim 2026",[]],
["HTML Eğitimi","Bilgeİş","Ekim 2026",[]],
["Gemini Veo","BTK Akademi","Ekim 2026",[]],
["Yapay Zekaya Giriş","BTK Akademi","Nisan 2026",[]],
["Anthropic Claude","BTK Akademi","Nisan 2026",[]],
["ChatGPT","BTK Akademi","Nisan 2026",[]],
["CSS Temelleri","BTK Akademi","Nisan 2026",[]],
["HTML5 İle Web Geliştirme","BTK Akademi","Nisan 2026",[]],
["Medeniyet Okumaları Projesi Katılım Belgesi","İstanbul Valiliği","Haziran 2025",[]]],
basarilar:[["Üstün Başarı Belgesi","Lise - Akademik Başarı","Lise eğitimim süresince akademik başarımın bir sonucu olarak Üstün Başarı Belgesi almaya hak kazandım.",1],
["Ayın Öğrencisi (2025-2026)","Kasım Ayı Öğrencisi","2025-2026 Eğitim Öğretim Yılı kapsamında Kasım Ayı Öğrencisi seçildim. Disiplinli çalışma ve sorumluluk bilincimin takdir edilmesinden gurur duydum."],
["Ayın Öğrencisi (2024-2025)","Aralık Ayı Öğrencisi","2024-2025 Eğitim Öğretim Yılı kapsamında Aralık Ayı Öğrencisi seçildim. Olumlu tutumum ve çalışma disiplinimle bu başarıyı elde ettim."],
["9. Sınıf Okul Birinciliği","2023-2024 Eğitim Yılı","9. sınıflar arasında okul birincisi olarak başarılı bir dönem geçirdim. Hedef odaklı yaklaşımım ve öğretmenlerimin desteğiyle bu başarıyı kazandım."],
["10. Sınıf Sınıf Birinciliği","Akademik Başarı","10. sınıfta da akademik başarımı sürdürerek sınıf birincisi oldum. Disiplinli çalışma anlayışımı istikrarlı bir şekilde devam ettirdim."],
["Bilişim Teknolojileri Bölüm Birinciliği","9. Sınıftan İtibaren","Şu anda 12. sınıf öğrencisiyim ve 9. sınıftan bu yana bölüm birincisi olarak eğitimimi sürdürmekteyim."],
["Onur Belgesi","9, 10 ve 11. Sınıflar - Her Dönem","9, 10 ve 11. sınıflarda her dönem istikrarlı bir şekilde onur belgesi alarak akademik başarımı sürdürdüm."]],
beceriler:[["💻","Programlama",["HTML5","CSS3","JavaScript","Python","Java","C#"]],["🤖","Yapay Zeka",["Claude","Google AI Studio"]],["🛠️","Ortam & Git",["VS Code","Visual Studio","GitHub","IDLE Python"]],["🗄️","Web & Veri Tabanı",["WordPress","SQL","MS Access"]],["🎨","Tasarım & Ofis",["Canva","Photoshop","After Effects"]],["🌍","Yabancı Dil",["İngilizce: A2"]]],
topluluklar:[["Medeniyet Okumaları Projesi"],
["Ben Okuyorum İstanbul Okuyor Projesi"],
["Çevre Koruma Kulübü","Çevre Koruma Kulübü kapsamında sıfır atık, yeşil dönüşüm, doğa ve çevre bilinci üzerine çeşitli çalışmalar gerçekleştirdik. \"Bir Fidanım Olsun\" etkinliği ile fidan dikerek doğaya katkı sağladık. Bu çalışmalar sayesinde çevreyi koruma, doğaya duyarlılık ve sosyal sorumluluk bilinci kazandık."],
["Değerler Kulübü","Değerler Kulübü kapsamında okul mescidimizin temiz ve düzenli kalması için gönüllü olarak çalışmalar yaptık. Mescidin temizliği, düzeni ve hijyenine dikkat ederek öğrencilerin daha temiz ve huzurlu bir ortamda ibadet edebilmesine katkı sağladık. Bu çalışma sayesinde sorumluluk alma, yardımlaşma ve topluma faydalı olma bilinci kazandık."],
["Kütüphanecilik Kulübü","Kütüphanecilik ve Edebiyat Kulübü bünyesinde yürütülen \"Okulumuzda Okuma Kültürü Oluşturuyoruz\" projesinde aktif görev aldım. Proje kapsamında kitap okuma alışkanlığını teşvik etmeye yönelik etkinliklerin planlanması, içerik hazırlanması ve duyuru çalışmalarında yer aldım. Bu süreçte takım çalışması, iletişim ve organizasyon becerilerimi geliştirdim."],
["Satranç Kulübü","Satranç Kulübü kapsamında okulda düzenlenen satranç turnuvasında görev aldım. Turnuva sürecinde organizasyon, düzen ve koordinasyon konularında sorumluluk üstlenerek ekip çalışması ve iletişim becerilerimi geliştirdim."],
["Hayvanları Koruma Kulübü","Hayvanları Koruma Kulübü kapsamında sokak hayvanlarının ihtiyaçlarına destek olmak amacıyla onlar için su bıraktık."]],
programlar:["6 Ekim İstanbul’un İşgalden Kurtuluşu Günü Kutlama Programı","10 Kasım Atatürk’ü Anma Töreni","12 Mart İstiklal Marşı’nın Kabulü Programı","18 Mart Çanakkale Zaferi ve Şehitleri Anma Töreni","19 Mayıs Atatürk’ü Anma, Gençlik ve Spor Bayramı Töreni"]
};
function put(id,h){document.getElementById(id).innerHTML=h}
function clubs(){return '<div class="ek" id="ek"><div class="cl-h">Etkinlik ve topluluklar:</div><ul class="cl">'+veri.topluluklar.map(function(t){return '<li>'+(t[1]?'<details><summary>'+t[0]+'</summary><p>'+t[1]+'</p></details>':t[0])+'</li>'}).join('')+'</ul><div class="cl-h">Tören ve programlar:</div><p>Bu etkinlik ve projelerde aktif görev alarak organizasyon, ekip çalışması ve iletişim becerilerimi geliştirdim. Katıldığım her etkinlik sorumluluk bilincimi ve sosyal yönümü güçlendirdi.</p><ul class="cl">'+veri.programlar.map(function(t){return '<li>'+t+'</li>'}).join('')+'</ul></div><button class="ekb" id="ekb" type="button" aria-expanded="false">Daha fazla göster</button>'}
put('egitim-list',veri.egitim.map(function(e,i){return '<div class="row"><div class="logo k"><img src="logolar/lise.png" alt="'+e[0]+'" loading="lazy" decoding="async" onerror="this.outerHTML=\'🎓\'"></div><div><h3>'+e[0]+'</h3><div class="s">'+e[1]+'</div><div class="m">'+e[2]+'</div>'+(i==0?clubs():'')+'</div></div>'}).join(''));
var eb=document.getElementById('ekb');eb.addEventListener('click',function(){var a=document.getElementById('ek').classList.toggle('open');eb.textContent=a?'Daha az göster':'Daha fazla göster';eb.setAttribute('aria-expanded',a)});
var AY=['Oca','Şub','Mar','Nis','May','Haz','Tem','Ağu','Eyl','Eki','Kas','Ara'];
function sure(b){var n=new Date(),m=(n.getFullYear()-b[0])*12+n.getMonth()+2-b[1],y=Math.floor(m/12),a=m%12;return (y?y+' yıl':'')+(y&&a?' ':'')+(a?a+' ay':'')}
function tarih(b){return AY[b[1]-1]+' '+b[0]+' - Devam ediyor · '+sure(b)}
function lg(src,fb,k){return '<div class="logo'+(k?' k':'')+'"><img src="logolar/'+src+'" alt="" loading="lazy" decoding="async" onerror="this.outerHTML=\''+fb+'\'"></div>'}
var deneyim=[
{logo:'arcelik.png',fb:'💼',k:1,rol:'IT Intern / Bilgi İşlem Stajyeri',kurum:'Arçelik Türkiye · Stajyer',bas:[2026,9],yer:'Kadıköy, İstanbul, Türkiye · Ofiste'},
{logo:'logo.png',fb:'🌐',kurum:'MuGöl PORTAL',roller:[
{rol:'Google Play Store Yayıncısı',bas:[2026,10],acik:'MuGöl PORTAL hem web sitesi hem de Google Play Store uygulaması olarak yayında; ekosistemi Trusted Web Activity (TWA) mimarisiyle geliştirerek Google Play Store yayın prodüksiyon kanalında kullanıcılarla buluşturduk. ‘Dijital dünya, tek bir portalda’ sloganıyla web ve mobil platformlarda ölçeklenebilir dijital çözümler sunmaya devam ediyorum.'},
{rol:'Google AdSense Entegrasyonu &amp; Reklam Yönetimi',bas:[2026,1],acik:'Ocak 2026 itibarıyla MuGöl PORTAL ekosistemine Google AdSense reklam altyapısını entegre ederek platformun dijital monetizasyon süreçlerini ve gelir modelini aktif hale getirdim; bu sayede projenin reklam yerleşimlerini optimize ederek sürdürülebilir bir yapı kazandırdım.'},
{rol:'Kurucu &amp; Geliştirici',kurum:'Kendi işim',bas:[2025,10],acik:'MuGöl PORTAL projesini “Dijital dünya, tek bir portalda.” vizyonuyla 2 Ekim 2025 tarihinde GitHub üzerinde açık kaynaklı olarak yayınladım; bu doğrultuda modern web teknolojilerini ve Progressive Web App (PWA) altyapısını kullanarak kullanıcıların tarayıcı üzerinden hızlı, kesintisiz ve yerel bir uygulama deneyimi yaşamasını sağlayan dinamik bir ekosistem inşa ettim.'}]}
];
put('deneyim-list',deneyim.map(function(d){
if(!d.roller)return '<div class="row">'+lg(d.logo,d.fb,d.k)+'<div style="flex:1;min-width:0"><div class="hd"><h3>'+d.rol+'</h3><span class="badge">Devam ediyor</span></div><div class="s">'+d.kurum+'</div><div class="m">'+tarih(d.bas)+'</div><div class="m">'+d.yer+'</div></div></div>';
var ilk=d.roller.reduce(function(a,r){return r.bas[0]*12+r.bas[1]<a[0]*12+a[1]?r.bas:a},[9999,1]);
return '<div class="row">'+lg(d.logo,d.fb,d.k)+'<div style="flex:1;min-width:0"><h3>'+d.kurum+'</h3><div class="m">'+sure(ilk)+'</div><div class="tl">'+d.roller.map(function(r){return '<div class="rl"><div class="hd"><h3>'+r.rol+'</h3><span class="badge">Devam ediyor</span></div>'+(r.kurum?'<div class="s">'+r.kurum+'</div>':'')+'<div class="m">'+tarih(r.bas)+'</div><p>'+r.acik+'</p></div>'}).join('')+'</div></div></div>'}).join(''));
var logolar={'BTK Akademi':'logolar/btk.png','Bilgeİş':'logolar/bilgeis.png','Enstitü İstanbul İSMEK':'logolar/ismek.png','T.C. Millî Eğitim Bakanlığı':'logolar/meb.png','Turkcell Geleceği Yazanlar':'logolar/turkcell.png','ODTÜ Geliştirme Vakfı Okulları':'logolar/odtu.png','İstanbul Valiliği':'logolar/valilik.png'};
var KL={'T.C. Millî Eğitim Bakanlığı':'meb','BTK Akademi':'btk','Bilgeİş':'bilgeis','Turkcell Geleceği Yazanlar':'turkcell','Enstitü İstanbul İSMEK':'ismek','ODTÜ Geliştirme Vakfı Okulları':'odtu','İstanbul Valiliği':'istanbul-valiligi'};
function slug(t){return t.replace(/[ÇçĞğİıÖöŞşÜü]/g,function(m){return 'CcGgIiOoSsUu'['ÇçĞğİıÖöŞşÜü'.indexOf(m)]}).toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-+|-+$/g,'')}
function klasor(k){return KL[k]||slug(k)}
function bYol(c,e){return (c[4]||klasor(c[1]))+'/'+slug(c[0])+'.'+e}
function th(c){var b=(c[4]||klasor(c[1]))+'/'+slug(c[0]);return '<img class="bth bg" tabindex="0" role="button" aria-label="Belgeyi aç" data-i="'+veri.sertifikalar.indexOf(c)+'" data-b="'+b+'" data-n="1" src="'+b+'.png" alt="Belge önizleme" loading="lazy" decoding="async" onerror="var e=[\'png\',\'jpg\',\'jpeg\',\'webp\'],n=+this.dataset.n;if(n<4){this.dataset.n=n+1;this.src=this.dataset.b+\'.\'+e[n]}else this.remove()">'}
function bMsg(t){var x=document.getElementById('bgt');if(!x){x=document.createElement('div');x.id='bgt';x.setAttribute('role','status');document.body.appendChild(x)}x.textContent=t;x.classList.add('on');clearTimeout(x._t);x._t=setTimeout(function(){x.classList.remove('on')},4200)}
function bAc(c){var ex=['png','jpg','jpeg','webp'],ov=document.getElementById('bov'),l;
if(!ov){ov=document.createElement('div');ov.id='bov';ov.hidden=true;ov.setAttribute('role','dialog');ov.setAttribute('aria-modal','true');ov.setAttribute('aria-label','Belge görünümü');
ov.innerHTML='<div class="bbx"><button type="button" class="bx" aria-label="Kapat">✕</button><div class="bfr"><img alt="Belge"><button type="button" class="bn bp" aria-label="Önceki belge">‹</button><button type="button" class="bn bs" aria-label="Sonraki belge">›</button></div><div class="bcap"></div></div>';
document.body.appendChild(ov);
ov._g=function(k){var l=ov._l,x=l[k],im=ov.querySelector('img'),i=0;ov._k=k;
ov.querySelector('.bcap').innerHTML=x[0]+' · '+x[1]+'<small>'+(k+1)+' / '+l.length+'</small>';
ov.querySelector('.bp').disabled=k<=0;ov.querySelector('.bs').disabled=k>=l.length-1;
im.onerror=function(){if(i<ex.length)im.src=bYol(x,ex[i++]);else{im.removeAttribute('src');bMsg('Belge bulunamadı: '+bYol(x,'png'))}};
im.removeAttribute('src');im.src=bYol(x,ex[i++])};
function kap(){ov.hidden=true;document.body.style.overflow='';var p=ov._p;if(p&&p.focus)p.focus()}
function git(d){var k=ov._k+d;if(k>=0&&k<ov._l.length)ov._g(k)}
ov.addEventListener('click',function(e){var t=e.target;if(t===ov||t.closest('.bx'))kap();else if(t.closest('.bp'))git(-1);else if(t.closest('.bs'))git(1)});
document.addEventListener('keydown',function(e){if(ov.hidden)return;if(e.key==='Escape'){e.stopPropagation();kap()}else if(e.key==='ArrowLeft'){git(-1)}else if(e.key==='ArrowRight'){git(1)}},true);
var sx=null;ov.querySelector('.bfr').addEventListener('touchstart',function(e){sx=e.touches[0].clientX},{passive:true});
ov.querySelector('.bfr').addEventListener('touchend',function(e){if(sx===null)return;var d=e.changedTouches[0].clientX-sx;sx=null;if(Math.abs(d)>50)git(d<0?1:-1)},{passive:true})}
try{l=veri.sertifikalar.filter(flt[fi][1]).filter(ara).sort(srtf)}catch(e){l=[]}
if(l.indexOf(c)<0)l=veri.sertifikalar.slice();
ov._l=l;ov._p=document.activeElement;ov.hidden=false;document.body.style.overflow='hidden';ov._g(l.indexOf(c));ov.querySelector('.bx').focus()}
document.addEventListener('click',function(e){var t=e.target.closest&&e.target.closest('.bg');if(t){e.preventDefault();bAc(veri.sertifikalar[+t.dataset.i])}});
document.addEventListener('keydown',function(e){var t=e.target;if((e.key==='Enter'||e.key===' ')&&t.classList&&t.classList.contains('bth')){e.preventDefault();bAc(veri.sertifikalar[+t.dataset.i])}});
function rowS(c){return '<div class="row"><div class="logo k">'+(logolar[c[1]]?'<img src="'+logolar[c[1]]+'" alt="'+c[1]+'" loading="lazy" decoding="async" onerror="this.outerHTML=\'📜\'">':'📜')+'</div><div><h3>'+c[0]+'</h3><div class="s">'+c[1]+'</div><div class="m">'+c[2]+'</div><div class="bw">'+th(c)+'</div>'+(c[3].length?'<div class="tags">'+c[3].map(function(t){return '<span>'+t+'</span>'}).join('')+'</div>':'')+'</div></div>'}
var TOP=[['Bilişim','yapay zeka|chatgpt|claude|copilot|microsoft word|microsoft teams|çevrim içi toplantı|gemini|prompt|html|css|dijital|bilgi teknolojileri|nesnelerin|internet|sosyal medya|medya okuryazarl|bilgi okuryazarl|teknoloji okuryazarl|işletim sistem'],['Çevre','çevre|ekolo|sürdürülebil|geri dönüşüm|sıfır atık|kuraklık|iklim|su okuryazarl'],['Sağlık ve Gelişim','iş sağlığı|sağlıklı yaşam|sağlıklı beslenme|kumar|öğrenmeyi öğrenme|meslek etiği|bireysel gelişim'],['Kültür ve Toplum','kültür|kent yaşam|vatandaşlık|istanbul|medeniyet|aile|farkındalık']];
function topOf(c){var t=(c[3]||[]).filter(function(x){return TOP.some(function(y){return y[0]===x})})[0];if(t)return t;var a=c[0].toLocaleLowerCase('tr');for(var i=0;i<TOP.length;i++)if(new RegExp(TOP[i][1]).test(a))return TOP[i][0];return ''}
function topF(n){return function(c){return topOf(c)===n}}
var flt=[['Tümü',function(){return 1}]].concat(TOP.map(function(t){return [t[0],topF(t[0])]}).filter(function(x){return veri.sertifikalar.some(x[1])})),fi=0,acik=false,LIM=6;
window.sertFilt=function(){return veri.sertifikalar.filter(flt[fi][1])};
window.__gk='k';try{if(localStorage.getItem('sertgk')==='t')window.__gk='t'}catch(e){}
window.sertTopNames=TOP.map(function(t){return t[0]});
window.sertTopLevel=function(){return window.__gk==='t'&&!window.sertActive()};
window.sertKey=function(c){return window.sertTopLevel()?topOf(c):c[1]};
window.sertGrf=function(){return window.sertTopLevel()?veri.sertifikalar:window.sertFilt()};
window.sertActive=function(){return fi>0?flt[fi][0]:''};
window.sertPick=function(k){var x=0;for(var q=0;q<flt.length;q++)if(flt[q][0]===k)x=q;var t=fi===x?0:x;var b=document.querySelector('.chip[data-i="'+t+'"]');if(b)b.click()};
(function(){var b=document.getElementById('sert-gsync');if(!b)return;function u(){var t=window.__gk==='t';b.setAttribute('aria-pressed',t);b.textContent=t?'🏷️ Grafik: konulara göre':'🏛️ Grafik: kurumlara göre'}u();b.addEventListener('click',function(){window.__gk=window.__gk==='t'?'k':'t';try{localStorage.setItem('sertgk',window.__gk)}catch(e){}u();document.dispatchEvent(new Event('sertchg'))})})();
var qq='';function ara(c){return !qq||c.join(' ').toLocaleLowerCase('tr').indexOf(qq)>-1}
function sert(){var l=veri.sertifikalar.filter(flt[fi][1]).filter(ara).sort(srtf),m=document.getElementById('sert-more');
put('sertifika-list',l.length?(acik||qq?l:l.slice(0,LIM)).map(rowS).join(''):'<p class="bos">Eşleşen sertifika bulunamadı.</p>');
put('sertifika-filter',flt.map(function(x,i){return '<button class="chip'+(i==fi?' on':'')+'" type="button" data-i="'+i+'" aria-pressed="'+(i==fi)+'">'+x[0]+' ('+veri.sertifikalar.filter(x[1]).length+')</button>'}).join(''));
m.hidden=!!qq||l.length<=LIM;m.textContent=acik?'Daha az göster':'Tümünü göster ('+l.length+')';document.dispatchEvent(new Event('sertchg'))}
put('sert-say','('+veri.sertifikalar.length+')');sert();
document.getElementById('sert-ara').addEventListener('input',function(){qq=this.value.trim().toLocaleLowerCase('tr');sert()});
document.getElementById('sertifika-filter').addEventListener('click',function(e){var b=e.target.closest('.chip');if(!b)return;fi=+b.dataset.i;acik=fi>0;qq='';document.getElementById('sert-ara').value='';sert();document.querySelector('.chip[data-i="'+fi+'"]').focus()});
document.getElementById('sert-more').addEventListener('click',function(){acik=!acik;sert();if(!acik)document.getElementById('sertifikalar').scrollIntoView()});
(function(){var ov=document.createElement('div');ov.className='lv';ov.hidden=true;ov.setAttribute('role','dialog');ov.setAttribute('aria-modal','true');ov.setAttribute('aria-label','Tüm sertifikalar');
ov.innerHTML='<div class="lv-h"><div class="lv-tt"><b id="lv-t"></b><small id="lv-s"></small></div><div class="lv-a"><button type="button" id="lv-p" aria-label="Listeyi PNG olarak kaydet">⬇ PNG</button><button type="button" id="lv-x">Kapat ✕</button></div><div class="lv-bar" id="lv-bar" aria-hidden="true"></div></div><div class="lv-m" role="group" aria-label="Görünüm"><button type="button" data-g="0" aria-pressed="true">Tarihe göre</button><button type="button" data-g="1" aria-pressed="false">Kuruma göre</button></div><div class="lv-b" id="lv-b"></div>';document.body.appendChild(ov);
(function(){var t=ov.querySelector('.lv-tt');if(!t)return;var who=document.createElement('div');who.className='lv-who';var av=document.createElement('span');av.className='lv-av';av.setAttribute('aria-hidden','true');av.textContent='MG';var im=document.createElement('img');im.alt='';var l=['profil.jpg','profil.jpeg','profil.png','profil.webp','profil.JPG'],n=0;im.onerror=function(){n++;if(n<l.length)im.src=l[n];else im.remove()};im.src=l[0];av.appendChild(im);t.parentNode.insertBefore(who,t);who.appendChild(av);who.appendChild(t)})();
var b=ov.querySelector('#lv-b'),op=document.getElementById('sert-liste'),prev=null,grp=0,L=[];
function fit(){var f=22;b.style.fontSize=f+'px';var h=function(){return b.scrollHeight>b.clientHeight+1||b.scrollWidth>b.clientWidth+1};while(f>8&&h()){f-=.25;b.style.fontSize=f+'px'}}
window.addEventListener('resize',function(){if(!ov.hidden)fit()});
function lg(k){return '<span class="vl">'+(logolar[k]?'<img src="'+logolar[k]+'" alt="" onerror="this.remove()">':'')+'<span>'+k+'</span></span>'}
var PAL=['#c62828','#1d4ed8','#7c3aed','#0b7f86','#c2410c','#15803d','#be185d','#a16207'];
function rk(k){var a=[];veri.sertifikalar.forEach(function(c){if(a.indexOf(c[1])<0)a.push(c[1])});return PAL[Math.max(0,a.indexOf(k))%PAL.length]}
function no(n){return '<i class="no">'+n+'</i>'}
function dp(t){return '<span class="dp new">'+t+'</span>'}
function nm(c){return '<span class="nm" data-i="'+veri.sertifikalar.indexOf(c)+'">'+c[0]+'</span>'}
function ciz(){var l=L,n=l.length,h;
function it(c,sv){return '<div class="gi" style="--gc:'+rk(c[1])+'">'+nm(c)+(sv?'<small class="sv">'+c[1]+'</small>':'')+dp(c[2])+'</div>'}
if(!grp){h='<div class="cg"><div class="gl flat">'+l.map(function(c){return it(c,1)}).join('')+'</div></div>'}
else{var g={},o=[];l.forEach(function(c){if(!g[c[1]]){g[c[1]]=[];o.push(c[1])}g[c[1]].push(c)});
h='<div class="cg">'+o.map(function(k){return '<section class="gp" style="--gc:'+rk(k)+'"><div class="gh">'+lg(k)+'<em>'+g[k].length+'</em></div><div class="gl">'+g[k].map(function(c){return it(c,0)}).join('')+'</div></section>'}).join('')+'</div>'}
b.innerHTML=h;b.querySelectorAll('.gh,.gi').forEach(function(r,i){r.style.animationDelay=Math.min(i*12,420)+'ms'});ov.querySelectorAll('.lv-m button').forEach(function(x){x.setAttribute('aria-pressed',String(+x.dataset.g===grp))});fit()}
function kapat(){ov.hidden=true;document.body.style.overflow='';if(prev)prev.focus()}
ov.querySelectorAll('.lv-m button').forEach(function(x){x.addEventListener('click',function(){grp=+x.dataset.g;ciz()})});
op.addEventListener('click',function(){prev=op;L=veri.sertifikalar.filter(flt[fi][1]).filter(ara).sort(srtf);
document.getElementById('lv-t').textContent='Sertifikalar ('+L.length+')';
try{var cn={};L.forEach(function(c){cn[c[1]]=(cn[c[1]]||0)+1});
document.getElementById('lv-bar').innerHTML=Object.keys(cn).map(function(k){return '<i title="'+k+' ('+cn[k]+')" style="flex:'+cn[k]+';background:'+rk(k)+'"></i>'}).join('')}catch(e){}
try{var ks=[],mn=L[0],mx=L[0];L.forEach(function(c){if(ks.indexOf(c[1])<0)ks.push(c[1]);if(dsk(c)<dsk(mn))mn=c;if(dsk(c)>dsk(mx))mx=c});
document.getElementById('lv-s').textContent=L.length?ks.length+' kurum · '+(mn[2]==mx[2]?mn[2]:mn[2]+' – '+mx[2]):''}catch(e){}
ov.hidden=false;document.body.style.overflow='hidden';ciz();ov.querySelector('#lv-x').focus()});

function rr(x,a,b,w,h,r){x.beginPath();x.moveTo(a+r,b);x.arcTo(a+w,b,a+w,b+h,r);x.arcTo(a+w,b+h,a,b+h,r);x.arcTo(a,b+h,a,b,r);x.arcTo(a,b,a+w,b,r);x.closePath()}
function tn(hx,al){var n=parseInt(hx.slice(1),16);return 'rgba('+(n>>16)+','+((n>>8)&255)+','+(n&255)+','+al+')'}
function dc(t){var e=document.createElement('textarea');e.innerHTML=t;return e.value}
var AB={'ODTÜ Geliştirme Vakfı Okulları':'ODTÜ Vakfı Okulları','Turkcell Geleceği Yazanlar':'Turkcell Yazanlar'};
function ft(x,t,mw,sz,wt,mn){mn=mn||19;t=dc(t);var f=sz;x.font=wt+' '+f+'px Nunito,\"Segoe UI\",system-ui,sans-serif';while(f>mn&&x.measureText(t).width>mw){f--;x.font=wt+' '+f+'px Nunito,\"Segoe UI\",system-ui,sans-serif'}
 if(x.measureText(t).width>mw){while(t.length>3&&x.measureText(t+'…').width>mw)t=t.slice(0,-1);t=t+'…'}return t}
var IMG={},useL=true;
function png(){var l=L,n=l.length,WL=1080,PW=1654,PH=Math.round(PW*Math.SQRT2),S=PW/WL,HL=PH/S,P=44,F='Nunito,\"Segoe UI\",system-ui,sans-serif';
 var G=[],o=[];if(grp){var g={};l.forEach(function(c,i){if(!g[c[1]]){g[c[1]]=[];o.push(c[1])}g[c[1]].push([n-i,c])});G=o.map(function(k){return{k:k,r:g[k]}})}
 var T=146,M=26,GH0=72,GP0=16,RH0=56,TH0=56;
 var C=grp?G.reduce(function(a,q){return a+GH0+q.r.length*RH0+GP0},0)-GP0:TH0+n*RH0;
 var k=Math.min(1.12,(HL-T-M)/C),RH=RH0*k,GH=GH0*k,GP=GP0*k,TH=TH0*k,kf=k*1.32;
 var cv=document.createElement('canvas');cv.width=PW;cv.height=PH;var x=cv.getContext('2d');x.scale(S,S);
function ld(kk,cx,cy,sz,bc){var im=useL&&IMG[kk];if(!im||!im.naturalWidth)return;x.save();x.beginPath();x.arc(cx,cy,sz/2,0,7);x.fillStyle='#fff';x.fill();x.lineWidth=1.5;x.strokeStyle=bc?tn(bc,.35):'rgba(0,0,0,.12)';x.stroke();x.clip();var kr=logoKare(im),p=kr?0:sz*.14,bw=sz-2*p,sc=(kr?Math.max:Math.min)(bw/im.naturalWidth,bw/im.naturalHeight),w=im.naturalWidth*sc,h=im.naturalHeight*sc;x.drawImage(im,cx-w/2,cy-h/2,w,h);x.restore();if(kr){x.beginPath();x.arc(cx,cy,sz/2,0,7);x.lineWidth=1.5;x.strokeStyle=bc?tn(bc,.35):'rgba(0,0,0,.12)';x.stroke()}}
 x.fillStyle='#ffffff';x.fillRect(0,0,WL,HL);
 x.textBaseline='alphabetic';x.fillStyle='#0f2a47';x.font='800 46px '+F;x.fillText('Muhammet GÖLPINAR Sertifikaları',P,66);
 var ks=[],mn=l[0],mx=l[0];l.forEach(function(c){if(ks.indexOf(c[1])<0)ks.push(c[1]);if(dsk(c)<dsk(mn))mn=c;if(dsk(c)>dsk(mx))mx=c});
 x.fillStyle='#56728f';x.font='700 24px '+F;x.fillText(n+' sertifika · '+ks.length+' kurum',P,104);
 var bx=P,bw=WL-2*P,cn={};l.forEach(function(c){cn[c[1]]=(cn[c[1]]||0)+1});
 x.save();rr(x,P,120,bw,10,5);x.clip();Object.keys(cn).forEach(function(q){var w=bw*cn[q]/n;x.fillStyle=rk(q);x.fillRect(bx,120,w+1,10);bx+=w});x.restore();
 if(IMG.foto&&IMG.foto.naturalWidth){var fx=WL-P-44,fy=68,fr=40,fph=IMG.foto;x.save();x.beginPath();x.arc(fx,fy,fr+5,0,7);x.fillStyle='#fff';x.fill();x.lineWidth=3;x.strokeStyle=tn('#2f4bff',.45);x.stroke();x.beginPath();x.arc(fx,fy,fr,0,7);x.clip();var fs=Math.max(2*fr/fph.naturalWidth,2*fr/fph.naturalHeight);x.drawImage(fph,fx-fph.naturalWidth*fs/2,fy-fph.naturalHeight*fs/2,fph.naturalWidth*fs,fph.naturalHeight*fs);x.restore()}
 var y=T;x.textBaseline='middle';
 function row(no,c,gc,top,showK){var h=RH,my=top+h/2+1;x.fillStyle=tn(gc,.07);x.fillRect(P,top,WL-2*P,h);x.fillStyle=tn(gc,.14);x.fillRect(P,top+h-1,WL-2*P,1);
  var bw2=54*k,bh=38*k;x.fillStyle=tn(gc,.16);rr(x,P+18,top+(h-bh)/2,bw2,bh,bh/2);x.fill();
  x.fillStyle=gc;x.font='800 '+(21*kf)+'px '+F;x.textAlign='center';x.fillText(String(no),P+18+bw2/2,my);x.textAlign='left';
  var dpw=170,nx=P+84,ls=h*.8,mw=(WL-2*P)-84-dpw-24-(showK?290+ls+8:0);
  x.fillStyle='#0f2a47';var t=ft(x,c[0],mw,27*kf,'800',Math.max(12,19*kf));x.fillText(t,nx,my);
  if(showK){x.fillStyle=gc;var kt=ft(x,c[1],262,20*kf,'800',Math.max(11,17*kf));if(/…$/.test(kt)&&AB[c[1]])kt=ft(x,AB[c[1]],262,20*kf,'800',Math.max(11,17*kf));x.fillText(kt,WL-P-dpw-24-262,my);ld(c[1],WL-P-dpw-24-262-8-ls/2,my,ls,gc)}
  var isN=true;x.font='700 '+(21*kf)+'px '+F;var dw=x.measureText(c[2]).width+30*k,ph=40*k;
  x.fillStyle=isN?tn(gc,.2):tn(gc,.1);rr(x,WL-P-14-dw,top+(h-ph)/2,dw,ph,ph/2);x.fill();
  x.fillStyle=isN?gc:'#56728f';x.textAlign='center';x.fillText(c[2],WL-P-14-dw/2,my);x.textAlign='left'}
 if(!grp){x.fillStyle='#dfe9f7';rr(x,P,y,WL-2*P,TH,14*k);x.fill();x.fillStyle='#1272c4';x.font='800 '+(22*kf)+'px '+F;var hy=y+TH/2+1;x.fillText('No',P+20,hy);x.fillText('Sertifika',P+84,hy);x.fillText('Veren',WL-P-170-24-262-(RH*.8+8),hy);x.fillText('Tarih',WL-P-14-110,hy);y+=TH;
  l.forEach(function(c,i){row(n-i,c,rk(c[1]),y+i*RH,true)})}
 else{G.forEach(function(q){var gc=rk(q.k);
  x.fillStyle=gc;rr(x,P,y,WL-2*P,GH,16*k);x.fill();
  var gs=GH*.66,gl=useL&&IMG[q.k]&&IMG[q.k].naturalWidth;if(gl)ld(q.k,P+24+gs/2,y+GH/2+1,gs,null);x.fillStyle='#fff';x.font='800 '+(30*kf)+'px '+F;x.fillText(dc(q.k),P+24+(gl?gs+12:0),y+GH/2+1);x.font='800 '+(22*kf)+'px '+F;var ct='('+q.r.length+')';x.fillStyle='rgba(255,255,255,.85)';x.fillText(ct,WL-P-24-x.measureText(ct).width,y+GH/2+1);
  q.r.forEach(function(r,i){row(r[0],r[1],gc,y+GH+i*RH,false)});y+=GH+q.r.length*RH+GP})}
 return cv}
var pb=ov.querySelector('#lv-p');
function dlp(cv){pb.textContent='⬇ PNG';window.onizle({title:'Sertifika listesi',info:'A4 · PNG',pages:[cv.toDataURL('image/png')],dl:function(){dlp0(cv)}})}
function dlp0(cv){cv.toBlob(function(bl){if(!bl){pb.textContent='Hata';return}var u=URL.createObjectURL(bl),a=document.createElement('a');a.href=u;a.download='sertifikalar-a4.png';document.body.appendChild(a);a.click();a.remove();setTimeout(function(){URL.revokeObjectURL(u)},4000);
 pb.textContent='✓ Kaydedildi';setTimeout(function(){pb.textContent='⬇ PNG'},1800)},'image/png')}
function yap(){try{useL=true;dlp(png())}catch(e){try{useL=false;dlp(png())}catch(e2){pb.textContent='Hata'}}}
pb.addEventListener('click',function(){pb.textContent='…';
 var LGO=(typeof logolar!=='undefined')?logolar:{},ks=[];L.forEach(function(c){if(ks.indexOf(c[1])<0)ks.push(c[1])});
 var fl=['700','800'].map(function(w){return document.fonts&&document.fonts.load?document.fonts.load(w+' 20px Nunito','ĞÜŞİÖÇığüşöç Aa'):Promise.resolve()});
 var pr=ks.map(function(k){return new Promise(function(r){if(IMG[k]||!LGO[k])return r();var im=new Image();im.onload=function(){IMG[k]=im;r()};im.onerror=function(){r()};im.src=LGO[k]})});
 pr.push(new Promise(function(r){if(IMG.foto)return r();var l=['profil.jpg','profil.jpeg','profil.png','profil.webp','profil.JPG'],n=0,im=new Image();im.onload=function(){IMG.foto=im;r()};im.onerror=function(){n++;if(n<l.length)im.src=l[n];else r()};im.src=l[0]}));
 Promise.all(fl.concat(pr)).then(yap,yap)});
ov.querySelector('#lv-x').addEventListener('click',kapat);
b.addEventListener('click',function(e){var t=e.target.closest('.nm');if(t)bAc(veri.sertifikalar[+t.dataset.i])});
document.addEventListener('keydown',function(e){if(e.key=='Escape'&&!ov.hidden)kapat()});
window.addEventListener('resize',function(){if(!ov.hidden)fit()})})();
put('stats',[[veri.sertifikalar.length,'Sertifika','#sertifikalar'],[70,'Proje','#projeler','MuGöl PORTAL’ın içinde']].map(function(a){return '<a href="'+a[2]+'"><b>'+a[0]+'</b>'+a[1]+(a[3]?'<small>'+a[3]+'</small>':'')+'</a>'}).join(''));
var root=document.documentElement,md=document.getElementById('mode');
function ik(){var d=root.dataset.theme=='dark';md.textContent=d?'☀️':'🌙';md.setAttribute('aria-label',d?'Açık temaya geç':'Koyu temaya geç')}
ik();md.addEventListener('click',function(){var t=root.dataset.theme=='dark'?'light':'dark';root.dataset.theme=t;try{localStorage.setItem('tema',t)}catch(e){}ik()});
if('IntersectionObserver' in window){var nav=document.querySelector('#drawer nav'),nv=nav.querySelectorAll('a'),io=new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;nv.forEach(function(a){var on=a.getAttribute('href')=='#'+e.target.id;a.classList.toggle('on',on);if(on)nav.scrollLeft+=a.getBoundingClientRect().left-nav.getBoundingClientRect().left-(nav.clientWidth-a.offsetWidth)/2})})},{rootMargin:'-20% 0px -70% 0px'});document.querySelectorAll('main section[id]').forEach(function(x){io.observe(x)})}
put('basari-list',veri.basarilar.map(function(b){return '<div class="row'+(b[3]?' feat':'')+'"><div class="logo">'+(b[3]?'🏅':'🏆')+'</div><div><h3>'+b[0]+'</h3><div class="m">'+b[1]+'</div><p>'+b[2]+'</p></div></div>'}).join(''));
put('beceri-list',veri.beceriler.map(function(b){return '<div class="row"><div class="logo">'+b[0]+'</div><div><h3>'+b[1]+'</h3><div class="tags">'+b[2].map(function(t){return '<span>'+t+'</span>'}).join('')+'</div></div></div>'}).join(''));
var bar=document.querySelector('.bar'),tp=document.getElementById('top'),pg=document.getElementById('prog');
function sc(){var y=window.scrollY||0,h=document.documentElement.scrollHeight-window.innerHeight;bar.classList.toggle('sc',y>8);tp.hidden=y<600;pg.style.width=(h>0?Math.min(100,y/h*100):0)+'%'}
window.addEventListener('scroll',sc,{passive:true});sc();
tp.addEventListener('click',function(){window.scrollTo({top:0})});
try{var cs=document.getElementById('cv-sert');if(cs)cs.textContent=veri.sertifikalar.length}catch(e){}
(function(){try{
var btn=document.getElementById('cvbtn');if(!btn)return;
/* ATS uyumlu CV
   - Tek sütun, düz metin; resim, ikon, tablo, kutu ve çok sütunlu düzen yok.
   - PDF içinde GERÇEK (seçilebilir/aranabilir) metin var: Liberation Sans PDF'e gömülür (cv-fonts.js).
   - Standart başlıklar: Özet, İş Deneyimi, Projeler, Eğitim, Beceriler, Sertifikalar, Ödüller ve Başarılar, Diller.
   - Üst/alt bilgi, sayfa numarası, süs yok. Tüm içerik sitedeki verilerden otomatik gelir.
   Telefon, şehir gibi ek iletişim bilgisi istersen aşağıdaki listeye düz metin olarak ekle:
   örn. EK_ILETISIM=['Telefon: 0555 555 55 55','İstanbul, Türkiye']; */
var EK_ILETISIM=[];
var PW=595.28,PH=841.89,MX=44,MT=42,MB=46,CW=PW-2*MX;
var AYT=['Ocak','Şubat','Mart','Nisan','Mayıs','Haziran','Temmuz','Ağustos','Eylül','Ekim','Kasım','Aralık'];
function dc(t){var e=document.createElement('textarea');e.innerHTML=t;return e.value}
function b64(s){var b=atob(s),u=new Uint8Array(b.length);for(var i=0;i<b.length;i++)u[i]=b.charCodeAt(i);return u}
function loadFonts(){return new Promise(function(res,rej){if(window.CVF)return res();var s=document.createElement('script');s.src='cv-fonts.js';s.onload=function(){window.CVF?res():rej()};s.onerror=rej;document.head.appendChild(s)})}
var fReg;
function regFonts(){if(fReg)return fReg;if(!window.FontFace)return (fReg=Promise.resolve());
 fReg=Promise.all([['CvR','r'],['CvB','b']].map(function(a){var ff=new FontFace(a[0],b64(CVF[a[1]].ttf).buffer,{weight:'400'});return ff.load().then(function(){document.fonts.add(ff)})})).catch(function(){});return fReg}

/* --- Eski (tasarımlı) CV çizimi: görünüm aynen korunur; çizilen her yazı kaydedilip PDF'e gizli metin katmanı olarak eklenir --- */
var OLD=(function(){
var S=1654/794,F='Nunito,"Segoe UI",system-ui,sans-serif',BL='#1e3a7c',AC='#2f4bff',INK='#0f2a47',GR='#56728f';
var PAL=['#c62828','#1d4ed8','#7c3aed','#0b7f86','#c2410c','#15803d','#be185d','#a16207'];
function dc(t){var e=document.createElement('textarea');e.innerHTML=t;return e.value}
function loadImg(srcs){return new Promise(function(res){var i=0,im=new Image();im.onload=function(){res(im)};im.onerror=function(){i++;if(i<srcs.length)im.src=srcs[i];else res(null)};im.src=srcs[0]})}
function build(I,Z){var W=794*Z,H=1123*Z,SW=232,BOT=H-34,P=[],x,y,cv,ox,mw;
function np(){cv=document.createElement('canvas');cv.width=1654;cv.height=Math.round(1654*Math.SQRT2);x=cv.getContext('2d');cv.__t=[];cv.__k=595.28/W;cv.__h=H;cv.__sw=P.length===0?SW:0;x.scale(S/Z,S/Z);x.fillStyle='#fff';x.fillRect(0,0,W,H);x.textBaseline='alphabetic';P.push(cv)}
function rc(t,a,b,al){try{var w=x.measureText(t).width,m=x.font.match(/([\d.]+)px/),fs=m?parseFloat(m[1]):10,wt=x.font.match(/^(?:\S+\s)*?(\d{3}|bold)\s/),bd=wt?(wt[1]==='bold'||+wt[1]>=600):false;cv.__t.push({t:t,x:al==='right'?a-w:al==='center'?a-w/2:a,y:b,w:w,s:fs,b:bd,h:bd&&fs===13.5})}catch(e){}}
function wr(t,font,mw,max){x.font=font;t=dc(String(t));var w=t.split(/\s+/),l=[],c='';w.forEach(function(q){var tt=c?c+' '+q:q;if(x.measureText(tt).width>mw&&c){l.push(c);c=q}else c=tt});if(c)l.push(c);if(max&&l.length>max){l=l.slice(0,max);var s=l[max-1];while(s.length>1&&x.measureText(s+'…').width>mw)s=s.slice(0,-1);l[max-1]=s+'…'}return l}
function tx(t,a,b,font,col,al){x.font=font;x.fillStyle=col;x.textAlign=al||'left';x.fillText(dc(String(t)),a,b);rc(dc(String(t)),a,b,al||'left');x.textAlign='left'}
function tl(t,a,b,font,col,ls){x.font=font;x.fillStyle=col;try{x.letterSpacing=ls+'px'}catch(e){}x.fillText(t,a,b);rc(t,a,b,'left');try{x.letterSpacing='0px'}catch(e){}}
function rr(a,b,w,h,r){x.beginPath();x.moveTo(a+r,b);x.arcTo(a+w,b,a+w,b+h,r);x.arcTo(a+w,b+h,a,b+h,r);x.arcTo(a,b+h,a,b,r);x.arcTo(a,b,a+w,b,r);x.closePath()}
function tn(hx,al){var v=parseInt(hx.slice(1),16);return 'rgba('+(v>>16)+','+((v>>8)&255)+','+(v&255)+','+al+')'}
function logo(k,cx,cy,sz){var im=I&&I[k];x.save();x.beginPath();x.arc(cx,cy,sz/2,0,7);x.fillStyle='#fff';x.fill();x.lineWidth=1;x.strokeStyle='rgba(30,58,124,.22)';x.stroke();if(im&&im.naturalWidth){x.clip();var kr=logoKare(im),p=kr?0:sz*.14,bw=sz-2*p,sc=(kr?Math.max:Math.min)(bw/im.naturalWidth,bw/im.naturalHeight),w=im.naturalWidth*sc,h=im.naturalHeight*sc;x.drawImage(im,cx-w/2,cy-h/2,w,h)}x.restore();if(im&&im.naturalWidth&&logoKare(im)){x.beginPath();x.arc(cx,cy,sz/2,0,7);x.lineWidth=1;x.strokeStyle='rgba(30,58,124,.22)';x.stroke()}}
function foto(cx,cy,r,ring){x.fillStyle=ring;x.beginPath();x.arc(cx,cy,r+10,0,7);x.fill();x.save();x.beginPath();x.arc(cx,cy,r+3,0,7);x.fillStyle='#fff';x.fill();x.beginPath();x.arc(cx,cy,r,0,7);x.clip();
if(I&&I.foto&&I.foto.naturalWidth){var im=I.foto,sc=Math.max(2*r/im.naturalWidth,2*r/im.naturalHeight),w=im.naturalWidth*sc,h=im.naturalHeight*sc;x.drawImage(im,cx-w/2,cy-h/2,w,h)}else{x.fillStyle='#16214a';x.fillRect(cx-r,cy-r,2*r,2*r);tx('MG',cx,cy+r*.2,'800 '+Math.round(r*.6)+'px '+F,'#fff','center')}x.restore()}
function sec(t){y+=14;x.font='800 13.5px '+F;var w=x.measureText(t).width;tx(t,ox,y+11,'800 13.5px '+F,BL);x.fillStyle=AC;rr(ox,y+17,22,2.6,1.3);x.fill();x.fillStyle='rgba(47,75,255,.16)';x.fillRect(ox+w+10,y+8,mw-w-10,1.2);y+=28}
function card(h,bar){rr(ox,y,mw,h,10);x.fillStyle='#f4f7ff';x.fill();x.lineWidth=1;x.strokeStyle='#dfe7ff';x.stroke();if(bar){x.save();rr(ox,y,mw,h,10);x.clip();x.fillStyle=bar;x.fillRect(ox,y,4,h);x.restore()}}
function badge(rx,ry){var t='Devam ediyor';x.font='700 8.5px '+F;var w=x.measureText(t).width+14;rr(rx-w,ry,w,15,7.5);x.fillStyle='#e6f7ee';x.fill();tx(t,rx-w/2,ry+10.5,'700 8.5px '+F,'#15803d','center')}
var n=veri.sertifikalar.length,y1,y2,ys;
/* ---------- SAYFA 1 ---------- */
np();
var g=x.createLinearGradient(0,0,0,H);g.addColorStop(0,'#1e3a7c');g.addColorStop(1,'#2f4bff');x.fillStyle=g;x.fillRect(0,0,SW,H);
x.fillStyle='rgba(255,255,255,.06)';x.beginPath();x.arc(SW,50,110,0,7);x.fill();x.beginPath();x.arc(0,H-70,125,0,7);x.fill();
foto(SW/2,84,54,'rgba(255,255,255,.18)');
var sx=24,sw=SW-48;y=168;
function sb(t){y+=20;tl(t.toUpperCase(),sx,y,'800 9.5px '+F,'#c5d6ff',1.3);x.fillStyle='rgba(255,255,255,.28)';x.fillRect(sx,y+6,sw,1);y+=21}
sb('İletişim');
[['E-posta','muhammetgolpinar@gmail.com'],['Web sitesi','muhammetgolpinar.github.io'],['MuGöl PORTAL','mugol-portal.github.io'],['LinkedIn','Muhammet Gölpınar']].forEach(function(c){tx(c[0],sx,y+6,'600 8px '+F,'#c5d6ff');tx(c[1],sx,y+18,'700 9.5px '+F,'#fff');y+=28});
sb('Eğitim');
veri.egitim.forEach(function(e){wr(e[0],'800 10px '+F,sw,3).forEach(function(l){tx(l,sx,y+9,'800 10px '+F,'#fff');y+=12.5});tx(e[1],sx,y+10,'600 9px '+F,'#c5d6ff');tx(e[2],sx,y+22,'500 9px '+F,'#c5d6ff');y+=26});
sb('Beceriler');
veri.beceriler.forEach(function(b){tx(b[1],sx,y+8,'800 9.5px '+F,'#fff');y+=14;var cxp=sx,cy=y;b[2].forEach(function(t){x.font='600 8.8px '+F;var w=x.measureText(dc(t)).width+13;if(cxp+w>sx+sw){cxp=sx;cy+=19}rr(cxp,cy,w,15,7.5);x.fillStyle='rgba(255,255,255,.16)';x.fill();x.lineWidth=.8;x.strokeStyle='rgba(255,255,255,.38)';x.stroke();tx(t,cxp+6.5,cy+10.6,'600 8.8px '+F,'#fff');cxp+=w+5});y=cy+22});
sb('Rakamlarla');
var bw2=(sw-8)/2;[[String(n),'Sertifika'],['70','Proje']].forEach(function(s,i){var bx=sx+i*(bw2+8);rr(bx,y,bw2,50,10);x.fillStyle='rgba(255,255,255,.14)';x.fill();x.lineWidth=.8;x.strokeStyle='rgba(255,255,255,.35)';x.stroke();tx(s[0],bx+bw2/2,y+27,'800 22px '+F,'#fff','center');tx(s[1],bx+bw2/2,y+42,'600 8.8px '+F,'#c5d6ff','center')});y+=58;
ys=y;
tx('muhammetgolpinar.github.io',SW/2,H-16,'600 8.5px '+F,'#c5d6ff','center');
ox=SW+28;mw=W-ox-28;y=48;
tx('Muhammet GÖLPINAR',ox,y+6,'800 31px '+F,BL);
tx('Bilişim Teknolojileri Öğrencisi',ox,y+30,'700 14.5px '+F,AC);
tx('MuGöl PORTAL Kurucusu ve Geliştiricisi',ox,y+48,'600 11px '+F,GR);
(function(){var t='Arçelik Türkiye’de Bilgi İşlem Stajyeri';x.font='800 10.5px '+F;var bw=x.measureText('Şu an:').width;x.font='600 10.5px '+F;var rw=x.measureText(t).width,w=bw+rw+30,py=y+60;rr(ox,py,w,22,11);x.fillStyle='#e6f7ee';x.fill();x.lineWidth=1;x.strokeStyle='#bfe8d0';x.stroke();tx('Şu an:',ox+11,py+15,'800 10.5px '+F,'#15803d');tx(t,ox+15+bw,py+15,'600 10.5px '+F,'#15803d');y=py+22})();
sec('Hakkımda');
wr('Şehit Büyükelçi İsmail Erez Mesleki ve Teknik Anadolu Lisesi Bilişim Teknolojileri Alanı öğrencisiyim (2023 - Günümüz). MuGöl PORTAL’ın kurucusu ve geliştiricisiyim; proje hem web sitesi hem de Google Play Store uygulaması olarak yayında. Şu an Arçelik Türkiye’de Bilgi İşlem Stajyeri olarak görev yapıyorum.','500 10.5px '+F,mw).forEach(function(l){tx(l,ox,y+9,'500 10.5px '+F,INK);y+=15});
sec('Deneyim');
deneyim.forEach(function(d){
if(!d.roller){card(54);logo(d.logo,ox+27,y+27,32);tx(d.rol,ox+52,y+20,'800 11.5px '+F,INK);tx(d.kurum,ox+52,y+33,'600 9.8px '+F,GR);tx(tarih(d.bas)+'  ·  '+d.yer,ox+52,y+45,'500 8.8px '+F,GR);badge(ox+mw-10,y+8);y+=62;return}
var rs=d.roller.map(function(q){var ls=wr(q.acik,'500 9.6px '+F,mw-72,5);return {q:q,ls:ls,h:32+ls.length*12.2+9}}),ch=48+rs.reduce(function(a,r){return a+r.h},0);
card(ch);logo(d.logo,ox+27,y+27,32);tx(d.kurum,ox+52,y+23,'800 11.5px '+F,INK);var ilk=d.roller.reduce(function(a,q){return q.bas[0]*12+q.bas[1]<a[0]*12+a[1]?q.bas:a},[9999,1]);tx(AY[ilk[1]-1]+' '+ilk[0]+' - Devam ediyor  ·  '+sure(ilk),ox+52,y+36,'500 9px '+F,GR);
var yy=y+52;rs.forEach(function(r,i){x.fillStyle='rgba(47,75,255,.28)';x.fillRect(ox+26,yy-2,2,r.h-(i==rs.length-1?11:0));x.fillStyle=AC;x.beginPath();x.arc(ox+27,yy+5,3.6,0,7);x.fill();
tx(r.q.rol,ox+52,yy+8,'800 10.5px '+F,INK);tx((r.q.kurum?r.q.kurum+'  ·  ':'')+tarih(r.q.bas),ox+52,yy+21,'500 8.6px '+F,GR);var ty=yy+33;r.ls.forEach(function(l){tx(l,ox+52,ty,'500 9.6px '+F,INK);ty+=12.2});yy+=r.h});
y+=ch+8});
sec('Topluluk ve Etkinlikler');
var plain=veri.topluluklar.filter(function(t){return !t[1]}),withd=veri.topluluklar.filter(function(t){return t[1]});
(function(){var cxp=ox,cy=y;plain.forEach(function(t){x.font='700 9.2px '+F;var w=x.measureText(dc(t[0])).width+16;if(cxp+w>ox+mw){cxp=ox;cy+=22}rr(cxp,cy,w,17,8.5);x.fillStyle='#eaf0ff';x.fill();x.lineWidth=.8;x.strokeStyle='#d3ddfb';x.stroke();tx(t[0],cxp+8,cy+11.8,'700 9.2px '+F,BL);cxp+=w+6});y=cy+24})();
withd.forEach(function(t,i){var ls=wr(t[1],'500 9.2px '+F,mw-26,4),h=34+ls.length*11.6,col=PAL[(i+3)%PAL.length];card(h,col);tx(t[0],ox+14,y+18,'800 10.5px '+F,INK);var ty=y+32;ls.forEach(function(l){tx(l,ox+14,ty,'500 9.2px '+F,INK);ty+=11.6});y+=h+6});
wr('Ayrıca '+veri.programlar.length+' farklı okul tören ve programında aktif görev aldım.','500 9.5px '+F,mw).forEach(function(l){tx(l,ox,y+10,'500 9.5px '+F,GR);y+=13});
y1=y;
tx('Sayfa 1 / 2',W-28,H-14,'600 8.5px '+F,GR,'right');
/* ---------- SAYFA 2 ---------- */
np();
var g2=x.createLinearGradient(0,0,W,0);g2.addColorStop(0,'#1e3a7c');g2.addColorStop(1,'#2f4bff');x.fillStyle=g2;x.fillRect(0,0,W,84);
x.fillStyle='rgba(255,255,255,.07)';x.beginPath();x.arc(W-60,0,100,0,7);x.fill();x.beginPath();x.arc(260,100,60,0,7);x.fill();
tx('Muhammet GÖLPINAR',34,40,'800 22px '+F,'#fff');tx('Sertifikalar ve Başarılar',34,60,'600 11.5px '+F,'#c9d2ff');
x.save();x.beginPath();x.arc(W-34-24,42,27,0,7);x.fillStyle='#fff';x.fill();x.beginPath();x.arc(W-34-24,42,24,0,7);x.clip();
if(I&&I.foto&&I.foto.naturalWidth){var im=I.foto,sc=Math.max(48/im.naturalWidth,48/im.naturalHeight),w=im.naturalWidth*sc,h=im.naturalHeight*sc;x.drawImage(im,W-58-w/2,42-h/2,w,h)}else{x.fillStyle='#16214a';x.fillRect(W-82,18,48,48);tx('MG',W-58,50,'800 15px '+F,'#fff','center')}
x.restore();
ox=34;mw=W-68;y=84;
sec('Sertifikalar ('+n+')');
var gr={},ord=[];veri.sertifikalar.forEach(function(c){if(!gr[c[1]]){gr[c[1]]=[];ord.push(c[1])}gr[c[1]].push(c)});
var ai=ord.slice();ord.sort(function(a,b){return gr[b].length-gr[a].length||ai.indexOf(a)-ai.indexOf(b)});
var colw=(mw-16)/2;
ord.forEach(function(k){var col=PAL[ai.indexOf(k)%PAL.length];rr(ox,y,mw,21,10.5);x.fillStyle=tn(col,.11);x.fill();logo(k,ox+12,y+10.5,15);tx(k,ox+26,y+14.2,'800 10.3px '+F,col);tx(String(gr[k].length),ox+mw-10,y+14.2,'800 10.3px '+F,col,'right');y+=27;
for(var i=0;i<gr[k].length;i+=2){var it=gr[k].slice(i,i+2),ls=it.map(function(c){return wr(c[0],'500 9.8px '+F,colw-64,2)}),rh=Math.max.apply(null,ls.map(function(a){return a.length}))*12+5;
it.forEach(function(c,j){var cx0=ox+4+j*(colw+16);x.fillStyle=col;x.beginPath();x.arc(cx0+3,y+6,2.2,0,7);x.fill();ls[j].forEach(function(l,q){tx(l,cx0+12,y+9.5+q*12,'500 9.8px '+F,INK)});tx(c[2].replace(/^(\S{3})\S*/,'$1'),cx0+colw-8,y+9.5,'600 8.6px '+F,GR,'right')});y+=rh}
y+=7});
sec('Başarılar');
var cwd=(mw-12)/2;
for(var bi=0;bi<veri.basarilar.length;bi+=2){var pr=veri.basarilar.slice(bi,bi+2),inf=pr.map(function(b){return {t:wr(b[0],'800 10.3px '+F,cwd-58,2),d:wr(b[2],'500 8.9px '+F,cwd-58,4),s:b[1]}}),hh=Math.max.apply(null,inf.map(function(q){return 22+q.t.length*12.5+q.d.length*11+6}));
pr.forEach(function(b,j){var cx0=ox+j*(cwd+12),q=inf[j];rr(cx0,y,cwd,hh,10);x.fillStyle='#f4f7ff';x.fill();x.lineWidth=1;x.strokeStyle='#dfe7ff';x.stroke();x.fillStyle='#ffe29a';x.beginPath();x.arc(cx0+22,y+22,12,0,7);x.fill();x.fillStyle='#ffb703';x.beginPath();x.arc(cx0+22,y+22,6.5,0,7);x.fill();
var ty=y+17;q.t.forEach(function(l){tx(l,cx0+42,ty,'800 10.3px '+F,INK);ty+=12.5});tx(q.s,cx0+42,ty+0,'600 8.6px '+F,AC);ty+=11;q.d.forEach(function(l){tx(l,cx0+42,ty+2,'500 8.9px '+F,INK);ty+=11})});y+=hh+8}
y2=y;
x.fillStyle='rgba(15,42,71,.18)';x.fillRect(34,H-30,W-68,1);tx('Muhammet GÖLPINAR · CV',34,H-15,'600 9px '+F,GR);tx('Sayfa 2 / 2',W-34,H-15,'600 9px '+F,GR,'right');
return {P:P,over:Math.max(y1,y2,ys)>BOT,y:Math.max(y1,y2)}}
function mk(I){var r;for(var i=0;i<7;i++){r=build(I,[1,1.05,1.1,1.16,1.24,1.34,1.46][i]);if(!r.over)break}return r.P}
return {mk:mk,loadImg:loadImg}})();
function normT(s){var R=CVF.r;s=dc(String(s)).replace(/[\u200B-\u200F\uFE0F\u00AD]/g,'').replace(/[\s\u00A0]+/g,' ');var o='';
 for(var ch of s){var c=ch.codePointAt(0);if(R.cm[c]){o+=ch;continue}
  var b=ch.normalize('NFD').charAt(0);if(b!==ch&&R.cm[b.charCodeAt(0)])o+=b;
  else if(c>0xFFFF||(c>=0x2190&&c<=0x2BFF)){}else o+='?'}
 return o.trim()}
/* ---------- İçerik + yerleşim (PDF ve önizleme aynı işlemleri kullanır) ---------- */
function layout(){
var R=CVF.r,B=CVF.b,pages=[],pg,y;
function F(f){return f==='b'?B:R}
function nm(s){s=dc(String(s)).replace(/[\u200B-\u200F\uFE0F\u00AD]/g,'').replace(/[\s\u00A0]+/g,' ');var o='';
 for(var ch of s){var c=ch.codePointAt(0);if(R.cm[c]){o+=ch;continue}
  var b=ch.normalize('NFD').charAt(0);if(b!==ch&&R.cm[b.charCodeAt(0)])o+=b;
  else if(c>0xFFFF||(c>=0x2190&&c<=0x2BFF)){}else o+='?'}
 return o.trim()}
function wd(s,f,sz){var cm=F(f).cm,w=0;for(var i=0;i<s.length;i++){var e=cm[s.charCodeAt(i)];w+=e?e[1]:556}return w*sz/1000}
function np(){pg=[];pages.push(pg);y=MT}
function need(h){if(y+h>PH-MB)np()}
np();
function flow(runs,x0,w,sz,o){o=o||{};var lh=sz*1.34,sp=wd(' ','r',sz),ws=[],lines=[],cur=[],cw=0;
 runs.forEach(function(r){String(r.t).split(' ').forEach(function(q){q=nm(q);if(q)ws.push({t:q,f:r.f||'r',l:r.l,c:r.c,w:wd(q,r.f||'r',sz)})})});
 ws.forEach(function(q){var lim=w-(lines.length?(o.rest||0):(o.first||0)),add=(cur.length?sp:0)+q.w;
  if(cur.length&&cw+add>lim){lines.push(cur);cur=[q];cw=q.w}else{cur.push(q);cw+=add}});
 if(cur.length)lines.push(cur);
 lines.forEach(function(ln,i){need(lh);var x=x0+(i?(o.rest||0):(o.first||0)),base=y+sz*.98,seg=null,segs=[];
  ln.forEach(function(q){if(seg&&seg.f===q.f&&seg.l===q.l&&seg.c===q.c)seg.t+=' '+q.t;else{if(seg)seg.t+=' ';seg={t:q.t,f:q.f,l:q.l,c:q.c};segs.push(seg)}});
  segs.forEach(function(g){pg.push({k:'t',x:x,y:base,f:g.f,s:sz,t:g.t,l:g.l,c:g.c});x+=wd(g.t,g.f,sz)});
  y+=lh})}
function bullet(runs,sz){sz=sz||10;if(typeof runs==='string')runs=[{t:runs}];flow([{t:'•'}].concat(runs),MX+3,CW-3,sz,{rest:wd('• ','r',sz)})}
function h2(t){if(y>MT)y+=9;need(11.5*1.34+34);var base=y+11.5*.98;pg.push({k:'t',x:MX,y:base,f:'b',s:11.5,t:nm(t)});y=base+4;pg.push({k:'l',x:MX,y:y,w:CW,h:.8});y+=6}
function entry(title,meta,items){need(10.5*1.34+9.6*1.34+10*1.34+8);flow([{t:title,f:'b'}],MX,CW,10.5);if(meta)flow([{t:meta,c:'g'}],MX,CW,9.6);(items||[]).forEach(function(t){bullet(t)});y+=5}
function ay(b){return AYT[b[1]-1]+' '+b[0]}
function txt(sel){var e=document.querySelector(sel);return e?e.textContent.replace(/\s+/g,' ').trim():''}

/* Başlık bloğu */
var ad=txt('.cv-n')||'Muhammet GÖLPINAR';
pg.push({k:'t',x:MX,y:y+22*.98,f:'b',s:22,t:nm(ad)});y+=22*1.3;
var unv=[txt('.cv-t'),txt('.cv-s')].filter(Boolean).join(' | ');if(unv)flow([{t:unv,f:'b'}],MX,CW,11);
y+=2;
var ct=[],em='muhammetgolpinar@gmail.com',mh=document.querySelector('a[href^="mailto:"]');if(mh)em=mh.getAttribute('href').replace('mailto:','').split('?')[0];
ct.push({t:em,l:'mailto:'+em});
var wb=document.querySelector('.cv-c span:nth-child(2)'),wbt=wb?wb.textContent.trim():'muhammetgolpinar.github.io';ct.push({t:wbt,l:'https://'+wbt});
var li=document.querySelector('a[href*="linkedin.com/in/"]');if(li){var lh=li.href,ld;try{ld=decodeURIComponent(lh.replace(/^https?:\/\/(www\.)?/,'')).replace(/\/$/,'')}catch(e){ld=lh.replace(/^https?:\/\/(www\.)?/,'')}ct.push({t:ld,l:lh})}
EK_ILETISIM.forEach(function(t){ct.push({t:t})});
var cr=[];ct.forEach(function(c,i){if(i)cr.push({t:'|'});cr.push(c)});flow(cr,MX,CW,10);

/* Özet */
var oz=txt('#hakkinda p');if(oz){h2('Özet');flow([{t:oz}],MX,CW,10)}

/* İş Deneyimi */
if(typeof deneyim!=='undefined'&&deneyim.length){h2('İş Deneyimi');
 deneyim.forEach(function(d){
  if(!d.roller){var yer=d.yer?d.yer.replace(' · ',' (')+(d.yer.indexOf(' · ')>-1?')':''):'';
   entry(d.rol,[d.kurum.replace(' · ',' - '),yer,ay(d.bas)+' - Devam ediyor'].filter(Boolean).join(' | '),[])}
  else d.roller.forEach(function(r){entry(r.rol,[d.kurum+(r.kurum?' - '+r.kurum:''),ay(r.bas)+' - Devam ediyor'].join(' | '),r.acik?[r.acik]:[])})})}

/* Projeler */
var pr=document.querySelectorAll('#projeler .row');
if(pr.length){h2('Projeler');pr.forEach(function(r){var h=r.querySelector('h3'),m=r.querySelector('.m'),p=r.querySelector('p');if(!h)return;if(!p&&/MuGöl PORTAL/.test(h.textContent))p=document.querySelector('#yzd .yzp');
 var its=[];if(p)its.push(p.textContent);
 r.querySelectorAll('a.link').forEach(function(a){var u=a.href;its.push([{t:/play\.google/.test(u)?'Google Play:':'Web sitesi:',f:'b'},{t:u,l:u}])});
 entry(h.textContent,m?m.textContent.replace(/\s*·\s*/g,' | '):'',its)})}

/* Eğitim */
if(veri.egitim&&veri.egitim.length){h2('Eğitim');
 veri.egitim.forEach(function(e,i){var its=[];
  if(i===0&&veri.topluluklar&&veri.topluluklar.length)its.push([{t:'Etkinlik ve topluluklar:',f:'b'},{t:veri.topluluklar.map(function(t){return t[0]}).join('; ')}]);
  entry(e[0],[e[1],e[2]].filter(Boolean).join(' | '),its)})}

/* Beceriler + Diller */
var bg=veri.beceriler||[],dil=bg.filter(function(g){return /dil/i.test(g[1])}),bec=bg.filter(function(g){return dil.indexOf(g)<0});
if(bec.length){need(24+bec.length*(10*1.34+1.5)+12);h2('Beceriler');bec.forEach(function(g){flow([{t:g[1]+':',f:'b'},{t:g[2].join(', ')}],MX,CW,10);y+=1.5})}

/* Sertifikalar: kuruma göre gruplanmış, düz metin */
var S=veri.sertifikalar||[];
if(S.length){var gr={},sr=[];S.forEach(function(c){if(!gr[c[1]]){gr[c[1]]=[];sr.push(c[1])}gr[c[1]].push(c)});
 function dv(t){var m=String(t).match(/^(\S+)\s+(\d{4})/),i=m?AYT.indexOf(m[1]):-1;return m?(+m[2])*12+i:0}
 h2('Sertifikalar');flow([{t:S.length+' sertifika, '+sr.length+' kurum. Tamamı: '+wbt}],MX,CW,10);y+=2;
 sr.forEach(function(k){var l=gr[k],ds=l.map(function(c){return dv(c[2])}).filter(Boolean),mn=Math.min.apply(null,ds),mx=Math.max.apply(null,ds);
  function dt(v){return AYT[v%12]+' '+Math.floor(v/12)}
  var ar=ds.length?(mn===mx?dt(mn):dt(mn)+' - '+dt(mx)):'';
  flow([{t:k+' ('+l.length+(ar?', '+ar:'')+'):',f:'b'},{t:l.map(function(c){return c[0]}).join('; ')}],MX,CW,10);y+=3})}

/* Ödüller ve Başarılar */
if(veri.basarilar&&veri.basarilar.length){h2('Ödüller ve Başarılar');veri.basarilar.forEach(function(b){bullet(b[0]+(b[1]?' - '+b[1]:''))})}

/* Diller */
if(dil.length){h2('Diller');dil.forEach(function(g){g[2].forEach(function(t){bullet(t)})})}

return {pages:pages}}

/* ---------- PDF (gömülü fontlu, gerçek metin) ---------- */
function pdf(pages){
var enc=new TextEncoder(),ch=[],off=[],pos=0,N=pages.length;
function put(d){if(typeof d==='string')d=enc.encode(d);ch.push(d);pos+=d.length}
function obj(k,fn){off[k]=pos;put(k+' 0 obj\n');fn();put('\nendobj\n')}
function h4(v){return ('0000'+v.toString(16)).slice(-4).toUpperCase()}
function u16(s){var h='FEFF';for(var i=0;i<s.length;i++)h+=h4(s.charCodeAt(i));return '<'+h+'>'}
function esc(s){return s.replace(/[\\()]/g,'\\$&')}
function n2(v){return v.toFixed(2)}
function stream(id,dict,data){obj(id,function(){put('<< '+dict+' /Length '+data.length+' >>\nstream\n');put(data);put('\nendstream')})}
function fontSet(id,F,base,flags,stem,res){
 var map={},w={};Object.keys(F.cm).forEach(function(c){var g=F.cm[c][0];if(!(g in map)||+c<map[g])map[g]=+c;w[g]=F.cm[c][1]});
 var gs=Object.keys(w).map(Number).sort(function(a,b){return a-b}),W='';gs.forEach(function(g){W+=g+' ['+w[g]+'] '});
 obj(id,function(){put('<< /Type /Font /Subtype /Type0 /BaseFont /'+base+' /Encoding /Identity-H /DescendantFonts ['+(id+1)+' 0 R] /ToUnicode '+(id+4)+' 0 R >>')});
 obj(id+1,function(){put('<< /Type /Font /Subtype /CIDFontType2 /BaseFont /'+base+' /CIDSystemInfo << /Registry (Adobe) /Ordering (Identity) /Supplement 0 >> /FontDescriptor '+(id+2)+' 0 R /CIDToGIDMap /Identity /DW 556 /W ['+W+'] >>')});
 obj(id+2,function(){put('<< /Type /FontDescriptor /FontName /'+base+' /Flags '+flags+' /FontBBox ['+F.bbox.join(' ')+'] /ItalicAngle 0 /Ascent '+F.asc+' /Descent '+F.desc+' /CapHeight '+F.cap+' /StemV '+stem+' /FontFile2 '+(id+3)+' 0 R >>')});
 var tt=b64(F.ttf);stream(id+3,'/Length1 '+tt.length,tt);
 var cm='/CIDInit /ProcSet findresource begin\n12 dict begin\nbegincmap\n/CIDSystemInfo << /Registry (Adobe) /Ordering (UCS) /Supplement 0 >> def\n/CMapName /Adobe-Identity-UCS def\n/CMapType 2 def\n1 begincodespacerange\n<0000> <FFFF>\nendcodespacerange\n',ks=Object.keys(map).map(Number).sort(function(a,b){return a-b});
 for(var i=0;i<ks.length;i+=100){var p=ks.slice(i,i+100);cm+=p.length+' beginbfchar\n';p.forEach(function(g){cm+='<'+h4(g)+'> <'+h4(map[g])+'>\n'});cm+='endbfchar\n'}
 cm+='endcmap\nCMapName currentdict /CMap defineresource pop\nend\nend';
 stream(id+4,'',enc.encode(cm))}
function hx(t,F){var o='<';for(var i=0;i<t.length;i++){var e=F.cm[t.charCodeAt(i)]||F.cm[63];o+=h4(e?e[0]:0)}return o+'>'}
function wd(s,F,sz){var w=0;for(var i=0;i<s.length;i++){var e=F.cm[s.charCodeAt(i)];w+=e?e[1]:556}return w*sz/1000}
var R=CVF.r,B=CVF.b;
/* nesne numaraları: 1 katalog, 2 sayfalar, 3 bilgi, 4-8 normal font, 9-13 kalın font, sonra sayfa/içerik/bağlantı */
var pid=[],cid=[],iid=[],aid=[],nx=14,i,j;
pages=pages.map(function(p){return Array.isArray(p)?{ops:p}:p});
for(i=0;i<N;i++){pid[i]=nx++;cid[i]=nx++;if(pages[i].img)iid[i]=nx++}
var ann=[];pages.forEach(function(pgo,i){var ops=pgo.ops;aid[i]=[];ann[i]=[];ops.forEach(function(o){if(o.k==='t'&&o.l){var F=o.f==='b'?B:R,t=o.t.replace(/ +$/,''),x2=o.x+wd(t,F,o.s)*(o.tz||100)/100;ann[i].push({id:nx,r:[o.x,PH-o.y-o.s*.22,x2,PH-o.y+o.s*.8],u:o.l});aid[i].push(nx);nx++}})});
var tot=nx;
put('%PDF-1.7\n');
obj(1,function(){put('<< /Type /Catalog /Pages 2 0 R /Lang (tr-TR) >>')});
obj(2,function(){put('<< /Type /Pages /Kids ['+pid.map(function(p){return p+' 0 R'}).join(' ')+'] /Count '+N+' >>')});
obj(3,function(){put('<< /Title '+u16('Muhammet GÖLPINAR - CV')+' /Author '+u16('Muhammet GÖLPINAR')+' /Subject '+u16('Özgeçmiş (CV)')+' /Creator (MuGol PORTAL) /Producer (MuGol PORTAL) >>')});
fontSet(4,R,'LiberationSans',32,80);
fontSet(9,B,'LiberationSans-Bold',262176,140);
pages.forEach(function(pgo,i){
 var ops=pgo.ops,c=pgo.img?'q '+PW+' 0 0 '+PH+' 0 0 cm /Im0 Do Q\n':'';ops.forEach(function(o){if(o.k==='l'){c+='0.45 g\n'+n2(o.x)+' '+n2(PH-o.y-o.h)+' '+n2(o.w)+' '+n2(o.h)+' re f\n'}
  else{var F=o.f==='b'?B:R;c+='BT\n/'+(o.f==='b'?'F2':'F1')+' '+n2(o.s)+' Tf\n'+(o.inv?'3':'0')+' Tr\n'+n2(o.tz||100)+' Tz\n'+(o.c==='g'?'0.25':'0')+' g\n'+n2(o.x)+' '+n2(PH-o.y)+' Td\n'+hx(o.t,F)+' Tj\nET\n'}});
 obj(pid[i],function(){put('<< /Type /Page /Parent 2 0 R /MediaBox [0 0 '+PW+' '+PH+'] /Resources << /Font << /F1 4 0 R /F2 9 0 R >>'+(pgo.img?' /XObject << /Im0 '+iid[i]+' 0 R >>':'')+' >> /Contents '+cid[i]+' 0 R'+(aid[i].length?' /Annots ['+aid[i].map(function(a){return a+' 0 R'}).join(' ')+']':'')+' >>')});
 var cb=enc.encode(c);stream(cid[i],'',cb);
 if(pgo.img)stream(iid[i],'/Type /XObject /Subtype /Image /Width '+pgo.iw+' /Height '+pgo.ih+' /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode',pgo.img);
 ann[i].forEach(function(a){obj(a.id,function(){put('<< /Type /Annot /Subtype /Link /Rect ['+a.r.map(n2).join(' ')+'] /Border [0 0 0] /A << /S /URI /URI ('+esc(a.u)+') >> >>')})})});
var xo=pos;put('xref\n0 '+tot+'\n0000000000 65535 f \n');
for(var k=1;k<tot;k++)put(('0000000000'+off[k]).slice(-10)+' 00000 n \n');
put('trailer\n<< /Size '+tot+' /Root 1 0 R /Info 3 0 R >>\nstartxref\n'+xo+'\n%%EOF');
return new Blob(ch,{type:'application/pdf'})}

function ver(bl,ad){var u=URL.createObjectURL(bl),a=document.createElement('a');a.href=u;a.download=ad||'Muhammet-Golpinar-CV.pdf';document.body.appendChild(a);a.click();a.remove();setTimeout(function(){URL.revokeObjectURL(u)},5000)}

/* Tasarımlı sayfaları PDF'e arka plan görseli + gizli (görünmez) gerçek metin katmanı olarak çevir */
function hyb(cs){var R=CVF.r,B=CVF.b;
 function w0(t,F){var w=0;for(var i=0;i<t.length;i++){var e=F.cm[t.charCodeAt(i)];w+=e?e[1]:556}return w/1000}
 function lnk(t){if(/^[^\s@]+@[^\s@]+\.[A-Za-z]{2,}$/.test(t))return 'mailto:'+t;if(/^(?:[a-z0-9-]+\.)+(?:io|com|net|org|dev|app)(?:\/\S*)?$/i.test(t))return 'https://'+t;return ''}
 return cs.map(function(c){var k=c.__k,ops=[];
  /* okuma sırası: ad/unvan -> kenar çubuğu (iletişim, eğitim, beceriler) -> ana sütun */
  var hd=[],sd=[],mn=[],seen=false;
  (c.__t||[]).forEach(function(o){if(o.y>c.__h-40)return;var t=normT(o.t);if(!t)return;var f=o.b?'b':'r',s=o.s*k,w=w0(t,f==='b'?B:R)*s,tz=w>0?Math.max(30,Math.min(300,100*o.w*k/w)):100,l=lnk(t),
    op={k:'t',x:o.x*k,y:o.y*k,f:f,s:s,t:t,tz:tz,inv:1,l:l||undefined};
   if(o.x<c.__sw)sd.push(op);else{if(o.h)seen=true;(seen||!c.__sw?mn:hd).push(op)}});
  ops=hd.concat(sd,mn);
  return {ops:ops,img:b64(c.toDataURL('image/jpeg',.92).split(',')[1]),iw:c.width,ih:c.height}})}

btn.addEventListener('click',function(){var t0=btn.textContent;btn.disabled=true;btn.textContent='Hazırlanıyor…';
 function bit(s){btn.textContent=s;btn.disabled=false;setTimeout(function(){btn.textContent=t0},2200)}
 var lf=loadFonts().then(function(){return true},function(){return false});
 var fl=['500','600','700','800'].map(function(w){return document.fonts&&document.fonts.load?document.fonts.load(w+' 20px Nunito','ĞÜŞİÖÇığüşöç Aa'):Promise.resolve()});
 var src={'arcelik.png':'logolar/arcelik.png','logo.png':'logolar/logo.png','lise.png':'logolar/lise.png'};try{Object.keys(logolar).forEach(function(k){src[k]=logolar[k]})}catch(e){}
 var I={};var pr=Object.keys(src).map(function(k){return OLD.loadImg([src[k]]).then(function(im){if(im)I[k]=im})});
 pr.push(OLD.loadImg(['profil.jpg','profil.jpeg','profil.png','profil.webp','profil.JPG']).then(function(im){if(im)I.foto=im}));
 Promise.all(fl.concat(pr)).catch(function(){}).then(function(){return lf}).then(function(ok){
  if(!ok){bit('Hata, tekrar dene');return}
  var cs;try{cs=OLD.mk(I)}catch(e){try{cs=OLD.mk({})}catch(e2){bit('Hata, tekrar dene');return}}
  var bl=pdf(hyb(cs));bit('✓ Önizleme hazır');
  window.onizle({title:'CV önizleme',info:cs.length+' sayfa · A4 · PDF · tasarım + ATS metin katmanı',pages:cs.map(function(c){return c.toDataURL('image/jpeg',.9)}),
   dl:function(){ver(bl,'Muhammet-Golpinar-CV.pdf')},
   alt:{label:'Sade ATS',fn:function(){ver(pdf(layout().pages),'Muhammet-Golpinar-CV-ATS.pdf')}}})})});
}catch(e){}})();

document.getElementById('pdf').addEventListener('click',function(){root.classList.add('ok');window.print()});
var sv;window.addEventListener('beforeprint',function(){sv=[fi,acik];fi=0;acik=true;sert()});
window.addEventListener('afterprint',function(){root.classList.remove('ok');if(sv){fi=sv[0];acik=sv[1];sert()}});
function dag(){var m={};(window.sertGrf?window.sertGrf():veri.sertifikalar).forEach(function(c){var g=window.sertKey?window.sertKey(c):c[1];m[g]=(m[g]||0)+1});var k=Object.keys(m).sort(function(a,b){return m[b]-m[a]}),mx=m[k[0]];
put('sert-dag',k.map(function(x){return '<button type="button" class="dg" data-k="'+x+'"><span class="dn">'+x+'</span><span class="db"><i style="width:'+(m[x]/mx*100)+'%"></i></span><b>'+m[x]+'</b></button>'}).join(''))}
dag();document.addEventListener('sertchg',dag);
document.getElementById('sert-dag').addEventListener('click',function(e){var b=e.target.closest('.dg');if(!b)return;if(window.sertTopLevel()){window.sertPick(b.dataset.k);return}var a=document.getElementById('sert-ara');var kk=b.dataset.k.toLocaleLowerCase('tr');if(qq==kk){qq='';a.value=''}else{qq=kk;a.value=b.dataset.k}sert()});
function saat(){var e=document.getElementById('saat');try{e.textContent=new Date().toLocaleTimeString('tr-TR',{timeZone:'Europe/Istanbul',hour:'2-digit',minute:'2-digit'})}catch(x){}}
saat();setInterval(saat,30000);
(function(){if(window.matchMedia&&matchMedia('(prefers-reduced-motion:reduce)').matches)return;document.querySelectorAll('#stats b').forEach(function(b){var n=+b.textContent,t0=null;b.textContent='0';function f(t){if(!t0)t0=t;var k=Math.min(1,(t-t0)/900);b.textContent=Math.round(n*(1-Math.pow(1-k,3)));if(k<1)requestAnimationFrame(f)}requestAnimationFrame(f)})})();
function kisalt(){document.querySelectorAll('.rl p,#basarilar .row p').forEach(function(p){var o=p.nextElementSibling;if(o&&o.className=='dfb')o.remove();p.classList.remove('cl3','open');p.classList.add('cl3');if(p.scrollHeight<=p.clientHeight+1){p.classList.remove('cl3');return}
var b=document.createElement('button');b.type='button';b.className='dfb';b.textContent='Daha fazla göster';b.setAttribute('aria-expanded','false');
b.addEventListener('click',function(){var a=p.classList.toggle('open');b.textContent=a?'Daha az göster':'Daha fazla göster';b.setAttribute('aria-expanded',a)});p.after(b)})}
window.addEventListener('load',function(){kisalt();if(document.fonts&&document.fonts.ready)document.fonts.ready.then(kisalt)});

(function(){
var tt=document.createElement('div');tt.className='toast';tt.setAttribute('role','status');document.body.appendChild(tt);var tm;
window.toast=function(m){tt.textContent=m;tt.classList.add('on');clearTimeout(tm);tm=setTimeout(function(){tt.classList.remove('on')},2200)};
var els=document.querySelectorAll('main .card.pad,main .card.profile .info,#stats');
if('IntersectionObserver' in window&&!matchMedia('(prefers-reduced-motion:reduce)').matches){document.documentElement.classList.add('js-rv');
var ro=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');ro.unobserve(e.target)}})},{threshold:.04,rootMargin:'0px 0px -6% 0px'});
document.querySelectorAll('main .card.pad').forEach(function(x){x.classList.add('rv');ro.observe(x)})}
var f=document.querySelector('footer');if(f){var h=document.createElement('p');h.className='hint';h.innerHTML='Kısayollar: <span class="kbd">/</span> ara · <span class="kbd">Ctrl</span>+<span class="kbd">K</span> · <span class="kbd">D</span> tema · <span class="kbd">T</span> başa dön';f.appendChild(h)}
document.addEventListener('keydown',function(e){if(e.ctrlKey||e.metaKey||e.altKey)return;var t=e.target,tg=(t.tagName||'').toLowerCase();if(tg=='input'||tg=='textarea'||t.isContentEditable||document.querySelector('dialog[open]'))return;
var k=e.key.toLowerCase();
if(k=='/'){e.preventDefault();if(window.menuAc)window.menuAc(1)}
else if(k=='d'){document.getElementById('mode').click();toast(document.documentElement.dataset.theme=='dark'?'Koyu tema':'Açık tema')}
else if(k=='t'){window.scrollTo({top:0,behavior:'smooth'})}})
})();

var AYF=['Ocak','Şubat','Mart','Nisan','Mayıs','Haziran','Temmuz','Ağustos','Eylül','Ekim','Kasım','Aralık'],srm='o';
function dsk(c){var p=String(c[2]).split(' ');return (+p[1]||0)*12+Math.max(0,AYF.indexOf(p[0]))}
function srtf(a,b){return srm=='y'?dsk(b)-dsk(a):srm=='e'?dsk(a)-dsk(b):srm=='a'?a[0].localeCompare(b[0],'tr'):0}
document.getElementById('sert-sirala').addEventListener('change',function(){srm=this.value;sert()});
(function(){
var box=document.getElementById('sor'),n=document.getElementById('msn'),t=document.getElementById('msm'),e=document.getElementById('mse'),cn=document.getElementById('mcn'),sub=document.getElementById('msub'),okp=document.getElementById('mok'),mb=document.getElementById('sorb'),KEY='msgTaslak',MAIL='muhammete.soru.sor@gmail.com',red=matchMedia('(prefers-reduced-motion:reduce)').matches||document.documentElement.dataset.mo=='off';
function ls(f){try{return f()}catch(x){}}
function konu(){var ad=n.value.trim();return (window.msgKonu||'Portfolyo sitesinden mesaj')+(ad?' - '+ad:'')}
function upd(){cn.textContent=t.value.length+'/1000';cn.classList.toggle('lim',t.value.length>900);t.style.height='auto';t.style.height=Math.min(t.scrollHeight,180)+'px';sub.textContent='Konu: '+konu();if(e.textContent&&t.value.trim().length>=5&&n.value.trim().length>=2)e.textContent='';if(window.ipucu)ipucu(t.value);ls(function(){if(t.value||n.value)localStorage.setItem(KEY,JSON.stringify({n:n.value,m:t.value}));else localStorage.removeItem(KEY)})}
t.addEventListener('input',upd);n.addEventListener('input',upd);
ls(function(){var k=JSON.parse(localStorage.getItem(KEY)||'null');if(k){n.value=k.n||'';t.value=k.m||''}});upd();
var dlg=document.getElementById('sord');function ac(){if(!dlg.open)dlg.showModal();setTimeout(function(){(n.value?t:n).focus({preventScroll:true})},red?0:150)}
dlg.addEventListener('click',function(e){if(e.target===dlg)dlg.close()});document.getElementById('askx').addEventListener('click',function(){dlg.close()});
var hb=document.querySelector('.profile .btn.fill');if(hb)hb.addEventListener('click',function(ev){ev.preventDefault();ac()});
function gecerli(){if(n.value.trim().length<2){e.textContent='Lütfen adını yaz.';box.classList.remove('sal');void box.offsetWidth;box.classList.add('sal');n.focus();return false}if(t.value.trim().length<5){e.textContent='Lütfen en az birkaç kelimelik bir mesaj yaz.';box.classList.remove('sal');void box.offsetWidth;box.classList.add('sal');t.focus();return false}return true}
function govde(){var ad=n.value.trim();return t.value.trim()+(ad?'\n\n'+ad:'')}
document.getElementById('mkp').addEventListener('click',function(){if(!gecerli())return;var m=govde();function ok(){toast('Mesaj kopyalandı')}if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(m).then(ok,function(){t.select();toast('Metni seçip kopyalayabilirsin')});else{t.select();try{document.execCommand('copy');ok()}catch(x){toast('Metni seçip kopyalayabilirsin')}}});
function gonder(){if(!gecerli())return;try{navigator.vibrate&&navigator.vibrate(15)}catch(x){}
location.href='mailto:'+MAIL+'?subject='+encodeURIComponent(konu())+'&body='+encodeURIComponent(govde());
ls(function(){localStorage.removeItem(KEY)});mb.hidden=true;okp.hidden=false;
setTimeout(function(){t.value='';upd();okp.hidden=true;mb.hidden=false;if(dlg.open)dlg.close()},red?800:2600)}
document.getElementById('mso').addEventListener('click',gonder);
t.addEventListener('keydown',function(ev){if(ev.key=='Enter'&&(ev.ctrlKey||ev.metaKey)){ev.preventDefault();gonder()}});
window.msgUpd=upd;
document.addEventListener('keydown',function(ev){if(ev.key.toLowerCase()!='m'||ev.ctrlKey||ev.metaKey||ev.altKey)return;var x=ev.target,g=(x.tagName||'').toLowerCase();if(g=='input'||g=='textarea'||g=='select'||document.querySelector('dialog[open]'))return;ev.preventDefault();ac()});
var h=document.querySelector('.hint');if(h)h.innerHTML+=' · <span class="kbd">M</span> mesaj yaz'})();

(function(){
var d=document.getElementById('drawer'),sc=document.getElementById('scrim'),b=document.getElementById('mnu'),c=document.getElementById('mnc'),r=document.documentElement;
function op(f){d.removeAttribute('inert');d.classList.add('open');sc.classList.add('on');b.setAttribute('aria-expanded','true');r.style.overflow='hidden';var a=f?document.getElementById('gara'):(d.querySelector('a.on')||d.querySelector('a'));if(a)a.focus()}
function cl(f){d.classList.remove('open');sc.classList.remove('on');d.setAttribute('inert','');b.setAttribute('aria-expanded','false');r.style.overflow='';if(f)b.focus()}
window.menuAc=op;window.menuKapat=cl;b.addEventListener('click',function(){op()});c.addEventListener('click',function(){cl(1)});sc.addEventListener('click',function(){cl(1)});
d.addEventListener('click',function(e){if(e.target.closest('a'))cl(0)});
document.addEventListener('keydown',function(e){if(e.key=='Escape'&&d.classList.contains('open'))cl(1)});
})();

(function(){
var q=document.getElementById('gara'),o=document.getElementById('gsonuc'),nv=document.querySelector('#drawer nav');
function ogeler(){var a=[];document.querySelectorAll('#deneyim .rl,#deneyim .row,#projeler .row,#egitim .row,#basarilar .row,#beceriler .row').forEach(function(el){if(el.classList.contains('row')&&el.querySelector('.rl'))return;var h=el.querySelector('h3'),h2=el.closest('section').querySelector('h2');a.push({t:h?h.textContent.trim():'',k:(el.textContent||'').toLocaleLowerCase('tr'),s:h2.childNodes[0].textContent.trim(),el:el})});
veri.sertifikalar.forEach(function(c){a.push({t:c[0],k:c.join(' ').toLocaleLowerCase('tr'),s:'Sertifikalar',c:c})});return a}
function git(it){if(window.menuKapat)window.menuKapat(0);q.value='';goster('');
setTimeout(function(){var h;if(it.c){fi=0;acik=true;qq=it.c[0].toLocaleLowerCase('tr');document.getElementById('sert-ara').value=it.c[0];sert();h=document.getElementById('sertifikalar')}else h=it.el;
h.scrollIntoView({block:it.c?'start':'center'});if(!it.c){h.classList.remove('bul');void h.offsetWidth;h.classList.add('bul')}},60)}
function goster(v){v=v.trim().toLocaleLowerCase('tr');o.textContent='';if(!v){o.hidden=true;nv.hidden=false;return}
nv.hidden=true;o.hidden=false;var r=ogeler().filter(function(x){return x.k.indexOf(v)>-1}).slice(0,12);
if(!r.length){var p=document.createElement('p');p.textContent='Sonuç bulunamadı.';o.appendChild(p);return}
r.forEach(function(x){var b=document.createElement('button'),t=document.createElement('b'),m=document.createElement('small');b.type='button';t.textContent=x.t;m.textContent=x.s;b.appendChild(t);b.appendChild(m);b.addEventListener('click',function(){git(x)});o.appendChild(b)})}
q.addEventListener('input',function(){goster(q.value)});
q.addEventListener('keydown',function(e){if(e.key=='Enter'){var b=o.querySelector('button');if(b)b.click()}});
})();

(function(){
var r=document.documentElement,sv=function(k,v){try{localStorage.setItem(k,v)}catch(e){}};
var sb=document.querySelectorAll('#dtools [data-ac]');
function mark(){var a=r.dataset.ac||'mavi';sb.forEach(function(b){b.setAttribute('aria-pressed',b.dataset.ac==a)})}
sb.forEach(function(b){b.addEventListener('click',function(){if(b.dataset.ac=='mavi')delete r.dataset.ac;else r.dataset.ac=b.dataset.ac;sv('ac',b.dataset.ac=='mavi'?'':b.dataset.ac);mark();toast('Renk: '+b.getAttribute('aria-label'))})});mark();
var St=[.9,1,1.12,1.25];
document.querySelectorAll('#dtools [data-fs]').forEach(function(b){b.addEventListener('click',function(){var c=parseFloat(r.style.getPropertyValue('--fs'))||1,i=St.indexOf(c);if(i<0)i=1;i=b.dataset.fs=='0'?1:Math.max(0,Math.min(3,i+(b.dataset.fs=='+'?1:-1)));r.style.setProperty('--fs',St[i]);sv('fs',St[i]);toast('Yazı boyutu: %'+Math.round(St[i]*100));if(window.kisalt)kisalt()})});
document.getElementById('ozet').addEventListener('click',function(){
var t='Muhammet GÖLPINAR – Bilişim Teknolojileri Öğrencisi. Arçelik Türkiye’de Bilgi İşlem Stajyeri; MuGöl PORTAL’ın kurucusu ve geliştiricisi (web sitesi ve Google Play Store uygulaması). '+veri.sertifikalar.length+' sertifika. İletişim: muhammetgolpinar@gmail.com · https://www.linkedin.com/in/muhammet-g%C3%B6lpinar-10875a379';
try{navigator.clipboard.writeText(t).then(function(){toast('Özet kopyalandı')},function(){toast('Kopyalanamadı')})}catch(e){toast('Kopyalanamadı')}});
document.addEventListener('keydown',function(e){if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()=='k'){e.preventDefault();if(window.menuAc)window.menuAc(1)}});
})();

(function(){
var inp=document.getElementById('sert-ara'),bl=document.getElementById('sert-bulut');
var m={};veri.sertifikalar.forEach(function(c){c[3].forEach(function(t){m[t]=(m[t]||0)+1})});
var ks=Object.keys(m).sort(function(a,b){return m[b]-m[a]}).slice(0,0);
function mk(){bl.querySelectorAll('.bt[data-t]').forEach(function(b){b.setAttribute('aria-pressed',qq==b.dataset.t.toLocaleLowerCase('tr'))})}
function filt(v){fi=0;acik=false;var k=v.toLocaleLowerCase('tr');if(qq==k){qq='';inp.value=''}else{qq=k;inp.value=v}sert();mk()}
ks.forEach(function(t){var b=document.createElement('button');b.type='button';b.className='bt';b.dataset.t=t;b.textContent=t+' ('+m[t]+')';b.setAttribute('aria-pressed','false');b.addEventListener('click',function(){filt(t)});bl.appendChild(b)});
['sertifika-filter','sert-dag'].forEach(function(i){document.getElementById(i).addEventListener('click',function(){setTimeout(mk,0)})});
var x0=0,y0=0,ed=false,dr=document.getElementById('drawer');
document.addEventListener('touchstart',function(e){var t=e.touches[0];x0=t.clientX;y0=t.clientY;ed=x0<28},{passive:true});
document.addEventListener('touchend',function(e){var t=e.changedTouches[0],dx=t.clientX-x0,dy=Math.abs(t.clientY-y0);if(dy>50)return;
if(dr.classList.contains('open')){if(dx<-60&&window.menuKapat)window.menuKapat(1)}else if(ed&&dx>60&&window.menuAc)window.menuAc()},{passive:true});
})();

(function(){
var r=document.documentElement,sv=function(k,v){try{localStorage.setItem(k,v)}catch(e){}},rm=function(k){try{localStorage.removeItem(k)}catch(e){}},gt=function(k){try{return localStorage.getItem(k)}catch(e){return null}};
var q=function(a){return document.querySelectorAll('#dtools '+a)};
function pr(a,f){q(a).forEach(function(b){b.setAttribute('aria-pressed',f(b))})}
function mark(){pr('[data-th]',function(b){return b.dataset.th==(gt('tema')||'auto')});pr('[data-mo]',function(b){return b.dataset.mo==(r.dataset.mo||'on')});pr('[data-hc]',function(b){return b.dataset.hc==(r.dataset.hc||'off')})}
function mq(){return window.matchMedia&&matchMedia('(prefers-color-scheme:dark)').matches}
function sis(){if(mq())r.dataset.theme='dark';else delete r.dataset.theme}
q('[data-th]').forEach(function(b){b.addEventListener('click',function(){var v=b.dataset.th;if(v=='auto'){rm('tema');sis()}else{r.dataset.theme=v;sv('tema',v)}if(window.ik)ik();mark()})});
q('[data-mo]').forEach(function(b){b.addEventListener('click',function(){if(b.dataset.mo=='off'){r.dataset.mo='off';sv('mo','off')}else{delete r.dataset.mo;rm('mo')}mark()})});
q('[data-hc]').forEach(function(b){b.addEventListener('click',function(){if(b.dataset.hc=='on'){r.dataset.hc='on';sv('hc','on')}else{delete r.dataset.hc;rm('hc')}mark()})});
document.getElementById('mode').addEventListener('click',function(){setTimeout(mark,0)});
document.getElementById('ayr').addEventListener('click',function(){['tema','ac','fs','mo','hc'].forEach(rm);delete r.dataset.ac;delete r.dataset.mo;delete r.dataset.hc;r.style.removeProperty('--fs');sis();if(window.ik)ik();q('[data-ac]').forEach(function(b){b.setAttribute('aria-pressed',b.dataset.ac=='mavi')});mark();toast('Ayarlar sıfırlandı')});
mark();
})();

(function(){
function selam(){var h=new Date().getHours(),g=h>=5&&h<12?'Günaydın':h>=12&&h<18?'İyi günler':h>=18&&h<22?'İyi akşamlar':'İyi geceler',e=h>=5&&h<12?'☀️':h>=12&&h<18?'🌤️':h>=18&&h<22?'🌆':'🌙',a=document.getElementById('hosg'),b=document.getElementById('hi');
if(a)a.textContent=g+'!';if(b)b.textContent=e+' '+g+', ben'}
try{selam();setInterval(function(){try{selam()}catch(e){}},60000)}catch(e){}
var hd=document.getElementById('hos'),reduce=matchMedia('(prefers-reduced-motion:reduce)').matches||document.documentElement.dataset.mo=='off',ti;
var yaz=true;function tk(){}
function kapat(){if(!hd.open)return;try{navigator.vibrate&&navigator.vibrate(12)}catch(e){}if(reduce){hd.close();return}hd.classList.add('cik');setTimeout(function(){hd.classList.remove('cik');hd.close()},320)}
hd.addEventListener('close',function(){clearInterval(ti)});
hd.addEventListener('cancel',function(e){e.preventDefault();kapat()});
hd.addEventListener('click',function(e){if(e.target===hd)kapat()});
var ok=document.getElementById('hosok');
ok.addEventListener('click',function(e){if(!reduce){var r=ok.getBoundingClientRect(),p=document.createElement('i');p.className='rip';p.style.left=(e.clientX-r.left||r.width/2)+'px';p.style.top=(e.clientY-r.top||r.height/2)+'px';ok.appendChild(p);setTimeout(function(){p.remove()},600)}kapat()});
if(!reduce&&matchMedia('(pointer:fine)').matches){hd.addEventListener('pointermove',function(e){var r=hd.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;hd.style.setProperty('--px',(x*14)+'px');hd.style.setProperty('--py',(y*10)+'px')})}
var sy=null;hd.addEventListener('touchstart',function(e){sy=e.touches[0].clientY},{passive:true});
hd.addEventListener('touchmove',function(e){if(sy==null)return;var d=e.touches[0].clientY-sy;if(d>0){hd.style.transform='translateY('+d+'px)';hd.style.opacity=Math.max(.3,1-d/300)}},{passive:true});
hd.addEventListener('touchend',function(e){if(sy==null)return;var d=e.changedTouches[0].clientY-sy;sy=null;if(d>90){hd.style.transform='';hd.style.opacity='';kapat()}else{hd.style.transition='transform .25s,opacity .25s';hd.style.transform='';hd.style.opacity='';setTimeout(function(){hd.style.transition=''},260)}});
try{hd.showModal();document.getElementById('hosok').focus()}catch(e){}
/* daktilo efekti */
(function(){
function prep(el){var n=[].slice.call(el.childNodes).filter(function(t){return t.nodeType==3&&t.nodeValue.trim()}).pop();if(!n)return null;
var txt=n.nodeValue,w=document.createElement('span'),sr=document.createElement('span'),v=document.createElement('span'),a=document.createElement('span'),c=document.createElement('span'),r=document.createElement('span');
w.className='tw';sr.className='sr';sr.textContent=txt;v.setAttribute('aria-hidden','true');c.className='c';r.className='r';r.textContent=txt;
v.appendChild(a);v.appendChild(c);v.appendChild(r);w.appendChild(sr);w.appendChild(v);el.replaceChild(w,n);
return{a:a,r:r,c:c,ch:Array.from(txt)}}
function finish(){yaz=false;tk();var bb=hd.querySelector('.btns');bb.inert=false;hd.classList.add('done');try{ok.focus({preventScroll:true})}catch(e){}}
hd.querySelector('.btns').inert=true;
var yenile=false;try{var nv=performance.getEntriesByType('navigation')[0];yenile=!!nv&&nv.type!=='navigate'}catch(e){}
if(reduce||yenile){finish();return}
var q=[hd.querySelector('.hosr'),document.getElementById('hosg'),hd.querySelector('.s3')].map(prep).filter(Boolean);
function run(k){
if(!hd.open){return}
if(k>=q.length){setTimeout(function(){if(hd.open)finish()},300);return}
var o=q[k],i=0;
(function step(){
if(!hd.open)return;
if(i>=o.ch.length){o.c.remove();setTimeout(function(){run(k+1)},110);return}
var p=o.ch[i++];o.a.textContent+=p;o.r.textContent=o.ch.slice(i).join('');
setTimeout(step,26+Math.random()*26+(/[,;.?!]/.test(p)?130:0))
})()}
setTimeout(function(){run(0)},420);
hd.addEventListener('close',function(){yaz=false})
})();
var T=[['Staj teklifi','Staj teklifi','Merhaba Muhammet, ekibimizde staj fırsatı için seninle görüşmek isteriz. Uygun olduğun bir zamanı paylaşır mısın?'],['İş birliği','İş birliği','Merhaba Muhammet, bir proje için iş birliği yapmak istiyorum. Detayları konuşabilir miyiz?'],['Soru','Soru','Merhaba Muhammet, projelerin hakkında bir sorum var: '],['Tanışalım','Tanışma','Merhaba Muhammet, profilini inceledim ve tanışmak isterim.']];
var sb=document.getElementById('sab'),ta=document.getElementById('msm');
var IC=['💼','🤝','❓','👋'];T.forEach(function(t,i){var b=document.createElement('button');b.type='button';b.className='bt';b.setAttribute('aria-pressed','false');b.textContent=IC[i]+' '+t[0];b.addEventListener('click',function(){sb.querySelectorAll('.bt').forEach(function(x){x.setAttribute('aria-pressed',x===b)});ta.value=t[2];window.msgKonu=t[1]+' - Portfolyo sitesinden mesaj';if(window.msgUpd)msgUpd();ta.focus();ta.setSelectionRange(ta.value.length,ta.value.length)});sb.appendChild(b)});

})();
;
(function(){
/* Özel günler */
var G=[['1-1','🎆','Yeni yılın kutlu olsun!','linear-gradient(120deg,#7c5cff,#2f9bec)'],['4-23','🇹🇷','23 Nisan Ulusal Egemenlik ve Çocuk Bayramı kutlu olsun!','linear-gradient(120deg,#e11d48,#f97316)'],['5-1','✊','1 Mayıs Emek ve Dayanışma Günü kutlu olsun!','linear-gradient(120deg,#dc2626,#f59e0b)'],['5-19','🇹🇷','19 Mayıs Atatürk’ü Anma, Gençlik ve Spor Bayramı kutlu olsun!','linear-gradient(120deg,#e11d48,#fb7185)'],['7-15','🇹🇷','15 Temmuz Demokrasi ve Millî Birlik Günü','linear-gradient(120deg,#b91c1c,#7f1d1d)'],['8-30','🇹🇷','30 Ağustos Zafer Bayramı kutlu olsun!','linear-gradient(120deg,#e11d48,#be123c)'],['10-29','🇹🇷','29 Ekim Cumhuriyet Bayramı kutlu olsun!','linear-gradient(120deg,#e11d48,#9f1239)'],['11-10','🕊️','Saygı ve özlemle anıyoruz.','linear-gradient(120deg,#475569,#1e293b)'],['11-24','📚','24 Kasım Öğretmenler Günü kutlu olsun!','linear-gradient(120deg,#0ea5e9,#6366f1)']];
function hic(d){try{var p=new Intl.DateTimeFormat('en-u-ca-islamic-umalqura',{day:'numeric',month:'numeric'}).formatToParts(d),m=0,g=0;p.forEach(function(x){if(x.type=='month')m=+x.value;if(x.type=='day')g=+x.value});return[m,g]}catch(e){return[0,0]}}
function bul(d){var k=(d.getMonth()+1)+'-'+d.getDate(),r=null;G.forEach(function(x){if(x[0]==k)r=x});if(r)return r;
var h=hic(d);if(h[0]==10&&h[1]>=1&&h[1]<=3)return['','🌙','Ramazan Bayramınız mübarek olsun!','linear-gradient(120deg,#0f766e,#1d4ed8)'];
if(h[0]==12&&h[1]>=10&&h[1]<=13)return['','🌙','Kurban Bayramınız mübarek olsun!','linear-gradient(120deg,#0f766e,#166534)'];return null}
try{var m=/[?&]gun=(\d+)-(\d+)/.exec(location.search),d=m?new Date(2026,+m[1]-1,+m[2]):new Date(),o=bul(d),bn=document.querySelector('.banner');
if(o&&bn){bn.style.background=o[3];var e=document.createElement('div');e.className='ozel';e.setAttribute('role','status');e.innerHTML='<span></span>';e.firstChild.textContent=o[1]+' '+o[2];bn.appendChild(e)}}catch(x){}
/* Muhammet'e sor */
var N=function(t){return t.toLocaleLowerCase('tr').replace(/ı/g,'i').normalize('NFD').replace(/[\u0300-\u036f]/g,'')};
var sc=0;try{sc=veri.sertifikalar.length}catch(e){}
var R=[['staj is calis firsat teklif ise alim','Staj, iş ve iş birliği tekliflerine açığım. En hızlı yol e-posta; sayfadaki hazır mesaj şablonları da işini kolaylaştırır.','mailto:muhammetgolpinar@gmail.com','E-posta gönder'],
['sertifika kurs belge btk ismek','Eğitim yolculuğumda'+(sc?' '+sc+' sertifika ':' çok sayıda sertifika ')+'var. Arayıp etiketlerle süzebilirsin.','#sertifikalar','Sertifikalara git'],
['proje portal mugol uygulama play','MuGöl PORTAL’ı geliştiriyorum. Projelerimi ve uygulama bağlantısını Projeler bölümünde bulabilirsin.','#projeler','Projelere git'],
['beceri yetenek teknoloji yazilim dil arac','Becerilerimi kategorilere ayrılmış hâlde Beceriler bölümünde görebilirsin.','#beceriler','Becerilere git'],
['deneyim tecrube calistim','Deneyimlerim zaman sırasına göre Deneyim bölümünde.','#deneyim','Deneyime git'],
['egitim okul universite bolum','Eğitim geçmişim Eğitim bölümünde.','#egitim','Eğitime git'],
['basari odul onur','Başarılarım ve ödüllerim burada.','#basarilar','Başarılara git'],
['iletisim mail eposta posta linkedin ulas yaz merhaba selam','Bana e-posta veya LinkedIn üzerinden ulaşabilirsin.','mailto:muhammetgolpinar@gmail.com','E-posta gönder'],
['hakkinda kimsin kim tanit','Kısa tanıtımım Hakkında bölümünde.','#hakkinda','Hakkında’ya git']];
var o2=document.getElementById('soro'),tmr;
window.ipucu=function(q){clearTimeout(tmr);tmr=setTimeout(function(){var n=N(q).trim(),r=null,best=0;
if(n.length>2)R.forEach(function(x){var p=0;x[0].split(' ').forEach(function(w){if(w.length>2&&n.indexOf(w)>-1)p++});if(p>best){best=p;r=x}});
o2.textContent='';if(!r){o2.hidden=true;return}o2.hidden=false;
var l=document.createElement('span');l.className='sol';l.textContent='💡 Belki işine yarar';var p=document.createElement('p');p.textContent=r[1];var a=document.createElement('a');a.className='lnk';a.href=r[2];a.textContent=r[3]+' →';
o2.appendChild(l);o2.appendChild(p);o2.appendChild(a)},250)};
})();
;
(function(){
var S=[['İstikbal göklerdedir.','Mustafa Kemal Atatürk'],
['Hayatta en hakiki mürşit ilimdir.','Mustafa Kemal Atatürk'],
['Geleceği tahmin etmenin en iyi yolu onu icat etmektir.','Alan Kay'],
['Âyinesi iştir kişinin, lâfa bakılmaz; şahsın görünür rütbe-i aklı eserinde.','Ziya Paşa'],
['Tek bildiğim, hiçbir şey bilmediğimdir.','Sokrates'],
['Bildiğini bildiğini, bilmediğini bilmediğini bilmek; işte gerçek bilgi budur.','Konfüçyüs'],
['Düşünüyorum, öyleyse varım.','René Descartes'],
['Bilgi güçtür.','Francis Bacon'],
['Hayal gücü bilgiden daha önemlidir.','Albert Einstein'],
['Önemli olan sorgulamayı bırakmamaktır.','Albert Einstein'],
['Eğitim, dünyayı değiştirmek için kullanabileceğiniz en güçlü silahtır.','Nelson Mandela'],
['Bilgiye yapılan yatırım en iyi faizi verir.','Benjamin Franklin'],
['Bilim ve fen nerede ise oradan alacağız.','Mustafa Kemal Atatürk'],
['Aklını kullanma cesaretini göster!','Immanuel Kant'],
['Daha uzağı görebildimse, devlerin omuzlarında durduğum içindir.','Isaac Newton'],
['Hayatta korkulacak bir şey yok, sadece anlaşılması gereken şeyler var.','Marie Curie'],
['Eğitimin kökü acıdır, ama meyvesi tatlıdır.','Aristoteles'],
['Öğrenmek aklı yormaz.','Leonardo da Vinci'],
['Öğretirken öğreniriz.','Seneca'],
['Bir adamı cevaplarıyla değil, sorularıyla yargıla.','Voltaire'],
['Yarın ölecekmiş gibi yaşa; sonsuza dek yaşayacakmış gibi öğren.','Mahatma Gandhi'],
['Bir kütüphanesi ve bir bahçesi olan evin her şeyi vardır.','Cicero']];
var m=document.getElementById('sozm'),k=document.getElementById('sozk'),f=document.getElementById('soz'),son=-1;
function yeni(a){var i;do{i=Math.floor(Math.random()*S.length)}while(i===son&&S.length>1);son=i;
m.textContent='“'+S[i][0]+'”';k.textContent='— '+S[i][1];
if(a){f.classList.remove('yn');void f.offsetWidth;f.classList.add('yn')}}
yeni(false);
document.getElementById('sozy').addEventListener('click',function(){yeni(true)});
document.getElementById('sozc').addEventListener('click',function(){var t=m.textContent+' '+k.textContent;
try{navigator.clipboard.writeText(t).then(function(){if(window.toast)toast('Söz kopyalandı')},function(){if(window.toast)toast('Kopyalanamadı')})}catch(e){if(window.toast)toast('Kopyalanamadı')}});
})();
;
(function(){
var SR=window.SpeechRecognition||window.webkitSpeechRecognition,row=document.getElementById('micr'),b=document.getElementById('micb'),st=document.getElementById('mict'),t=document.getElementById('msm'),dlg=document.getElementById('sord');
if(!SR){row.hidden=true;return}
var rec=null,on=false,base='';
function ui(a){on=a;b.setAttribute('aria-pressed',a);b.textContent=a?'⏹ Durdur':'🎤 Sesle yaz'}
function msg(m){st.textContent=m}
function stop(){if(rec){try{rec.stop()}catch(e){}}}
function start(){
try{rec=new SR()}catch(e){msg('Bu tarayıcı sesle yazmayı desteklemiyor.');return}
rec.lang='tr-TR';rec.interimResults=true;rec.continuous=true;
base=t.value;if(base&&!/\s$/.test(base))base+=' ';
rec.onstart=function(){ui(true);msg('Dinliyorum…')};
rec.onresult=function(e){var x='';for(var k=0;k<e.results.length;k++)x+=e.results[k][0].transcript;
t.value=(base+x.trim()).slice(0,1000);if(window.msgUpd)msgUpd()};
rec.onerror=function(e){var er=e.error;
msg(er=='not-allowed'||er=='service-not-allowed'?'Mikrofon izni gerekli. Tarayıcı ayarlarından izin ver.':er=='no-speech'?'Ses algılanmadı, tekrar dene.':er=='audio-capture'?'Mikrofon bulunamadı.':er=='network'?'Ses tanıma için internet gerekli.':'Ses tanıma çalışmadı.')};
rec.onend=function(){ui(false);if(/Dinliyorum/.test(st.textContent))msg('');t.focus({preventScroll:true})};
try{rec.start()}catch(e){ui(false)}}
b.addEventListener('click',function(){if(on)stop();else start()});
dlg.addEventListener('close',function(){stop();msg('')});
})();
;
(function(){
var b=document.getElementById('kartb');if(!b)return;
var W=1200,H=675,FF='Nunito,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif',LI={};
function cv(n){return getComputedStyle(document.documentElement).getPropertyValue(n).trim()}
function rr(c,x,y,w,h,r){c.beginPath();c.moveTo(x+r,y);c.arcTo(x+w,y,x+w,y+h,r);c.arcTo(x+w,y+h,x,y+h,r);c.arcTo(x,y+h,x,y,r);c.arcTo(x,y,x+w,y,r);c.closePath()}
function fit(c,t,w,px,wt){do{c.font=wt+' '+px+'px '+FF;px-=2}while(c.measureText(t).width>w&&px>20);return px}
function orb(c,x,y,r,col){var g=c.createRadialGradient(x,y,0,x,y,r);g.addColorStop(0,col);g.addColorStop(1,'rgba(255,255,255,0)');c.fillStyle=g;c.fillRect(x-r,y-r,2*r,2*r)}
function ciz(foto){
var S=2,k=document.createElement('canvas');k.width=W*S;k.height=H*S;var c=k.getContext('2d');c.scale(S,S);
var hero=cv('--hero')||'#1e3a7c',ac=cv('--accent')||'#2f4bff';
var g=c.createLinearGradient(0,0,W,H);g.addColorStop(0,hero);g.addColorStop(1,ac);
rr(c,0,0,W,H,48);c.fillStyle=g;c.fill();
c.save();rr(c,0,0,W,H,48);c.clip();
orb(c,W-80,20,520,'rgba(255,255,255,.32)');orb(c,60,H+60,460,'rgba(255,255,255,.16)');orb(c,W*.36,H*.5,260,'rgba(255,255,255,.07)');
for(var x=24;x<W;x+=26)for(var y=24;y<H;y+=26){var a=Math.max(0,(x/W-.4))*.32;if(a>0){c.fillStyle='rgba(255,255,255,'+a.toFixed(3)+')';c.beginPath();c.arc(x,y,1.7,0,7);c.fill()}}
c.restore();
rr(c,3,3,W-6,H-6,46);c.strokeStyle='rgba(255,255,255,.18)';c.lineWidth=2;c.stroke();
/* profil fotoğrafı */
var cx=232,cy=H/2,r=150;
c.beginPath();c.arc(cx,cy,r+24,0,7);c.fillStyle='rgba(255,255,255,.12)';c.fill();
c.save();c.shadowColor='rgba(0,0,0,.4)';c.shadowBlur=44;c.shadowOffsetY=16;
var rg=c.createLinearGradient(cx-r,cy-r,cx+r,cy+r);rg.addColorStop(0,'#ffffff');rg.addColorStop(1,'rgba(255,255,255,.55)');
c.beginPath();c.arc(cx,cy,r+8,0,7);c.fillStyle=rg;c.fill();c.restore();
c.save();c.beginPath();c.arc(cx,cy,r,0,7);c.clip();
var im=document.querySelector('.avatar img');
if(foto&&im&&im.complete&&im.naturalWidth>0){var sc=Math.max(2*r/im.naturalWidth,2*r/im.naturalHeight),w=im.naturalWidth*sc,h=im.naturalHeight*sc;c.drawImage(im,cx-w/2,cy-h/2,w,h)}
else{c.fillStyle='#16214a';c.fillRect(cx-r,cy-r,2*r,2*r);c.fillStyle='#fff';c.font='800 104px '+FF;c.textAlign='center';c.textBaseline='middle';c.fillText('MG',cx,cy+4)}
c.restore();
c.textAlign='left';c.textBaseline='alphabetic';
var X=450,mw=W-X-60;
/* ad */
var px=80,w1,w2;do{px-=2;c.font='500 '+px+'px '+FF;w1=c.measureText('Muhammet ').width;c.font='800 '+px+'px '+FF;w2=c.measureText('GÖLPINAR').width}while(w1+w2>mw&&px>30);
c.font='500 '+px+'px '+FF;c.fillStyle='rgba(255,255,255,.92)';c.fillText('Muhammet ',X,152);c.font='800 '+px+'px '+FF;c.fillStyle='#fff';c.fillText('GÖLPINAR',X+w1,152);
c.font='600 32px '+FF;c.fillStyle='rgba(255,255,255,.9)';c.fillText('Bilişim Teknolojileri Öğrencisi',X,204);
function lgo(im,cx,cy,d){c.save();c.beginPath();c.arc(cx,cy,d/2,0,7);c.fillStyle='#fff';c.fill();c.clip();var p=d*.14,bw=d-2*p,sc=Math.min(bw/im.naturalWidth,bw/im.naturalHeight),w=im.naturalWidth*sc,h=im.naturalHeight*sc;c.drawImage(im,cx-w/2,cy-h/2,w,h);c.restore()}
var la=foto&&LI.a&&LI.a.naturalWidth>0?LI.a:null,lm=foto&&LI.m&&LI.m.naturalWidth>0?LI.m:null;
if(la)lgo(la,X+17,246,34);else{c.beginPath();c.arc(X+7,246,6,0,7);c.fillStyle='#4ade80';c.fill()}
c.font='500 24px '+FF;c.fillStyle='rgba(255,255,255,.8)';c.fillText('Arçelik Türkiye · Bilgi İşlem Stajyeri',X+(la?46:24),254);
if(lm)lgo(lm,X+17,288,34);else{c.beginPath();c.arc(X+7,288,6,0,7);c.fillStyle='#fff';c.fill()}
c.font='700 24px '+FF;c.fillStyle='#fff';c.fillText('MuGöl PORTAL’ın Kurucusu & Geliştiricisi',X+(lm?46:24),296);
/* iletişim paneli */
var PY=346,PH=234;rr(c,X,PY,mw,PH,26);c.fillStyle='rgba(255,255,255,.12)';c.fill();c.strokeStyle='rgba(255,255,255,.24)';c.lineWidth=1.5;c.stroke();
var L=[['m','muhammetgolpinar@gmail.com'],['i','Muhammet Gölpınar'],['w','muhammetgolpinar.github.io']];
L.forEach(function(l,n){var ry=PY+14+n*68,mid=ry+34,ix=X+54;
if(n){c.fillStyle='rgba(255,255,255,.14)';c.fillRect(X+28,ry-1,mw-56,1.5)}
c.beginPath();c.arc(ix,mid,24,0,7);c.fillStyle='rgba(255,255,255,.2)';c.fill();
c.strokeStyle='#fff';c.fillStyle='#fff';c.lineWidth=2.4;c.lineJoin='round';c.lineCap='round';
if(l[0]=='m'){rr(c,ix-12,mid-9,24,18,3);c.stroke();c.beginPath();c.moveTo(ix-11,mid-7);c.lineTo(ix,mid+2);c.lineTo(ix+11,mid-7);c.stroke()}
else if(l[0]=='i'){c.font='800 22px '+FF;c.textAlign='center';c.fillText('in',ix,mid+8);c.textAlign='left'}
else{c.beginPath();c.arc(ix,mid,12,0,7);c.stroke();c.beginPath();c.ellipse(ix,mid,5.5,12,0,0,7);c.stroke();c.beginPath();c.moveTo(ix-12,mid);c.lineTo(ix+12,mid);c.stroke()}
c.font='600 29px '+FF;c.fillStyle='#fff';c.fillText(l[1],X+100,mid+10)});
return k}
function indir(k,ok,hata){window.onizle({title:'Dijital kart',info:'PNG',pages:[k.toDataURL('image/png')],dl:function(){indir0(k,ok,hata)}})}
function indir0(k,ok,hata){k.toBlob(function(bl){if(!bl){hata();return}var u=URL.createObjectURL(bl),a=document.createElement('a');a.href=u;a.download='muhammet-golpinar-kart.png';document.body.appendChild(a);a.click();a.remove();setTimeout(function(){URL.revokeObjectURL(u)},4000);ok()},'image/png')}
b.addEventListener('click',function(){
var done=function(){if(window.toast)toast('Dijital kart indirildi')};
var fail=function(){if(window.toast)toast('Kart oluşturulamadı')};var yedek=function(){try{indir(ciz(false),done,fail)}catch(x){fail()}};var go=function(){try{indir(ciz(true),done,yedek)}catch(e){yedek()}};
var lim=function(k,src){return new Promise(function(r){var im=new Image();im.onload=function(){LI[k]=im;r()};im.onerror=function(){r()};im.src=src})};
var fl=document.fonts&&document.fonts.load?['400','600','700','800'].map(function(w){return document.fonts.load(w+' 20px Nunito','ĞÜŞİÖÇığüşöç Aa')}):[];
Promise.all(fl.concat([lim('a','logolar/arcelik.png'),lim('m','logolar/logo.png')])).then(go,go)});
})();
;
(function(){
var rm=matchMedia('(prefers-reduced-motion:reduce)').matches,fine=matchMedia('(hover:hover) and (pointer:fine)').matches;
var cards=[].slice.call(document.querySelectorAll('main .card'));

/* 1) Kaydırınca kartlar yumuşakça belirir */
if(!rm&&'IntersectionObserver' in window){
 document.documentElement.classList.add('etk');
 var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.08,rootMargin:'0px 0px -40px 0px'});
 cards.forEach(function(c,i){if(i===0)return;c.classList.add('rv');io.observe(c)});
 setTimeout(function(){cards.forEach(function(c){c.classList.add('in')})},6000);
}

/* 2) Fareyi takip eden ışık efekti + banner paralaksı */
if(fine&&!rm){
 cards.forEach(function(c){c.addEventListener('pointermove',function(e){var r=c.getBoundingClientRect();c.style.setProperty('--mx',(e.clientX-r.left)+'px');c.style.setProperty('--my',(e.clientY-r.top)+'px')});c.addEventListener('pointerleave',function(){c.style.removeProperty('--mx');c.style.removeProperty('--my')})});
 var pf=cards[0],circ=pf&&pf.querySelectorAll('.banner svg circle');
 if(pf&&circ&&circ.length)pf.addEventListener('pointermove',function(e){var r=pf.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;[].forEach.call(circ,function(c,i){var d=(i+1)*14;c.style.transform='translate('+(x*d)+'px,'+(y*d)+'px)'})});
}

/* 3) Düğmelerde dalga efekti */
document.addEventListener('pointerdown',function(e){var b=e.target.closest&&e.target.closest('.btn');if(!b||rm)return;var r=b.getBoundingClientRect(),s=Math.max(r.width,r.height),d=document.createElement('span');d.className='rip';d.style.cssText='width:'+s+'px;height:'+s+'px;left:'+(e.clientX-r.left-s/2)+'px;top:'+(e.clientY-r.top-s/2)+'px';b.appendChild(d);setTimeout(function(){d.remove()},650)});

/* 4) Konfeti: profil fotoğrafına tıkla ya da Konami kodunu gir */
var cvs,ctx,parts=[],raf;
function tick(){ctx.clearRect(0,0,cvs.width,cvs.height);parts=parts.filter(function(p){return p.y<cvs.height+20&&p.l>0});parts.forEach(function(p){p.vy+=.22;p.x+=p.vx;p.y+=p.vy;p.a+=p.va;p.l--;ctx.save();ctx.translate(p.x,p.y);ctx.rotate(p.a);ctx.globalAlpha=Math.min(1,p.l/30);ctx.fillStyle=p.c;ctx.fillRect(-p.s/2,-p.s/3,p.s,p.s*.6);ctx.restore()});if(parts.length)raf=requestAnimationFrame(tick);else{cvs.remove();cvs=null}}
function konfeti(x,y){if(rm)return;if(!cvs){cvs=document.createElement('canvas');cvs.id='etkc';cvs.width=innerWidth;cvs.height=innerHeight;document.body.appendChild(cvs);ctx=cvs.getContext('2d')}
 var col=['#1f8fe8','#6cc3fb','#4ade80','#fbbf24','#f472b6','#a78bfa'];
 for(var i=0;i<90;i++){var a=Math.random()*Math.PI*2,v=4+Math.random()*9;parts.push({x:x,y:y,vx:Math.cos(a)*v,vy:Math.sin(a)*v-6,s:6+Math.random()*7,a:Math.random()*6,va:(Math.random()-.5)*.4,l:90+Math.random()*60,c:col[i%col.length]})}
 cancelAnimationFrame(raf);tick()}
var av=document.querySelector('.avatar');
if(av){av.setAttribute('role','button');av.setAttribute('tabindex','0');av.setAttribute('aria-label','Profil fotoğrafı, konfeti için tıkla');
 var fire=function(){var r=av.getBoundingClientRect();konfeti(r.left+r.width/2,r.top+r.height/2);ipucu('🎉 Merhaba!')};
 av.addEventListener('click',fire);av.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();fire()}})}
var kk=[38,38,40,40,37,39,37,39,66,65],ki=0;
addEventListener('keydown',function(e){var t=e.target&&e.target.tagName;if(t==='INPUT'||t==='TEXTAREA'||t==='SELECT')return;ki=(e.keyCode===kk[ki])?ki+1:(e.keyCode===kk[0]?1:0);if(ki===kk.length){ki=0;konfeti(innerWidth/2,innerHeight/3);konfeti(innerWidth*.2,innerHeight/2);konfeti(innerWidth*.8,innerHeight/2);ipucu('🕹️ Gizli kodu buldun!')}});

/* 5) Küçük ipucu balonu */
var tp;function ipucu(m){if(!tp){tp=document.createElement('div');tp.className='tip';tp.setAttribute('role','status');document.body.appendChild(tp)}tp.textContent=m;tp.classList.add('on');clearTimeout(tp._t);tp._t=setTimeout(function(){tp.classList.remove('on')},1800)}

})();
;
(function(){
var c=document.getElementById('tesekkur'),b=document.getElementById('thxm');
if(!c)return;
if(b)b.addEventListener('click',function(){var m=document.querySelector('.profile .btn.fill');if(m)m.click();else location.href='mailto:muhammetgolpinar@gmail.com'});
var rm=matchMedia('(prefers-reduced-motion:reduce)').matches||document.documentElement.dataset.mo==='off';
if(rm||!('IntersectionObserver' in window))return;
c.classList.add('pre');
var o=new IntersectionObserver(function(e){if(e[0].isIntersecting){c.classList.remove('pre');o.disconnect()}},{threshold:.35});
o.observe(c);
setTimeout(function(){c.classList.remove('pre')},8000);
})();
;
(function(){
var H=document.documentElement;
function ls(f){try{return f()}catch(e){}}

/* ---------- Soru balonu ---------- */
var b=document.getElementById('qb'),bt=document.getElementById('qbt'),bx=document.getElementById('qbx'),dlg=document.getElementById('sord');
if(!b||!bt)return;
function seen(){return ls(function(){return sessionStorage.getItem('qb')})}
function mark(){ls(function(){sessionStorage.setItem('qb','1')})}
if(seen())return;
var tries=0,hideT;
function hide(){b.classList.remove('on');clearTimeout(hideT);setTimeout(function(){b.hidden=true},450)}
function busy(){var t=document.getElementById('tesekkur'),r=t&&t.getBoundingClientRect();
 return document.hidden||document.querySelector('dialog[open]')||document.querySelector('.drawer.open')||(r&&r.top<innerHeight&&r.bottom>0)}
function show(){if(seen())return;
 if(busy()){if(++tries<6)setTimeout(show,8000);return}
 b.hidden=false;void b.offsetWidth;b.classList.add('on');mark();hideT=setTimeout(hide,14000)}
setTimeout(show,30000);
bt.addEventListener('click',function(){hide();var m=document.querySelector('.profile .btn.fill');if(m)m.click()});
bx.addEventListener('click',hide);
if(dlg)dlg.addEventListener('close',mark);
})();
;
(function(){
var sec=document.getElementById('sertifikalar'),bars=document.getElementById('sert-dag'),dn=document.getElementById('sert-dnt'),ay=document.getElementById('sert-ay'),sw=document.getElementById('sert-grf'),inp=document.getElementById('sert-ara');
if(!sec||!bars||!dn||!ay||!sw||typeof veri==='undefined')return;
var PL=['#c62828','#1d4ed8','#7c3aed','#0b7f86','#c2410c','#15803d','#be185d','#a16207'],MN=['Ocak','Şubat','Mart','Nisan','Mayıs','Haziran','Temmuz','Ağustos','Eylül','Ekim','Kasım','Aralık'];
var ALL=veri.sertifikalar,S=ALL,n=S.length,ord=[],m={},ks=[];
function gk(c){return window.sertKey?window.sertKey(c):c[1]}
function rc(){S=window.sertGrf?window.sertGrf():ALL;n=S.length;m={};ord=window.sertTopLevel&&window.sertTopLevel()&&window.sertTopNames?window.sertTopNames.slice():[];ALL.forEach(function(c){var g=gk(c);if(ord.indexOf(g)<0)ord.push(g)});S.forEach(function(c){var g=gk(c);m[g]=(m[g]||0)+1});ks=Object.keys(m).sort(function(a,b){return m[b]-m[a]})}
rc();
function col(k){return PL[Math.max(0,ord.indexOf(k))%PL.length]}
function act(){if(window.sertTopLevel&&window.sertTopLevel())return;var a=((inp&&inp.value)||'').toLocaleLowerCase('tr');return ks.filter(function(k){return k.toLocaleLowerCase('tr')===a})[0]}
function filt(k){if(window.sertTopLevel&&window.sertTopLevel()){window.sertPick(k);return}var b=[].slice.call(bars.querySelectorAll('.dg')).filter(function(x){return x.dataset.k===k})[0];if(b)b.click()}
function rd(anim){var R=46,C=2*Math.PI*R,on=act(),acc=0,g=ks.length>1?1.6:0;
 var seg=ks.map(function(k){var L=m[k]/n*C,o=-acc;acc+=L;return '<circle class="sg'+(k===on?' on':'')+'" data-k="'+k+'" cx="66" cy="66" r="'+R+'" fill="none" stroke="'+col(k)+'" stroke-width="'+(k===on?25:21)+'" stroke-dasharray="'+(L-g).toFixed(2)+' '+(C-L+g).toFixed(2)+'" stroke-dashoffset="'+o.toFixed(2)+'" transform="rotate(-90 66 66)"><title>'+k+' ('+m[k]+')</title></circle>'}).join('');
 var big=on?m[on]:n,lab=on?(on.length>16?on.slice(0,15)+'…':on):((window.__gk==='t'&&window.sertActive&&window.sertActive())||'sertifika');
 var svg='<svg viewBox="0 0 132 132" class="'+(on?'has ':'')+(anim?'anim':'')+'" role="img" aria-label="Sertifika dağılımı"><circle cx="66" cy="66" r="46" fill="none" stroke="var(--soft)" stroke-width="21"/>'+seg+'<text x="66" y="68" text-anchor="middle" class="d1">'+big+'</text><text x="66" y="84" text-anchor="middle" class="d2">'+lab+'</text></svg>';
 var lg=ks.map(function(k){return '<button type="button" class="lgi'+(k===on?' on':'')+'" data-k="'+k+'"><i style="background:'+col(k)+'"></i><span>'+k+'</span><b>'+m[k]+'</b><em>'+Math.round(m[k]/n*100)+'%</em></button>'}).join('');
 dn.innerHTML='<div class="dsv">'+svg+'</div><div class="dlg">'+lg+'</div>'}
function ra(){var mm={};S.forEach(function(c){var p=String(c[2]).split(' '),key=(+p[1]||0)*12+Math.max(0,MN.indexOf(p[0]));var o=mm[key]=mm[key]||{p:p,t:0,k:{}};o.t++;o.k[gk(c)]=(o.k[gk(c)]||0)+1});
 var keys=Object.keys(mm).map(Number).sort(function(a,b){return a-b}),mx=Math.max.apply(null,keys.map(function(k){return mm[k].t})),W=320,base=150,hh=124,sl=(W-20)/keys.length,bw=Math.min(54,sl*.62),cum=0,out='';
 keys.forEach(function(key,i){var d=mm[key],cx=10+sl*i+sl/2,y=base;cum+=d.t;
  ord.forEach(function(k){var v=d.k[k];if(!v)return;var h=Math.max(5,v/mx*hh);y-=h;out+='<rect class="bs" x="'+(cx-bw/2).toFixed(1)+'" y="'+y.toFixed(1)+'" width="'+bw.toFixed(1)+'" height="'+(h-1).toFixed(1)+'" rx="3" fill="'+col(k)+'" style="animation-delay:'+(i*90)+'ms"><title>'+k+' ('+v+')</title></rect>'});
  out+='<text x="'+cx.toFixed(1)+'" y="'+(y-6).toFixed(1)+'" text-anchor="middle" class="d3">'+d.t+'</text><text x="'+cx.toFixed(1)+'" y="'+(base+16)+'" text-anchor="middle" class="d4">'+d.p[0]+'</text><text x="'+cx.toFixed(1)+'" y="'+(base+29)+'" text-anchor="middle" class="d5">'+(d.p[1]||'')+'</text><text x="'+cx.toFixed(1)+'" y="'+(base+45)+'" text-anchor="middle" class="d5">Toplam: '+cum+'</text>'});
 var lg=ks.map(function(k){return '<span><i style="background:'+col(k)+'"></i>'+k+'</span>'}).join('');
 ay.innerHTML='<svg viewBox="0 0 '+W+' 205" role="img" aria-label="Aylara göre alınan sertifikalar"><line x1="10" x2="'+(W-10)+'" y1="'+base+'" y2="'+base+'" stroke="var(--line)"/>'+out+'</svg><div class="alg">'+lg+'</div>'}
var v='d';try{var sv=localStorage.getItem('grf');if(sv==='b'||sv==='d'||sv==='a')v=sv}catch(e){}
function show(nv,save){v=nv;bars.hidden=v!=='b';dn.hidden=v!=='d';ay.hidden=v!=='a';
 [].forEach.call(sw.querySelectorAll('button'),function(b){b.setAttribute('aria-pressed',String(b.dataset.v===v))});
 if(v==='d')rd(true);if(v==='a')ra();
 if(save){try{localStorage.setItem('grf',v)}catch(e){}}}
sw.addEventListener('click',function(e){var b=e.target.closest('button');if(b&&b.dataset.v&&b.dataset.v!==v)show(b.dataset.v,true)});
dn.addEventListener('click',function(e){var t=e.target.closest('.sg,.lgi');if(t)filt(t.dataset.k)});
function sync(){if(v==='d')rd(false)}
sec.addEventListener('click',function(){setTimeout(sync,0)});
if(inp)inp.addEventListener('input',sync);
show(v,false);
document.addEventListener('sertchg',function(){rc();if(v==='d')rd(false);if(v==='a')ra()});
})();
;
(function(){var rm=matchMedia('(prefers-reduced-motion:reduce)').matches||document.documentElement.dataset.mo==='off';if(rm)return;
document.querySelectorAll('.card.pad').forEach(function(c){if(c.classList.contains('in'))return;var o=new IntersectionObserver(function(es){if(es[0].isIntersecting){c.classList.add('in');o.disconnect()}},{threshold:.15});o.observe(c)});
var ok=document.getElementById('hosok');if(ok)ok.addEventListener('click',function(e){var r=ok.getBoundingClientRect(),x=e.clientX||r.left+r.width/2,y=e.clientY||r.top+r.height/2,cl=['#2f4bff','#a78bfa','#38bdf8','#22c55e','#f59e0b','#f472b6'];for(var i=0;i<22;i++){var p=document.createElement('i'),a=Math.random()*6.283,d=50+Math.random()*90;p.className='fxp';p.style.cssText='left:'+x+'px;top:'+y+'px;background:'+cl[i%6]+';--dx:'+Math.cos(a)*d+'px;--dy:'+(Math.sin(a)*d-30)+'px;--r:'+(Math.random()*540-270)+'deg';document.body.appendChild(p);setTimeout(function(q){q.remove()}.bind(null,p),950)}});
})();
;
(function(){
var rm=matchMedia('(prefers-reduced-motion:reduce)').matches||document.documentElement.dataset.mo==='off';
/* kart üzerinde imleci izleyen ışık */
document.addEventListener('pointermove',function(e){var c=e.target.closest&&e.target.closest('.card');if(!c)return;var r=c.getBoundingClientRect();c.style.setProperty('--mx',(e.clientX-r.left)+'px');c.style.setProperty('--my',(e.clientY-r.top)+'px')},{passive:true});
/* yazan unvan satırı */
var h=document.querySelector('.info .head');
if(h){var p=document.createElement('p');p.className='ux-role';p.innerHTML='<img class="ux-lg" src="logolar/logo.png" alt="" onerror="this.remove()"><b></b>';h.after(p);var b=p.querySelector('b');b.textContent='MuGöl PORTAL’ın Kurucusu & Geliştiricisi';b.style.border=0;b.style.padding=0;b.style.animation='none'}
/* bölüm noktaları */
var secs=[].slice.call(document.querySelectorAll('main section[id],section.card[id]')).filter(function(s){return s.id!=='tesekkur'});
if(secs.length){var n=document.createElement('nav');n.className='ux-dots';n.setAttribute('aria-label','Bölümler');
 secs.forEach(function(s){var a=document.createElement('a');a.href='#'+s.id;a.dataset.t=(s.querySelector('h2')||{textContent:s.id}).textContent.replace(/\s*\d+.*$/,'').trim()||s.id;a.setAttribute('aria-label',a.dataset.t);n.appendChild(a)});
 document.body.appendChild(n);var as=[].slice.call(n.children);
 var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){as.forEach(function(a){a.classList.toggle('on',a.getAttribute('href')==='#'+e.target.id)})}})},{rootMargin:'-40% 0px -55% 0px'});secs.forEach(function(s){io.observe(s)})}
/* e-posta kopyala + bildirim */
var tt=document.createElement('div');tt.className='ux-toast';tt.setAttribute('role','status');document.body.appendChild(tt);
function toast(m){tt.textContent=m;tt.classList.add('on');clearTimeout(toast.t);toast.t=setTimeout(function(){tt.classList.remove('on')},2000)}

})();
;
(function(){
var D=document,rm=matchMedia('(prefers-reduced-motion:reduce)').matches||D.documentElement.dataset.mo==='off';
/* 1 selamlama + saat */
var bn=D.querySelector('.banner');
if(bn){var g=D.createElement('div');g.className='ux-hi';g.innerHTML='<span class="g"></span><span class="c"></span><button type="button" aria-label="Komut paletini aç">🔍 Ara<kbd>Ctrl K</kbd></button>';bn.appendChild(g);
 var gt=g.children[0],ck=g.children[1];
 function tick(){var p={};try{new Intl.DateTimeFormat('tr-TR',{timeZone:'Europe/Istanbul',hour:'2-digit',minute:'2-digit',hour12:false}).formatToParts(new Date()).forEach(function(x){p[x.type]=x.value})}catch(e){var n=new Date();p.hour=n.getHours();p.minute=('0'+n.getMinutes()).slice(-2)}
  var h=+p.hour%24,s=h<5?'İyi geceler 🌙':h<12?'Günaydın ☀️':h<18?'Tünaydın 👋':h<22?'İyi akşamlar 🌆':'İyi geceler 🌙';gt.textContent=s;ck.textContent='🕐 '+('0'+h).slice(-2)+':'+p.minute+' İstanbul'}
 tick();setInterval(tick,3e4);g.lastChild.addEventListener('click',function(){op()})}
/* 4 proje vitrini */
var ps=D.getElementById('projeler');
if(ps){var h2=ps.querySelector('h2'),v=D.createElement('div');v.className='pv';
 v.innerHTML='<div class="pv-h"><div class="pv-l"><img src="logolar/logo.png" alt="MuGöl PORTAL" onerror="this.outerHTML=\'🌐\'"></div><div><h3>MuGöl PORTAL</h3><p>Dijital Dünyan Tek Bir Portalda!</p></div></div><div class="pv-b"><a href="https://mugol-portal.github.io" target="_blank" rel="noopener">Web sitesini aç ↗</a><a href="https://play.google.com/store/apps/details?id=com.mugol.portal2" target="_blank" rel="noopener">▶ Google Play</a></div>';
 var rw=ps.querySelector('.row'),dp=rw&&rw.querySelector('p'),so=rw&&rw.querySelector('.sosyal');
 if(dp){dp.className='pv-d';v.querySelector('.pv-h').after(dp)}
 var yz=rw&&rw.querySelector('.yzb');if(yz){v.appendChild(yz)}
var EKRANLAR=['portal1.png','portal2.png','portal3.png','portal4.png','portal5.png']; /* istersen mugol klasöründeki dosya adlarını yaz; boş bırakırsan 1.png, 2.png, 3.png... otomatik bulunur */
var yzd=D.getElementById('yzd'),yzg=D.getElementById('yzg');
if(yzd){if(yzg&&EKRANLAR.length){yzg.hidden=false;yzg.innerHTML=EKRANLAR.map(function(f){return '<img src="mugol/'+f+'" alt="MuGöl PORTAL ekran görüntüsü" loading="lazy" decoding="async">'}).join('')}
 var yzy=0;function yzbul(){if(yzy||!yzg||EKRANLAR.length)return;yzy=1;var ex=['png','jpg','jpeg','webp'];
  function sayi(i){if(i>20)return;tur(i,0)}
  function tur(i,k){if(k>=ex.length)return;var im=new Image();im.onload=function(){im.alt='MuGöl PORTAL ekran görüntüsü';yzg.hidden=false;yzg.appendChild(im);sayi(i+1)};im.onerror=function(){tur(i,k+1)};im.src='mugol/'+i+'.'+ex[k]}
  sayi(1)}
 if(yz)yz.addEventListener('click',function(){yzbul();if(yzd.showModal)yzd.showModal();else yzd.setAttribute('open','')});
 D.getElementById('yzx').addEventListener('click',function(){yzd.close?yzd.close():yzd.removeAttribute('open')})}
 if(so){v.appendChild(so)}
 h2.after(v)}
/* 6 komut paleti */
var items=[];
[].forEach.call(D.querySelectorAll('section.card[id]'),function(s){if(s.id==='tesekkur')return;var h=s.querySelector('h2');if(h)items.push({i:'📍',t:h.textContent.replace(/\s*\d+.*$/,'').trim(),s:'Bölüme git',f:function(){s.scrollIntoView({behavior:rm?'auto':'smooth',block:'start'})}})});
items.push({i:'🌗',t:'Temayı değiştir',s:'Açık / Koyu',f:function(){var m=D.getElementById('mode');if(m)m.click()}},
{i:'🌐',t:'MuGöl PORTAL web sitesi',s:'Bağlantı',f:function(){open('https://mugol-portal.github.io','_blank','noopener')}},
{i:'▶️',t:'MuGöl PORTAL · Google Play',s:'Bağlantı',f:function(){open('https://play.google.com/store/apps/details?id=com.mugol.portal2','_blank','noopener')}},
{i:'☰',t:'Yan menüyü aç',s:'Ayarlar',f:function(){if(window.menuAc)window.menuAc(1)}},
{i:'⬆️',t:'En üste çık',s:'Eylem',f:function(){scrollTo({top:0,behavior:rm?'auto':'smooth'})}});
var P=D.createElement('div');P.className='cp';P.setAttribute('role','dialog');P.setAttribute('aria-modal','true');P.setAttribute('aria-label','Komut paleti');
P.innerHTML='<div class="cp-b"><input type="text" placeholder="Bölüm veya komut ara…" aria-label="Ara" autocomplete="off"><ul class="cp-l" role="listbox"></ul><div class="cp-f"><span>↑↓ gezin</span><span>Enter seç</span><span>Esc kapat</span></div></div>';D.body.appendChild(P);
var inp=P.querySelector('input'),ul=P.querySelector('ul'),cur=0,vis=[];
function norm(x){return x.toLocaleLowerCase('tr')}
function draw(){var q=norm(inp.value.trim());vis=items.filter(function(x){return !q||norm(x.t).indexOf(q)>-1});if(cur>=vis.length)cur=0;ul.innerHTML='';
 if(!vis.length){ul.innerHTML='<div class="cp-e">Sonuç yok</div>';return}
 vis.forEach(function(x,n){var li=D.createElement('li');li.setAttribute('role','option');if(n===cur)li.className='on';li.innerHTML='<i>'+x.i+'</i><span></span><small></small>';li.children[1].textContent=x.t;li.children[2].textContent=x.s;li.onmousemove=function(){if(cur!==n){cur=n;[].forEach.call(ul.children,function(e,k){e.classList.toggle('on',k===n)})}};li.onclick=function(){run(x)};ul.appendChild(li)})}
function run(x){cl();setTimeout(x.f,60)}
function op(){P.classList.add('on');inp.value='';cur=0;draw();setTimeout(function(){inp.focus()},20)}
function cl(){P.classList.remove('on')}
inp.addEventListener('input',function(){cur=0;draw()});
P.addEventListener('mousedown',function(e){if(e.target===P)cl()});
P.addEventListener('keydown',function(e){if(e.key==='Escape'){cl();return}
 if(e.key==='ArrowDown'||e.key==='ArrowUp'){e.preventDefault();if(!vis.length)return;cur=(cur+(e.key==='ArrowDown'?1:vis.length-1))%vis.length;draw();var a=ul.children[cur];a&&a.scrollIntoView({block:'nearest'})}
 else if(e.key==='Enter'&&vis[cur]){e.preventDefault();run(vis[cur])}});
D.addEventListener('keydown',function(e){if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='k'){e.preventDefault();e.stopImmediatePropagation();P.classList.contains('on')?cl():op()}},true);
/* 11 açılış + sıralı kart animasyonu */
if(!rm){var cs=[].slice.call(D.querySelectorAll('main .card,section.card'));
 if('IntersectionObserver' in window){var o=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('ux-in');o.unobserve(e.target)}})},{threshold:.08});
  cs.forEach(function(c,i){if(c.getBoundingClientRect().top<innerHeight*.9){c.style.setProperty('--d',(.9+i*.08)+'s')}c.classList.add('ux-r');o.observe(c)})}}
})();
;
(function(){var b=document.getElementById('qrb'),d=document.getElementById('qrd'),i=document.getElementById('qri');if(!b||!d)return;var E=['png','jpg','jpeg','webp'],n=0;i.addEventListener('error',function(){if(n<E.length-1){n++;i.hidden=false;i.src='qr.'+E[n];document.getElementById('qra').href='qr.'+E[n];document.getElementById('qrh').hidden=true}});b.addEventListener('click',function(){if(!i.getAttribute('src'))i.src='logolar/qr.png';var m=document.getElementById('mnc');if(m)m.click();if(!d.open)d.showModal()});document.getElementById('qrx').addEventListener('click',function(){d.close()});d.addEventListener('click',function(e){if(e.target===d)d.close()})})();
;
(function(){var D=document;
/* öğretmen görüşleri: [isim, ders/unvan, görüş] */
var OGRETMENLER=[];
var og=D.getElementById("ogr-list");if(og&&OGRETMENLER.length){og.innerHTML=OGRETMENLER.map(function(o){return '<div class="ogk"><q>'+o[2]+'</q><div class="ogy"><div class="oga">'+o[0].charAt(0)+'</div><div><div class="ogn">'+o[0]+'</div><div class="ogd">'+o[1]+'</div></div></div></div>'}).join("")}
/* başarı rozetleri */
var bl=D.getElementById("basari-list"),rd=D.getElementById("rzd");
if(bl&&rd&&typeof veri!=="undefined"&&veri.basarilar){var g=D.createElement("div");g.className="rzg";
 g.innerHTML=veri.basarilar.map(function(b,i){return '<button type="button" class="rz'+(b[3]?" f":"")+'" data-i="'+i+'"><i aria-hidden="true">'+(b[3]?"🏅":"🏆")+'</i><b>'+b[0]+'</b></button>'}).join("");
 bl.parentNode.insertBefore(g,bl);
 g.addEventListener("click",function(e){var t=e.target.closest(".rz");if(!t)return;var b=veri.basarilar[+t.dataset.i];D.getElementById("rzi").textContent=b[3]?"🏅":"🏆";D.getElementById("rzh").textContent=b[0];D.getElementById("rzm").textContent=b[1];D.getElementById("rzp").textContent=b[2]||"";if(rd.showModal)rd.showModal();else rd.setAttribute("open","")});
 D.getElementById("rzk").addEventListener("click",function(){rd.close()});
 rd.addEventListener("click",function(e){if(e.target===rd)rd.close()})}
/* ekran görüntüsü tam ekran */
var lb=D.getElementById("lbd"),yg=D.getElementById("yzg");
if(lb&&yg){var li=D.getElementById("lbi"),ls=D.getElementById("lbs"),lc=D.getElementById("lbc"),im=[],k=0;
 function goster(){ls.classList.remove("z");ls.scrollTo(0,0);li.src=im[k].src;lc.textContent=(k+1)+" / "+im.length;D.getElementById("lbp").style.display=D.getElementById("lbn").style.display=im.length>1?"":"none"}
 yg.addEventListener("click",function(e){if(e.target.tagName!=="IMG")return;im=[].slice.call(yg.querySelectorAll("img"));k=im.indexOf(e.target);goster();if(lb.showModal)lb.showModal();else lb.setAttribute("open","")});
 D.getElementById("lbx").addEventListener("click",function(){lb.close()});
 D.getElementById("lbp").addEventListener("click",function(){k=(k-1+im.length)%im.length;goster()});
 D.getElementById("lbn").addEventListener("click",function(){k=(k+1)%im.length;goster()});
 li.addEventListener("click",function(){ls.classList.toggle("z")});
 var x0=null;ls.addEventListener("touchstart",function(e){x0=ls.classList.contains("z")?null:e.touches[0].clientX},{passive:true});
 ls.addEventListener("touchend",function(e){if(x0===null)return;var d=e.changedTouches[0].clientX-x0;x0=null;if(Math.abs(d)>60&&im.length>1){k=(k+(d<0?1:-1)+im.length)%im.length;goster()}},{passive:true})}
})();
;
(function(){var el=null,prev=null;
function kapat(){if(!el)return;document.removeEventListener('keydown',key,true);el.remove();el=null;document.body.style.overflow=window.__onzOv||'';if(prev&&prev.focus)try{prev.focus()}catch(e){}}
function key(e){if(!el)return;if(e.key==='Escape'){e.stopPropagation();e.preventDefault();kapat()}else if(e.key==='Tab'){var f=el.querySelectorAll('button');if(!f.length)return;var a=f[0],z=f[f.length-1];if(e.shiftKey&&document.activeElement===a){e.preventDefault();z.focus()}else if(!e.shiftKey&&document.activeElement===z){e.preventDefault();a.focus()}}}
window.onizle=function(o){kapat();prev=document.activeElement;window.__onzOv=document.body.style.overflow;
el=document.createElement('div');el.className='onz';el.setAttribute('role','dialog');el.setAttribute('aria-modal','true');el.setAttribute('aria-label',(o.title||'Önizleme'));
var h=document.createElement('div');h.className='onz-h';
var t=document.createElement('div');t.className='onz-t';var tb=document.createElement('b');tb.textContent=o.title||'Önizleme';var ts=document.createElement('small');ts.textContent=o.info||'';t.appendChild(tb);t.appendChild(ts);
var a=document.createElement('div');a.className='onz-a';
var bd=document.createElement('button');bd.type='button';bd.className='onz-p';bd.textContent='⬇ İndir';
var bx=document.createElement('button');bx.type='button';bx.textContent='Kapat ✕';
if(o.alt){var b2=document.createElement('button');b2.type='button';b2.textContent='⬇ '+o.alt.label;b2.addEventListener('click',function(){try{o.alt.fn();b2.textContent='✓ İndirildi'}catch(e){b2.textContent='Hata'}});a.appendChild(b2)}
a.appendChild(bd);a.appendChild(bx);h.appendChild(t);h.appendChild(a);
var b=document.createElement('div');b.className='onz-b';
(o.pages||[]).forEach(function(src,i,arr){var f=document.createElement('figure');var im=document.createElement('img');im.alt=(o.title||'Önizleme')+' - sayfa '+(i+1);im.src=src;f.appendChild(im);if(arr.length>1){var c=document.createElement('figcaption');c.textContent='Sayfa '+(i+1)+' / '+arr.length;f.appendChild(c)}b.appendChild(f)});
el.appendChild(h);el.appendChild(b);document.body.appendChild(el);document.body.style.overflow='hidden';
bx.addEventListener('click',kapat);
bd.addEventListener('click',function(){try{o.dl&&o.dl();bd.textContent='✓ İndirildi'}catch(e){bd.textContent='Hata'}setTimeout(kapat,1000)});
document.addEventListener('keydown',key,true);bd.focus()};
})();
;

/* PWA: servis çalışanı + yükleme düğmesi */
(function(){
if('serviceWorker' in navigator&&/^https?:$/.test(location.protocol)){
  addEventListener('load',function(){navigator.serviceWorker.register('sw.js').catch(function(){})});
}
var dp=null,b=document.getElementById('pwab');
addEventListener('beforeinstallprompt',function(e){e.preventDefault();dp=e;if(b)b.hidden=false});
if(b)b.addEventListener('click',function(){if(!dp)return;dp.prompt();dp.userChoice.finally(function(){dp=null;b.hidden=true})});
addEventListener('appinstalled',function(){dp=null;if(b)b.hidden=true});
})();
