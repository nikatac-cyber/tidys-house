/* ============================================================
   ★ このファイルがホームページの中身です（日本語をそのまま編集できます）★

   ■ 料金・サービス項目を変える → すぐ下の「servicesData」の中
       price: 6600  … 金額
       name: "エアコン高圧洗浄"  … サービス名
   ■ 文章・見出しを変える → その下のデザイン部分。変えたい日本語を
       GitHubの検索や Ctrl+F で探して書き換えてください。
   ■ 写真・YouTubeを変える → 「★」印のコメントを Ctrl+F で「★」で検索すると、
       差し替え場所（写真URL・YouTube URL）にすぐ飛べます。

   ■ 保存すると反映されます：
       GitHubでこのファイルを編集 →「Commit changes（保存）」→ 約1〜2分で公開サイトに自動反映。

   ■ 注意：日本語の“文字”だけ書き換えてください。
       記号（ " , : < > { } / ）や英語のclassName等は消さないこと。
       （消すと表示が崩れます。崩れたら元に戻すか、私に連絡を）
   ============================================================ */

const { useState, useEffect } = React;

// ▼▼▼ 重要：ここに Web3Forms のアクセスキーを貼り付けてください（取得手順は手順書参照） ▼▼▼
const WEB3FORMS_ACCESS_KEY = "13b8ec91-6e38-481d-a47b-510b4e15070e";
// ▲▲▲ 未設定のままだとフォーム送信は動きません（電話・LINEは利用可） ▲▲▲

// アイコン各種 (新配色 #1E86D4 に調和)
const CHECK_ICON = (
  <svg className="w-5 h-5 text-[#1E86D4] mr-2 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
  </svg>
);

const PHONE_ICON = (
  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const LINE_ICON = (
  <svg className="w-6 h-6 mr-2 fill-current" viewBox="0 0 24 24">
    <path d="M24 10.304c0-5.369-5.383-9.738-12-9.738-6.616 0-12 4.369-12 9.738 0 4.814 4.269 8.843 10.058 9.586.391.084.922.258 1.057.592.12.3.077.769.038 1.073l-.168 1.01c-.05.305-.245 1.196 1.053.652 1.3-.545 7.015-4.13 9.57-7.076 2.308-2.613 2.442-4.908 2.442-5.837zm-14.737 3.328h-1.636c-.237 0-.429-.193-.429-.43v-3.921c0-.237.192-.429.429-.429.237 0 .429.192.429.429v3.492h1.207c.237 0 .429.193.429.43 0 .236-.192.429-.429.429zm2.463-.43c0 .237-.192.43-.429.43s-.429-.193-.429-.43v-3.921c0-.237.192-.429.429-.429s.429.192.429.429v3.921zm4.492 0c0 .121-.047.23-.131.311a.417.417 0 01-.3-.119l-1.921-2.483v2.291c0 .237-.193.43-.43.43a.428.428 0 01-.429-.43v-3.921c0-.131.056-.244.148-.321a.426.426 0 01.32-.099c.101.01.193.059.261.137l1.902 2.463v-2.18c0-.237.193-.429.43-.429.237 0 .43.192.43.429v3.921zm2.934-1.223h-1.207v-.817h1.207c.237 0 .429-.193.429-.43 0-.236-.192-.429-.429-.429h-1.207v-.816h1.207c.237 0 .429-.193.429-.43 0-.237-.192-.429-.429-.429h-1.636c-.237 0-.429.192-.429.429v3.921c0 .237.192.43.429.43h1.636c.237 0 .429-.193.429-.43 0-.236-.192-.43-.429-.43z" />
  </svg>
);

// ============================================================
// ★写真の差し替えかた★  各サービスの写真は下の imageUrl: のURL/ファイル名です。
//   自分の写真に変える手順：①画像をGitHubにアップロード ②"./ファイル名.jpg" と書く
//   例）imageUrl: "./aircon.jpg"  ← aircon.jpg を新しい画像に差し替えれば写真も変わります
// ============================================================
const servicesData = [
  {
    id: "aircon",
    name: "エアコン高圧洗浄",
    price: 6600,
    unit: "1台",
    originalPrice: "12,000円〜20,000円",
    time: "約1時間",
    description: "高圧洗浄機を用いて、アルミフィンや送風ファンに潜むカビやホコリを細部まで丁寧に洗浄。アレルギー対策や冷暖房効率の復活により、電気代削減にもつながる納得のプロ仕様です。",
    features: ["細部まで行き届く高圧洗浄", "におい・カビの徹底的な洗浄", "冷暖房効率の良好な回復"],
    imageUrl: "./eakonn1.PNG",
    options: [
      { name: "お掃除機能付き", extraPrice: 6600 },
      { name: "防カビコーティング", extraPrice: 1500 }
    ]
  },
  {
    id: "rangehood",
    name: "レンジフード（換気扇）分解洗浄",
    price: 9900,
    unit: "1台",
    originalPrice: "約15,000円",
    time: "約1.5時間",
    description: "油汚れで目詰まりした内部ファンを分解。専用洗剤による温浴洗浄で頑固なギトギト油を丁寧に落とし、本来の吸気力を取り戻します。",
    features: ["内部シロッコファンの分解漬け置き", "頑固な油汚れの丁寧な除去", "フード・プロペラ全体の入念な拭き上げ"],
    imageUrl: "./29462174_m.jpg",
    options: []
  },
  {
    id: "bathroom",
    name: "浴室（お風呂場）クリーニング",
    price: 13200,
    unit: "1室",
    originalPrice: "約18,000円",
    time: "約2時間",
    description: "天井、壁、浴槽から鏡の水垢ウロコ落としまで、浴室全体を徹底清掃。蓄積した皮脂汚れやカビを、材質に合わせた専用洗剤で隅々まで丁寧に除去します。",
    features: ["天井から壁, 床, 浴槽まで丸ごと", "鏡の頑固なウロコ汚れへのアプローチ", "排水口・エプロン表面の除菌消臭"],
    imageUrl: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80",
    options: [
      { name: "エプロン内部 高圧洗浄", extraPrice: 6600 }
    ]
  },
  {
    id: "kitchen",
    name: "キッチンクリーニング",
    price: 9900,
    unit: "1箇所",
    originalPrice: "約15,000円",
    time: "約1.5時間",
    description: "ガスコンロやIHの頑固な焦げ付き、シンクの水垢・ヌメリ、天板から壁面までを丁寧に磨き上げ。毎日のお料理が楽しくなる清潔なキッチンへ仕上げします。",
    features: ["コンロ・IH天板の焦げ落とし", "シンク・蛇口の水垢除去と抗菌仕上げ", "前面壁・収納棚表面の拭き上げ"],
    imageUrl: "https://images.unsplash.com/photo-1556911220-115f74bbe041?auto=format&fit=crop&w=600&q=80",
    options: []
  },
  {
    id: "toilet",
    name: "トイレクリーニング",
    price: 6600,
    unit: "1室",
    originalPrice: "約9,000円",
    time: "約1時間",
    description: "便器の内側やフチ裏の頑固な尿石、黄ばみ、気になるニオイの原因にしっかりアプローチ。ウォシュレットノズルなどの細部まで丁寧に除菌洗浄します。",
    features: ["フチ裏の頑固な尿石・黄ばみの除去", "ウォシュレットノズル細部洗浄", "壁面・床面の丁寧な除菌拭き上げ"],
    imageUrl: "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&w=600&q=80",
    options: []
  },
  {
    id: "outdoor_unit",
    name: "室外機高圧洗浄（オプション）",
    price: 4400,
    unit: "1台",
    originalPrice: "約7,000円",
    time: "約30分",
    description: "室外機の熱交換器（アルミフィン）に詰まったホコリや泥汚れを高圧洗浄。エアコン本体への負荷を和らげ、さらなる省エネ・電気代カットにつながります。",
    features: ["熱交換器アルミフィンの目詰まり解消", "ファン周辺・カバーの洗浄", "故障予防と長寿命化の促進"],
    imageUrl: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=600&q=80",
    options: []
  }
];

function App() {
  const [activeTab, setActiveTab] = useState("all");
  const [estimateCart, setEstimateCart] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    tel: "",
    email: "",
    address: "",
    preferredDate: "",
    message: ""
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formValidationError, setFormValidationError] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [faqOpen, setFaqOpen] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // 料金カート操作
  const handleEstimateToggle = (serviceId, optionIndex = null) => {
    setEstimateCart(prev => {
      const current = { ...prev };
      if (optionIndex === null) {
        if (current[serviceId]) {
          delete current[serviceId];
        } else {
          current[serviceId] = { qty: 1, options: [] };
        }
      } else {
        if (!current[serviceId]) {
          current[serviceId] = { qty: 1, options: [optionIndex] };
        } else {
          const opts = current[serviceId].options;
          if (opts.includes(optionIndex)) {
            current[serviceId].options = opts.filter(i => i !== optionIndex);
          } else {
            current[serviceId].options = [...opts, optionIndex];
          }
        }
      }
      return current;
    });
  };

  const updateQuantity = (serviceId, delta) => {
    setEstimateCart(prev => {
      const current = { ...prev };
      if (!current[serviceId]) return prev;
      const nextQty = current[serviceId].qty + delta;
      if (nextQty <= 0) {
        delete current[serviceId];
      } else {
        current[serviceId].qty = nextQty;
      }
      return current;
    });
  };

  const calculateTotal = () => {
    let total = 0;
    Object.entries(estimateCart).forEach(([id, item]) => {
      const service = servicesData.find(s => s.id === id);
      if (service) {
        let itemCost = service.price;
        item.options.forEach(optIdx => {
          itemCost += service.options[optIdx].extraPrice;
        });
        total += itemCost * item.qty;
      }
    });
    return total;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormValidationError("");

    if (!formData.name || !formData.tel || !formData.email) {
      setFormValidationError("お名前、お電話番号、メールアドレスは必須入力項目です。ご入力をお願いいたします。");
      const element = document.getElementById("validation-error-anchor");
      if (element) element.scrollIntoView({ behavior: 'smooth' });
      return;
    }

    if (!WEB3FORMS_ACCESS_KEY || WEB3FORMS_ACCESS_KEY === "YOUR_ACCESS_KEY_HERE") {
      setFormValidationError("フォームの送信設定が未完了です。お手数ですが、お電話（050-6870-6753）またはLINEにてお問い合わせください。");
      const element = document.getElementById("validation-error-anchor");
      if (element) element.scrollIntoView({ behavior: 'smooth' });
      return;
    }

    setIsSubmitting(true);
    try {
      const payload = {
        access_key: WEB3FORMS_ACCESS_KEY,
        subject: "【HP見積り・お問い合わせ】" + formData.name + " 様",
        from_name: "おそうじ係ティディズハウス HP",
        "お名前": formData.name,
        "電話番号": formData.tel,
        "メールアドレス": formData.email,
        "ご住所": formData.address,
        "ご希望日時": formData.preferredDate,
        "ご相談内容": formData.message,
      };
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (data.success) {
        setFormSubmitted(true);
      } else {
        setFormValidationError("送信に失敗しました。時間をおいて再度お試しいただくか、お電話・LINEにてご連絡ください。");
        const element = document.getElementById("validation-error-anchor");
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }
    } catch (err) {
      setFormValidationError("通信エラーが発生しました。お手数ですが、お電話・LINEにてご連絡ください。");
      const element = document.getElementById("validation-error-anchor");
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleFaq = (idx) => {
    setFaqOpen(prev => ({ ...prev, [idx]: !prev[idx] }));
  };

  const getSelectedServicesString = () => {
    const items = Object.entries(estimateCart).map(([id, item]) => {
      const s = servicesData.find(x => x.id === id);
      const selectedOpts = item.options.map(oIdx => s.options[oIdx].name).join(', ');
      return `・${s.name} × ${item.qty}台/箇所 ${selectedOpts ? `(オプション: ${selectedOpts})` : ''}`;
    });
    return items.length > 0 ? items.join('\n') : "未選択（お問合せ時にご相談）";
  };

  // 見積り連動テキスト処理
  useEffect(() => {
    const total = calculateTotal();
    if (total > 0) {
      setFormData(prev => ({
        ...prev,
        message: `【自動計算されたお見積り内容】\n${getSelectedServicesString()}\n合計概算金額: ${total.toLocaleString()}円(税込)\n\n上記プランについて、正式な日程調整・確認を希望します。`
      }));
    }
  }, [estimateCart]);

  return (
    <div className="min-h-screen bg-[#EAF5FF] text-[#333333] font-gothic antialiased scroll-smooth">
      
      {/* 指定フォント＆スクロールバーカスタマイズ */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@400;500;700;800&family=Zen+Kaku+Gothic+New:wght@400;500;700;900&display=swap');
        .font-rounded {
          font-family: 'M PLUS Rounded 1c', sans-serif;
        }
        .font-gothic {
          font-family: 'Zen Kaku Gothic New', sans-serif;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(107, 201, 181, 0.05);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #1E86D4;
          border-radius: 10px;
        }
      `}</style>

      {/* ヘッダーエリア */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur shadow-sm border-b border-[#1E86D4]/20 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* ロゴマーク */}
          <a href="#" className="flex items-center shrink-0">
            <img src="./logo.png" alt="おそうじ係ティディズハウス" className="h-11 sm:h-14 w-auto" />
            <h1 className="sr-only">おそうじ係ティディズハウス</h1>
          </a>

          {/* PCナビゲーション */}
          <nav className="hidden lg:flex items-center gap-8 font-medium text-[#333333]/90 text-sm">
            <a href="#features" className="hover:text-[#1E86D4] transition-colors">私たちのこだわり</a>
            <a href="#services" className="hover:text-[#1E86D4] transition-colors">サービス・納得価格</a>
            <a href="#estimator" className="hover:text-[#1E86D4] transition-colors">簡単見積シミュレーター</a>
            <a href="#youtube" className="hover:text-[#1E86D4] transition-colors">作業動画</a>
            <a href="#flow" className="hover:text-[#1E86D4] transition-colors">ご利用の流れ</a>
            <a href="#faq" className="hover:text-[#1E86D4] transition-colors">よくあるご質問</a>
          </nav>

          {/* コンタクト（デスクトップ） */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="text-right">
              <p className="text-[10px] text-[#333333]/70 font-bold font-gothic">年中無休 9:00〜19:00</p>
              <a href="tel:050-6870-6753" className="text-base font-bold text-[#1E86D4] hover:text-[#1E86D4]/80 flex items-center transition-colors">
                {PHONE_ICON} 050-6870-6753
              </a>
            </div>
            <a href="#contact" className="bg-[#0E4C86] text-white font-bold px-5 py-2.5 rounded-xl hover:bg-[#0E4C86]/90 transition-all text-xs tracking-wider">
              WEBで簡単予約
            </a>
          </div>

          {/* モバイルメニューボタン */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="lg:hidden p-2 text-[#333333] hover:text-[#1E86D4] focus:outline-none"
            aria-label="メニュー開閉"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* モバイルメニュー引き出し */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-100 py-6 px-4 shadow-inner space-y-4">
            <a href="#features" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-[#0E4C86] font-semibold hover:text-[#1E86D4] border-b border-slate-50">私たちのこだわり</a>
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-[#0E4C86] font-semibold hover:text-[#1E86D4] border-b border-slate-50">サービス・納得価格</a>
            <a href="#estimator" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-[#0E4C86] font-semibold hover:text-[#1E86D4] border-b border-slate-50">簡単見積シミュレーター</a>
            <a href="#youtube" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-[#0E4C86] font-semibold hover:text-[#1E86D4] border-b border-slate-50">作業実況動画</a>
            <a href="#flow" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-[#0E4C86] font-semibold hover:text-[#1E86D4] border-b border-slate-50">ご利用の流れ</a>
            <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-[#0E4C86] font-semibold hover:text-[#1E86D4] border-b border-slate-50">よくあるご質問</a>
            
            <div className="pt-4 space-y-3">
              <a href="tel:050-6870-6753" className="flex items-center justify-center bg-slate-100 text-[#1E86D4] font-bold py-3 rounded-xl hover:bg-slate-200 transition-colors">
                {PHONE_ICON} 050-6870-6753
              </a>
              <a href="https://line.me/ti/p/%40877vzdtl" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center bg-[#25D366] text-white font-bold py-3 rounded-xl hover:opacity-95 transition-opacity">
                {LINE_ICON} LINEで問い合わせ
              </a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block text-center bg-[#0E4C86] text-white font-bold py-3 rounded-xl hover:bg-[#0E4C86]/90 transition-colors">
                WEB見積り・予約フォーム
              </a>
            </div>
          </div>
        )}
      </header>

      {/* メインヒーローエリア - ミントカラーと深ネイビーの調和 */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#EAF5FF] via-[#EAF5FF]/50 to-white pt-8 lg:pt-12 pb-24 lg:pb-32">
        <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 bg-[#1E86D4]/10 rounded-full blur-3xl opacity-80"></div>
        <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-96 h-96 bg-[#0E4C86]/5 rounded-full blur-3xl opacity-80"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            
            {/* 左側：コンテンツ文言 */}
            <div className="lg:col-span-7 text-center lg:text-left space-y-8">
              
              <div className="inline-flex items-center gap-2 bg-white border border-[#1E86D4]/40 text-[#1E86D4] font-bold text-xs sm:text-sm px-4 py-2.5 rounded-full shadow-sm">
                <span className="w-2.5 h-2.5 bg-[#1E86D4] rounded-full animate-ping"></span>
                東京・埼玉・千葉：チラシ配布エリアの出張交通費は一切頂きません
              </div>

              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#0E4C86] leading-tight tracking-tight font-rounded">
                ごまかしのない技術を、<br />
                心から安心できる<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1E86D4] to-[#0E4C86] relative pb-2 block sm:inline">
                  納得価格で。
                </span>
              </h2>

              <p className="text-[#333333] text-sm sm:text-base md:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                「他社で高額だったエアコン・水回り清掃を、もっと身近で納得できる価格にしたい。」<br />
                おそうじ係ティディズハウスは、<span className="font-bold">同一エリアへの集中訪問と徹底したルート最適化</span>により移動経費をカット。品質はプロの仕上がりそのままに、誰もが納得できる適正価格を実現しました。
              </p>

              {/* 特長バッジはご指示通り削除しました */}

              {/* CTAボタン群 */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                <a href="#estimator" className="bg-[#F5921E] hover:bg-[#F5921E]/90 text-white font-bold text-sm sm:text-base px-8 py-4.5 rounded-xl shadow-lg shadow-[#F5921E]/30 hover:-translate-y-0.5 active:translate-y-0 transition-all text-center font-rounded">
                  料金シミュレーターを試す
                </a>
                <a href="https://line.me/ti/p/%40877vzdtl" target="_blank" rel="noopener noreferrer" className="bg-white hover:bg-slate-50 text-[#0E4C86] border-2 border-[#0E4C86] font-bold text-sm sm:text-base px-8 py-4.5 rounded-xl shadow-sm hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-2 font-rounded">
                  {LINE_ICON} LINEで無料相談
                </a>
              </div>

              {/* 実績＆メリット表示 */}
              <div className="pt-6 flex flex-wrap items-center justify-center lg:justify-start gap-8 text-[#333333]/70 text-xs font-semibold">
                <div>
                  <span className="block text-2xl font-bold text-[#0E4C86] font-rounded">100%</span>
                  <span>自社スタッフ責任施工</span>
                </div>
                <div className="border-l border-slate-200 h-8 hidden sm:block"></div>
                <div>
                  <span className="block text-2xl font-bold text-[#0E4C86] font-rounded">無料</span>
                  <span>対象エリア内は出張費ゼロ</span>
                </div>
                <div className="border-l border-slate-200 h-8 hidden sm:block"></div>
                <div>
                  <span className="block text-2xl font-bold text-[#0E4C86] font-rounded">納得価格</span>
                  <span>エアコン高圧 1台6,600円〜</span>
                </div>
              </div>

            </div>

            {/* 右側：信頼性を高める手元の作業写真カード */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md bg-white rounded-3xl shadow-xl overflow-hidden border border-[#1E86D4]/20">
                <div className="relative h-72 bg-slate-950">
                  {/* ★メイン写真の差し替え：下の src の "..." を自分の画像URL（またはアップした "./xxx.jpg"）に変更★ */}
                  <img 
                    src="./aircon.jpg" 
                    alt="プロの手元の丁寧な作業風景" 
                    className="w-full h-full object-cover opacity-85 hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                  <div className="absolute bottom-5 left-5 right-5 text-white">
                    <span className="bg-[#1E86D4] text-[10px] font-bold px-2.5 py-1 rounded-full mb-2 inline-block font-rounded text-white">手元の徹底したこだわり</span>
                    <h3 className="text-base sm:text-lg font-bold font-rounded text-white">見えないカビや頑固な汚れも、細部まで丁寧に洗浄</h3>
                    <p className="text-[11px] text-slate-300">手作業による繊細な養生と徹底した高圧洗浄を行います</p>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <h4 className="font-bold text-[#0E4C86] text-xs sm:text-sm tracking-wider font-rounded">実際にご利用いただいたお客様の声</h4>
                  <div className="bg-[#EAF5FF] p-4 rounded-xl border border-[#1E86D4]/20 text-xs text-[#333333] leading-relaxed relative">
                    <p className="italic">「大手だと倍近い見積もりだったお掃除機能付きエアコン。ティディズハウスさんは本当に納得価格の13,200円（税込）ポッキリでした。汚れがどっさり取れ、仕事もすごく細やかで感動しました。」</p>
                    <span className="block text-right font-bold text-[#1E86D4] mt-3 font-rounded">— 埼玉県さいたま市 飯田様（30代主婦）</span>
                  </div>

                  <div className="flex items-center justify-between gap-2 pt-2 text-xs">
                    <span className="text-[#333333]/70 font-semibold">お急ぎの方はお電話で</span>
                    <a href="tel:050-6870-6753" className="text-base font-bold text-[#1E86D4] hover:underline flex items-center">
                      {PHONE_ICON} 050-6870-6753
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3つのこだわり */}
      <section id="features" className="py-24 bg-white border-t border-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-[#1E86D4] font-bold text-xs tracking-widest block font-rounded">OUR PHILOSOPHY</span>
            <h2 className="text-2xl sm:text-4xl font-bold text-[#0E4C86] font-rounded">ティディズハウスが選ばれ続ける3つの約束</h2>
            <div className="w-12 h-[2px] bg-[#1E86D4]/50 mx-auto mt-4"></div>
            <p className="text-[#333333]/80 text-xs sm:text-sm pt-2 leading-relaxed font-gothic">
              納得価格を可能にした明確な理由と、プロとして妥協しない品質保証をお届けします。
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            
            {/* Promise 1 */}
            <div className="bg-[#EAF5FF]/60 rounded-2xl p-8 border border-[#1E86D4]/20 hover:shadow-lg hover:shadow-[#1E86D4]/5 transition-all group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 shrink-0 bg-white text-[#1E86D4] border border-[#1E86D4]/30 rounded-xl flex items-center justify-center font-bold text-lg group-hover:bg-[#0E4C86] group-hover:text-white group-hover:border-transparent transition-all font-rounded">
                  01
                </div>
                <h3 className="text-lg font-bold text-[#0E4C86] font-rounded">無駄な経費を徹底カットした「納得価格」</h3>
              </div>
              <p className="text-[#333333] text-xs sm:text-sm leading-relaxed font-gothic">
                業界の標準価格を押し上げている「過剰な広告宣伝費」と「スタッフの移動コスト」を削減。同エリアでの集中訪問を行うことで効率化を図り、そのメリットをすべて「納得のいく適正価格」としてお客様に還元しています。
              </p>
            </div>

            {/* Promise 2 */}
            <div className="bg-[#EAF5FF]/60 rounded-2xl p-8 border border-[#1E86D4]/20 hover:shadow-lg hover:shadow-[#1E86D4]/5 transition-all group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 shrink-0 bg-white text-[#1E86D4] border border-[#1E86D4]/30 rounded-xl flex items-center justify-center font-bold text-lg group-hover:bg-[#0E4C86] group-hover:text-white group-hover:border-transparent transition-all font-rounded">
                  02
                </div>
                <h3 className="text-lg font-bold text-[#0E4C86] font-rounded">YouTube動画で作業の全行程を「完全公開」</h3>
              </div>
              <p className="text-[#333333] text-xs sm:text-sm leading-relaxed font-gothic">
                「家の中にスタッフを上げるのが心配」「本当にきれいにしているの？」そんな不安に全力で答えます。私たちはエアコン高圧洗浄や水回り清掃の実際の様子をノーカットでYouTubeにて公開中。事前にお仕事の丁寧さをご確認いただけます。
              </p>
            </div>

            {/* Promise 3 */}
            <div className="bg-[#EAF5FF]/60 rounded-2xl p-8 border border-[#1E86D4]/20 hover:shadow-lg hover:shadow-[#1E86D4]/5 transition-all group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 shrink-0 bg-white text-[#1E86D4] border border-[#1E86D4]/30 rounded-xl flex items-center justify-center font-bold text-lg group-hover:bg-[#0E4C86] group-hover:text-white group-hover:border-transparent transition-all font-rounded">
                  03
                </div>
                <h3 className="text-lg font-bold text-[#0E4C86] font-rounded">見積り後の「追加料金一切なし」の明朗会計</h3>
              </div>
              <p className="text-[#333333] text-xs sm:text-sm leading-relaxed font-gothic">
                提示された料金はすべて【消費税込み】。汚れが予想以上だったからといって、当日現地で追加請求を行うことは絶対にございません。強引な営業やオプションの押し売りも一切行いませんので、安心してお任せください。
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 納得プランリスト */}
      <section id="services" className="py-24 bg-[#EAF5FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <span className="text-[#1E86D4] font-bold text-xs tracking-widest block font-rounded">SERVICES & PRICES</span>
            <h2 className="text-2xl sm:text-4xl font-bold text-[#0E4C86] font-rounded">お掃除メニュー・納得料金プラン</h2>
            <div className="w-12 h-[2px] bg-[#1E86D4]/50 mx-auto mt-4"></div>
            <p className="text-[#333333]/80 text-xs sm:text-sm pt-2 leading-relaxed">
              業界他社の相場に比べ、明快で納得感のある価格設計に整えました。出張費無料、機材費等すべて込み。
            </p>
          </div>

          {/* 絞り込みタブ */}
          <div className="flex justify-center flex-wrap gap-2.5 mb-12">
            <button 
              onClick={() => setActiveTab("all")} 
              className={`px-6 py-2.5 rounded-full font-bold text-xs sm:text-sm transition-all border ${
                activeTab === 'all' 
                  ? 'bg-[#0E4C86] text-white border-transparent shadow-sm' 
                  : 'bg-white text-[#333333] hover:bg-[#EAF5FF] border-[#1E86D4]/30'
              }`}
            >
              すべてのサービス
            </button>
            <button 
              onClick={() => setActiveTab("aircon")} 
              className={`px-6 py-2.5 rounded-full font-bold text-xs sm:text-sm transition-all border ${
                activeTab === 'aircon' 
                  ? 'bg-[#0E4C86] text-white border-transparent shadow-sm' 
                  : 'bg-white text-[#333333] hover:bg-[#EAF5FF] border-[#1E86D4]/30'
              }`}
            >
              エアコン関連
            </button>
            <button 
              onClick={() => setActiveTab("water")} 
              className={`px-6 py-2.5 rounded-full font-bold text-xs sm:text-sm transition-all border ${
                activeTab === 'water' 
                  ? 'bg-[#0E4C86] text-white border-transparent shadow-sm' 
                  : 'bg-white text-[#333333] hover:bg-[#EAF5FF] border-[#1E86D4]/30'
              }`}
            >
              水回り（浴室・台所・トイレ）
            </button>
          </div>

          {/* サービスカードグリッド */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData
              .filter(service => {
                if (activeTab === "all") return true;
                if (activeTab === "aircon") return service.id === "aircon" || service.id === "outdoor_unit";
                if (activeTab === "water") return service.id === "bathroom" || service.id === "kitchen" || service.id === "toilet";
                return true;
              })
              .map((service) => {
                const isSelectedInCart = !!estimateCart[service.id];
                return (
                  <div key={service.id} className="bg-white rounded-2xl border border-[#1E86D4]/20 shadow-md hover:shadow-lg transition-all flex flex-col h-full relative overflow-hidden group">
                    
                    {/* ステータスリボン */}
                    <div className="absolute top-4 right-4 bg-[#1E86D4] text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm z-10 tracking-widest font-rounded">
                      安心の納得価格
                    </div>

                    {/* カバー画像 */}
                    <div className="h-56 bg-slate-100 overflow-hidden relative">
                      <img 
                        src={service.imageUrl} 
                        alt={service.name} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 text-white">
                        <span className="text-[10px] font-semibold text-white bg-[#0E4C86] px-2 py-0.5 rounded-md inline-block mb-1.5 font-rounded">目安時間：{service.time}</span>
                        <h3 className="text-lg font-bold font-rounded tracking-tight text-white">{service.name}</h3>
                      </div>
                    </div>

                    {/* カード内訳 */}
                    <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                      <div className="space-y-4">
                        
                        {/* 納得プライス表示 */}
                        <div className="bg-[#EAF5FF] rounded-xl p-4 flex items-center justify-between border border-[#1E86D4]/30">
                          <div>
                            <span className="text-[10px] text-slate-400 block font-gothic">一般他社相場：<del className="text-slate-400">{service.originalPrice}</del></span>
                            <span className="text-[#333333] font-bold text-xs font-gothic">手元の丁寧な職人品質</span>
                          </div>
                          <div className="text-right">
                            <span className="text-2xl font-bold text-[#0E4C86] font-rounded">{service.price.toLocaleString()}</span>
                            <span className="text-xs font-bold text-[#0E4C86] font-rounded">円</span>
                            <span className="text-[10px] text-[#333333]/70 block font-gothic">/ {service.unit}(税込)</span>
                          </div>
                        </div>

                        <p className="text-[#333333] text-xs sm:text-sm leading-relaxed font-gothic">
                          {service.description}
                        </p>

                        <ul className="space-y-1.5 pt-2">
                          {service.features.map((feature, i) => (
                            <li key={i} className="text-xs text-[#333333] flex items-start leading-relaxed font-gothic">
                              <span className="text-[#1E86D4] font-bold mr-1.5">◆</span> {feature}
                            </li>
                          ))}
                        </ul>

                        {/* オプションパネル */}
                        {service.options.length > 0 && (
                          <div className="pt-3.5 border-t border-slate-100">
                            <span className="text-xs font-bold text-[#0E4C86] block mb-1.5 font-rounded">選べる納得オプション：</span>
                            <div className="space-y-1">
                              {service.options.map((opt, i) => (
                                <div key={i} className="flex justify-between items-center text-xs text-[#333333]/70 bg-slate-50 p-1.5 rounded">
                                  <span>・{opt.name}</span>
                                  <span className="font-bold text-[#333333]">+{opt.extraPrice.toLocaleString()}円(税込)</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>

                      {/* 選択ボタン */}
                      <div className="pt-4 border-t border-slate-50">
                        <button
                          onClick={() => handleEstimateToggle(service.id)}
                          className={`w-full py-3 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 ${
                            isSelectedInCart 
                              ? 'bg-[#0E4C86] text-white hover:bg-[#0E4C86]/90 shadow-sm' 
                              : 'bg-slate-100 text-[#333333] hover:bg-slate-200'
                          }`}
                        >
                          {isSelectedInCart ? (
                            <>
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                              </svg>
                              見積りに選択中
                            </>
                          ) : (
                            "このお掃除を見積りに入れる"
                          )}
                        </button>
                      </div>

                    </div>
                  </div>
                );
              })}
          </div>

        </div>
      </section>

      {/* 簡単見積シミュレーター */}
      <section id="estimator" className="py-24 bg-gradient-to-tr from-[#1E86D4] to-[#0E4C86] text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 -ml-16 -mt-16 w-80 h-80 bg-white/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-0 right-0 -mr-16 -mb-16 w-80 h-80 bg-white/5 rounded-full blur-2xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
            <span className="bg-white/10 text-emerald-100 font-bold text-xs px-3.5 py-1 rounded-full tracking-widest inline-block font-rounded">WEB ESTIMATOR</span>
            <h2 className="text-2xl sm:text-4xl font-bold font-rounded">リアルタイム納得見積りシミュレーター</h2>
            <div className="w-12 h-[2px] bg-white/40 mx-auto mt-4"></div>
            <p className="text-emerald-50/85 text-xs sm:text-sm pt-2">
              ご希望の箇所をポチポチ選択するだけで、その場で納得のいく明快な概算見積りが算出されます。強引な追加や後からの押し売りは一切ございません。
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            
            {/* 左側：シミュレーター入力 */}
            <div className="lg:col-span-7 bg-white/10 backdrop-blur rounded-2xl p-6 sm:p-8 border border-white/10 space-y-6">
              <h3 className="text-base sm:text-lg font-bold border-b border-white/20 pb-3 font-rounded">① お掃除箇所とオプションをチェックする</h3>
              
              <div className="space-y-4 max-h-[440px] overflow-y-auto pr-2 custom-scrollbar">
                {servicesData.map((service) => {
                  const itemInCart = estimateCart[service.id];
                  return (
                    <div key={service.id} className={`p-4 rounded-xl transition-all border ${itemInCart ? 'bg-white/15 border-white/40' : 'bg-white/5 border-transparent hover:bg-white/10'}`}>
                      
                      <div className="flex items-center justify-between gap-4">
                        <label className="flex items-center cursor-pointer select-none">
                          <input 
                            type="checkbox" 
                            checked={!!itemInCart} 
                            onChange={() => handleEstimateToggle(service.id)}
                            className="w-5 h-5 rounded text-[#0E4C86] focus:ring-[#1E86D4] bg-white/20 border-white/30 mr-3.5 cursor-pointer"
                          />
                          <div>
                            <span className="font-bold text-xs sm:text-sm md:text-base block">{service.name}</span>
                            <span className="text-[11px] text-emerald-100 font-medium">納得価格：{service.price.toLocaleString()}円 / {service.unit}</span>
                          </div>
                        </label>

                        {/* 個数コントロール */}
                        {itemInCart && (
                          <div className="flex items-center bg-slate-900/60 rounded-lg overflow-hidden p-1 border border-white/10 shrink-0">
                            <button 
                              onClick={() => updateQuantity(service.id, -1)} 
                              className="px-2.5 py-1 text-xs hover:bg-white/10 rounded font-bold"
                            >
                              −
                            </button>
                            <span className="px-3 font-bold text-xs sm:text-sm">{itemInCart.qty}</span>
                            <button 
                              onClick={() => updateQuantity(service.id, 1)} 
                              className="px-2.5 py-1 text-xs hover:bg-white/10 rounded font-bold"
                            >
                              ＋
                            </button>
                          </div>
                        )}
                      </div>

                      {/* オプション選択サブパネル */}
                      {itemInCart && service.options.length > 0 && (
                        <div className="mt-3.5 pl-8 pt-3 border-t border-white/10 space-y-2">
                          <p className="text-[11px] text-emerald-100 font-bold">追加オプション：</p>
                          {service.options.map((opt, optIdx) => {
                            const isOptChecked = itemInCart.options.includes(optIdx);
                            return (
                              <label key={optIdx} className="flex items-center justify-between bg-white/5 hover:bg-white/10 p-2 rounded-lg cursor-pointer text-xs">
                                <div className="flex items-center">
                                  <input 
                                    type="checkbox" 
                                    checked={isOptChecked} 
                                    onChange={() => handleEstimateToggle(service.id, optIdx)}
                                    className="w-4 h-4 rounded text-[#1E86D4] bg-white/20 mr-2"
                                  />
                                  <span>{opt.name}</span>
                                </div>
                                <span className="font-bold text-[#FAF7F2]">+{opt.extraPrice.toLocaleString()}円</span>
                              </label>
                            );
                          })}
                        </div>
                      )}

                    </div>
                  );
                })}
              </div>
            </div>

            {/* 右側：合計金額カード */}
            <div className="lg:col-span-5 bg-white text-[#333333] rounded-2xl p-6 sm:p-8 shadow-2xl space-y-6">
              <div className="border-b border-slate-100 pb-4">
                <h3 className="text-base sm:text-lg font-bold text-[#0E4C86] font-rounded">② 納得お見積り金額合計</h3>
                <p className="text-xs text-slate-400 mt-1">選んだメニューの明朗な内訳です（税込）</p>
              </div>

              {/* 選択中の簡易内訳リスト */}
              <div className="space-y-3 min-h-[160px]">
                {Object.keys(estimateCart).length === 0 ? (
                  <div className="flex flex-col items-center justify-center py-10 text-slate-400 text-xs sm:text-sm text-center">
                    <svg className="w-10 h-10 mb-2.5 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span>お掃除項目を選択すると、<br />こちらにリアルタイムで反映されます。</span>
                  </div>
                ) : (
                  Object.entries(estimateCart).map(([id, item]) => {
                    const s = servicesData.find(x => x.id === id);
                    if (!s) return null;
                    let baseTotal = s.price;
                    const selectedOpts = item.options.map(optIdx => {
                      baseTotal += s.options[optIdx].extraPrice;
                      return s.options[optIdx].name;
                    });
                    const rowTotal = baseTotal * item.qty;

                    return (
                      <div key={id} className="flex justify-between items-start text-xs border-b border-slate-100 pb-2.5">
                        <div className="space-y-0.5">
                          <span className="font-bold text-[#0E4C86]">{s.name} × {item.qty}</span>
                          {selectedOpts.length > 0 && (
                            <span className="block text-slate-400 text-[9px]">オプション：{selectedOpts.join(', ')}</span>
                          )}
                        </div>
                        <span className="font-bold text-[#0E4C86]">{rowTotal.toLocaleString()}円</span>
                      </div>
                    );
                  })
                )}
              </div>

              {/* 合計表示 */}
              <div className="bg-[#EAF5FF] rounded-xl p-4 border border-[#1E86D4]/40 space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-bold text-[#333333]/70">お掃除の合計箇所数</span>
                  <span className="font-extrabold text-[#0E4C86]">
                    {Object.values(estimateCart).reduce((acc, cur) => acc + cur.qty, 0)} 箇所
                  </span>
                </div>
                <div className="flex justify-between items-end pt-3 border-t border-slate-200">
                  <span className="text-xs sm:text-sm font-bold text-[#0E4C86] font-rounded">納得見積金額合計</span>
                  <div className="text-right">
                    <span className="text-3xl font-extrabold text-[#0E4C86] font-rounded">{calculateTotal().toLocaleString()}</span>
                    <span className="text-xs font-bold text-[#0E4C86] ml-1">円</span>
                  </div>
                </div>
              </div>

              {/* 送信確認ページへ誘導 */}
              <div className="text-center">
                <p className="text-[10px] text-slate-400 mb-4 font-gothic">※出張交通費は対象エリア内無料。事前見積もり以外の追加請求は一切発生いたしません。</p>
                <a 
                  href="#contact" 
                  className={`w-full block text-center py-4 rounded-xl font-bold text-xs sm:text-sm tracking-wider transition-all shadow-md ${
                    Object.keys(estimateCart).length > 0 
                      ? 'bg-[#0E4C86] text-white hover:bg-[#0E4C86]/90 shadow-[#F5921E]/30 cursor-pointer' 
                      : 'bg-slate-100 text-slate-400 cursor-not-allowed'
                  }`}
                  onClick={(e) => {
                    if (Object.keys(estimateCart).length === 0) {
                      e.preventDefault();
                    }
                  }}
                >
                  このシミュレーション結果で予約相談へ進む
                </a>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* YouTube動画公開セクション */}
      <section id="youtube" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            
            {/* コピーライトテキスト */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-[#1E86D4] font-bold text-xs tracking-widest block uppercase font-rounded">TRUST & VISIBILITY</span>
              <h2 className="text-2xl sm:text-4xl font-bold text-[#0E4C86] leading-tight font-rounded">
                全お掃除作業の様子を<br />
                YouTubeで余さず配信
              </h2>
              <div className="w-12 h-[2px] bg-[#1E86D4]"></div>
              
              <p className="text-[#333333]/90 text-xs sm:text-sm leading-relaxed font-gothic">
                おそうじ係ティディズハウスでは、スタッフによるエアコン洗浄の具体的な手順や、水回り洗浄の一部始終をYouTubeチャンネルにてすべてオープンにしております。
              </p>
              <p className="text-[#333333]/90 text-xs sm:text-sm leading-relaxed font-gothic">
                「誰が来て、どのように作業しているか」を事前にお客さま自身の目で確認できるからこそ、初めのお申し込みでも余計な心配なく、心から安心してご依頼いただけます。
              </p>

              <div className="p-4 bg-[#EAF5FF] rounded-xl border border-[#1E86D4]/30 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-red-600 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.507a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.87.507 9.388.507 9.388.507s7.518 0 9.388-.507a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </div>
                <div>
                  <span className="block font-bold text-[#0E4C86] text-xs sm:text-sm font-rounded">公式おそうじ実況チャンネル</span>
                  <p className="text-[10px] text-slate-400 mt-0.5 font-gothic">熟練スタッフの手元のこだわり、高圧洗浄の威力を公開中！</p>
                </div>
              </div>
            </div>

            {/* モック動画プレビュー */}
            <div className="lg:col-span-7">
              <div className="relative aspect-video w-full bg-slate-900 rounded-2xl shadow-xl overflow-hidden group border border-[#1E86D4]/30">
                {/* ★YouTubeサムネ画像の差し替え：下の src を変更★ */}
                <img 
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1000&q=80" 
                  alt="YouTube作業実況サムネイル" 
                  className="w-full h-full object-cover opacity-80 group-hover:scale-103 transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-black/45 group-hover:bg-black/35 transition-colors"></div>

                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-red-600 rounded-full flex items-center justify-center shadow-xl hover:bg-red-700 active:scale-95 transition-all duration-300">
                    <svg className="w-8 h-8 text-white fill-current ml-1" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <span className="mt-4 font-bold text-xs sm:text-sm tracking-widest block drop-shadow-md font-rounded">
                    クリックしてYouTubeで実際の作業をチェック
                  </span>
                  <span className="text-[10px] text-slate-300 drop-shadow mt-1 font-gothic">※外部のYouTube公式サイトが開きます</span>
                </div>

                <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-white drop-shadow">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-[#1E86D4] flex items-center justify-center font-bold text-[10px] text-white">T</div>
                    <span className="font-bold text-[11px] sm:text-xs font-rounded">【実演】プロが解説する！エアコン分解・高圧洗浄の一部公開</span>
                  </div>
                </div>

                {/* ★YouTube動画のリンク差し替え：下の href を自分のYouTube動画/チャンネルURLに変更★ */}
                <a 
                  href="https://youtu.be/tJy0Homq8yk" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="absolute inset-0 z-20 cursor-pointer"
                  aria-label="公式YouTubeリンク"
                ></a>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ご利用の流れ */}
      <section id="flow" className="py-24 bg-[#EAF5FF] border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <span className="text-[#1E86D4] font-bold text-xs tracking-widest block font-rounded">ORDER FLOW</span>
            <h2 className="text-2xl sm:text-4xl font-bold text-[#0E4C86] font-rounded">お申込みからサービス提供までの流れ</h2>
            <div className="w-12 h-[2px] bg-[#1E86D4]/50 mx-auto mt-4"></div>
            <p className="text-[#333333]/80 text-xs sm:text-sm pt-2 leading-relaxed">
              お客さまの手を煩わせない、大変シンプルでスムーズなやりとりを心掛けております。
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-12 md:gap-8 pt-4">
            
            {/* Step 1 */}
            <div className="bg-white rounded-2xl p-6 pt-10 shadow-sm border border-[#1E86D4]/20 flex flex-col justify-between relative">
              <div className="absolute top-0 left-6 -translate-y-1/2 bg-[#1E86D4] text-white font-bold px-3.5 py-1.5 rounded-full text-xs font-rounded shadow-md tracking-wider">
                STEP 01
              </div>
              <div className="space-y-3">
                <h3 className="font-bold text-base text-[#0E4C86] font-rounded">お問い合わせ・見積依頼</h3>
                <p className="text-xs text-[#333333]/90 leading-relaxed font-gothic">
                  本サイトのシミュレーター、またはお電話（050-6870-6753）、公式LINEからご希望メニューをご連絡ください。
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-50 text-[10px] text-[#1E86D4] font-bold font-rounded">
                ※もちろんお見積もりは100%無料です
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-2xl p-6 pt-10 shadow-sm border border-[#1E86D4]/20 flex flex-col justify-between relative">
              <div className="absolute top-0 left-6 -translate-y-1/2 bg-[#1E86D4] text-white font-bold px-3.5 py-1.5 rounded-full text-xs font-rounded shadow-md tracking-wider">
                STEP 02
              </div>
              <div className="space-y-3">
                <h3 className="font-bold text-base text-[#0E4C86] font-rounded">日程の調整＆料金の確定</h3>
                <p className="text-xs text-[#333333]/90 leading-relaxed font-gothic">
                  担当者よりご希望日時をうかがい、訪問プランを調整。事前のお見積もりで最終的な「ご納得料金」を事前に明示します。
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-50 text-[10px] text-[#1E86D4] font-bold font-rounded">
                ※ご都合に応じた日時変更も柔軟に対応
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-2xl p-6 pt-10 shadow-sm border border-[#1E86D4]/20 flex flex-col justify-between relative">
              <div className="absolute top-0 left-6 -translate-y-1/2 bg-[#1E86D4] text-white font-bold px-3.5 py-1.5 rounded-full text-xs font-rounded shadow-md tracking-wider">
                STEP 03
              </div>
              <div className="space-y-3">
                <h3 className="font-bold text-base text-[#0E4C86] font-rounded">プロによる入念なお掃除</h3>
                <p className="text-xs text-[#333333]/90 leading-relaxed font-gothic">
                  確定した日時に専門スタッフが機材を持参し訪問。作業箇所の周囲を厳重に保護した上で、丁寧にクリーニングを実行します。
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-50 text-[10px] text-[#1E86D4] font-bold font-rounded">
                ※汚れが落ちていく工程を一緒に確認可能
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-white rounded-2xl p-6 pt-10 shadow-sm border border-[#1E86D4]/20 flex flex-col justify-between relative">
              <div className="absolute top-0 left-6 -translate-y-1/2 bg-[#1E86D4] text-white font-bold px-3.5 py-1.5 rounded-full text-xs font-rounded shadow-md tracking-wider">
                STEP 04
              </div>
              <div className="space-y-3">
                <h3 className="font-bold text-base text-[#0E4C86] font-rounded">完了確認と納得お支払い</h3>
                <p className="text-xs text-[#333333]/90 leading-relaxed font-gothic">
                  クリーニング終了後、お客様に仕上がりをしっかりとご確認いただきます。ご満足いただいた後にのみ決済となります。
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-50 text-[10px] text-[#1E86D4] font-bold font-rounded">
                ※不当な追加費用の発生などは一切なし
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* よくある質問 */}
      <section id="faq" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-3 mb-16">
            <span className="text-[#1E86D4] font-bold text-xs tracking-widest block font-rounded">FREQUENT QUESTIONS</span>
            <h2 className="text-2xl sm:text-4xl font-bold text-[#0E4C86] font-rounded">おそうじに関するよくあるご質問</h2>
            <div className="w-12 h-[2px] bg-[#1E86D4]/50 mx-auto mt-4"></div>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "なぜここまで「納得価格」で上質なサービスができるのですか？",
                a: "特定の市区町村に絞った集中訪問ルート営業を組み、無駄な広告費を徹底して抑えることで、サービスの質を落とすことなく納得の適正価格を実現しています。もちろん使用する洗剤、高圧洗浄の機材、スタッフの技術すべて自社責任のプロ仕様です。"
              },
              {
                q: "出張対応可能エリアはどこですか？本当に出張交通費の請求はありませんか？",
                a: "東京都、埼玉県、千葉県全域およびその近辺に対応しております。事前お見積もり以外の出張交通費等は一切頂いておりません。ご自宅に駐車スペースがない場合、近隣のコインパーキングを利用いたします。その際の駐車場代（実費）も当社が負担いたしますのでご安心ください。"
              },
              {
                q: "エアコンがお掃除機能付きかわからないのですが、対応できますか？",
                a: "はい、もちろん対応可能です。リモコンに「おそうじ」「フィルター清掃」などのボタンがある、またはエアコン本体のダストボックスなどの有無で判定できます。お申し込み時に型番等をお知らせいただければ、こちらで事前にお調べすることも可能です。"
              },
              {
                q: "当日作業開始までに何か自分で動かしたり、準備するものはありますか？",
                a: "エアコン高圧洗浄の場合、真下に脚立を立てて精密な養生を行います。エアコン下のベッド、テレビ、デスクや大切な小物がもしございましたら、事前に移動しておいていただけますと作業がスムーズに開始できます。また、パーツ洗浄のため浴室や水洗をお借りすることがございます。"
              },
              {
                q: "汚れがかなり激しいのですが、追加の対応料は発生しますか？",
                a: "どれほど汚れが蓄積していても、最初のお見積金額から追加されることは一切ございません。プロ仕様の洗剤・機材を駆使し、驚くほどきれいに分解洗浄いたします。カビや油汚れを諦めてしまう前に、ぜひご相談ください。"
              }
            ].map((item, idx) => {
              const isOpen = !!faqOpen[idx];
              return (
                <div key={idx} className="bg-[#EAF5FF]/60 rounded-xl border border-[#1E86D4]/20 overflow-hidden transition-all duration-300">
                  <button 
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left p-5 flex justify-between items-center font-bold text-[#0E4C86] hover:bg-[#EAF5FF] transition-colors focus:outline-none"
                  >
                    <span className="pr-4 text-xs sm:text-sm md:text-base flex items-start">
                      <span className="text-[#1E86D4] mr-2.5 font-bold font-rounded">Q.</span>
                      {item.q}
                    </span>
                    <svg className={`w-5 h-5 text-slate-400 transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {isOpen && (
                    <div className="p-5 bg-white border-t border-[#1E86D4]/20 text-xs sm:text-sm text-[#333333] leading-relaxed flex items-start transition-all">
                      <span className="text-[#1E86D4] mr-2.5 font-bold font-rounded">A.</span>
                      <div>{item.a}</div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* お問い合わせフォーム */}
      <section id="contact" className="py-24 bg-[#EAF5FF] border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div id="validation-error-anchor"></div>

          <div className="bg-white rounded-3xl shadow-xl border border-[#1E86D4]/20 overflow-hidden">
            
            <div className="bg-[#0E4C86] p-8 sm:p-10 text-white text-center space-y-2.5">
              <span className="bg-white/10 text-emerald-100 text-xs font-bold px-3.5 py-1 rounded-full tracking-widest inline-block uppercase font-rounded">CONTACT FORM</span>
              <h2 className="text-2xl sm:text-3xl font-bold font-rounded text-white">無料お見積り・お問い合わせ</h2>
              <p className="text-xs sm:text-sm text-emerald-50/85 max-w-xl mx-auto leading-relaxed">
                以下のフォームにご入力ください。いただいた内容をもとに、担当者より1営業日以内に丁寧にご連絡いたします。
              </p>
            </div>

            <div className="p-6 sm:p-10">
              
              {/* 入力チェックエラー表示エリア */}
              {formValidationError && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm rounded-xl flex items-start gap-2.5 font-gothic">
                  <svg className="w-5 h-5 text-red-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="font-bold font-rounded">入力内容をご確認ください</p>
                    <p className="mt-1">{formValidationError}</p>
                  </div>
                </div>
              )}

              {formSubmitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 bg-[#EAF5FF] text-[#1E86D4] border border-[#1E86D4]/30 rounded-full flex items-center justify-center mx-auto shadow-sm">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-[#0E4C86] font-rounded">お申込み相談を送信完了いたしました</h3>
                  <p className="text-xs sm:text-sm text-[#333333]/70 max-w-md mx-auto leading-relaxed">
                    お問合せいただきありがとうございます。ご入力されたメールアドレス宛に自動お控えをお送りいたしました。担当者より迅速にご提案とスケジュール確認を行います。
                  </p>
                  <button 
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({
                        name: "",
                        tel: "",
                        email: "",
                        address: "",
                        preferredDate: "",
                        message: ""
                      });
                      setEstimateCart({});
                    }}
                    className="mt-6 inline-block bg-[#EAF5FF] hover:bg-slate-200 text-[#0E4C86] border border-[#1E86D4]/20 font-bold px-6 py-3 rounded-lg text-xs tracking-wider transition-all font-rounded"
                  >
                    新しい見積もりを作成する
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-[#0E4C86] mb-2 font-rounded">
                        お名前 <span className="text-red-500 font-bold">*</span>
                      </label>
                      <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="例）山田 太郎"
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#1E86D4] focus:border-transparent text-xs sm:text-sm text-[#333333]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#0E4C86] mb-2 font-rounded">
                        お電話番号 <span className="text-red-500 font-bold">*</span>
                      </label>
                      <input 
                        type="tel" 
                        name="tel"
                        value={formData.tel}
                        onChange={handleInputChange}
                        required
                        placeholder="例）090-1234-5678"
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#1E86D4] focus:border-transparent text-xs sm:text-sm text-[#333333]"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-[#0E4C86] mb-2 font-rounded">
                        メールアドレス <span className="text-red-500 font-bold">*</span>
                      </label>
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="例）info@example.com"
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#1E86D4] focus:border-transparent text-xs sm:text-sm text-[#333333]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#0E4C86] mb-2 font-rounded">
                        ご希望の訪問スケジュール
                      </label>
                      <input 
                        type="text" 
                        name="preferredDate"
                        value={formData.preferredDate}
                        onChange={handleInputChange}
                        placeholder="例）11月23日(土) 午前枠希望"
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#1E86D4] focus:border-transparent text-xs sm:text-sm text-[#333333]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#0E4C86] mb-2 font-rounded">
                      ご住所 (市区町村まででも可能です)
                    </label>
                    <input 
                      type="text" 
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      placeholder="例）東京都足立区〇〇 1-2-3"
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#1E86D4] focus:border-transparent text-xs sm:text-sm text-[#333333]"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label className="block text-xs font-bold text-[#0E4C86] font-rounded">
                        ご相談内容・ご要望
                      </label>
                      {calculateTotal() > 0 && (
                        <span className="text-[10px] bg-[#EAF5FF] text-[#1E86D4] font-bold px-2.5 py-0.5 rounded-full border border-[#1E86D4]/30 font-rounded">
                          納得見積シミュレーション結果を反映済
                        </span>
                      )}
                    </div>
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="6"
                      placeholder="エアコンフィルターお掃除付きが2台。他、お悩みやお聞きしたい点がございましたら自由にご記入ください。"
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#1E86D4] focus:border-transparent text-xs sm:text-sm font-mono leading-relaxed text-[#333333]"
                    ></textarea>
                  </div>

                  <div className="pt-4 text-center">
                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-[#F5921E] hover:bg-[#F5921E]/90 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold text-sm sm:text-base px-10 py-4.5 rounded-xl shadow-lg shadow-[#F5921E]/30 transition-all w-full sm:w-auto tracking-widest font-rounded"
                    >
                      {isSubmitting ? "送信中..." : "お見積り・お問い合わせを送信する"}
                    </button>
                    <p className="text-[10px] text-slate-400 mt-3 font-gothic">※お客様の個人情報はSSL通信により厳重に保護・管理されます。</p>
                  </div>

                </form>
              )}

            </div>

          </div>

        </div>
      </section>

      {/* フッターエリア */}
      <footer className="bg-[#0E4C86] text-slate-300 py-16 border-t border-[#0E4C86]/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid md:grid-cols-12 gap-12 items-start border-b border-slate-800 pb-12">
            
            {/* ブランド紹介 */}
            <div className="md:col-span-5 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#1E86D4] rounded-xl flex items-center justify-center text-white font-bold font-rounded text-lg">
                  T
                </div>
                <div>
                  <h3 className="text-white font-bold text-base font-rounded">おそうじ係ティディズハウス</h3>
                  <p className="text-[10px] text-slate-400 font-medium">ティディズお掃除予約窓口</p>
                </div>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-gothic">
                東京・埼玉・千葉を中心に、一斉集中効率化ルートによる「本当に納得できる安心価格」でお掃除サービスを提供。技術の透明性にこだわり、全クリーニング工程を動画でオープンにしています。
              </p>
            </div>

            {/* 各種メニュー */}
            <div className="md:col-span-3 space-y-3.5">
              <h4 className="text-white font-bold text-sm font-rounded">お掃除メニュー</h4>
              <ul className="text-xs space-y-2.5 font-gothic">
                <li><a href="#services" className="hover:text-[#1E86D4] transition-colors">・エアコン高圧クリーニング</a></li>
                <li><a href="#services" className="hover:text-[#1E86D4] transition-colors">・換気扇・レンジフード洗浄</a></li>
                <li><a href="#services" className="hover:text-[#1E86D4] transition-colors">・お風呂・浴室クリンリネス</a></li>
                <li><a href="#services" className="hover:text-[#1E86D4] transition-colors">・キッチン・ガスレンジ清掃</a></li>
                <li><a href="#services" className="hover:text-[#1E86D4] transition-colors">・トイレ・尿石除菌分解クリーニング</a></li>
              </ul>
            </div>

            {/* 連絡先情報 */}
            <div className="md:col-span-4 space-y-3.5">
              <h4 className="text-white font-bold text-sm font-rounded">おそうじ受付予約センター</h4>
              <p className="text-xs text-slate-300 leading-relaxed font-gothic">
                おそうじ係ティディズハウス 本部窓口<br />
                対応可能エリア：東京都・埼玉県・千葉県<br />
                受付可能時間：9:00〜19:00 (土日・祝日も年中無休)<br />
                電話番号：<a href="tel:050-6870-6753" className="text-[#1E86D4] font-bold hover:underline">050-6870-6753</a><br />
                LINE ID：@877vzdtl
              </p>
            </div>

          </div>

          <div className="pt-8 text-[10px] text-slate-400 leading-relaxed space-y-2.5 font-gothic">
            <p className="font-bold text-slate-300 font-rounded">【個人情報の保護について】</p>
            <p>
              当社が運営する本ウェブサイトにおけるお申込み・ご相談フォームで入力されたお客様の個人情報（お名前、メールアドレス、ご住所、電話番号など）は、適切なマッチングおよびクリーニングサービスの手配、ご連絡以外の目的には絶対に流用いたしません。法令を遵守し、セキュアに管理・破棄しております。
            </p>
            <p className="text-center pt-8 text-slate-500 font-rounded">&copy; {new Date().getFullYear()} おそうじ係ティディズハウス. All Rights Reserved.</p>
          </div>

        </div>
      </footer>

      {/* スマホ画面固定CTAバー */}
      <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white/95 backdrop-blur border-t border-slate-100 py-3.5 px-4 shadow-2xl flex gap-3 items-center justify-between font-gothic">
        <a 
          href="tel:050-6870-6753" 
          className="flex-1 bg-slate-100 text-[#0E4C86] font-bold text-xs py-3 px-2 rounded-xl text-center flex items-center justify-center gap-1 hover:bg-slate-200 transition-colors"
        >
          {PHONE_ICON} 電話
        </a>
        <a 
          href="https://line.me/ti/p/%40877vzdtl" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex-1 bg-[#25D366] text-white font-bold text-xs py-3 px-2 rounded-xl text-center flex items-center justify-center gap-1"
        >
          {LINE_ICON} LINE相談
        </a>
        <a 
          href="#estimator" 
          className="flex-1 bg-[#0E4C86] text-white font-bold text-xs py-3 px-2 rounded-xl text-center block font-rounded"
        >
          見積り・簡単WEB予約
        </a>
      </div>

    </div>
  );
}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);
