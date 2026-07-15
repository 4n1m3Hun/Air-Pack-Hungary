const translations = {
    hu: {
        home: "Főoldal",
        about: "Rólam",
        products: "Termékek",
        contact: "Kapcsolat",
        kinalat: "Kínálat",
        termekek: "Termékek",
        webaruhazaknak: "Webáruházaknak",
        p1p1: "80 g/m² barna kraft csomagolópapír napi csomagolási feladatokhoz.",
        p1l1: "30 cm szélesség",
        p1l2: "50 m / tekercs",
        p1l3: "Saját magyar gyártás",
        reszletek: "Részletek",
        c2h1: "Virágboltoknak",
        c2p1: "Papír buborékcsomagoló lapok virágcsokrok és dekorációk biztonságos csomagolásához.",
        c2l1: "30 × 40 cm lapméret",
        c2l2: "125 lap / doboz",
        c3h1: "Üvegpalack csomagolás",
        c3p1: "Biztonságos csomagolás 0,75 literes üvegpalackokhoz.",
        c3l1: "Kiváló ütésvédelem",
        c3l2: "Gyors használat",
        aboutmini: "BEMUTATKOZÁS",
        abouth2: "Az Air Pack Hungary Kft.-ről",
        aboutp1: "Üdvözöljük az Air Pack Hungary Kft. weboldalán! Magyarország egyetlen buborékpapír-gyártó vállalataként innovatív és környezetbarát csomagolási megoldásokat kínálunk partnereink számára.",
        aboutp2: "Termékeink kiváló minőségű, 80 g/m²-es barna kraft alappapírból készülnek. A speciális gyártási technológiának köszönhetően a papír rugalmas, ütéscsillapító szerkezetet kap, amely megbízható védelmet biztosít a csomagolt termékek számára, miközben környezetbarát alternatívát jelent a hagyományos műanyag buborékfóliával szemben.",
        aboutp3: "Célunk, hogy hazai gyártóként gyors, megbízható kiszolgálást és állandó, magas minőséget biztosítsunk ügyfeleinknek. Büszkék vagyunk arra, hogy termékeink hozzájárulnak a fenntartható csomagolási megoldások elterjedéséhez Magyarországon.",
        aboutp4: "Legyen szó webáruházakról, logisztikai központokról, gyártóvállalatokról vagy kézműves vállalkozásokról, partnereink számára olyan csomagolóanyagot kínálunk, amely egyszerre nyújt kiváló védelmet, esztétikus megjelenést és környezettudatos választást.",
        aboutq: "„Hiszünk abban, hogy a modern csomagolás nemcsak biztonságos, hanem fenntartható is lehet.”",
        aboutp5: "Köszönjük minden partnerünknek és támogatónknak, hogy hozzájárultak vállalkozásunk fejlődéséhez.",
        aboutp6: "Külön köszönet Marosi Nikolettának (Vecsés), aki a kezdeti nehéz időszakban önzetlen segítségével támogatta vállalkozásunkat.",
        aboutsign: "Air Pack Hungary Kft. csapata",
        conmini: "ELÉRHETŐSÉG",
        conh2: "Kapcsolat",
        contel: "Telefon",
        conloc: "Telephely",
        confol: "Kövessen minket",
        board: "Eddig megnézték az oldalt:"
    },
    en: {
        home: "Home",
        about: "About",
        products: "Products",
        contact: "Contact",
        kinalat: "offers",
        termekek: "Products",
        webaruhazaknak: "For Online Stores",
        p1p1: "80 g/m² brown kraft wrapping paper for daily packaging tasks.",
        p1l1: "30 cm width",
        p1l2: "50 m / roll",
        p1l3: "Made in Hungary",
        reszletek: "Details",
        c2h1: "For Flower Shops",
        c2p1: "Paper bubble wrap sheets for the safe packaging of flower bouquets and decorations.",
        c2l1: "30 × 40 cm sheet size",
        c2l2: "125 sheet / box",
        c3h1: "Glass bottle packaging",
        c3p1: "Secure packaging for 0.75-liter glass bottles.",
        c3l1: "Excellent impact protection",
        c3l2: "Easy to use",
        aboutmini: "INTRODUCTION",
        abouth2: "About Air Pack Hungary Kft.",
        aboutp1: "Welcome to the website of Air Pack Hungary Kft.! As Hungary’s only bubble wrap manufacturer, we offer innovative and eco-friendly packaging solutions to our partners.",
        aboutp2: "Our products are made from high-quality, 80 g/m² brown kraft paper. Thanks to a special manufacturing process, the paper acquires a flexible, shock-absorbing structure that provides reliable protection for packaged goods while serving as an eco-friendly alternative to traditional plastic bubble wrap.",
        aboutp3: "As a domestic manufacturer, our goal is to provide our customers with fast, reliable service and consistent, high quality. We are proud that our products contribute to the spread of sustainable packaging solutions in Hungary.",
        aboutp4: "Whether for online stores, logistics centers, manufacturing companies, or artisanal businesses, we offer our partners packaging materials that combine excellent protection and an aesthetic appearance with an environmentally conscious choice.",
        aboutq: "„We believe that modern packaging can be not only safe but also sustainable.”",
        aboutp5: "We thank all our partners and supporters for contributing to the growth of our business.",
        aboutp6: "Special thanks to Nikoletta Marosi (Vecsés), who supported our business with her selfless assistance during the difficult initial period.",
        aboutsign: "The team at Air Pack Hungary Kft.",
        conmini: "CONTACT INFORMATION",
        conh2: "Contact",
        contel: "Phone",
        conloc: "Location",
        confol: "Follow us",
        board: "People who have viewed the page:"
    }
};
function changeLanguage(lang) {
    document
        .querySelectorAll("[data-lang]")
        .forEach(element => {
            const key = element.dataset.lang;
            element.textContent = translations[lang][key];
        });

    const buttons = document.querySelectorAll(".details-btn");
    if (lang === "hu") {
        buttons[0].dataset.product = "1";
        buttons[1].dataset.product = "2";
        buttons[2].dataset.product = "3";
        document.getElementById("aboutIMG").src = "tablahun.png";
    } else if (lang === "en") {
        buttons[0].dataset.product = "4";
        buttons[1].dataset.product = "5";
        buttons[2].dataset.product = "6";
        document.getElementById("aboutIMG").src = "tablaeng.png";
    }
    localStorage.setItem("language", lang);
    document.querySelectorAll(".lang-btn").forEach(btn => {
        btn.classList.remove("active");
    });
    document
        .querySelector(`.lang-btn[onclick="changeLanguage('${lang}')"]`)
        .classList.add("active");
}
window.onload = () => {
    const lang = localStorage.getItem("language") || "hu";
    changeLanguage(lang);
}