// Diet Data - 17 Ekim Flexible List
const DIET_17_EKIM = {
    title: "Diyet Listem",
    meals: [
        {
            id: "uyaninca",
            name: "Uyanınca",
            time: "Günün başlangıcı",
            icon: "ph-droplet",
            bg: "#e0f7fa",
            color: "#00acc1",
            getItems: () => [
                { text: "1 bardak su + 1-2 damla limon", kcal: 2 },
                { text: "1 kuru kayısı", altKey: "apricot", kcal: 15 }
            ]
        },
        {
            id: "breakfast",
            name: "Sabah (Kahvaltı)",
            time: "07:00 - 07:30",
            icon: "ph-sun",
            bg: "#eef7ee",
            color: "#88af8f",
            getItems: () => {
                const cal = calculateTargetCalories();
                let breadCount = cal <= 1300 ? "1" : "2";
                let breadKcal = cal <= 1300 ? 65 : 130;
                return [
                    { text: "1 haşlanmış yumurta", altKey: "egg", kcal: 75 },
                    { text: "1 dilim beyaz peynir", altKey: "cheese", kcal: 70 },
                    { text: `${breadCount} ince dilim tam buğday ekmek`, altKey: "bread", kcal: breadKcal },
                    { text: "1 ceviz veya 5 zeytin", altKey: "nuts", kcal: 45 },
                    { text: "Bol domates, salatalık ve yeşillik", kcal: 20 }
                ];
            },
            note: "Vaktin yoksa: 2 dilim ekmek arası peynir sandviç yapabilirsin."
        },
        {
            id: "snack1",
            name: "Ara Öğün",
            time: "09:30 - 10:00",
            icon: "ph-cookie",
            bg: "#fff4e5",
            color: "#f7d8ba",
            getItems: () => [
                { text: "4 kuru kayısı", altKey: "apricot", kcal: 60 },
                { isOr: true },
                { text: "1 küçük elma", altKey: "fruit", kcal: 55 }
            ]
        },
        {
            id: "lunch",
            name: "Öğle Yemeği",
            time: "12:00 - 13:00",
            icon: "ph-egg",
            bg: "#e8f5e9",
            color: "#4caf50",
            getItems: () => {
                const cal = calculateTargetCalories();
                let vegCount = cal <= 1300 ? "4" : "6";
                let vegKcal = cal <= 1300 ? 100 : 150;
                let breadCount = cal <= 1400 ? "1" : "2";
                let breadKcal = cal <= 1400 ? 65 : 130;
                
                return [
                    { text: `${vegCount} yemek kaşığı sebze yemeği`, altKey: "veggies", kcal: vegKcal },
                    { isOr: true },
                    { text: "1 kepçe çorba veya 1 dilim ekmek", altKey: "bread", kcal: 100 },
                    { text: "4 yemek kaşığı yoğurt (pul biberli)", altKey: "yogurt", kcal: 80 },
                    { text: `${breadCount} ince dilim tam buğday ekmek`, altKey: "bread", kcal: breadKcal }
                ];
            }
        },
        {
            id: "snack2",
            name: "Ara Öğün",
            time: "15:30 - 16:00",
            icon: "ph-coffee",
            bg: "#eceff1",
            color: "#607d8b",
            getItems: () => [
                { text: "1 fincan leblebi", altKey: "nuts", kcal: 150 }
            ]
        },
        {
            id: "dinner",
            name: "Akşam Yemeği",
            time: "18:00 - 18:30",
            icon: "ph-moon",
            bg: "#fbeeee",
            color: "#e59898",
            getItems: () => {
                const cal = calculateTargetCalories();
                let meatDesc = "4 köfte kadar et / tavuk / balık (120g)";
                let meatKcal = 220;
                if (cal <= 1300) {
                    meatDesc = "2 köfte kadar et / tavuk / balık (60g)";
                    meatKcal = 110;
                } else if (cal <= 1500) {
                    meatDesc = "3 köfte kadar et / tavuk / balık (90g)";
                    meatKcal = 165;
                }
                let breadCount = cal <= 1400 ? "1" : "2";
                let breadKcal = cal <= 1400 ? 65 : 130;

                return [
                    { text: "4 yemek kaşığı sebze yemeği", altKey: "veggies", kcal: 100 },
                    { text: meatDesc, altKey: "meat", kcal: meatKcal },
                    { text: "4 yemek kaşığı yoğurt (pul biberli)", altKey: "yogurt", kcal: 80 },
                    { text: `${breadCount} ince dilim tam buğday ekmek`, altKey: "bread", kcal: breadKcal },
                    { text: "Yağsız mevsim salatası", kcal: 30 }
                ];
            }
        },
        {
            id: "snack3",
            name: "Gece Arası",
            time: "21:00 - 22:00",
            icon: "ph-zzz",
            bg: "#f3e5f5",
            color: "#ab47bc",
            getItems: () => {
                const cal = calculateTargetCalories();
                let oatCount = cal <= 1300 ? "1" : "2";
                let oatKcal = cal <= 1300 ? 40 : 75;
                return [
                    { text: "1 su bardağı süt (light)", kcal: 90 },
                    { text: `${oatCount} yemek kaşığı yulaf`, kcal: oatKcal },
                    { text: "1 küçük boy muz (tarçınlı)", altKey: "fruit", kcal: 65 }
                ];
            },
            note: "Alternatif: 1 fincan leblebi + 20-25 kabak çekirdeği + 1 orta portakal veya 1 küçük muz."
        }
    ]
};

// Alternatives Database
const ALTERNATIVES = {
    apricot: {
        title: "Kuru Kayısı Alternatifleri",
        content: `
            <div class="alt-list">
                <div class="alt-item-row"><i class="ph ph-circle"></i> <span><strong>Kuru Kayısı</strong> yerine yiyebileceklerin:</span></div>
                <div class="alt-item-row"><i class="ph ph-caret-right"></i> <span>Aynı adette kuru hurma (1 adet büyük hurma = 2 kuru kayısı)</span> <span style="font-size:11px; color:var(--text-light); white-space:nowrap;">(~15 kcal / adet)</span></div>
                <div class="alt-item-row"><i class="ph ph-caret-right"></i> <span>Aynı adette kuru incir (1 küçük kuru incir = 2 kuru kayısı)</span> <span style="font-size:11px; color:var(--text-light); white-space:nowrap;">(~20 kcal / adet)</span></div>
                <div class="alt-item-row"><i class="ph ph-caret-right"></i> <span>Aynı adette kuru erik</span> <span style="font-size:11px; color:var(--text-light); white-space:nowrap;">(~20 kcal / adet)</span></div>
                <div class="alt-item-row"><i class="ph ph-caret-right"></i> <span>1 porsiyon taze meyve (örneğin 1 küçük elma veya 1 büyük mandalina)</span> <span style="font-size:11px; color:var(--text-light); white-space:nowrap;">(~60 kcal)</span></div>
            </div>
        `
    },
    egg: {
        title: "Yumurta Alternatifleri",
        content: `
            <div class="alt-list">
                <div class="alt-item-row"><i class="ph ph-circle"></i> <span><strong>1 haşlanmış yumurta</strong> yerine yiyebileceklerin:</span></div>
                <div class="alt-item-row"><i class="ph ph-caret-right"></i> <span>1 yumurtalı bol sebzeli menemen (yağsız/az yağlı)</span> <span style="font-size:11px; color:var(--text-light); white-space:nowrap;">(~100 kcal)</span></div>
                <div class="alt-item-row"><i class="ph ph-caret-right"></i> <span>1 yumurtalı sade omlet</span> <span style="font-size:11px; color:var(--text-light); white-space:nowrap;">(~90 kcal)</span></div>
                <div class="alt-item-row"><i class="ph ph-caret-right"></i> <span>30 gr süzme beyaz peynir</span> <span style="font-size:11px; color:var(--text-light); white-space:nowrap;">(~70 kcal)</span></div>
                <div class="alt-item-row"><i class="ph ph-caret-right"></i> <span>2 dilim hindi füme</span> <span style="font-size:11px; color:var(--text-light); white-space:nowrap;">(~60 kcal)</span></div>
            </div>
        `
    },
    cheese: {
        title: "Peynir Alternatifleri",
        content: `
            <div class="alt-list">
                <div class="alt-item-row"><i class="ph ph-circle"></i> <span><strong>1 dilim beyaz peynir (30g)</strong> yerine yiyebileceklerin:</span></div>
                <div class="alt-item-row"><i class="ph ph-caret-right"></i> <span>2-3 yemek kaşığı lor peyniri</span> <span style="font-size:11px; color:var(--text-light); white-space:nowrap;">(~45 kcal)</span></div>
                <div class="alt-item-row"><i class="ph ph-caret-right"></i> <span>2 tatlı kaşığı labne peynir</span> <span style="font-size:11px; color:var(--text-light); white-space:nowrap;">(~50 kcal)</span></div>
                <div class="alt-item-row"><i class="ph ph-caret-right"></i> <span>1 dilim kaşar peyniri veya süzme peynir</span> <span style="font-size:11px; color:var(--text-light); white-space:nowrap;">(~85 kcal)</span></div>
            </div>
        `
    },
    bread: {
        title: "Ekmek ve Karbonhidrat Alternatifleri",
        content: `
            <div class="alt-list">
                <div class="alt-item-row"><i class="ph ph-circle"></i> <span><strong>1 dilim tam buğday ekmeği</strong> yerine yiyebileceklerin:</span></div>
                <div class="alt-item-row"><i class="ph ph-caret-right"></i> <span>1 kepçe çorba (unsuz)</span> <span style="font-size:11px; color:var(--text-light); white-space:nowrap;">(~70 kcal)</span></div>
                <div class="alt-item-row"><i class="ph ph-caret-right"></i> <span>2-3 yemek kaşığı haşlanmış bulgur, makarna veya pilav</span> <span style="font-size:11px; color:var(--text-light); white-space:nowrap;">(~80 kcal)</span></div>
                <div class="alt-item-row"><i class="ph ph-caret-right"></i> <span>2 adet karabuğday patlağı</span> <span style="font-size:11px; color:var(--text-light); white-space:nowrap;">(~60 kcal)</span></div>
                <div class="alt-item-row"><i class="ph ph-caret-right"></i> <span>4 adet kepekli/esmer grisini</span> <span style="font-size:11px; color:var(--text-light); white-space:nowrap;">(~80 kcal)</span></div>
            </div>
        `
    },
    nuts: {
        title: "Kuruyemiş Alternatifleri",
        content: `
            <div class="alt-list">
                <div class="alt-item-row"><i class="ph ph-circle"></i> <span><strong>Ceviz / Zeytin / Badem</strong> yerine yiyebileceklerin:</span></div>
                <div class="alt-item-row"><i class="ph ph-caret-right"></i> <span>1 adet tam ceviz yerine: 5-6 adet çiğ badem veya çiğ fındık</span> <span style="font-size:11px; color:var(--text-light); white-space:nowrap;">(~45 kcal)</span></div>
                <div class="alt-item-row"><i class="ph ph-caret-right"></i> <span>5 adet zeytin yerine: 1 tatlı kaşığı sızma zeytinyağı</span> <span style="font-size:11px; color:var(--text-light); white-space:nowrap;">(~40 kcal)</span></div>
                <div class="alt-item-row"><i class="ph ph-caret-right"></i> <span>1 fincan leblebi yerine: 10-12 adet fındık/badem veya 2 tam ceviz</span> <span style="font-size:11px; color:var(--text-light); white-space:nowrap;">(~85 kcal)</span></div>
                <div class="alt-item-row"><i class="ph ph-caret-right"></i> <span>20-25 adet kabak çekirdeği</span> <span style="font-size:11px; color:var(--text-light); white-space:nowrap;">(~110 kcal)</span></div>
            </div>
        `
    },
    fruit: {
        title: "Meyve Alternatifleri (1 Porsiyon)",
        content: `
            <div class="alt-grid">
                <div class="alt-item"><strong>Elma:</strong> 1 küçük boy (100g) <span style="font-size:11px; color:var(--text-light);">(~50 kcal)</span></div>
                <div class="alt-item"><strong>Muz:</strong> 1 küçük boy (75g) <span style="font-size:11px; color:var(--text-light);">(~65 kcal)</span></div>
                <div class="alt-item"><strong>Ananas:</strong> 1 dilim (110g) <span style="font-size:11px; color:var(--text-light);">(~55 kcal)</span></div>
                <div class="alt-item"><strong>Mandalina:</strong> 1 büyük boy (150g) <span style="font-size:11px; color:var(--text-light);">(~70 kcal)</span></div>
                <div class="alt-item"><strong>Portakal:</strong> 1 orta boy (130g) <span style="font-size:11px; color:var(--text-light);">(~60 kcal)</span></div>
                <div class="alt-item"><strong>Çilek:</strong> 7 orta boy (200g) <span style="font-size:11px; color:var(--text-light);">(~65 kcal)</span></div>
                <div class="alt-item"><strong>Karpuz:</strong> 2 üçgen dilim (250g) <span style="font-size:11px; color:var(--text-light);">(~75 kcal)</span></div>
                <div class="alt-item"><strong>Armut:</strong> 1 orta boy (120g) <span style="font-size:11px; color:var(--text-light);">(~70 kcal)</span></div>
                <div class="alt-item"><strong>Kavun:</strong> 1/10 küçük boy (200g) <span style="font-size:11px; color:var(--text-light);">(~55 kcal)</span></div>
                <div class="alt-item"><strong>Kuru Kayısı:</strong> 4 orta boy (20g) <span style="font-size:11px; color:var(--text-light);">(~50 kcal)</span></div>
                <div class="alt-item"><strong>Hurma:</strong> 2 adet (20g) <span style="font-size:11px; color:var(--text-light);">(~55 kcal)</span></div>
            </div>
            <p class="alt-tip">💡 Alt kısımdaki Meyve Porsiyon Rehberi'nden tüm listeyi inceleyebilirsiniz.</p>
        `
    },
    veggies: {
        title: "Sebze Yemeği Alternatifleri",
        content: `
            <div class="alt-list">
                <div class="alt-item-row"><i class="ph ph-circle"></i> <span><strong>Sebze yemeği</strong> yerine yiyebileceklerin:</span></div>
                <div class="alt-item-row"><i class="ph ph-caret-right"></i> <span>Her 6 kaşık sebze yemeği yerine: 1 kepçe çorba</span> <span style="font-size:11px; color:var(--text-light); white-space:nowrap;">(~70 kcal)</span></div>
                <div class="alt-item-row"><i class="ph ph-caret-right"></i> <span>Fırınlanmış veya buharda pişirilmiş sebzeler (kabak, karnabahar vb.)</span> <span style="font-size:11px; color:var(--text-light); white-space:nowrap;">(~60 kcal)</span></div>
                <div class="alt-item-row"><i class="ph ph-caret-right"></i> <span>8-9 yemek kaşığı kuru baklagil yemeği (nohut, mercimek, kuru fasulye)</span> <span style="font-size:11px; color:var(--text-light); white-space:nowrap;">(~180 kcal)</span></div>
                <div class="alt-item-row"><i class="ph ph-caret-right"></i> <span>Büyük bir porsiyon zeytinyağlı salata</span> <span style="font-size:11px; color:var(--text-light); white-space:nowrap;">(~100 kcal)</span></div>
            </div>
        `
    },
    yogurt: {
        title: "Yoğurt ve Süt Grubu Alternatifleri",
        content: `
            <div class="alt-list">
                <div class="alt-item-row"><i class="ph ph-circle"></i> <span><strong>4 yemek kaşığı yoğurt</strong> yerine yiyebileceklerin:</span></div>
                <div class="alt-item-row"><i class="ph ph-caret-right"></i> <span>1 su bardağı ayran</span> <span style="font-size:11px; color:var(--text-light); white-space:nowrap;">(~75 kcal)</span></div>
                <div class="alt-item-row"><i class="ph ph-caret-right"></i> <span>1 kase naneli/salatalıklı cacık</span> <span style="font-size:11px; color:var(--text-light); white-space:nowrap;">(~80 kcal)</span></div>
                <div class="alt-item-row"><i class="ph ph-caret-right"></i> <span>1 su bardağı kefir</span> <span style="font-size:11px; color:var(--text-light); white-space:nowrap;">(~100 kcal)</span></div>
                <div class="alt-item-row"><i class="ph ph-caret-right"></i> <span>1 su bardağı süt (light)</span> <span style="font-size:11px; color:var(--text-light); white-space:nowrap;">(~90 kcal)</span></div>
            </div>
        `
    },
    meat: {
        title: "Protein Alternatifleri",
        content: `
            <div class="alt-list">
                <div class="alt-item-row"><i class="ph ph-circle"></i> <span><strong>4 köfte kadar et/tavuk/balık (120g)</strong> yerine yiyebileceklerin:</span></div>
                <div class="alt-item-row"><i class="ph ph-caret-right"></i> <span>120-150 gr ızgara/haşlama tavuk veya hindi göğsü</span> <span style="font-size:11px; color:var(--text-light); white-space:nowrap;">(~180 kcal)</span></div>
                <div class="alt-item-row"><i class="ph ph-caret-right"></i> <span>150 gr fırında/ızgara mevsim balığı</span> <span style="font-size:11px; color:var(--text-light); white-space:nowrap;">(~200 kcal)</span></div>
                <div class="alt-item-row"><i class="ph ph-caret-right"></i> <span>120 gr süzme peynir ya da 4-5 yemek kaşığı lor peyniri</span> <span style="font-size:11px; color:var(--text-light); white-space:nowrap;">(~120-280 kcal)</span></div>
                <div class="alt-item-row"><i class="ph ph-caret-right"></i> <span>1 kutu ton balığı (yağı süzülmüş)</span> <span style="font-size:11px; color:var(--text-light); white-space:nowrap;">(~150 kcal)</span></div>
                <div class="alt-item-row"><i class="ph ph-caret-right"></i> <span>2 adet haşlanmış yumurta (protein desteği için)</span> <span style="font-size:11px; color:var(--text-light); white-space:nowrap;">(~150 kcal)</span></div>
            </div>
        `
    }
};

window.showAlternative = (key) => {
    const alt = ALTERNATIVES[key];
    if (!alt) return;
    modalBody.innerHTML = `
        <div class="alt-modal-body">
            <h2>${alt.title}</h2>
            <div class="alt-content-area">
                ${alt.content}
            </div>
            <button class="btn-primary" onclick="document.getElementById('modal-container').classList.add('hidden')" style="margin-top:20px">Kapat</button>
        </div>
    `;
    modalContainer.classList.remove('hidden');
};

window.showFruitPortions = () => {
    modalBody.innerHTML = `
        <div class="portions-modal-body">
            <h2>Meyve Porsiyon Rehberi</h2>
            <p style="font-size: 12px; color: var(--text-light); margin-bottom: 15px;">1 porsiyon meyveye karşılık gelen gramaj değerleri:</p>
            <div class="portions-grid-container">
                <table class="portions-table">
                    <thead>
                        <tr>
                            <th>Meyve</th>
                            <th>Ölçü (1 Porsiyon)</th>
                            <th>Gram</th>
                            <th>Ort. Kalori</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>Karpuz</strong></td><td>2 üçgen dilim</td><td>250g</td><td>~75 kcal</td></tr>
                        <tr><td><strong>Kavun</strong></td><td>1/10 küçük boy</td><td>200g</td><td>~55 kcal</td></tr>
                        <tr><td><strong>Çilek</strong></td><td>7 orta boy</td><td>200g</td><td>~65 kcal</td></tr>
                        <tr><td><strong>Kayısı</strong></td><td>3 orta boy</td><td>160g</td><td>~75 kcal</td></tr>
                        <tr><td><strong>Kivi</strong></td><td>2 küçük boy</td><td>150g</td><td>~90 kcal</td></tr>
                        <tr><td><strong>Şeftali</strong></td><td>1 orta boy</td><td>150g</td><td>~60 kcal</td></tr>
                        <tr><td><strong>Ananas</strong></td><td>1 dilim</td><td>110g</td><td>~55 kcal</td></tr>
                        <tr><td><strong>Vişne</strong></td><td>20 adet</td><td>100g</td><td>~50 kcal</td></tr>
                        <tr><td><strong>Yeşil erik</strong></td><td>10 adet</td><td>120g</td><td>~55 kcal</td></tr>
                        <tr><td><strong>Üzüm</strong></td><td>15 iri tane</td><td>90g</td><td>~60 kcal</td></tr>
                        <tr><td><strong>Kiraz</strong></td><td>12 tane</td><td>85g</td><td>~55 kcal</td></tr>
                        <tr><td><strong>Muz</strong></td><td>1 küçük boy</td><td>75g</td><td>~65 kcal</td></tr>
                        <tr><td><strong>Mandalina</strong></td><td>1 büyük boy</td><td>150g</td><td>~70 kcal</td></tr>
                        <tr><td><strong>Portakal</strong></td><td>1 orta boy</td><td>130g</td><td>~60 kcal</td></tr>
                        <tr><td><strong>Elma</strong></td><td>1 küçük boy</td><td>60g</td><td>~30 kcal</td></tr>
                        <tr><td><strong>Armut</strong></td><td>1 orta boy</td><td>120g</td><td>~70 kcal</td></tr>
                        <tr><td><strong>Ayva</strong></td><td>1/2 orta boy</td><td>100g</td><td>~55 kcal</td></tr>
                        <tr><td><strong>Nar</strong></td><td>1/2 küçük boy</td><td>100g</td><td>~80 kcal</td></tr>
                        <tr><td><strong>Hurma</strong></td><td>2 adet</td><td>20g</td><td>~55 kcal</td></tr>
                        <tr><td><strong>Kuru Kayısı</strong></td><td>4 orta boy</td><td>20g</td><td>~50 kcal</td></tr>
                        <tr><td><strong>Kuru İncir</strong></td><td>1 küçük boy</td><td>20g</td><td>~50 kcal</td></tr>
                        <tr><td><strong>Kuru Üzüm</strong></td><td>2 yemek kaşığı</td><td>20g</td><td>~60 kcal</td></tr>
                        <tr><td><strong>Böğürtlen</strong></td><td>3/4 su bardağı</td><td>120g</td><td>~50 kcal</td></tr>
                        <tr><td><strong>Greyfurt</strong></td><td>1/2 orta boy</td><td>150g</td><td>~60 kcal</td></tr>
                    </tbody>
                </table>
            </div>
            <button class="btn-primary" onclick="document.getElementById('modal-container').classList.add('hidden')" style="margin-top:20px">Kapat</button>
        </div>
    `;
    modalContainer.classList.remove('hidden');
};

window.showDrinkGuide = () => {
    modalBody.innerHTML = `
        <div class="portions-modal-body">
            <h2>İçecek & Alkol Kalori Rehberi</h2>
            <p style="font-size: 12px; color: var(--text-light); margin-bottom: 15px;">Diyetinizi dengelerken referans alabileceğiniz yaklaşık kalori değerleri:</p>
            
            <h3 style="font-size: 14px; margin-bottom: 8px; color: #4caf50; display:flex; align-items:center; gap:5px;"><i class="ph ph-coffee"></i> Serbest İçecekler (0 Kcal)</h3>
            <div class="portions-grid-container" style="margin-bottom: 20px;">
                <table class="portions-table">
                    <tbody>
                        <tr><td><strong>Şekersiz Çay / Bitki Çayları</strong></td><td>Sınırsız</td><td>0 kcal</td></tr>
                        <tr><td><strong>Filtre Kahve / Türk Kahvesi</strong></td><td>Şekersiz</td><td>0 kcal</td></tr>
                        <tr><td><strong>Zero Kola / Şekersiz Gazoz</strong></td><td>1 Kutu</td><td>0 kcal</td></tr>
                        <tr><td><strong>Sade Maden Suyu</strong></td><td>1 Şişe</td><td>0 kcal</td></tr>
                    </tbody>
                </table>
            </div>

            <h3 style="font-size: 14px; margin-bottom: 8px; color: #ab47bc; display:flex; align-items:center; gap:5px;"><i class="ph ph-wine"></i> Alkol Rehberi</h3>
            <div class="portions-grid-container">
                <table class="portions-table">
                    <thead>
                        <tr>
                            <th>İçecek</th>
                            <th>Ölçü</th>
                            <th>Ort. Kalori</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>Bira (Lager/Pilsen)</strong></td><td>1 Şişe (50cl)</td><td>210 kcal</td></tr>
                        <tr><td><strong>Bira (Light)</strong></td><td>1 Şişe (50cl)</td><td>140 kcal</td></tr>
                        <tr><td><strong>Viski</strong></td><td>1 Duble (8cl)</td><td>200 kcal</td></tr>
                        <tr><td><strong>Viski</strong></td><td>1 Tek (4cl)</td><td>100 kcal</td></tr>
                        <tr><td><strong>Rakı</strong></td><td>1 Duble (8cl)</td><td>260 kcal</td></tr>
                        <tr><td><strong>Rakı</strong></td><td>1 Tek (4cl)</td><td>130 kcal</td></tr>
                        <tr><td><strong>Şarap (Kırmızı/Beyaz)</strong></td><td>1 Kadeh (15cl)</td><td>125 kcal</td></tr>
                        <tr><td><strong>Jägermeister</strong></td><td>1 Shot (4cl)</td><td>105 kcal</td></tr>
                        <tr><td><strong>Tekila</strong></td><td>1 Shot (4cl)</td><td>95 kcal</td></tr>
                        <tr><td><strong>Votka (Sek)</strong></td><td>1 Tek (4cl)</td><td>95 kcal</td></tr>
                        <tr><td><strong>Cin (Sek)</strong></td><td>1 Tek (4cl)</td><td>105 kcal</td></tr>
                        <tr><td><strong>Cin Tonik</strong></td><td>1 Kadeh</td><td>170 kcal</td></tr>
                        <tr><td><strong>Rom</strong></td><td>1 Tek (4cl)</td><td>95 kcal</td></tr>
                    </tbody>
                </table>
            </div>
            <button class="btn-primary" onclick="document.getElementById('modal-container').classList.add('hidden')" style="margin-top:20px; background: #ab47bc; border-color: #ab47bc;">Kapat</button>
        </div>
    `;
    modalContainer.classList.remove('hidden');
};

window.showSnackGuide = () => {
    modalBody.innerHTML = `
        <div class="portions-modal-body">
            <h2>Çerez & Atıştırmalık Rehberi</h2>
            <p style="font-size: 12px; color: var(--text-light); margin-bottom: 15px;">Ara öğünlerinizde takas edebileceğiniz kuruyemiş değerleri (Çiğ ve kavrulmamış tavsiye edilir):</p>
            <div class="portions-grid-container">
                <table class="portions-table">
                    <thead>
                        <tr>
                            <th>Çerez (Çiğ)</th>
                            <th>Porsiyon</th>
                            <th>Ort. Kalori</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>Çiğ Badem</strong></td><td>15 Adet (~18g)</td><td>105 kcal</td></tr>
                        <tr><td><strong>Çiğ Fındık</strong></td><td>15 Adet (~18g)</td><td>115 kcal</td></tr>
                        <tr><td><strong>Ceviz İçi</strong></td><td>3 Tam Ceviz (~15g)</td><td>100 kcal</td></tr>
                        <tr><td><strong>Sarı Leblebi</strong></td><td>1 Çay Bardağı (40g)</td><td>150 kcal</td></tr>
                        <tr><td><strong>Beyaz Leblebi</strong></td><td>1 Çay Bardağı (40g)</td><td>140 kcal</td></tr>
                        <tr><td><strong>Kabak Çekirdeği</strong></td><td>1 Avuç (~30g)</td><td>170 kcal</td></tr>
                        <tr><td><strong>Ay Çekirdeği</strong></td><td>1 Avuç (~30g)</td><td>175 kcal</td></tr>
                        <tr><td><strong>Kaju Fıstığı</strong></td><td>10 Adet (~15g)</td><td>85 kcal</td></tr>
                        <tr><td><strong>Yer Fıstığı</strong></td><td>15 Adet (~15g)</td><td>85 kcal</td></tr>
                        <tr><td><strong>Antep Fıstığı</strong></td><td>15 Adet (~15g)</td><td>85 kcal</td></tr>
                    </tbody>
                </table>
            </div>
            <button class="btn-primary" onclick="document.getElementById('modal-container').classList.add('hidden')" style="margin-top:20px; background: #ff9800; border-color: #ff9800;">Kapat</button>
        </div>
    `;
    modalContainer.classList.remove('hidden');
};

// Storage Helper
const storage = {
    get: (key, fallback) => {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : fallback;
        } catch (e) {
            console.warn("LocalStorage access failed:", e);
            return fallback;
        }
    },
    set: (key, value) => {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (e) {
            console.warn("LocalStorage saving failed:", e);
        }
    }
};

// State Management
const state = {
    currentTab: 'dashboard',
    user: storage.get('diyet_user', { name: '', age: '', height: '', weight: '', targetWeight: '', gender: 'female', theme: 'theme-default', geminiApiKey: '', groqApiKey: '', openRouterApiKey: '' }),
    water: storage.get('diyet_water', { date: new Date().toLocaleDateString(), count: 0 }),
    logs: storage.get('diyet_logs', []),
    daily: storage.get('diyet_daily', { date: new Date().toLocaleDateString(), intake: [], steps: 0 })
};

// Reset daily if it's a new day
if (state.daily.date !== new Date().toLocaleDateString()) {
    state.daily = { date: new Date().toLocaleDateString(), intake: [], steps: 0 };
    storage.set('diyet_daily', state.daily);
}

// Apply theme on load
function applyTheme(themeName) {
    document.body.className = themeName;
}
applyTheme(state.user.theme);

// Reset water if it's a new day
if (state.water.date !== new Date().toLocaleDateString()) {
    state.water = { date: new Date().toLocaleDateString(), count: 0 };
    storage.set('diyet_water', state.water);
}

// UI Elements
const mainContent = document.getElementById('main-content');
const navItems = document.querySelectorAll('.nav-item');
const currentDateEl = document.getElementById('current-date');
const modalContainer = document.getElementById('modal-container');
const modalBody = document.getElementById('modal-body');
const closeModal = document.getElementById('close-modal');
const appMainTitle = document.getElementById('app-main-title');

function updateAppMainTitle() {
    if (state.user.name && appMainTitle) {
        appMainTitle.innerText = `${state.user.name}'in Diyet Asistanı`;
    } else if (appMainTitle) {
        appMainTitle.innerText = "Diyet Asistanım";
    }
}

// Initialize
// PWA Installation
let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    const installBtn = document.getElementById('install-btn');
    if (installBtn) installBtn.classList.remove('hidden');
});

// For iOS detection
const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
const isStandalone = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone;

function init() {
    // Versiyon Kontrolü (Zorunlu Güncelleme)
    const CURRENT_VERSION = "2.9";
    if (storage.get('app_version') !== CURRENT_VERSION) {
        storage.set('app_version', CURRENT_VERSION);
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.getRegistrations().then(regs => {
                regs.forEach(reg => reg.update());
            });
        }
        window.location.reload(true);
        return;
    }

    if (!mainContent) return;
    updateDateDisplay();
    updateAppMainTitle();
    
    if (!state.user.name || !state.user.weight) {
        document.querySelector('.bottom-nav').style.display = 'none';
        document.querySelector('.header-actions').style.display = 'none';
        renderWelcomeSetup();
    } else {
        renderTab(state.currentTab);
    }
    
    setupEventListeners();
    registerServiceWorker();

    // Show install button for iOS if not already standalone
    const installBtn = document.getElementById('install-btn');
    if (isIOS && !isStandalone && installBtn) {
        installBtn.classList.remove('hidden');
    }

    // Header Actions
    if (installBtn) {
        installBtn.addEventListener('click', handleInstall);
    }

    document.getElementById('theme-toggle-btn').addEventListener('click', () => {
        document.getElementById('theme-menu').classList.toggle('hidden');
    });

    document.getElementById('info-btn').addEventListener('click', showInfo);
    
    closeModal.addEventListener('click', () => {
        modalContainer.classList.add('hidden');
    });

    modalContainer.addEventListener('click', (e) => {
        if (e.target === modalContainer) modalContainer.classList.add('hidden');
    });
}

function handleInstall() {
    if (deferredPrompt) {
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                document.getElementById('install-btn').classList.add('hidden');
            }
            deferredPrompt = null;
        });
    } else if (isIOS) {
        showIOSInstallGuide();
    }
}

function showIOSInstallGuide() {
    modalBody.innerHTML = `
        <div class="ios-install-guide">
            <div class="guide-icon">
                <i class="ph ph-device-mobile-speaker"></i>
            </div>
            <h2>Ana Ekrana Ekle</h2>
            <p>Bu uygulamayı telefonuna yüklemek için:</p>
            <div class="steps">
                <div class="step">
                    <span class="num">1</span>
                    <p>Tarayıcı altındaki <strong>Paylaş <i class="ph ph-export"></i></strong> butonuna dokun.</p>
                </div>
                <div class="step">
                    <span class="num">2</span>
                    <p>Açılan menüde aşağı kaydırıp <strong>Ana Ekrana Ekle <i class="ph ph-plus-square"></i></strong> seçeneğini seç.</p>
                </div>
            </div>
            <button class="btn-primary" onclick="document.getElementById('modal-container').classList.add('hidden')" style="margin-top:20px">Anladım</button>
        </div>
    `;
    modalContainer.classList.remove('hidden');
}

function showInfo() {
    modalBody.innerHTML = `
        <h2>Hakkında</h2>
        <div style="text-align:left; background:var(--bg-color); padding:15px; border-radius:15px; margin-top:15px">
            <strong style="display:block; margin-bottom:10px; color:var(--primary-dark)">📌 Günlük Kurallar:</strong>
            <ul style="font-size:13px; color:var(--text-color); padding-left:20px; margin-bottom:0">
                <li>Günde 3 - 3.5 litre su içelim.</li>
                <li>Abartmadan 0 kalorili içecekler içilebilir.</li>
                <li>Günde minimum 30 dk spor ya da yürüyüş yapmanız faydalı olacaktır.</li>
            </ul>
        </div>
        <p style="font-weight:600; color:var(--primary-dark); margin-top:15px">Sağlıklı günler dileriz!</p>
        
        <div class="developer-credit-modal">
            <a href="https://fatihpatir.github.io/web" target="_blank">
                <i class="ph ph-code"></i> Fatih PATIR tarafından geliştirildi
            </a>
        </div>
    `;
    modalContainer.classList.remove('hidden');
}

function updateDateDisplay() {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    currentDateEl.innerText = new Date().toLocaleDateString('tr-TR', options);
}

function setupEventListeners() {
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const tab = item.getAttribute('data-tab');
            switchTab(tab);
        });
    });
}

function switchTab(tab) {
    state.currentTab = tab;
    navItems.forEach(item => {
        item.classList.toggle('active', item.getAttribute('data-tab') === tab);
    });
    renderTab(tab);
}
window.switchTab = switchTab;

function renderTab(tab) {
    mainContent.innerHTML = '';
    
    switch (tab) {
        case 'dashboard':
            renderDashboard();
            break;
        case 'diet':
            renderDietList();
            break;
        case 'stats':
            renderStats();
            break;
        case 'profile':
            renderProfile();
            break;
        case 'ai':
            renderAIAssistant();
            break;
    }
}

function renderWelcomeSetup() {
    mainContent.innerHTML = `
        <div class="card" style="text-align:center; padding:40px 20px;">
            <div style="font-size:50px; margin-bottom:10px;">👋</div>
            <h2 style="justify-content:center; margin-bottom:5px;">Hoş Geldiniz!</h2>
            <p style="color:var(--text-light); margin-bottom:20px; font-size:14px;">Sizi daha iyi tanıyabilmemiz ve hedeflerinize uygun plan sunabilmemiz için lütfen bilgilerinizi girin.</p>
            
            <div class="input-group" style="text-align:left;">
                <label>Adınız</label>
                <input type="text" id="setup-name" placeholder="Örn: Ayşe" value="${state.user.name || ''}">
            </div>
            <div class="input-row-complex" style="text-align:left; margin-bottom:15px;">
                <div class="input-group" style="margin-bottom:0; flex:1;">
                    <label>Yaş</label>
                    <input type="number" id="setup-age" placeholder="25" value="${state.user.age || ''}">
                </div>
                <div class="input-group" style="margin-bottom:0; flex:1;">
                    <label>Boy (cm)</label>
                    <input type="number" id="setup-height" placeholder="165" value="${state.user.height || ''}">
                </div>
            </div>
            <div class="input-row-complex" style="text-align:left; margin-bottom:15px;">
                <div class="input-group" style="margin-bottom:0; flex:1;">
                    <label>Kilo (kg)</label>
                    <input type="number" step="0.1" id="setup-weight" placeholder="65.5" value="${state.user.weight || ''}">
                </div>
                <div class="input-group" style="margin-bottom:0; flex:1;">
                    <label>Hedef (kg)</label>
                    <input type="number" step="0.1" id="setup-target" placeholder="58.0" value="${state.user.targetWeight || ''}">
                </div>
            </div>
            <div class="input-group" style="text-align:left;">
                <label>Cinsiyet</label>
                <div class="choice-group">
                    <button class="choice-btn ${state.user.gender === 'female' ? 'active' : ''}" onclick="window.selectSetupGender('female')" id="setup-btn-female">
                        <i class="ph ph-gender-female"></i> Kadın
                    </button>
                    <button class="choice-btn ${state.user.gender === 'male' ? 'active' : ''}" onclick="window.selectSetupGender('male')" id="setup-btn-male">
                        <i class="ph ph-gender-male"></i> Erkek
                    </button>
                </div>
            </div>
            
            <button class="btn-primary" onclick="window.saveSetup()" style="margin-top:20px;">
                <i class="ph ph-check-circle" style="font-size:20px; vertical-align:middle; margin-right:5px;"></i> Başla
            </button>
        </div>
    `;
}

window.selectSetupGender = (g) => {
    state.user.gender = g;
    document.getElementById('setup-btn-female').classList.toggle('active', g === 'female');
    document.getElementById('setup-btn-male').classList.toggle('active', g === 'male');
};

window.saveSetup = () => {
    const name = document.getElementById('setup-name').value;
    const age = document.getElementById('setup-age').value;
    const height = document.getElementById('setup-height').value;
    const weight = document.getElementById('setup-weight').value;
    const target = document.getElementById('setup-target').value;
    
    if(!name || !weight || !height || !age) {
        alert("Lütfen tüm temel bilgileri doldurun.");
        return;
    }
    
    state.user.name = name;
    state.user.age = age;
    state.user.height = height;
    state.user.weight = weight;
    state.user.targetWeight = target || weight;
    
    storage.set('diyet_user', state.user);
    
    if (state.logs.length === 0) {
        state.logs.push({
            date: new Date().toLocaleDateString('tr-TR', { day: 'numeric', month: 'short' }),
            raw: new Date().toISOString(),
            weight: weight,
            note: "Başlangıç"
        });
        storage.set('diyet_logs', state.logs);
    }
    
    updateAppMainTitle();
    
    document.querySelector('.bottom-nav').style.display = 'flex';
    document.querySelector('.header-actions').style.display = 'flex';
    
    switchTab('dashboard');
};

window.setTheme = (themeName) => {
    state.user.theme = themeName;
    applyTheme(themeName);
    storage.set('diyet_user', state.user);
    document.getElementById('theme-menu').classList.add('hidden');
    renderTab(state.currentTab);
};

// Global Actions
window.addWater = (amount) => {
    state.water.count = Math.min(3500, Math.max(0, state.water.count + amount));
    storage.set('diyet_water', state.water);
    renderTab('dashboard'); // Refresh UI
};

window.copySummary = () => {
    if (state.logs.length === 0) {
        alert("Henüz kilo kaydı bulunmuyor.");
        return;
    }

    // Improved robust sorting
    const sortedLogs = [...state.logs].sort((a, b) => {
        const d1 = new Date(a.raw || '1970-01-01').getTime();
        const d2 = new Date(b.raw || '1970-01-01').getTime();
        return d1 - d2;
    });
    const latestLog = sortedLogs[sortedLogs.length - 1];
    
    const text = `📊 Diyet Özeti (${latestLog.date})\n💧 Su: ${(state.water.count / 1000).toFixed(2)}L\n⚖️ Kilo: ${latestLog.weight}kg${latestLog.note ? `\n📝 Not: ${latestLog.note}` : ''}\n\n#DiyetAsistanım #SağlıklıYaşam`;
    
    modalBody.innerHTML = `
        <div class="share-preview-box">
            <h2><i class="ph ph-eye"></i> Paylaşım Önizleme</h2>
            <div class="preview-text-area">
                ${text.replace(/\n/g, '<br>')}
            </div>
            <p style="font-size:12px; color:var(--text-light); margin-top:15px">Bu metin panoya kopyalanacak.</p>
            <button class="btn-primary" id="confirm-share-btn" style="margin-top:15px">
                <i class="ph ph-copy"></i> Kopyala ve Paylaş
            </button>
        </div>
    `;
    modalContainer.classList.remove('hidden');

    document.getElementById('confirm-share-btn').onclick = () => {
        navigator.clipboard.writeText(text).then(() => {
            alert('Özet panoya kopyalandı! İstediğin yerde paylaşabilirsin.');
            modalContainer.classList.add('hidden');
        });
    };
};

function renderMealItemsHTML(meal) {
    const items = meal.getItems();
    let html = `<ul class="meal-items-list">`;
    
    items.forEach(item => {
        if (item.isOr) {
            html += `<li class="meal-item-or-divider"><span>VEYA</span></li>`;
        } else {
            const badgeHTML = item.altKey 
                ? ` <span class="alt-badge" onclick="window.showAlternative('${item.altKey}')"><i class="ph ph-info"></i> Değiştir</span>` 
                : '';
            const kcalHTML = item.kcal ? ` <span style="font-size:11px; color:var(--text-light); margin-left:4px">(~${item.kcal} kcal)</span>` : '';
            html += `
                <li class="meal-item-bullet">
                    <span class="meal-item-dot" style="background-color:${meal.color}"></span>
                    <span class="meal-item-text">${item.text}${kcalHTML}${badgeHTML}</span>
                </li>
            `;
        }
    });
    
    html += `</ul>`;
    
    if (meal.note) {
        const isWarning = meal.id === 'breakfast';
        const noteClass = isWarning ? 'breakfast-note' : 'alt-info-text';
        const noteIcon = isWarning ? 'ph-warning-circle' : 'ph-arrow-left-right';
        html += `
            <div class="${noteClass}">
                <i class="ph ${noteIcon}"></i>
                <span>${meal.note}</span>
            </div>
        `;
    }
    
    return html;
}

function getActiveMealIndex() {
    const hours = new Date().getHours();
    const minutes = new Date().getMinutes();
    const timeVal = hours + minutes / 60; // numeric representation e.g. 9.5 for 09:30

    if (timeVal >= 6 && timeVal < 7) {
        return 0; // Uyanınca
    } else if (timeVal >= 7 && timeVal < 9.5) {
        return 1; // Sabah
    } else if (timeVal >= 9.5 && timeVal < 12) {
        return 2; // Ara Öğün 1
    } else if (timeVal >= 12 && timeVal < 15.5) {
        return 3; // Öğle Yemeği
    } else if (timeVal >= 15.5 && timeVal < 18) {
        return 4; // Ara Öğün 2
    } else if (timeVal >= 18 && timeVal < 21) {
        return 5; // Akşam Yemeği
    } else {
        return 6; // Gece Arası
    }
}

function renderDashboardMeals() {
    const activeIndex = getActiveMealIndex();
    const nextIndex = (activeIndex + 1) % DIET_17_EKIM.meals.length;
    const activeMeal = DIET_17_EKIM.meals[activeIndex];
    const nextMeal = DIET_17_EKIM.meals[nextIndex];

    const renderMiniCard = (meal, index, type) => {
        const contentHTML = renderMealItemsHTML(meal);
        const isActive = (type === 'active');
        const badgeHTML = isActive
            ? `<span class="meal-status-badge active-meal-badge"><i class="ph ph-check-circle"></i> Şu Anki Öğün</span>`
            : `<span class="meal-status-badge next-meal-badge"><i class="ph ph-arrow-circle-right"></i> Sıradaki Öğün</span>`;

        return `
            <div class="card diet-day-card dashboard-meal-focus-card ${isActive ? 'expanded active-focus' : 'next-focus'}" id="dash-meal-${index}" style="margin-bottom: 12px; padding: 16px 20px; border: 2px solid ${isActive ? meal.color : 'transparent'}">
                <div class="diet-day-header" onclick="window.toggleDashboardMeal(${index})" style="cursor:pointer">
                    <div style="display:flex; align-items:center; gap:10px; flex:1">
                        <div class="item-icon-circle" style="background: ${meal.bg}; color: ${meal.color}; width: 32px; height: 32px; font-size: 16px;">
                            <i class="ph ${meal.icon}"></i>
                        </div>
                        <div>
                            <h3 style="color:var(--text-color); font-size:15px; font-weight:600; margin-bottom:2px">${meal.name}</h3>
                            <span style="font-size:11px; color:var(--text-light)">${meal.time}</span>
                        </div>
                    </div>
                    <div style="display:flex; align-items:center; gap:8px">
                        ${badgeHTML}
                        <i class="ph ph-caret-down" style="font-size:14px; color:var(--text-light); transition: transform 0.3s"></i>
                    </div>
                </div>
                <div class="diet-details" style="border-top: none;">
                    <div class="meal-content-text" style="font-size:13.5px; padding-top:12px; color:var(--text-color); line-height:1.6">
                        ${contentHTML}
                    </div>
                </div>
            </div>
        `;
    };

    return renderMiniCard(activeMeal, activeIndex, 'active') + renderMiniCard(nextMeal, nextIndex, 'next');
}

window.toggleDashboardMeal = (index) => {
    const cardEl = document.getElementById(`dash-meal-${index}`);
    if (cardEl) {
        cardEl.classList.toggle('expanded');
    }
};

window.toggleDietMeal = (index) => {
    const cardEl = document.getElementById(`diet-meal-${index}`);
    if (cardEl) {
        cardEl.classList.toggle('expanded');
    }
};


// --- Dashboard ---
function renderDashboard() {
    const goalReached = state.water.count >= 3000;
    const waterPercent = Math.min(100, (state.water.count / 3000) * 100);

    const quotes = [
        "Başlamak için mükemmel olmana gerek yok, ama mükemmel olmak için başlaman gerek.",
        "Sağlıklı yaşam bir varış noktası değil, bir yolculuktur.",
        "Vücudun senin tek gerçek evin, ona iyi bak.",
        "Bugün yaptığın seçimler, yarınki seni oluşturur.",
        "Zorluklar seni durdurmak için değil, güçlendirmek için vardır."
    ];
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    const remaining = Math.max(0, 3.5 - (state.water.count / 1000)).toFixed(1);

    // Calorie Calculations
    const bmrDaily = calculateBMR();
    const now = new Date();
    const hoursPassed = now.getHours() + now.getMinutes() / 60;
    const bmr = Math.round(bmrDaily * (hoursPassed / 24));
    const stepCal = Math.round(state.daily.steps * 0.04);
    const totalBurned = bmr + stepCal;
    const totalIntake = state.daily.intake.reduce((sum, item) => sum + item.kcal, 0);
    const netBalance = totalBurned - totalIntake;
    const estimatedLoss = (netBalance / 7700 * 1000).toFixed(0); // 7700 cal ≈ 1kg loss

    const dashboardHTML = `
        <div class="dashboard-top-section">
            <div class="card water-card-horizontal">
                <div class="horizontal-bar-container">
                    <div class="bar-fill-horizontal" style="width: ${waterPercent}%"></div>
                    <div class="bar-info-overlay">
                        <i class="ph ph-drop-fill"></i>
                        <div class="bar-text-group">
                            <strong>${(state.water.count / 1000).toFixed(1)}L</strong>
                            <span class="remaining-tag">Kalan: ${remaining}L</span>
                        </div>
                    </div>
                </div>
                
                <div class="water-grid-actions">
                    <button class="water-btn-mini" id="add-200">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 3L5.5 21H18.5L17 3H7Z"/></svg>
                        <span>200ml</span>
                    </button>
                    <button class="water-btn-mini" id="add-500">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 2V5H14V2H10Z"/><path d="M9 5C9 5 7 7 7 10V20C7 21.1 7.9 22 9 22H15C16.1 22 17 21.1 17 20V10C17 7 15 5 15 5H9Z"/></svg>
                        <span>500ml</span>
                    </button>
                    <button class="water-btn-mini" id="add-1000">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 2H14V5H10V2Z"/><path d="M8 5H16V8C16 10 18 12 18 15V20C18 21.1 17.1 22 16 22H8C6.9 22 6 21.1 6 20V15C6 12 8 10 8 8V5Z"/></svg>
                        <span>1 Lt</span>
                    </button>
                    <button class="btn-undo-circle" id="undo-water">
                        <i class="ph ph-arrow-u-up-left"></i>
                    </button>
                </div>
            </div>

            <div class="card status-summary-card" style="background: linear-gradient(135deg, var(--primary-color), var(--primary-dark)); color: white; padding: 20px; border: none; margin-top: 12px;">
                <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:15px">
                    <div>
                        <span style="font-size:12px; opacity:0.9">Bugünkü Net Durum</span>
                        <h2 style="margin:0; font-size:24px; color:white">${netBalance > 0 ? '+' : ''}${netBalance} kcal</h2>
                    </div>
                    <div style="text-align:right">
                        <i class="ph ph-fire-simple" style="font-size:32px; opacity:0.8"></i>
                    </div>
                </div>
                
                <div style="display:grid; grid-template-columns: 1fr 1fr 1fr; gap:10px; background: rgba(255,255,255,0.1); padding:12px; border-radius:12px">
                    <div style="text-align:center">
                        <div style="font-size:10px; opacity:0.8">Yanan</div>
                        <div style="font-weight:600">${totalBurned}</div>
                        <div style="font-size:8px; opacity:0.6; margin-top:2px">Vücut: ${bmr} + Adım: ${stepCal}</div>
                    </div>
                    <div style="text-align:center; border-left: 1px solid rgba(255,255,255,0.2); border-right: 1px solid rgba(255,255,255,0.2)">
                        <div style="font-size:10px; opacity:0.8">Alınan</div>
                        <div style="font-weight:600">${totalIntake}</div>
                    </div>
                    <div style="text-align:center">
                        <div style="font-size:10px; opacity:0.8">Tahmini Kayıp</div>
                        <div style="font-weight:600">${estimatedLoss > 0 ? estimatedLoss : 0}g</div>
                    </div>
                </div>

                <div style="margin-top:15px; font-size:12px; text-align:center; background:rgba(0,0,0,0.1); padding:8px; border-radius:8px">
                    ${netBalance > 500 ? "🔥 Müthiş gidiyorsun, yağ yakımı başladı!" : "🥗 Dengeli beslenmeye devam, su içmeyi unutma!"}
                </div>
            </div>

            <div style="display:grid; grid-template-columns: 1fr 1fr; gap:12px; margin-top:12px">
                <div class="card" style="padding:15px; margin-top:0">
                    <div style="display:flex; align-items:center; justify-content:space-between">
                        <div style="display:flex; align-items:center; gap:8px">
                            <div class="item-icon-circle" style="background:#fff3e0; color:#ff9800; width:30px; height:30px; font-size:16px"><i class="ph ph-person-simple-walk"></i></div>
                            <div>
                                <div style="font-size:10px; color:var(--text-light)">Adım</div>
                                <div style="font-weight:600; font-size:14px">${state.daily.steps}</div>
                            </div>
                        </div>
                        <button class="btn-primary-small" onclick="window.promptSteps()" style="background:#ff9800; border:none; padding:4px 8px; font-size:10px">Güncelle</button>
                    </div>
                </div>
                <div class="card" style="padding:15px; margin-top:0">
                    <div style="display:flex; align-items:center; justify-content:space-between">
                        <div style="display:flex; align-items:center; gap:8px">
                            <div class="item-icon-circle" style="background:#e8f5e9; color:#4caf50; width:30px; height:30px; font-size:16px"><i class="ph ph-plus-circle"></i></div>
                            <div style="font-weight:600; font-size:14px">Öğün Ekle</div>
                        </div>
                        <button class="btn-primary-small" onclick="switchTab('ai')" style="background:#ab47bc; border:none; padding:4px 8px; font-size:10px">Ekle</button>
                    </div>
                </div>
            </div>

            <div id="daily-intake-list" style="margin-top:12px; display: ${state.daily.intake.length > 0 ? 'block' : 'none'}">
                <div class="card" style="padding:15px">
                    <h3 style="font-size:14px; margin-bottom:10px; color:var(--text-color); display:flex; align-items:center; gap:8px">
                        <i class="ph ph-list-checks" style="color:var(--primary-dark)"></i> Bugün Yenilenler
                    </h3>
                    <div style="display:flex; flex-direction:column; gap:8px">
                        ${state.daily.intake.map((item, idx) => `
                            <div style="display:flex; justify-content:space-between; align-items:center; background:rgba(0,0,0,0.02); padding:8px 12px; border-radius:8px; font-size:13px">
                                <div style="flex:1; min-width:0">
                                    <span style="font-weight:600">${item.label}</span>
                                    <span style="font-size:10px; color:var(--text-light); margin-left:5px">${item.time}</span>
                                </div>
                                <div style="display:flex; align-items:center; gap:8px; flex-shrink:0">
                                    <span style="color:var(--primary-dark); font-weight:600; font-size:12px">${item.kcal} kcal</span>
                                    <i class="ph ph-pencil-simple" style="color:#ff9800; cursor:pointer; font-size:16px" onclick="window.editIntake(${idx})"></i>
                                    <i class="ph ph-trash" style="color:#ef5350; cursor:pointer; font-size:16px" onclick="window.removeIntake(${idx})"></i>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>

        </div>

        <div class="dashboard-diet-section">
            <div class="card-header-main" style="margin-bottom: 8px; padding: 0 10px;">
                <h2 style="font-size:18px; font-weight:600; margin-bottom:0; display:flex; align-items:center; gap:8px">
                    <i class="ph ph-broccoli" style="color:var(--primary-dark)"></i> ${state.user.name ? state.user.name + "'in Öğün Takibi" : "Öğün Takibi"}
                </h2>
                <button onclick="switchTab('diet')" style="background:var(--secondary-color); border:none; padding:6px 12px; border-radius:12px; font-size:12px; font-weight:600; color:var(--primary-dark); cursor:pointer; display:flex; align-items:center; gap:5px;">
                    <i class="ph ph-list"></i> Tüm Liste
                </button>
            </div>
            
            <p class="diet-intro-note" style="margin: 0 10px 12px; font-size:12px; color:var(--text-light)">
                💡 Besinlere dokunarak alternatifleri görebilirsiniz.
            </p>

            <div class="today-diet-list-accordion">
                ${renderDashboardMeals()}
            </div>
        </div>

        <div class="card quote-card" style="background: var(--accent-color); border: none; padding: 20px; margin-top:20px">
            <p style="font-style: italic; font-size: 13px; text-align: center; color: var(--text-color);">"${randomQuote}"</p>
        </div>

        <div class="share-container" style="margin-top:20px">
            <button class="share-pill-btn" id="copy-summary-btn">
                <i class="ph ph-share-network"></i> Özetini Paylaş
            </button>
        </div>
    `;
    mainContent.innerHTML = dashboardHTML;

    // Event Listeners for dashboard elements
    document.getElementById('add-200').addEventListener('click', () => window.addWater(200));
    document.getElementById('add-500').addEventListener('click', () => window.addWater(500));
    document.getElementById('add-1000').addEventListener('click', () => window.addWater(1000));
    document.getElementById('undo-water').addEventListener('click', () => window.addWater(-200));
    document.getElementById('copy-summary-btn').addEventListener('click', window.copySummary);
}

function calculateTotalDietCalories() {
    let total = 0;
    DIET_17_EKIM.meals.forEach(meal => {
        const items = meal.getItems();
        let skipNext = false;
        items.forEach(item => {
            if (item.isOr) {
                skipNext = true;
                return;
            }
            if (!skipNext && item.kcal) {
                total += item.kcal;
            }
            skipNext = false;
        });
    });
    return total;
}

// --- Diet List ---
function renderDietList() {
    const totalKcal = calculateTotalDietCalories();
    
    let dietHTML = `
        <div class="diet-header-section" style="margin-bottom: 20px;">
            <div class="card-header-main" style="margin-bottom:10px">
                <h2 style="font-size:18px; font-weight:600; margin-bottom:0; display:flex; align-items:center; gap:8px">
                    <i class="ph ph-broccoli" style="color:var(--primary-dark)"></i> ${state.user.name ? state.user.name + "'in Özel Diyet Listesi" : "Özel Diyet Listesi"}
                </h2>
            </div>
            
            <div class="card" style="background-color: var(--bg-color); border: 1px solid rgba(0,0,0,0.05); padding: 15px; margin-bottom: 15px; border-radius: 12px; box-shadow: none;">
                <div style="display:flex; align-items:center; gap: 10px; margin-bottom: 8px;">
                    <i class="ph ph-fire" style="font-size:20px; color:#ff7043"></i>
                    <h3 style="font-size: 15px; font-weight: 600; color:var(--text-color); margin:0;">Günlük Toplam: ~${totalKcal} kcal</h3>
                </div>
                <p style="font-size: 13px; color:var(--text-color); line-height: 1.5; margin:0;">
                    Bu liste <strong>~${totalKcal} kaloridir.</strong> Günlük en az 30 dk yürüyüş ile bu programı uygularsanız, ortalama <strong>haftada 1 kilo</strong> verirsiniz.
                </p>
            </div>

            <p class="diet-intro-note" style="font-size:12px; color:var(--text-light); margin-bottom:15px">
                💡 Besinlerin yanındaki bilgi butonlarına dokunarak alternatif porsiyonları görebilirsiniz.
            </p>
        </div>
        <div class="diet-cards-container">
    `;
    
    const activeIndex = getActiveMealIndex();
    DIET_17_EKIM.meals.forEach((meal, index) => {
        const contentHTML = renderMealItemsHTML(meal);
        const isActive = index === activeIndex;
        dietHTML += `
            <div class="card diet-day-card" id="diet-meal-${index}" style="margin-bottom: 12px; padding: 16px 20px; ${isActive ? `border: 2px solid ${meal.color};` : ''}">
                <div class="diet-day-header" onclick="window.toggleDietMeal(${index})" style="cursor:pointer">
                    <div style="display:flex; align-items:center; gap:10px; flex:1">
                        <div class="item-icon-circle" style="background: ${meal.bg}; color: ${meal.color}; width: 30px; height: 30px; font-size: 15px; margin-bottom:0">
                            <i class="ph ${meal.icon}"></i>
                        </div>
                        <div>
                            <h3 style="color:var(--text-color); font-size:15px; font-weight:600; margin-bottom:2px">${meal.name}</h3>
                            <span style="font-size:11px; color:var(--text-light)">${meal.time}</span>
                        </div>
                    </div>
                    <div style="display:flex; align-items:center; gap:8px">
                        ${isActive ? `<span class="meal-status-badge active-meal-badge" style="font-size:10px"><i class="ph ph-check-circle"></i> Şu Anki</span>` : ''}
                        <i class="ph ph-caret-down" style="font-size:14px; color:var(--text-light); transition: transform 0.3s"></i>
                    </div>
                </div>
                <div class="diet-details" style="border-top: none;">
                    <div style="font-size:13.5px; padding-top:12px; line-height:1.6; color:var(--text-color)">
                        ${contentHTML}
                    </div>
                </div>
            </div>
        `;
    });
    
    dietHTML += `
        </div>
        <div class="portions-button-container" style="margin-top: 25px; margin-bottom: 35px; text-align: center; display: flex; flex-direction: column; gap: 10px;">
            <button class="btn-primary" onclick="window.showFruitPortions()" style="display:flex; align-items:center; justify-content:center; gap:10px; padding:12px; width: 100%;">
                <i class="ph ph-apple"></i> Meyve Porsiyon Rehberi
            </button>
            <button class="btn-primary" onclick="window.showDrinkGuide()" style="display:flex; align-items:center; justify-content:center; gap:10px; padding:12px; width: 100%; background: #ab47bc; border-color: #ab47bc;">
                <i class="ph ph-wine"></i> İçecek & Alkol Kalori Rehberi
            </button>
            <button class="btn-primary" onclick="window.showSnackGuide()" style="display:flex; align-items:center; justify-content:center; gap:10px; padding:12px; width: 100%; background: #ff9800; border-color: #ff9800;">
                <i class="ph ph-cookie"></i> Çerez & Atıştırmalık Rehberi
            </button>
        </div>
    `;
    
    mainContent.innerHTML = dietHTML;

    // Auto-expand the active meal on diet list page
    const activeIdx = getActiveMealIndex();
    const activeDietCard = document.getElementById(`diet-meal-${activeIdx}`);
    if (activeDietCard) {
        activeDietCard.classList.add('expanded');
    }
}

// --- Stats / Daily Log ---
let weightChart = null;

function renderStats() {
    // Calculate total weight lost for summary
    const sortedForSummary = [...state.logs].sort((a, b) => new Date(a.raw || '2000-01-01') - new Date(b.raw || '2000-01-01'));
    let weightSummaryHTML = '';
    if (sortedForSummary.length >= 2) {
        const first = parseFloat(sortedForSummary[0].weight);
        const last = parseFloat(sortedForSummary[sortedForSummary.length - 1].weight);
        const diff = (last - first).toFixed(1);
        const isLoss = parseFloat(diff) < 0;
        const icon = isLoss ? 'ph-trend-down' : 'ph-trend-up';
        weightSummaryHTML = `
            <div class="weight-summary-bar">
                <span class="weight-summary-label"><i class="ph ${icon}"></i> Toplam Verilen Kilo</span>
                <span class="weight-summary-value ${isLoss ? 'loss' : 'gain'}">${isLoss ? '' : '+'}${diff} kg</span>
            </div>
        `;
    }

    const statsHTML = `
        <div class="card">
            <h2><i class="ph ph-chart-line-up"></i> Gelişim Grafiği</h2>
            <div class="chart-container" style="position: relative; height:200px; width:100%">
                <canvas id="weightChartCanvas"></canvas>
            </div>
            ${weightSummaryHTML}
        </div>

        <div class="card">
            <h2><i class="ph ph-note-pencil"></i> Kilo Kaydı</h2>
            <div class="input-row-complex">
                <input type="date" id="log-date" class="input-minimal" value="${new Date().toISOString().split('T')[0]}">
                <input type="number" id="daily-weight" step="0.1" placeholder="Kg" class="input-minimal">
                <button class="btn-primary-small" id="save-log">Kaydet</button>
            </div>
        </div>

        <div id="logs-list" class="logs-list-container">
            ${renderLogs()}
        </div>
    `;
    mainContent.innerHTML = statsHTML;

    document.getElementById('save-log').addEventListener('click', saveLog);
    renderWeightChart();
}

function renderWeightChart() {
    const ctx = document.getElementById('weightChartCanvas');
    if (!ctx) return;

    // Sort logs ascending: oldest on the LEFT, newest on the RIGHT
    const sortedLogs = [...state.logs].sort((a, b) => new Date(a.raw || '2000-01-01') - new Date(b.raw || '2000-01-01'));

    const labels = sortedLogs.map(l => l.date);
    const data = sortedLogs.map(l => parseFloat(l.weight));

    if (weightChart) weightChart.destroy();

    // Gradient fill
    const canvasCtx = ctx.getContext('2d');
    const gradient = canvasCtx.createLinearGradient(0, 0, 0, 200);
    gradient.addColorStop(0, 'rgba(136, 175, 143, 0.45)');
    gradient.addColorStop(1, 'rgba(136, 175, 143, 0.0)');

    // Narrow Y-axis to make changes more visible
    const weights = data.filter(d => !isNaN(d));
    const minW = weights.length > 0 ? Math.min(...weights) - 1.5 : 0;
    const maxW = weights.length > 0 ? Math.max(...weights) + 1.5 : 100;

    weightChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Kilo',
                data: data,
                borderColor: '#88af8f',
                backgroundColor: gradient,
                borderWidth: 2.5,
                tension: 0.4,
                fill: true,
                pointBackgroundColor: '#88af8f',
                pointBorderColor: '#fff',
                pointBorderWidth: 2.5,
                pointRadius: 5,
                pointHoverRadius: 7
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                tooltip: {
                    backgroundColor: 'rgba(255,255,255,0.96)',
                    titleColor: '#888',
                    bodyColor: '#4a7c59',
                    borderColor: '#88af8f',
                    borderWidth: 1.5,
                    padding: 10,
                    cornerRadius: 10,
                    callbacks: {
                        label: (item) => ` ${item.parsed.y} kg`
                    }
                }
            },
            scales: {
                y: {
                    min: minW,
                    max: maxW,
                    beginAtZero: false,
                    grid: { color: 'rgba(0,0,0,0.05)', drawBorder: false },
                    ticks: { font: { size: 11 }, color: '#aaa' }
                },
                x: {
                    grid: { display: false },
                    ticks: { font: { size: 11 }, color: '#aaa' }
                }
            }
        }
    });
}

function saveLog() {
    const weightInput = document.getElementById('daily-weight');
    const dateInput = document.getElementById('log-date');
    const weight = weightInput.value;
    const rawDate = dateInput.value;
    
    if (!weight || !rawDate) return alert('Lütfen bilgileri girin.');

    // Format date as DD.MM
    const dateObj = new Date(rawDate);
    const dateStr = dateObj.toLocaleDateString('tr-TR', { day: '2-digit', month: '2-digit' });
    
    // Check if entry for this date exists
    const existingIndex = state.logs.findIndex(l => l.date === dateStr);
    if (existingIndex > -1) {
        state.logs[existingIndex].weight = weight;
        state.logs[existingIndex].raw = rawDate; // Make sure the raw date is also updated!
    } else {
        state.logs.push({ date: dateStr, weight, note: '', raw: rawDate });
    }

    // Sort logs by date (newest first for list, oldest first for chart)
    state.logs.sort((a, b) => new Date(b.raw || '2000-01-01') - new Date(a.raw || '2000-01-01'));

    storage.set('diyet_logs', state.logs);
    
    // Surgical update instead of full re-render
    const logsList = document.getElementById('logs-list');
    if (logsList) logsList.innerHTML = renderLogs();
    renderWeightChart();
    
    // Clear weight input but keep the date for convenience
    weightInput.value = '';
    
    // Small feedback
    const saveBtn = document.getElementById('save-log');
    const originalText = saveBtn.innerText;
    saveBtn.innerText = 'Kaydedildi!';
    saveBtn.style.background = 'var(--primary-dark)';
    setTimeout(() => {
        saveBtn.innerText = originalText;
        saveBtn.style.background = '';
    }, 1500);
}

window.editLog = (index) => {
    const newWeight = prompt("Yeni kiloyu girin:", state.logs[index].weight);
    if (newWeight !== null && !isNaN(newWeight)) {
        state.logs[index].weight = newWeight;
        storage.set('diyet_logs', state.logs);
        renderTab('stats');
    }
};

window.deleteLog = (index) => {
    if (confirm("Bu kaydı silmek istediğinize emin misiniz?")) {
        state.logs.splice(index, 1);
        storage.set('diyet_logs', state.logs);
        renderTab('stats');
    }
};

function renderLogs() {
    if (state.logs.length === 0) return '<p style="text-align:center; color:var(--text-light); padding:20px;">Henüz kayıt yok.</p>';

    // Sort chronologically (oldest first) to compute day-over-day diff
    const sorted = [...state.logs].sort((a, b) => new Date(a.raw || '2000-01-01') - new Date(b.raw || '2000-01-01'));

    return sorted.map((log, index) => {
        // Diff vs previous entry
        let diffHTML = '';
        if (index > 0) {
            const prev = parseFloat(sorted[index - 1].weight);
            const curr = parseFloat(log.weight);
            const diff = (curr - prev).toFixed(1);
            const isLoss = parseFloat(diff) < 0;
            diffHTML = `<span class="log-diff ${isLoss ? 'diff-loss' : 'diff-gain'}">${isLoss ? '' : '+'}${diff} kg</span>`;
        }

        // Map back to state.logs index for edit/delete
        const stateIndex = state.logs.findIndex(l => l.raw === log.raw && l.date === log.date);

        return `
            <div class="log-item-card">
                <div class="log-info">
                    <strong>${log.date}</strong>
                    <div class="log-weight-row">
                        <span>${log.weight} kg</span>
                        ${diffHTML}
                    </div>
                </div>
                <div class="log-actions">
                    <button onclick="window.editLog(${stateIndex})"><i class="ph ph-pencil-simple"></i></button>
                    <button onclick="window.deleteLog(${stateIndex})" style="color:#e57373"><i class="ph ph-trash"></i></button>
                </div>
            </div>
        `;
    }).join('');
}

// --- Profile ---
function renderProfile() {
    const profileHTML = `
        <div class="card">
            <h2><i class="ph ph-user-circle"></i> Profil Bilgileri</h2>
            
            <div class="input-group">
                <label>Cinsiyet</label>
                <div class="choice-group">
                    <button class="choice-btn ${state.user.gender === 'female' ? 'active' : ''}" onclick="window.setGender('female')">
                        <i class="ph ph-gender-female"></i> Kadın
                    </button>
                    <button class="choice-btn ${state.user.gender === 'male' ? 'active' : ''}" onclick="window.setGender('male')">
                        <i class="ph ph-gender-male"></i> Erkek
                    </button>
                </div>
            </div>

            <div class="input-group">
                <label>İsim</label>
                <input type="text" id="user-name" value="${state.user.name || ''}" placeholder="Örn: Fatih">
            </div>
            <div class="input-group">
                <label>Yaş</label>
                <input type="number" id="user-age" value="${state.user.age || ''}" placeholder="30">
            </div>
            <div class="input-group">
                <label>Boy (cm)</label>
                <input type="number" id="user-height" value="${state.user.height}" placeholder="175">
            </div>
            <div class="input-group">
                <label>Başlangıç Kilosu (kg)</label>
                <input type="number" id="user-weight" value="${state.user.weight}" placeholder="80">
            </div>
            <div class="input-group">
                <label>Hedef Kilo (kg)</label>
                <input type="number" id="user-target" value="${state.user.targetWeight}" placeholder="70">
            </div>
        </div>

        <div class="card" style="text-align:center">
            <p style="font-size:14px">Vücut Kitle İndeksi (VKİ)</p>
            <h1 style="color:var(--primary-dark); margin:10px 0">${calculateBMI()}</h1>
            <p style="font-size:12px; color:var(--text-light)">${getBMICategory()}</p>
        </div>
        
        <button class="btn-primary" id="save-profile" style="margin-bottom: 12px;">Değişiklikleri Kaydet</button>
        
        <div style="display:grid; grid-template-columns: 1fr 1fr; gap:10px; margin-bottom:12px">
            <button class="btn-primary-small" onclick="window.backupData()" style="background:var(--secondary-color); color:var(--text-color); border:none; padding:12px; width:100%; border-radius:12px">
                <i class="ph ph-export"></i> Yedekle
            </button>
            <button class="btn-primary-small" onclick="window.restoreData()" style="background:var(--secondary-color); color:var(--text-color); border:none; padding:12px; width:100%; border-radius:12px">
                <i class="ph ph-import"></i> Geri Yükle
            </button>
        </div>

        <button class="btn-primary" onclick="window.resetEverything()" style="background:#ef5350; border-color:#ef5350; margin-bottom: 20px;">
            <i class="ph ph-trash"></i> Tüm Verileri Sıfırla
        </button>
        
        <div class="developer-credit-profile">
            <a href="https://fatihpatir.github.io/web" target="_blank">
                Fatih PATIR tarafından geliştirildi
            </a>
        </div>
    `;
    mainContent.innerHTML = profileHTML;

    document.getElementById('save-profile').addEventListener('click', saveProfile);
}

// Global functions for inline onclicks
window.setGender = (gender) => {
    state.user.gender = gender;
    renderTab('profile');
};

// Duplicate window.setTheme removed

function saveProfile() {
    state.user.name = document.getElementById('user-name').value;
    state.user.age = document.getElementById('user-age').value;
    state.user.height = document.getElementById('user-height').value;
    state.user.weight = document.getElementById('user-weight').value;
    state.user.targetWeight = document.getElementById('user-target').value;
    
    storage.set('diyet_user', state.user);
    updateAppMainTitle();
    alert('Profiliniz kaydedildi!');
}

function calculateTargetCalories() {
    if (!state.user.height || !state.user.weight || !state.user.age) return 1700;
    
    const weight = parseFloat(state.user.weight);
    const height = parseFloat(state.user.height);
    const age = parseFloat(state.user.age);
    const gender = state.user.gender;
    
    let bmr = 0;
    if (gender === 'male') {
        bmr = (10 * weight) + (6.25 * height) - (5 * age) + 5;
    } else {
        bmr = (10 * weight) + (6.25 * height) - (5 * age) - 161;
    }
    
    // Lightly to Moderately Active (30 min walk)
    const tdee = bmr * 1.4; 
    
    // Target deficit ~900 kcal for ~1kg/week
    let targetKcal = tdee - 900;
    
    if (gender === 'female') {
        targetKcal = Math.max(1200, targetKcal);
    } else {
        targetKcal = Math.max(1500, targetKcal);
    }
    
    return targetKcal;
}

function calculateBMI() {
    if (!state.user.height || !state.user.weight) return '--';
    const heightInMeters = state.user.height / 100;
    return (state.user.weight / (heightInMeters * heightInMeters)).toFixed(1);
}

function calculateBMR() {
    if (!state.user.height || !state.user.weight || !state.user.age) return 1500;
    const w = parseFloat(state.user.weight);
    const h = parseFloat(state.user.height);
    const a = parseFloat(state.user.age);
    if (state.user.gender === 'male') {
        return Math.round(10 * w + 6.25 * h - 5 * a + 5);
    } else {
        return Math.round(10 * w + 6.25 * h - 5 * a - 161);
    }
}

window.promptSteps = () => {
    const steps = prompt("Bugün kaç adım attınız?", state.daily.steps);
    if (steps !== null && steps !== "" && !isNaN(steps)) {
        state.daily.steps = parseInt(steps);
        storage.set('diyet_daily', state.daily);
        renderTab('dashboard');
    }
};

window.promptManualIntake = () => {
    const label = prompt("Ne yediniz? (Örn: Simit)", "");
    if (!label) return;
    const kcal = prompt("Kaç kalori? (Sadece sayı girin veya boş bırakın)", "200");
    if (kcal !== null) {
        window.addToDailyIntake(kcal || 200, label);
    }
};

window.addToDailyIntake = (kcal, label) => {
    state.daily.intake.push({ kcal: parseInt(kcal), label: label, time: new Date().toLocaleTimeString('tr-TR', {hour:'2-digit', minute:'2-digit'}) });
    storage.set('diyet_daily', state.daily);
    alert(`${label} (${kcal} kcal) günlüğe eklendi!`);
    renderTab('dashboard');
};

window.removeIntake = (idx) => {
    if (confirm("Bu öğünü silmek istediğinize emin misiniz?")) {
        state.daily.intake.splice(idx, 1);
        storage.set('diyet_daily', state.daily);
        renderTab('dashboard');
    }
};

window.editIntake = (idx) => {
    const item = state.daily.intake[idx];
    if (!item) return;
    modalBody.innerHTML = `
        <div style="padding:5px">
            <h2 style="display:flex; align-items:center; gap:8px; margin-bottom:20px">
                <i class="ph ph-pencil-simple" style="color:#ff9800"></i> Öğün Düzenle
            </h2>
            <div class="input-group">
                <label>İsim</label>
                <input type="text" id="edit-intake-label" value="${item.label.replace(/"/g, '&quot;')}" />
            </div>
            <div class="input-group">
                <label>Kalori (kcal)</label>
                <input type="number" id="edit-intake-kcal" value="${item.kcal}" />
            </div>
            <button class="btn-primary" id="save-edit-intake" style="margin-top:10px">
                <i class="ph ph-check-circle" style="font-size:18px; vertical-align:middle; margin-right:5px"></i> Kaydet
            </button>
        </div>
    `;
    modalContainer.classList.remove('hidden');

    document.getElementById('save-edit-intake').addEventListener('click', () => {
        const newLabel = document.getElementById('edit-intake-label').value.trim();
        const newKcal = parseInt(document.getElementById('edit-intake-kcal').value);
        if (!newLabel) { alert('Lütfen bir isim girin.'); return; }
        if (isNaN(newKcal) || newKcal < 0) { alert('Lütfen geçerli bir kalori değeri girin.'); return; }
        state.daily.intake[idx].label = newLabel;
        state.daily.intake[idx].kcal = newKcal;
        storage.set('diyet_daily', state.daily);
        modalContainer.classList.add('hidden');
        renderTab('dashboard');
    });
};

window.resetEverything = () => {
    if (confirm("DİKKAT! Tüm bilgileriniz, kilo kayıtlarınız ve ayarlarınız tamamen silinecek. Bu işlem geri alınamaz. Onaylıyor musunuz?")) {
        localStorage.clear();
        alert("Tüm veriler silindi. Uygulama yeniden başlatılıyor...");
        window.location.reload();
    }
};

window.backupData = () => {
    const allData = {
        user: state.user,
        logs: state.logs,
        water: state.water,
        daily: state.daily,
        appVersion: storage.get('app_version')
    };
    const code = btoa(JSON.stringify(allData)); // Encode to base64
    navigator.clipboard.writeText(code).then(() => {
        alert("Yedekleme kodunuz başarıyla kopyalandı! Bu kodu bir yere not edin (WhatsApp, Notlar vb.). Verilerinizi geri getirmek için kullanabilirsiniz.");
    });
};

window.restoreData = () => {
    const code = prompt("Lütfen daha önce kopyaladığınız yedekleme kodunu buraya yapıştırın:");
    if (!code) return;
    try {
        const decoded = JSON.parse(atob(code));
        if (decoded.user && decoded.logs) {
            storage.set('diyet_user', decoded.user);
            storage.set('diyet_logs', decoded.logs);
            storage.set('diyet_water', decoded.water);
            storage.set('diyet_daily', decoded.daily);
            alert("Harika! Verileriniz başarıyla geri yüklendi. Uygulama güncelleniyor...");
            window.location.reload();
        } else {
            alert("Hatalı yedekleme kodu!");
        }
    } catch (e) {
        alert("Kod geçersiz! Lütfen doğru kodu yapıştırdığınızdan emin olun.");
    }
};

function getBMICategory() {
    const bmi = calculateBMI();
    if (bmi === '--') return 'Bilgi eksik';
    if (bmi < 18.5) return 'Zayıf';
    if (bmi < 25) return 'Normal';
    if (bmi < 30) return 'Fazla Kilolu';
    return 'Obez';
}

// --- AI Assistant ---
function renderAIAssistant() {
    mainContent.innerHTML = `
        <div class="card" style="margin-bottom: 15px;">
            <div class="card-header-main" style="margin-bottom: 10px;">
                <h2 style="font-size:18px; font-weight:600; margin-bottom:0; display:flex; align-items:center; gap:8px">
                    <i class="ph ph-sparkle" style="color:#ab47bc"></i> Diyet Yapay Zekası
                </h2>
            </div>
            <p style="font-size: 13px; color:var(--text-light); margin-bottom: 20px;">
                Ne yediğinizi detaylıca yazın veya fotoğrafını yükleyin, kalorisini ve uygunluğunu söyleyeyim.
            </p>
            
            <textarea id="ai-input-text" placeholder="Örn: 2 haşlanmış yumurta, süzme peynir, 5 zeytin ve 2 dilim ekmek yedim..." style="width: 100%; min-height: 80px; padding: 12px; border-radius: 12px; border: 1px solid var(--secondary-color); background: var(--bg-color); color: var(--text-color); font-family: inherit; font-size: 13px; margin-bottom: 15px; resize: vertical;"></textarea>
            
            <div style="display:flex; gap:10px; margin-bottom: 15px;">
                <button class="btn-primary" onclick="document.getElementById('ai-image-upload').click()" style="flex: 1; background: var(--bg-color); color: var(--primary-dark); border: 1px solid var(--primary-color);">
                    <i class="ph ph-camera"></i> Fotoğraf Ekle
                </button>
                <input type="file" id="ai-image-upload" accept="image/*" style="display:none" onchange="window.handleAIImage(event)">
                
                <button class="btn-primary" onclick="window.askAI()" style="flex: 1; background: #ab47bc; border-color: #ab47bc;">
                    <i class="ph ph-paper-plane-right"></i> Gönder
                </button>
            </div>
            
            <div id="ai-image-preview-container" class="hidden" style="position: relative; margin-bottom: 15px; text-align: center;">
                <img id="ai-image-preview" style="max-height: 150px; border-radius: 12px; border: 1px solid var(--secondary-color);">
                <button onclick="window.clearAIImage()" style="position: absolute; top: -10px; right: 10px; background: #ef5350; color: white; border: none; border-radius: 50%; width: 25px; height: 25px; display: flex; align-items: center; justify-content: center; cursor: pointer;">
                    <i class="ph ph-x"></i>
                </button>
            </div>
            
            <div id="ai-result-box" class="hidden" style="background: var(--bg-color); border: 1px solid var(--secondary-color); border-radius: 12px; padding: 15px; font-size: 13px; color: var(--text-color); line-height: 1.5;">
                <div id="ai-loading" class="hidden" style="text-align: center; color: var(--primary-dark);">
                    <i class="ph ph-spinner ph-spin" style="font-size: 24px; margin-bottom: 10px;"></i>
                    <p id="ai-loading-text">Yapay Zeka Analiz Ediyor...</p>
                </div>
                <div id="ai-response-text" class="hidden"></div>
            </div>
        </div>

        <!-- Manuel Ekleme Kartı -->
        <div class="card manual-add-card" style="margin-bottom: 30px;">
            <div class="manual-add-header" onclick="window.toggleManualAdd()" style="cursor:pointer; display:flex; justify-content:space-between; align-items:center;">
                <h3 style="font-size:15px; font-weight:600; margin:0; display:flex; align-items:center; gap:8px; color:var(--text-color);">
                    <i class="ph ph-keyboard" style="color:var(--primary-dark)"></i> Elle / Manuel Öğün Ekle
                </h3>
                <i class="ph ph-caret-down" id="manual-caret" style="font-size:14px; color:var(--text-light); transition: transform 0.3s"></i>
            </div>
            <div id="manual-add-details" class="hidden" style="margin-top: 15px; border-top: 1px solid rgba(0,0,0,0.05); padding-top: 15px;">
                <div class="input-group">
                    <label>Ne yediniz? / İçecek</label>
                    <input type="text" id="manual-label" placeholder="Örn: 1 dilim yaş pasta veya Simit" class="input-minimal" style="width:100%;">
                </div>
                <div class="input-group">
                    <label>Kalori (Kcal)</label>
                    <input type="number" id="manual-kcal" placeholder="Örn: 350" class="input-minimal" style="width:100%;">
                </div>
                <button class="btn-primary" onclick="window.submitManualAdd()" style="background:var(--primary-color); border-color:var(--primary-color); width:100%; margin-top:5px;">
                    <i class="ph ph-plus-circle"></i> Günlüğe Ekle
                </button>
            </div>
        </div>
    `;
}

window.toggleManualAdd = () => {
    const details = document.getElementById('manual-add-details');
    const caret = document.getElementById('manual-caret');
    if (details && caret) {
        details.classList.toggle('hidden');
        if (details.classList.contains('hidden')) {
            caret.style.transform = 'rotate(0deg)';
        } else {
            caret.style.transform = 'rotate(180deg)';
        }
    }
};

window.submitManualAdd = () => {
    const label = document.getElementById('manual-label').value.trim();
    const kcalVal = document.getElementById('manual-kcal').value.trim();
    if (!label) {
        alert("Lütfen ne yediğinizi yazın.");
        return;
    }
    const kcal = kcalVal ? parseInt(kcalVal) : 200;
    if (isNaN(kcal) || kcal < 0) {
        alert("Lütfen geçerli bir kalori değeri girin.");
        return;
    }
    window.addToDailyIntake(kcal, label);
    document.getElementById('manual-label').value = '';
    document.getElementById('manual-kcal').value = '';
    window.toggleManualAdd();
};

window.currentAIImageBase64 = null;

window.handleAIImage = (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            const img = new Image();
            img.onload = () => {
                const canvas = document.createElement('canvas');
                const MAX_WIDTH = 600;
                const MAX_HEIGHT = 600;
                let width = img.width;
                let height = img.height;

                if (width > height) {
                    if (width > MAX_WIDTH) {
                        height *= MAX_WIDTH / width;
                        width = MAX_WIDTH;
                    }
                } else {
                    if (height > MAX_HEIGHT) {
                        width *= MAX_HEIGHT / height;
                        height = MAX_HEIGHT;
                    }
                }
                canvas.width = width;
                canvas.height = height;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0, width, height);

                const compressedBase64 = canvas.toDataURL('image/jpeg', 0.5); // More aggressive compression for high-res mobile photos
                window.currentAIImageBase64 = compressedBase64;
                document.getElementById('ai-image-preview').src = compressedBase64;
                document.getElementById('ai-image-preview-container').classList.remove('hidden');
            };
            img.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
};

window.clearAIImage = () => {
    window.currentAIImageBase64 = null;
    document.getElementById('ai-image-preview-container').classList.add('hidden');
    document.getElementById('ai-image-upload').value = '';
};

// OpenRouter API
const DEFAULT_OPENROUTER_API_KEY = atob("c2stb3ItdjEtN2I0NTg2ZTgzMzZiNzBkZjZmNjU2NTVmOGU3NWFhYmRhYmY5ZWE4OTc1ZDRkYWE4NGUyYjY4NTQxZjQzNGMyZg==");
const OPENROUTER_MODEL = "google/gemini-2.5-flash";

window.showManualFormOnError = (inputText, errorMsg) => {
    const responseTextEl = document.getElementById('ai-response-text');
    responseTextEl.classList.remove('hidden');
    
    const guessedLabel = inputText ? (inputText.length > 30 ? inputText.substring(0, 30) + "..." : inputText) : "";
    
    responseTextEl.innerHTML = `
        <div style="color:#ef5350; margin-bottom:15px; font-size:12.5px; line-height:1.4;">
            <i class="ph ph-warning-circle" style="font-size:18px; vertical-align:middle; margin-right:5px;"></i>
            <span><strong>Bağlantı Hatası:</strong> ${errorMsg}</span>
        </div>
        <div style="background:rgba(255, 152, 0, 0.05); border: 1px solid rgba(255, 152, 0, 0.2); padding:15px; border-radius:12px; margin-top:10px;">
            <h4 style="color:#ff9800; font-size:13px; font-weight:600; margin-bottom:10px; display:flex; align-items:center; gap:6px;">
                <i class="ph ph-keyboard"></i> Yapay Zeka Hata Verdi, Elle Ekle:
            </h4>
            <div class="input-group" style="margin-bottom:10px;">
                <label style="font-size:11px; margin-bottom:3px;">Yiyecek Adı</label>
                <input type="text" id="error-manual-label" value="${guessedLabel.replace(/"/g, '&quot;')}" class="input-minimal" style="width:100%; padding:8px 12px; font-size:13px !important;" placeholder="Örn: 1 dilim börek">
            </div>
            <div class="input-group" style="margin-bottom:12px;">
                <label style="font-size:11px; margin-bottom:3px;">Kalori (kcal)</label>
                <input type="number" id="error-manual-kcal" value="250" class="input-minimal" style="width:100%; padding:8px 12px; font-size:13px !important;">
            </div>
            <button class="btn-primary-small" onclick="window.submitErrorManualAdd()" style="background:#ff9800; border:none; width:100%; justify-content:center; color:white; height:38px; border-radius:10px;">
                <i class="ph ph-plus-circle"></i> Günlüğüme Ekle
            </button>
        </div>
    `;
};

window.submitErrorManualAdd = () => {
    const label = document.getElementById('error-manual-label').value.trim();
    const kcalVal = document.getElementById('error-manual-kcal').value.trim();
    if (!label) {
        alert("Lütfen yiyecek adını girin.");
        return;
    }
    const kcal = kcalVal ? parseInt(kcalVal) : 250;
    if (isNaN(kcal) || kcal < 0) {
        alert("Lütfen geçerli bir kalori değeri girin.");
        return;
    }
    window.addToDailyIntake(kcal, label);
    document.getElementById('ai-result-box').classList.add('hidden');
};

window.askAI = async () => {
    const apiKey = DEFAULT_OPENROUTER_API_KEY;
    
    if (!apiKey) {
        alert('Lütfen geçerli bir OpenRouter API anahtarı ekleyin.');
        return;
    }

    const text = document.getElementById('ai-input-text').value.trim();
    const imageBase64 = window.currentAIImageBase64;

    if (!text && !imageBase64) {
        alert('Lütfen bir yemek adı yazın veya fotoğraf ekleyin.');
        return;
    }

    const resultBox = document.getElementById('ai-result-box');
    const loadingEl = document.getElementById('ai-loading');
    const loadingTextEl = document.getElementById('ai-loading-text');
    const responseTextEl = document.getElementById('ai-response-text');

    resultBox.classList.remove('hidden');
    loadingEl.classList.remove('hidden');
    responseTextEl.classList.add('hidden');
    loadingTextEl.innerText = "Yapay Zeka Analiz Ediyor...";

    const makeRequest = async (useImage) => {
        let systemPrompt = "Sen uzman bir diyetisyen yapay zekasısın. Görevin, kullanıcının yediği yemeği/içeceği analiz etmek. Eğer bir fotoğraf varsa onu tanı, yoksa metne odaklan. Tahmini kalorisini söyle ve diyete uygun olup olmadığını kısaca, samimi ve Türkçe bir şekilde anlat. (Maksimum 3-4 cümle) ÖNEMLİ: Cevabının en başına, tek satır olarak ve köşeli parantez içinde, yemeğin/içeceğin düzeltilmiş ve tam Türkçe adını ve yanına tek bir sayı olarak net tahmini kalorisini yaz (aralık belirtme, tek bir ortalama sayı yaz). Örnek: [Haşlanmış Yumurta - 75 kcal] veya [Mercimek Çorbası - 120 kcal]. Bu satırdan sonra açıklamana devam et.";
        
        let messages = [];
        if (useImage && imageBase64) {
            messages.push({
                role: "user",
                content: [
                    { type: "text", text: systemPrompt + (text ? "\nKullanıcı notu: " + text : "\nLütfen bu fotoğrafı analiz et.") },
                    { type: "image_url", image_url: { url: imageBase64 } }
                ]
            });
        } else {
            messages.push({ role: "system", content: systemPrompt });
            messages.push({ role: "user", content: text });
        }

        const headers = {
            "Authorization": `Bearer ${apiKey}`,
            "Content-Type": "application/json",
            "HTTP-Referer": "https://github.com/fatihpatir/diyetim",
            "X-Title": "Diyet Asistanim"
        };

        const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
            method: "POST",
            headers: headers,
            body: JSON.stringify({
                model: OPENROUTER_MODEL,
                messages: messages,
                temperature: 0.5,
                max_tokens: 512
            })
        });

        if (!response.ok) {
            const errData = await response.json().catch(() => ({}));
            throw new Error(errData.error?.message || `HTTP ${response.status}`);
        }

        return await response.json();
    };

    try {
        let data;
        let visualError = false;

        if (imageBase64) {
            try {
                data = await makeRequest(true);
            } catch (err) {
                console.warn("Visual analysis failed, falling back to text-only:", err);
                if (text) {
                    visualError = true;
                    loadingTextEl.innerText = "Görsel analizi yapılamadı. Sadece metin analiz ediliyor...";
                    data = await makeRequest(false);
                } else {
                    throw err;
                }
            }
        } else {
            data = await makeRequest(false);
        }
        
        loadingEl.classList.add('hidden');
        responseTextEl.classList.remove('hidden');

        if (data.choices?.[0]?.message?.content) {
            const aiText = data.choices[0].message.content;
            const formattedHtml = aiText.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br>');
            
            let foodName = "AI Analizi";
            let kcal = 200;

            const bracketMatch = aiText.match(/^\[(.+?)\]/);
            if (bracketMatch) {
                const content = bracketMatch[1].trim();
                const lastHyphenIndex = content.lastIndexOf('-');
                if (lastHyphenIndex !== -1) {
                    const possibleKcalPart = content.substring(lastHyphenIndex + 1).trim();
                    if (/\d/.test(possibleKcalPart)) {
                        foodName = content.substring(0, lastHyphenIndex).trim();
                        const rangeMatch = possibleKcalPart.match(/(\d+)\s*[-–]\s*(\d+)/);
                        if (rangeMatch) {
                            const val1 = parseInt(rangeMatch[1]);
                            const val2 = parseInt(rangeMatch[2]);
                            kcal = (val1 > 10 && val1 < 5000 && val2 > 10 && val2 < 5000) ? Math.round((val1 + val2) / 2) : 200;
                        } else {
                            const singleMatch = possibleKcalPart.match(/(\d+)/);
                            if (singleMatch) {
                                kcal = parseInt(singleMatch[1]);
                            }
                        }
                    } else {
                        foodName = content;
                        const rangeMatch = aiText.match(/(\d+)\s*[-–]\s*(\d+)\s*(?:kcal|kalori|cal|kal)/i) || aiText.match(/(\d+)\s*[-–]\s*(\d+)/);
                        if (rangeMatch) {
                            const val1 = parseInt(rangeMatch[1]);
                            const val2 = parseInt(rangeMatch[2]);
                            kcal = (val1 > 10 && val1 < 5000 && val2 > 10 && val2 < 5000) ? Math.round((val1 + val2) / 2) : 200;
                        } else {
                            const singleMatch = aiText.match(/(\d+)\s*(?:kcal|kalori|cal|kal)/i);
                            kcal = singleMatch ? parseInt(singleMatch[1]) : 200;
                        }
                    }
                } else {
                    foodName = content;
                    const rangeMatch = aiText.match(/(\d+)\s*[-–]\s*(\d+)\s*(?:kcal|kalori|cal|kal)/i) || aiText.match(/(\d+)\s*[-–]\s*(\d+)/);
                    if (rangeMatch) {
                        const val1 = parseInt(rangeMatch[1]);
                        const val2 = parseInt(rangeMatch[2]);
                        kcal = (val1 > 10 && val1 < 5000 && val2 > 10 && val2 < 5000) ? Math.round((val1 + val2) / 2) : 200;
                    } else {
                        const singleMatch = aiText.match(/(\d+)\s*(?:kcal|kalori|cal|kal)/i);
                        kcal = singleMatch ? parseInt(singleMatch[1]) : 200;
                    }
                }
            } else {
                foodName = text ? (text.length > 25 ? text.substring(0,25)+"..." : text) : "AI Analizi";
                const rangeMatch = aiText.match(/(\d+)\s*[-–]\s*(\d+)\s*(?:kcal|kalori|cal|kal)/i) || aiText.match(/(\d+)\s*[-–]\s*(\d+)/);
                if (rangeMatch) {
                    const val1 = parseInt(rangeMatch[1]);
                    const val2 = parseInt(rangeMatch[2]);
                    kcal = (val1 > 10 && val1 < 5000 && val2 > 10 && val2 < 5000) ? Math.round((val1 + val2) / 2) : 200;
                } else {
                    const singleMatch = aiText.match(/(\d+)\s*(?:kcal|kalori|cal|kal)/i);
                    kcal = singleMatch ? parseInt(singleMatch[1]) : 200;
                }
            }
            
            const cleanedHtml = formattedHtml.replace(/^\[.+?\]\s*<br>/i, '').replace(/^\[.+?\]\s*/i, '');
            const jsFoodName = foodName.replace(/['"‘“’`]/g, '');

            const fallbackNotice = visualError 
                ? `<div style="background:rgba(255, 152, 0, 0.08); border: 1px solid rgba(255, 152, 0, 0.2); padding:8px 12px; border-radius:8px; font-size:11px; color:#e65100; margin-bottom:12px; display:flex; align-items:center; gap:5px;"><i class="ph ph-warning-circle"></i> Görsel analizi yapılamadı. Sadece metin analiz edildi.</div>` 
                : '';

            responseTextEl.innerHTML = `
                <div style="display:flex; gap:10px; align-items:flex-start;">
                    <i class="ph ph-sparkle" style="color:#ab47bc; font-size:20px; flex-shrink:0;"></i>
                    <div style="width:100%">
                        ${fallbackNotice}
                        <div style="font-size:12px; font-weight:700; color:#ab47bc; margin-bottom:8px; letter-spacing:0.3px">📌 ${foodName}</div>
                        ${cleanedHtml}
                        <div style="margin-top:15px; border-top:1px solid rgba(0,0,0,0.05); padding-top:10px">
                            <button class="btn-primary-small" onclick="window.addToDailyIntake('${kcal}', '${jsFoodName}')"
                                style="background:#ab47bc; border:none; width:100%; justify-content:center; color:white">
                                <i class="ph ph-plus-circle"></i> Günlüğüme Ekle (${kcal} kcal)
                            </button>
                        </div>
                    </div>
                </div>`;
        } else {
            responseTextEl.innerHTML = "Maalesef geçerli bir cevap oluşturulamadı.";
        }

    } catch (error) {
        loadingEl.classList.add('hidden');
        window.showManualFormOnError(text, error.message);
    }
};

// Service Worker
function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('sw.js')
            .then(() => console.log('Service Worker Registered'))
            .catch(err => console.log('SW Registration Failed', err));
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => init());
} else {
    init();
}
