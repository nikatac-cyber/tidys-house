(() => {
  const { useState, useEffect } = React;
  const WEB3FORMS_ACCESS_KEY = "13b8ec91-6e38-481d-a47b-510b4e15070e";
  const PHONE_ICON = /* @__PURE__ */ React.createElement("svg", { className: "w-5 h-5 mr-2", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24" }, /* @__PURE__ */ React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" }));
  const LINE_ICON = /* @__PURE__ */ React.createElement("svg", { className: "w-6 h-6 mr-2 fill-current", viewBox: "0 0 24 24" }, /* @__PURE__ */ React.createElement("path", { d: "M24 10.304c0-5.369-5.383-9.738-12-9.738-6.616 0-12 4.369-12 9.738 0 4.814 4.269 8.843 10.058 9.586.391.084.922.258 1.057.592.12.3.077.769.038 1.073l-.168 1.01c-.05.305-.245 1.196 1.053.652 1.3-.545 7.015-4.13 9.57-7.076 2.308-2.613 2.442-4.908 2.442-5.837zm-14.737 3.328h-1.636c-.237 0-.429-.193-.429-.43v-3.921c0-.237.192-.429.429-.429.237 0 .429.192.429.429v3.492h1.207c.237 0 .429.193.429.43 0 .236-.192.429-.429.429zm2.463-.43c0 .237-.192.43-.429.43s-.429-.193-.429-.43v-3.921c0-.237.192-.429.429-.429s.429.192.429.429v3.921zm4.492 0c0 .121-.047.23-.131.311a.417.417 0 01-.3-.119l-1.921-2.483v2.291c0 .237-.193.43-.43.43a.428.428 0 01-.429-.43v-3.921c0-.131.056-.244.148-.321a.426.426 0 01.32-.099c.101.01.193.059.261.137l1.902 2.463v-2.18c0-.237.193-.429.43-.429.237 0 .43.192.43.429v3.921zm2.934-1.223h-1.207v-.817h1.207c.237 0 .429-.193.429-.43 0-.236-.192-.429-.429-.429h-1.207v-.816h1.207c.237 0 .429-.193.429-.43 0-.237-.192-.429-.429-.429h-1.636c-.237 0-.429.192-.429.429v3.921c0 .237.192.43.429.43h1.636c.237 0 .429-.193.429-.43 0-.236-.192-.43-.429-.43z" }));
  const servicesData = [
    {
      id: "aircon",
      name: "\u30A8\u30A2\u30B3\u30F3\u9AD8\u5727\u6D17\u6D44",
      price: 6600,
      unit: "1\u53F0",
      originalPrice: "12,000\u5186\u301C20,000\u5186",
      time: "\u7D041\u6642\u9593",
      description: "\u9AD8\u5727\u6D17\u6D44\u6A5F\u3092\u7528\u3044\u3066\u3001\u30A2\u30EB\u30DF\u30D5\u30A3\u30F3\u3084\u9001\u98A8\u30D5\u30A1\u30F3\u306B\u6F5C\u3080\u30AB\u30D3\u3084\u30DB\u30B3\u30EA\u3092\u7D30\u90E8\u307E\u3067\u4E01\u5BE7\u306B\u6D17\u6D44\u3002\u30A2\u30EC\u30EB\u30AE\u30FC\u5BFE\u7B56\u3084\u51B7\u6696\u623F\u52B9\u7387\u306E\u5FA9\u6D3B\u306B\u3088\u308A\u3001\u96FB\u6C17\u4EE3\u524A\u6E1B\u306B\u3082\u3064\u306A\u304C\u308B\u7D0D\u5F97\u306E\u30D7\u30ED\u4ED5\u69D8\u3067\u3059\u3002",
      features: ["\u7D30\u90E8\u307E\u3067\u884C\u304D\u5C4A\u304F\u9AD8\u5727\u6D17\u6D44", "\u306B\u304A\u3044\u30FB\u30AB\u30D3\u306E\u5FB9\u5E95\u7684\u306A\u6D17\u6D44", "\u51B7\u6696\u623F\u52B9\u7387\u306E\u826F\u597D\u306A\u56DE\u5FA9"],
      imageUrl: "./aircon.jpg",
      options: [
        { name: "\u304A\u6383\u9664\u6A5F\u80FD\u4ED8\u304D", extraPrice: 6600 },
        { name: "\u9632\u30AB\u30D3\u30B3\u30FC\u30C6\u30A3\u30F3\u30B0", extraPrice: 1500 }
      ]
    },
    {
      id: "rangehood",
      name: "\u30EC\u30F3\u30B8\u30D5\u30FC\u30C9\uFF08\u63DB\u6C17\u6247\uFF09\u5206\u89E3\u6D17\u6D44",
      price: 9900,
      unit: "1\u53F0",
      originalPrice: "\u7D0415,000\u5186",
      time: "\u7D041.5\u6642\u9593",
      description: "\u6CB9\u6C5A\u308C\u3067\u76EE\u8A70\u307E\u308A\u3057\u305F\u5185\u90E8\u30D5\u30A1\u30F3\u3092\u5206\u89E3\u3002\u5C02\u7528\u6D17\u5264\u306B\u3088\u308B\u6E29\u6D74\u6D17\u6D44\u3067\u9811\u56FA\u306A\u30AE\u30C8\u30AE\u30C8\u6CB9\u3092\u4E01\u5BE7\u306B\u843D\u3068\u3057\u3001\u672C\u6765\u306E\u5438\u6C17\u529B\u3092\u53D6\u308A\u623B\u3057\u307E\u3059\u3002",
      features: ["\u5185\u90E8\u30B7\u30ED\u30C3\u30B3\u30D5\u30A1\u30F3\u306E\u5206\u89E3\u6F2C\u3051\u7F6E\u304D", "\u9811\u56FA\u306A\u6CB9\u6C5A\u308C\u306E\u4E01\u5BE7\u306A\u9664\u53BB", "\u30D5\u30FC\u30C9\u30FB\u30D7\u30ED\u30DA\u30E9\u5168\u4F53\u306E\u5165\u5FF5\u306A\u62ED\u304D\u4E0A\u3052"],
      imageUrl: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=600&q=80",
      options: []
    },
    {
      id: "bathroom",
      name: "\u6D74\u5BA4\uFF08\u304A\u98A8\u5442\u5834\uFF09\u30AF\u30EA\u30FC\u30CB\u30F3\u30B0",
      price: 13200,
      unit: "1\u5BA4",
      originalPrice: "\u7D0418,000\u5186",
      time: "\u7D042\u6642\u9593",
      description: "\u5929\u4E95\u3001\u58C1\u3001\u6D74\u69FD\u304B\u3089\u93E1\u306E\u6C34\u57A2\u30A6\u30ED\u30B3\u843D\u3068\u3057\u307E\u3067\u3001\u6D74\u5BA4\u5168\u4F53\u3092\u5FB9\u5E95\u6E05\u6383\u3002\u84C4\u7A4D\u3057\u305F\u76AE\u8102\u6C5A\u308C\u3084\u30AB\u30D3\u3092\u3001\u6750\u8CEA\u306B\u5408\u308F\u305B\u305F\u5C02\u7528\u6D17\u5264\u3067\u9685\u3005\u307E\u3067\u4E01\u5BE7\u306B\u9664\u53BB\u3057\u307E\u3059\u3002",
      features: ["\u5929\u4E95\u304B\u3089\u58C1, \u5E8A, \u6D74\u69FD\u307E\u3067\u4E38\u3054\u3068", "\u93E1\u306E\u9811\u56FA\u306A\u30A6\u30ED\u30B3\u6C5A\u308C\u3078\u306E\u30A2\u30D7\u30ED\u30FC\u30C1", "\u6392\u6C34\u53E3\u30FB\u30A8\u30D7\u30ED\u30F3\u8868\u9762\u306E\u9664\u83CC\u6D88\u81ED"],
      imageUrl: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80",
      options: [
        { name: "\u30A8\u30D7\u30ED\u30F3\u5185\u90E8 \u9AD8\u5727\u6D17\u6D44", extraPrice: 6600 }
      ]
    },
    {
      id: "kitchen",
      name: "\u30AD\u30C3\u30C1\u30F3\u30AF\u30EA\u30FC\u30CB\u30F3\u30B0",
      price: 9900,
      unit: "1\u7B87\u6240",
      originalPrice: "\u7D0415,000\u5186",
      time: "\u7D041.5\u6642\u9593",
      description: "\u30AC\u30B9\u30B3\u30F3\u30ED\u3084IH\u306E\u9811\u56FA\u306A\u7126\u3052\u4ED8\u304D\u3001\u30B7\u30F3\u30AF\u306E\u6C34\u57A2\u30FB\u30CC\u30E1\u30EA\u3001\u5929\u677F\u304B\u3089\u58C1\u9762\u307E\u3067\u3092\u4E01\u5BE7\u306B\u78E8\u304D\u4E0A\u3052\u3002\u6BCE\u65E5\u306E\u304A\u6599\u7406\u304C\u697D\u3057\u304F\u306A\u308B\u6E05\u6F54\u306A\u30AD\u30C3\u30C1\u30F3\u3078\u4ED5\u4E0A\u3052\u3057\u307E\u3059\u3002",
      features: ["\u30B3\u30F3\u30ED\u30FBIH\u5929\u677F\u306E\u7126\u3052\u843D\u3068\u3057", "\u30B7\u30F3\u30AF\u30FB\u86C7\u53E3\u306E\u6C34\u57A2\u9664\u53BB\u3068\u6297\u83CC\u4ED5\u4E0A\u3052", "\u524D\u9762\u58C1\u30FB\u53CE\u7D0D\u68DA\u8868\u9762\u306E\u62ED\u304D\u4E0A\u3052"],
      imageUrl: "https://images.unsplash.com/photo-1556911220-115f74bbe041?auto=format&fit=crop&w=600&q=80",
      options: []
    },
    {
      id: "toilet",
      name: "\u30C8\u30A4\u30EC\u30AF\u30EA\u30FC\u30CB\u30F3\u30B0",
      price: 6600,
      unit: "1\u5BA4",
      originalPrice: "\u7D049,000\u5186",
      time: "\u7D041\u6642\u9593",
      description: "\u4FBF\u5668\u306E\u5185\u5074\u3084\u30D5\u30C1\u88CF\u306E\u9811\u56FA\u306A\u5C3F\u77F3\u3001\u9EC4\u3070\u307F\u3001\u6C17\u306B\u306A\u308B\u30CB\u30AA\u30A4\u306E\u539F\u56E0\u306B\u3057\u3063\u304B\u308A\u30A2\u30D7\u30ED\u30FC\u30C1\u3002\u30A6\u30A9\u30B7\u30E5\u30EC\u30C3\u30C8\u30CE\u30BA\u30EB\u306A\u3069\u306E\u7D30\u90E8\u307E\u3067\u4E01\u5BE7\u306B\u9664\u83CC\u6D17\u6D44\u3057\u307E\u3059\u3002",
      features: ["\u30D5\u30C1\u88CF\u306E\u9811\u56FA\u306A\u5C3F\u77F3\u30FB\u9EC4\u3070\u307F\u306E\u9664\u53BB", "\u30A6\u30A9\u30B7\u30E5\u30EC\u30C3\u30C8\u30CE\u30BA\u30EB\u7D30\u90E8\u6D17\u6D44", "\u58C1\u9762\u30FB\u5E8A\u9762\u306E\u4E01\u5BE7\u306A\u9664\u83CC\u62ED\u304D\u4E0A\u3052"],
      imageUrl: "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&w=600&q=80",
      options: []
    },
    {
      id: "outdoor_unit",
      name: "\u5BA4\u5916\u6A5F\u9AD8\u5727\u6D17\u6D44\uFF08\u30AA\u30D7\u30B7\u30E7\u30F3\uFF09",
      price: 4400,
      unit: "1\u53F0",
      originalPrice: "\u7D047,000\u5186",
      time: "\u7D0430\u5206",
      description: "\u5BA4\u5916\u6A5F\u306E\u71B1\u4EA4\u63DB\u5668\uFF08\u30A2\u30EB\u30DF\u30D5\u30A3\u30F3\uFF09\u306B\u8A70\u307E\u3063\u305F\u30DB\u30B3\u30EA\u3084\u6CE5\u6C5A\u308C\u3092\u9AD8\u5727\u6D17\u6D44\u3002\u30A8\u30A2\u30B3\u30F3\u672C\u4F53\u3078\u306E\u8CA0\u8377\u3092\u548C\u3089\u3052\u3001\u3055\u3089\u306A\u308B\u7701\u30A8\u30CD\u30FB\u96FB\u6C17\u4EE3\u30AB\u30C3\u30C8\u306B\u3064\u306A\u304C\u308A\u307E\u3059\u3002",
      features: ["\u71B1\u4EA4\u63DB\u5668\u30A2\u30EB\u30DF\u30D5\u30A3\u30F3\u306E\u76EE\u8A70\u307E\u308A\u89E3\u6D88", "\u30D5\u30A1\u30F3\u5468\u8FBA\u30FB\u30AB\u30D0\u30FC\u306E\u6D17\u6D44", "\u6545\u969C\u4E88\u9632\u3068\u9577\u5BFF\u547D\u5316\u306E\u4FC3\u9032"],
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
    const handleEstimateToggle = (serviceId, optionIndex = null) => {
      setEstimateCart((prev) => {
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
              current[serviceId].options = opts.filter((i) => i !== optionIndex);
            } else {
              current[serviceId].options = [...opts, optionIndex];
            }
          }
        }
        return current;
      });
    };
    const updateQuantity = (serviceId, delta) => {
      setEstimateCart((prev) => {
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
        const service = servicesData.find((s) => s.id === id);
        if (service) {
          let itemCost = service.price;
          item.options.forEach((optIdx) => {
            itemCost += service.options[optIdx].extraPrice;
          });
          total += itemCost * item.qty;
        }
      });
      return total;
    };
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
    };
    const handleSubmit = async (e) => {
      e.preventDefault();
      setFormValidationError("");
      if (!formData.name || !formData.tel || !formData.email) {
        setFormValidationError("\u304A\u540D\u524D\u3001\u304A\u96FB\u8A71\u756A\u53F7\u3001\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9\u306F\u5FC5\u9808\u5165\u529B\u9805\u76EE\u3067\u3059\u3002\u3054\u5165\u529B\u3092\u304A\u9858\u3044\u3044\u305F\u3057\u307E\u3059\u3002");
        const element = document.getElementById("validation-error-anchor");
        if (element) element.scrollIntoView({ behavior: "smooth" });
        return;
      }
      if (!WEB3FORMS_ACCESS_KEY || WEB3FORMS_ACCESS_KEY === "YOUR_ACCESS_KEY_HERE") {
        setFormValidationError("\u30D5\u30A9\u30FC\u30E0\u306E\u9001\u4FE1\u8A2D\u5B9A\u304C\u672A\u5B8C\u4E86\u3067\u3059\u3002\u304A\u624B\u6570\u3067\u3059\u304C\u3001\u304A\u96FB\u8A71\uFF08050-6870-6753\uFF09\u307E\u305F\u306FLINE\u306B\u3066\u304A\u554F\u3044\u5408\u308F\u305B\u304F\u3060\u3055\u3044\u3002");
        const element = document.getElementById("validation-error-anchor");
        if (element) element.scrollIntoView({ behavior: "smooth" });
        return;
      }
      setIsSubmitting(true);
      try {
        const payload = {
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: "\u3010HP\u898B\u7A4D\u308A\u30FB\u304A\u554F\u3044\u5408\u308F\u305B\u3011" + formData.name + " \u69D8",
          from_name: "\u304A\u305D\u3046\u3058\u4FC2\u30C6\u30A3\u30C7\u30A3\u30BA\u30CF\u30A6\u30B9 HP",
          "\u304A\u540D\u524D": formData.name,
          "\u96FB\u8A71\u756A\u53F7": formData.tel,
          "\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9": formData.email,
          "\u3054\u4F4F\u6240": formData.address,
          "\u3054\u5E0C\u671B\u65E5\u6642": formData.preferredDate,
          "\u3054\u76F8\u8AC7\u5185\u5BB9": formData.message
        };
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(payload)
        });
        const data = await res.json();
        if (data.success) {
          setFormSubmitted(true);
        } else {
          setFormValidationError("\u9001\u4FE1\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002\u6642\u9593\u3092\u304A\u3044\u3066\u518D\u5EA6\u304A\u8A66\u3057\u3044\u305F\u3060\u304F\u304B\u3001\u304A\u96FB\u8A71\u30FBLINE\u306B\u3066\u3054\u9023\u7D61\u304F\u3060\u3055\u3044\u3002");
          const element = document.getElementById("validation-error-anchor");
          if (element) element.scrollIntoView({ behavior: "smooth" });
        }
      } catch (err) {
        setFormValidationError("\u901A\u4FE1\u30A8\u30E9\u30FC\u304C\u767A\u751F\u3057\u307E\u3057\u305F\u3002\u304A\u624B\u6570\u3067\u3059\u304C\u3001\u304A\u96FB\u8A71\u30FBLINE\u306B\u3066\u3054\u9023\u7D61\u304F\u3060\u3055\u3044\u3002");
        const element = document.getElementById("validation-error-anchor");
        if (element) element.scrollIntoView({ behavior: "smooth" });
      } finally {
        setIsSubmitting(false);
      }
    };
    const toggleFaq = (idx) => {
      setFaqOpen((prev) => ({ ...prev, [idx]: !prev[idx] }));
    };
    const getSelectedServicesString = () => {
      const items = Object.entries(estimateCart).map(([id, item]) => {
        const s = servicesData.find((x) => x.id === id);
        const selectedOpts = item.options.map((oIdx) => s.options[oIdx].name).join(", ");
        return `\u30FB${s.name} \xD7 ${item.qty}\u53F0/\u7B87\u6240 ${selectedOpts ? `(\u30AA\u30D7\u30B7\u30E7\u30F3: ${selectedOpts})` : ""}`;
      });
      return items.length > 0 ? items.join("\n") : "\u672A\u9078\u629E\uFF08\u304A\u554F\u5408\u305B\u6642\u306B\u3054\u76F8\u8AC7\uFF09";
    };
    useEffect(() => {
      const total = calculateTotal();
      if (total > 0) {
        setFormData((prev) => ({
          ...prev,
          message: `\u3010\u81EA\u52D5\u8A08\u7B97\u3055\u308C\u305F\u304A\u898B\u7A4D\u308A\u5185\u5BB9\u3011
${getSelectedServicesString()}
\u5408\u8A08\u6982\u7B97\u91D1\u984D: ${total.toLocaleString()}\u5186(\u7A0E\u8FBC)

\u4E0A\u8A18\u30D7\u30E9\u30F3\u306B\u3064\u3044\u3066\u3001\u6B63\u5F0F\u306A\u65E5\u7A0B\u8ABF\u6574\u30FB\u78BA\u8A8D\u3092\u5E0C\u671B\u3057\u307E\u3059\u3002`
        }));
      }
    }, [estimateCart]);
    return /* @__PURE__ */ React.createElement("div", { className: "min-h-screen bg-[#EAF5FF] text-[#333333] font-gothic antialiased scroll-smooth" }, /* @__PURE__ */ React.createElement("style", null, `
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
      `), /* @__PURE__ */ React.createElement("header", { className: "sticky top-0 z-50 bg-white/95 backdrop-blur shadow-sm border-b border-[#1E86D4]/20 transition-all duration-300" }, /* @__PURE__ */ React.createElement("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between" }, /* @__PURE__ */ React.createElement("a", { href: "#", className: "flex items-center shrink-0" }, /* @__PURE__ */ React.createElement("img", { src: "./logo.png", alt: "\u304A\u305D\u3046\u3058\u4FC2\u30C6\u30A3\u30C7\u30A3\u30BA\u30CF\u30A6\u30B9", className: "h-11 sm:h-14 w-auto" }), /* @__PURE__ */ React.createElement("h1", { className: "sr-only" }, "\u304A\u305D\u3046\u3058\u4FC2\u30C6\u30A3\u30C7\u30A3\u30BA\u30CF\u30A6\u30B9")), /* @__PURE__ */ React.createElement("nav", { className: "hidden lg:flex items-center gap-8 font-medium text-[#333333]/90 text-sm" }, /* @__PURE__ */ React.createElement("a", { href: "#features", className: "hover:text-[#1E86D4] transition-colors" }, "\u79C1\u305F\u3061\u306E\u3053\u3060\u308F\u308A"), /* @__PURE__ */ React.createElement("a", { href: "#services", className: "hover:text-[#1E86D4] transition-colors" }, "\u30B5\u30FC\u30D3\u30B9\u30FB\u7D0D\u5F97\u4FA1\u683C"), /* @__PURE__ */ React.createElement("a", { href: "#estimator", className: "hover:text-[#1E86D4] transition-colors" }, "\u7C21\u5358\u898B\u7A4D\u30B7\u30DF\u30E5\u30EC\u30FC\u30BF\u30FC"), /* @__PURE__ */ React.createElement("a", { href: "#youtube", className: "hover:text-[#1E86D4] transition-colors" }, "\u4F5C\u696D\u5B9F\u6CC1\u52D5\u753B"), /* @__PURE__ */ React.createElement("a", { href: "#flow", className: "hover:text-[#1E86D4] transition-colors" }, "\u3054\u5229\u7528\u306E\u6D41\u308C"), /* @__PURE__ */ React.createElement("a", { href: "#faq", className: "hover:text-[#1E86D4] transition-colors" }, "\u3088\u304F\u3042\u308B\u3054\u8CEA\u554F")), /* @__PURE__ */ React.createElement("div", { className: "hidden lg:flex items-center gap-4" }, /* @__PURE__ */ React.createElement("div", { className: "text-right" }, /* @__PURE__ */ React.createElement("p", { className: "text-[10px] text-[#333333]/70 font-bold font-gothic" }, "\u5E74\u4E2D\u7121\u4F11 9:00\u301C19:00"), /* @__PURE__ */ React.createElement("a", { href: "tel:050-6870-6753", className: "text-base font-bold text-[#1E86D4] hover:text-[#1E86D4]/80 flex items-center transition-colors" }, PHONE_ICON, " 050-6870-6753")), /* @__PURE__ */ React.createElement("a", { href: "#contact", className: "bg-[#0E4C86] text-white font-bold px-5 py-2.5 rounded-xl hover:bg-[#0E4C86]/90 transition-all text-xs tracking-wider" }, "WEB\u3067\u7C21\u5358\u4E88\u7D04")), /* @__PURE__ */ React.createElement(
      "button",
      {
        onClick: () => setMobileMenuOpen(!mobileMenuOpen),
        className: "lg:hidden p-2 text-[#333333] hover:text-[#1E86D4] focus:outline-none",
        "aria-label": "\u30E1\u30CB\u30E5\u30FC\u958B\u9589"
      },
      /* @__PURE__ */ React.createElement("svg", { className: "w-6 h-6", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24" }, mobileMenuOpen ? /* @__PURE__ */ React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M6 18L18 6M6 6l12 12" }) : /* @__PURE__ */ React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M4 6h16M4 12h16M4 18h16" }))
    )), mobileMenuOpen && /* @__PURE__ */ React.createElement("div", { className: "lg:hidden bg-white border-t border-slate-100 py-6 px-4 shadow-inner space-y-4" }, /* @__PURE__ */ React.createElement("a", { href: "#features", onClick: () => setMobileMenuOpen(false), className: "block py-2 text-[#0E4C86] font-semibold hover:text-[#1E86D4] border-b border-slate-50" }, "\u79C1\u305F\u3061\u306E\u3053\u3060\u308F\u308A"), /* @__PURE__ */ React.createElement("a", { href: "#services", onClick: () => setMobileMenuOpen(false), className: "block py-2 text-[#0E4C86] font-semibold hover:text-[#1E86D4] border-b border-slate-50" }, "\u30B5\u30FC\u30D3\u30B9\u30FB\u7D0D\u5F97\u4FA1\u683C"), /* @__PURE__ */ React.createElement("a", { href: "#estimator", onClick: () => setMobileMenuOpen(false), className: "block py-2 text-[#0E4C86] font-semibold hover:text-[#1E86D4] border-b border-slate-50" }, "\u7C21\u5358\u898B\u7A4D\u30B7\u30DF\u30E5\u30EC\u30FC\u30BF\u30FC"), /* @__PURE__ */ React.createElement("a", { href: "#youtube", onClick: () => setMobileMenuOpen(false), className: "block py-2 text-[#0E4C86] font-semibold hover:text-[#1E86D4] border-b border-slate-50" }, "\u4F5C\u696D\u5B9F\u6CC1\u52D5\u753B"), /* @__PURE__ */ React.createElement("a", { href: "#flow", onClick: () => setMobileMenuOpen(false), className: "block py-2 text-[#0E4C86] font-semibold hover:text-[#1E86D4] border-b border-slate-50" }, "\u3054\u5229\u7528\u306E\u6D41\u308C"), /* @__PURE__ */ React.createElement("a", { href: "#faq", onClick: () => setMobileMenuOpen(false), className: "block py-2 text-[#0E4C86] font-semibold hover:text-[#1E86D4] border-b border-slate-50" }, "\u3088\u304F\u3042\u308B\u3054\u8CEA\u554F"), /* @__PURE__ */ React.createElement("div", { className: "pt-4 space-y-3" }, /* @__PURE__ */ React.createElement("a", { href: "tel:050-6870-6753", className: "flex items-center justify-center bg-slate-100 text-[#1E86D4] font-bold py-3 rounded-xl hover:bg-slate-200 transition-colors" }, PHONE_ICON, " 050-6870-6753"), /* @__PURE__ */ React.createElement("a", { href: "https://line.me/ti/p/%40877vzdtl", target: "_blank", rel: "noopener noreferrer", className: "flex items-center justify-center bg-[#25D366] text-white font-bold py-3 rounded-xl hover:opacity-95 transition-opacity" }, LINE_ICON, " LINE\u3067\u554F\u3044\u5408\u308F\u305B"), /* @__PURE__ */ React.createElement("a", { href: "#contact", onClick: () => setMobileMenuOpen(false), className: "block text-center bg-[#0E4C86] text-white font-bold py-3 rounded-xl hover:bg-[#0E4C86]/90 transition-colors" }, "WEB\u898B\u7A4D\u308A\u30FB\u4E88\u7D04\u30D5\u30A9\u30FC\u30E0")))), /* @__PURE__ */ React.createElement("section", { className: "relative overflow-hidden bg-gradient-to-b from-[#EAF5FF] via-[#EAF5FF]/50 to-white py-24 lg:py-32" }, /* @__PURE__ */ React.createElement("div", { className: "absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 bg-[#1E86D4]/10 rounded-full blur-3xl opacity-80" }), /* @__PURE__ */ React.createElement("div", { className: "absolute bottom-0 left-0 -ml-24 -mb-24 w-96 h-96 bg-[#0E4C86]/5 rounded-full blur-3xl opacity-80" }), /* @__PURE__ */ React.createElement("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" }, /* @__PURE__ */ React.createElement("div", { className: "grid lg:grid-cols-12 gap-16 items-center" }, /* @__PURE__ */ React.createElement("div", { className: "lg:col-span-7 text-center lg:text-left space-y-8" }, /* @__PURE__ */ React.createElement("div", { className: "inline-flex items-center gap-2 bg-white border border-[#1E86D4]/40 text-[#1E86D4] font-bold text-xs sm:text-sm px-4 py-2.5 rounded-full shadow-sm" }, /* @__PURE__ */ React.createElement("span", { className: "w-2.5 h-2.5 bg-[#1E86D4] rounded-full animate-ping" }), "\u6771\u4EAC\u30FB\u57FC\u7389\u30FB\u5343\u8449\u5BC6\u7740\uFF1A\u51FA\u5F35\u4EA4\u901A\u8CBB\u306F\u4E00\u5207\u9802\u304D\u307E\u305B\u3093"), /* @__PURE__ */ React.createElement("h2", { className: "text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#0E4C86] leading-tight tracking-tight font-rounded" }, "\u3054\u307E\u304B\u3057\u306E\u306A\u3044\u6280\u8853\u3092\u3001", /* @__PURE__ */ React.createElement("br", null), "\u5FC3\u304B\u3089\u5B89\u5FC3\u3067\u304D\u308B", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("span", { className: "text-transparent bg-clip-text bg-gradient-to-r from-[#1E86D4] to-[#0E4C86] relative pb-2 block sm:inline" }, "\u7D0D\u5F97\u4FA1\u683C\u3067\u3002")), /* @__PURE__ */ React.createElement("p", { className: "text-[#333333] text-sm sm:text-base md:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed" }, "\u300C\u4ED6\u793E\u3067\u9AD8\u984D\u3060\u3063\u305F\u30A8\u30A2\u30B3\u30F3\u30FB\u6C34\u56DE\u308A\u6E05\u6383\u3092\u3001\u3082\u3063\u3068\u8EAB\u8FD1\u3067\u7D0D\u5F97\u3067\u304D\u308B\u4FA1\u683C\u306B\u3057\u305F\u3044\u3002\u300D", /* @__PURE__ */ React.createElement("br", null), "\u304A\u305D\u3046\u3058\u4FC2\u30C6\u30A3\u30C7\u30A3\u30BA\u30CF\u30A6\u30B9\u306F\u3001", /* @__PURE__ */ React.createElement("span", { className: "font-bold" }, "\u540C\u4E00\u30A8\u30EA\u30A2\u3078\u306E\u96C6\u4E2D\u8A2A\u554F\u3068\u5FB9\u5E95\u3057\u305F\u30EB\u30FC\u30C8\u6700\u9069\u5316"), "\u306B\u3088\u308A\u79FB\u52D5\u7D4C\u8CBB\u3092\u30AB\u30C3\u30C8\u3002\u54C1\u8CEA\u306F\u30D7\u30ED\u306E\u4ED5\u4E0A\u304C\u308A\u305D\u306E\u307E\u307E\u306B\u3001\u8AB0\u3082\u304C\u7D0D\u5F97\u3067\u304D\u308B\u9069\u6B63\u4FA1\u683C\u3092\u5B9F\u73FE\u3057\u307E\u3057\u305F\u3002"), /* @__PURE__ */ React.createElement("div", { className: "flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4" }, /* @__PURE__ */ React.createElement("a", { href: "#estimator", className: "bg-[#F5921E] hover:bg-[#F5921E]/90 text-white font-bold text-sm sm:text-base px-8 py-4.5 rounded-xl shadow-lg shadow-[#F5921E]/30 hover:-translate-y-0.5 active:translate-y-0 transition-all text-center font-rounded" }, "\u6599\u91D1\u30B7\u30DF\u30E5\u30EC\u30FC\u30BF\u30FC\u3092\u8A66\u3059"), /* @__PURE__ */ React.createElement("a", { href: "https://line.me/ti/p/%40877vzdtl", target: "_blank", rel: "noopener noreferrer", className: "bg-white hover:bg-slate-50 text-[#0E4C86] border-2 border-[#0E4C86] font-bold text-sm sm:text-base px-8 py-4.5 rounded-xl shadow-sm hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-2 font-rounded" }, LINE_ICON, " LINE\u3067\u7121\u6599\u76F8\u8AC7")), /* @__PURE__ */ React.createElement("div", { className: "pt-6 flex flex-wrap items-center justify-center lg:justify-start gap-8 text-[#333333]/70 text-xs font-semibold" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("span", { className: "block text-2xl font-bold text-[#0E4C86] font-rounded" }, "100%"), /* @__PURE__ */ React.createElement("span", null, "\u81EA\u793E\u30B9\u30BF\u30C3\u30D5\u8CAC\u4EFB\u65BD\u5DE5")), /* @__PURE__ */ React.createElement("div", { className: "border-l border-slate-200 h-8 hidden sm:block" }), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("span", { className: "block text-2xl font-bold text-[#0E4C86] font-rounded" }, "\u7121\u6599"), /* @__PURE__ */ React.createElement("span", null, "\u5BFE\u8C61\u30A8\u30EA\u30A2\u5185\u306F\u51FA\u5F35\u8CBB\u30BC\u30ED")), /* @__PURE__ */ React.createElement("div", { className: "border-l border-slate-200 h-8 hidden sm:block" }), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("span", { className: "block text-2xl font-bold text-[#0E4C86] font-rounded" }, "\u7D0D\u5F97\u4FA1\u683C"), /* @__PURE__ */ React.createElement("span", null, "\u30A8\u30A2\u30B3\u30F3\u9AD8\u5727 1\u53F06,600\u5186\u301C")))), /* @__PURE__ */ React.createElement("div", { className: "lg:col-span-5 relative" }, /* @__PURE__ */ React.createElement("div", { className: "relative mx-auto max-w-md bg-white rounded-3xl shadow-xl overflow-hidden border border-[#1E86D4]/20" }, /* @__PURE__ */ React.createElement("div", { className: "relative h-72 bg-slate-950" }, /* @__PURE__ */ React.createElement(
      "img",
      {
        src: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80",
        alt: "\u30D7\u30ED\u306E\u624B\u5143\u306E\u4E01\u5BE7\u306A\u4F5C\u696D\u98A8\u666F",
        className: "w-full h-full object-cover opacity-85 hover:scale-105 transition-transform duration-700"
      }
    ), /* @__PURE__ */ React.createElement("div", { className: "absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" }), /* @__PURE__ */ React.createElement("div", { className: "absolute bottom-5 left-5 right-5 text-white" }, /* @__PURE__ */ React.createElement("span", { className: "bg-[#1E86D4] text-[10px] font-bold px-2.5 py-1 rounded-full mb-2 inline-block font-rounded text-white" }, "\u624B\u5143\u306E\u5FB9\u5E95\u3057\u305F\u3053\u3060\u308F\u308A"), /* @__PURE__ */ React.createElement("h3", { className: "text-base sm:text-lg font-bold font-rounded text-white" }, "\u898B\u3048\u306A\u3044\u30AB\u30D3\u3084\u9811\u56FA\u306A\u6C5A\u308C\u3082\u3001\u7D30\u90E8\u307E\u3067\u4E01\u5BE7\u306B\u6D17\u6D44"), /* @__PURE__ */ React.createElement("p", { className: "text-[11px] text-slate-300" }, "\u624B\u4F5C\u696D\u306B\u3088\u308B\u7E4A\u7D30\u306A\u990A\u751F\u3068\u5FB9\u5E95\u3057\u305F\u9AD8\u5727\u6D17\u6D44\u3092\u884C\u3044\u307E\u3059"))), /* @__PURE__ */ React.createElement("div", { className: "p-6 space-y-4" }, /* @__PURE__ */ React.createElement("h4", { className: "font-bold text-[#0E4C86] text-xs sm:text-sm tracking-wider font-rounded" }, "\u5B9F\u969B\u306B\u3054\u5229\u7528\u3044\u305F\u3060\u3044\u305F\u304A\u5BA2\u69D8\u306E\u58F0"), /* @__PURE__ */ React.createElement("div", { className: "bg-[#EAF5FF] p-4 rounded-xl border border-[#1E86D4]/20 text-xs text-[#333333] leading-relaxed relative" }, /* @__PURE__ */ React.createElement("p", { className: "italic" }, "\u300C\u5927\u624B\u3060\u3068\u500D\u8FD1\u3044\u898B\u7A4D\u3082\u308A\u3060\u3063\u305F\u304A\u6383\u9664\u6A5F\u80FD\u4ED8\u304D\u30A8\u30A2\u30B3\u30F3\u3002\u30C6\u30A3\u30C7\u30A3\u30BA\u30CF\u30A6\u30B9\u3055\u3093\u306F\u672C\u5F53\u306B\u7D0D\u5F97\u4FA1\u683C\u306E13,200\u5186\uFF08\u7A0E\u8FBC\uFF09\u30DD\u30C3\u30AD\u30EA\u3067\u3057\u305F\u3002\u6C5A\u308C\u304C\u3069\u3063\u3055\u308A\u53D6\u308C\u3001\u4ED5\u4E8B\u3082\u3059\u3054\u304F\u7D30\u3084\u304B\u3067\u611F\u52D5\u3057\u307E\u3057\u305F\u3002\u300D"), /* @__PURE__ */ React.createElement("span", { className: "block text-right font-bold text-[#1E86D4] mt-3 font-rounded" }, "\u2014 \u57FC\u7389\u770C\u3055\u3044\u305F\u307E\u5E02 \u98EF\u7530\u69D8\uFF0830\u4EE3\u4E3B\u5A66\uFF09")), /* @__PURE__ */ React.createElement("div", { className: "flex items-center justify-between gap-2 pt-2 text-xs" }, /* @__PURE__ */ React.createElement("span", { className: "text-[#333333]/70 font-semibold" }, "\u304A\u6025\u304E\u306E\u65B9\u306F\u304A\u96FB\u8A71\u3067"), /* @__PURE__ */ React.createElement("a", { href: "tel:050-6870-6753", className: "text-base font-bold text-[#1E86D4] hover:underline flex items-center" }, PHONE_ICON, " 050-6870-6753")))))))), /* @__PURE__ */ React.createElement("section", { id: "features", className: "py-24 bg-white border-t border-slate-50" }, /* @__PURE__ */ React.createElement("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, /* @__PURE__ */ React.createElement("div", { className: "text-center max-w-3xl mx-auto space-y-3" }, /* @__PURE__ */ React.createElement("span", { className: "text-[#1E86D4] font-bold text-xs tracking-widest block font-rounded" }, "OUR PHILOSOPHY"), /* @__PURE__ */ React.createElement("h2", { className: "text-2xl sm:text-4xl font-bold text-[#0E4C86] font-rounded" }, "\u30C6\u30A3\u30C7\u30A3\u30BA\u30CF\u30A6\u30B9\u304C\u9078\u3070\u308C\u7D9A\u3051\u308B3\u3064\u306E\u7D04\u675F"), /* @__PURE__ */ React.createElement("div", { className: "w-12 h-[2px] bg-[#1E86D4]/50 mx-auto mt-4" }), /* @__PURE__ */ React.createElement("p", { className: "text-[#333333]/80 text-xs sm:text-sm pt-2 leading-relaxed font-gothic" }, "\u7D0D\u5F97\u4FA1\u683C\u3092\u53EF\u80FD\u306B\u3057\u305F\u660E\u78BA\u306A\u7406\u7531\u3068\u3001\u30D7\u30ED\u3068\u3057\u3066\u59A5\u5354\u3057\u306A\u3044\u54C1\u8CEA\u4FDD\u8A3C\u3092\u304A\u5C4A\u3051\u3057\u307E\u3059\u3002")), /* @__PURE__ */ React.createElement("div", { className: "grid md:grid-cols-3 gap-8 mt-16" }, /* @__PURE__ */ React.createElement("div", { className: "bg-[#EAF5FF]/60 rounded-2xl p-8 border border-[#1E86D4]/20 hover:shadow-lg hover:shadow-[#1E86D4]/5 transition-all group" }, /* @__PURE__ */ React.createElement("div", { className: "w-12 h-12 bg-white text-[#1E86D4] border border-[#1E86D4]/30 rounded-xl flex items-center justify-center font-bold text-lg mb-6 group-hover:bg-[#0E4C86] group-hover:text-white group-hover:border-transparent transition-all font-rounded" }, "01"), /* @__PURE__ */ React.createElement("h3", { className: "text-lg font-bold text-[#0E4C86] mb-3 font-rounded" }, "\u7121\u99C4\u306A\u7D4C\u8CBB\u3092\u5FB9\u5E95\u30AB\u30C3\u30C8\u3057\u305F\u300C\u7D0D\u5F97\u4FA1\u683C\u300D"), /* @__PURE__ */ React.createElement("p", { className: "text-[#333333] text-xs sm:text-sm leading-relaxed font-gothic" }, "\u696D\u754C\u306E\u6A19\u6E96\u4FA1\u683C\u3092\u62BC\u3057\u4E0A\u3052\u3066\u3044\u308B\u300C\u904E\u5270\u306A\u5E83\u544A\u5BA3\u4F1D\u8CBB\u300D\u3068\u300C\u30B9\u30BF\u30C3\u30D5\u306E\u79FB\u52D5\u30B3\u30B9\u30C8\u300D\u3092\u524A\u6E1B\u3002\u540C\u30A8\u30EA\u30A2\u3067\u306E\u96C6\u4E2D\u8A2A\u554F\u3092\u884C\u3046\u3053\u3068\u3067\u52B9\u7387\u5316\u3092\u56F3\u308A\u3001\u305D\u306E\u30E1\u30EA\u30C3\u30C8\u3092\u3059\u3079\u3066\u300C\u7D0D\u5F97\u306E\u3044\u304F\u9069\u6B63\u4FA1\u683C\u300D\u3068\u3057\u3066\u304A\u5BA2\u69D8\u306B\u9084\u5143\u3057\u3066\u3044\u307E\u3059\u3002")), /* @__PURE__ */ React.createElement("div", { className: "bg-[#EAF5FF]/60 rounded-2xl p-8 border border-[#1E86D4]/20 hover:shadow-lg hover:shadow-[#1E86D4]/5 transition-all group" }, /* @__PURE__ */ React.createElement("div", { className: "w-12 h-12 bg-white text-[#1E86D4] border border-[#1E86D4]/30 rounded-xl flex items-center justify-center font-bold text-lg mb-6 group-hover:bg-[#0E4C86] group-hover:text-white group-hover:border-transparent transition-all font-rounded" }, "02"), /* @__PURE__ */ React.createElement("h3", { className: "text-lg font-bold text-[#0E4C86] mb-3 font-rounded" }, "YouTube\u52D5\u753B\u3067\u4F5C\u696D\u306E\u5168\u884C\u7A0B\u3092\u300C\u5B8C\u5168\u516C\u958B\u300D"), /* @__PURE__ */ React.createElement("p", { className: "text-[#333333] text-xs sm:text-sm leading-relaxed font-gothic" }, "\u300C\u5BB6\u306E\u4E2D\u306B\u30B9\u30BF\u30C3\u30D5\u3092\u4E0A\u3052\u308B\u306E\u304C\u5FC3\u914D\u300D\u300C\u672C\u5F53\u306B\u304D\u308C\u3044\u306B\u3057\u3066\u3044\u308B\u306E\uFF1F\u300D\u305D\u3093\u306A\u4E0D\u5B89\u306B\u5168\u529B\u3067\u7B54\u3048\u307E\u3059\u3002\u79C1\u305F\u3061\u306F\u30A8\u30A2\u30B3\u30F3\u9AD8\u5727\u6D17\u6D44\u3084\u6C34\u56DE\u308A\u6E05\u6383\u306E\u5B9F\u969B\u306E\u69D8\u5B50\u3092\u30CE\u30FC\u30AB\u30C3\u30C8\u3067YouTube\u306B\u3066\u516C\u958B\u4E2D\u3002\u4E8B\u524D\u306B\u304A\u4ED5\u4E8B\u306E\u4E01\u5BE7\u3055\u3092\u3054\u78BA\u8A8D\u3044\u305F\u3060\u3051\u307E\u3059\u3002")), /* @__PURE__ */ React.createElement("div", { className: "bg-[#EAF5FF]/60 rounded-2xl p-8 border border-[#1E86D4]/20 hover:shadow-lg hover:shadow-[#1E86D4]/5 transition-all group" }, /* @__PURE__ */ React.createElement("div", { className: "w-12 h-12 bg-white text-[#1E86D4] border border-[#1E86D4]/30 rounded-xl flex items-center justify-center font-bold text-lg mb-6 group-hover:bg-[#0E4C86] group-hover:text-white group-hover:border-transparent transition-all font-rounded" }, "03"), /* @__PURE__ */ React.createElement("h3", { className: "text-lg font-bold text-[#0E4C86] mb-3 font-rounded" }, "\u898B\u7A4D\u308A\u5F8C\u306E\u300C\u8FFD\u52A0\u6599\u91D1\u4E00\u5207\u306A\u3057\u300D\u306E\u660E\u6717\u4F1A\u8A08"), /* @__PURE__ */ React.createElement("p", { className: "text-[#333333] text-xs sm:text-sm leading-relaxed font-gothic" }, "\u63D0\u793A\u3055\u308C\u305F\u6599\u91D1\u306F\u3059\u3079\u3066\u3010\u6D88\u8CBB\u7A0E\u8FBC\u307F\u3011\u3002\u6C5A\u308C\u304C\u4E88\u60F3\u4EE5\u4E0A\u3060\u3063\u305F\u304B\u3089\u3068\u3044\u3063\u3066\u3001\u5F53\u65E5\u73FE\u5730\u3067\u8FFD\u52A0\u8ACB\u6C42\u3092\u884C\u3046\u3053\u3068\u306F\u7D76\u5BFE\u306B\u3054\u3056\u3044\u307E\u305B\u3093\u3002\u5F37\u5F15\u306A\u55B6\u696D\u3084\u30AA\u30D7\u30B7\u30E7\u30F3\u306E\u62BC\u3057\u58F2\u308A\u3082\u4E00\u5207\u884C\u3044\u307E\u305B\u3093\u306E\u3067\u3001\u5B89\u5FC3\u3057\u3066\u304A\u4EFB\u305B\u304F\u3060\u3055\u3044\u3002"))))), /* @__PURE__ */ React.createElement("section", { id: "services", className: "py-24 bg-[#EAF5FF]" }, /* @__PURE__ */ React.createElement("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, /* @__PURE__ */ React.createElement("div", { className: "text-center max-w-3xl mx-auto space-y-3 mb-16" }, /* @__PURE__ */ React.createElement("span", { className: "text-[#1E86D4] font-bold text-xs tracking-widest block font-rounded" }, "SERVICES & PRICES"), /* @__PURE__ */ React.createElement("h2", { className: "text-2xl sm:text-4xl font-bold text-[#0E4C86] font-rounded" }, "\u304A\u6383\u9664\u30E1\u30CB\u30E5\u30FC\u30FB\u7D0D\u5F97\u6599\u91D1\u30D7\u30E9\u30F3"), /* @__PURE__ */ React.createElement("div", { className: "w-12 h-[2px] bg-[#1E86D4]/50 mx-auto mt-4" }), /* @__PURE__ */ React.createElement("p", { className: "text-[#333333]/80 text-xs sm:text-sm pt-2 leading-relaxed" }, "\u696D\u754C\u4ED6\u793E\u306E\u76F8\u5834\u306B\u6BD4\u3079\u3001\u660E\u5FEB\u3067\u7D0D\u5F97\u611F\u306E\u3042\u308B\u4FA1\u683C\u8A2D\u8A08\u306B\u6574\u3048\u307E\u3057\u305F\u3002\u51FA\u5F35\u8CBB\u7121\u6599\u3001\u6A5F\u6750\u8CBB\u7B49\u3059\u3079\u3066\u8FBC\u307F\u3002")), /* @__PURE__ */ React.createElement("div", { className: "flex justify-center flex-wrap gap-2.5 mb-12" }, /* @__PURE__ */ React.createElement(
      "button",
      {
        onClick: () => setActiveTab("all"),
        className: `px-6 py-2.5 rounded-full font-bold text-xs sm:text-sm transition-all border ${activeTab === "all" ? "bg-[#0E4C86] text-white border-transparent shadow-sm" : "bg-white text-[#333333] hover:bg-[#EAF5FF] border-[#1E86D4]/30"}`
      },
      "\u3059\u3079\u3066\u306E\u30B5\u30FC\u30D3\u30B9"
    ), /* @__PURE__ */ React.createElement(
      "button",
      {
        onClick: () => setActiveTab("aircon"),
        className: `px-6 py-2.5 rounded-full font-bold text-xs sm:text-sm transition-all border ${activeTab === "aircon" ? "bg-[#0E4C86] text-white border-transparent shadow-sm" : "bg-white text-[#333333] hover:bg-[#EAF5FF] border-[#1E86D4]/30"}`
      },
      "\u30A8\u30A2\u30B3\u30F3\u95A2\u9023"
    ), /* @__PURE__ */ React.createElement(
      "button",
      {
        onClick: () => setActiveTab("water"),
        className: `px-6 py-2.5 rounded-full font-bold text-xs sm:text-sm transition-all border ${activeTab === "water" ? "bg-[#0E4C86] text-white border-transparent shadow-sm" : "bg-white text-[#333333] hover:bg-[#EAF5FF] border-[#1E86D4]/30"}`
      },
      "\u6C34\u56DE\u308A\uFF08\u6D74\u5BA4\u30FB\u53F0\u6240\u30FB\u30C8\u30A4\u30EC\uFF09"
    )), /* @__PURE__ */ React.createElement("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8" }, servicesData.filter((service) => {
      if (activeTab === "all") return true;
      if (activeTab === "aircon") return service.id === "aircon" || service.id === "outdoor_unit";
      if (activeTab === "water") return service.id === "bathroom" || service.id === "kitchen" || service.id === "toilet";
      return true;
    }).map((service) => {
      const isSelectedInCart = !!estimateCart[service.id];
      return /* @__PURE__ */ React.createElement("div", { key: service.id, className: "bg-white rounded-2xl border border-[#1E86D4]/20 shadow-md hover:shadow-lg transition-all flex flex-col h-full relative overflow-hidden group" }, /* @__PURE__ */ React.createElement("div", { className: "absolute top-4 right-4 bg-[#1E86D4] text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm z-10 tracking-widest font-rounded" }, "\u5B89\u5FC3\u306E\u7D0D\u5F97\u4FA1\u683C"), /* @__PURE__ */ React.createElement("div", { className: "h-56 bg-slate-100 overflow-hidden relative" }, /* @__PURE__ */ React.createElement(
        "img",
        {
          src: service.imageUrl,
          alt: service.name,
          className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        }
      ), /* @__PURE__ */ React.createElement("div", { className: "absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" }), /* @__PURE__ */ React.createElement("div", { className: "absolute bottom-4 left-4 text-white" }, /* @__PURE__ */ React.createElement("span", { className: "text-[10px] font-semibold text-white bg-[#0E4C86] px-2 py-0.5 rounded-md inline-block mb-1.5 font-rounded" }, "\u76EE\u5B89\u6642\u9593\uFF1A", service.time), /* @__PURE__ */ React.createElement("h3", { className: "text-lg font-bold font-rounded tracking-tight text-white" }, service.name))), /* @__PURE__ */ React.createElement("div", { className: "p-6 flex-1 flex flex-col justify-between space-y-6" }, /* @__PURE__ */ React.createElement("div", { className: "space-y-4" }, /* @__PURE__ */ React.createElement("div", { className: "bg-[#EAF5FF] rounded-xl p-4 flex items-center justify-between border border-[#1E86D4]/30" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("span", { className: "text-[10px] text-slate-400 block font-gothic" }, "\u4E00\u822C\u4ED6\u793E\u76F8\u5834\uFF1A", /* @__PURE__ */ React.createElement("del", { className: "text-slate-400" }, service.originalPrice)), /* @__PURE__ */ React.createElement("span", { className: "text-[#333333] font-bold text-xs font-gothic" }, "\u624B\u5143\u306E\u4E01\u5BE7\u306A\u8077\u4EBA\u54C1\u8CEA")), /* @__PURE__ */ React.createElement("div", { className: "text-right" }, /* @__PURE__ */ React.createElement("span", { className: "text-2xl font-bold text-[#0E4C86] font-rounded" }, service.price.toLocaleString()), /* @__PURE__ */ React.createElement("span", { className: "text-xs font-bold text-[#0E4C86] font-rounded" }, "\u5186"), /* @__PURE__ */ React.createElement("span", { className: "text-[10px] text-[#333333]/70 block font-gothic" }, "/ ", service.unit, "(\u7A0E\u8FBC)"))), /* @__PURE__ */ React.createElement("p", { className: "text-[#333333] text-xs sm:text-sm leading-relaxed font-gothic" }, service.description), /* @__PURE__ */ React.createElement("ul", { className: "space-y-1.5 pt-2" }, service.features.map((feature, i) => /* @__PURE__ */ React.createElement("li", { key: i, className: "text-xs text-[#333333] flex items-start leading-relaxed font-gothic" }, /* @__PURE__ */ React.createElement("span", { className: "text-[#1E86D4] font-bold mr-1.5" }, "\u25C6"), " ", feature))), service.options.length > 0 && /* @__PURE__ */ React.createElement("div", { className: "pt-3.5 border-t border-slate-100" }, /* @__PURE__ */ React.createElement("span", { className: "text-xs font-bold text-[#0E4C86] block mb-1.5 font-rounded" }, "\u9078\u3079\u308B\u7D0D\u5F97\u30AA\u30D7\u30B7\u30E7\u30F3\uFF1A"), /* @__PURE__ */ React.createElement("div", { className: "space-y-1" }, service.options.map((opt, i) => /* @__PURE__ */ React.createElement("div", { key: i, className: "flex justify-between items-center text-xs text-[#333333]/70 bg-slate-50 p-1.5 rounded" }, /* @__PURE__ */ React.createElement("span", null, "\u30FB", opt.name), /* @__PURE__ */ React.createElement("span", { className: "font-bold text-[#333333]" }, "+", opt.extraPrice.toLocaleString(), "\u5186(\u7A0E\u8FBC)")))))), /* @__PURE__ */ React.createElement("div", { className: "pt-4 border-t border-slate-50" }, /* @__PURE__ */ React.createElement(
        "button",
        {
          onClick: () => handleEstimateToggle(service.id),
          className: `w-full py-3 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 ${isSelectedInCart ? "bg-[#0E4C86] text-white hover:bg-[#0E4C86]/90 shadow-sm" : "bg-slate-100 text-[#333333] hover:bg-slate-200"}`
        },
        isSelectedInCart ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("svg", { className: "w-5 h-5", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24" }, /* @__PURE__ */ React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2.5", d: "M5 13l4 4L19 7" })), "\u898B\u7A4D\u308A\u306B\u9078\u629E\u4E2D") : "\u3053\u306E\u304A\u6383\u9664\u3092\u898B\u7A4D\u308A\u306B\u5165\u308C\u308B"
      ))));
    })))), /* @__PURE__ */ React.createElement("section", { id: "estimator", className: "py-24 bg-gradient-to-tr from-[#1E86D4] to-[#0E4C86] text-white relative overflow-hidden" }, /* @__PURE__ */ React.createElement("div", { className: "absolute top-0 left-0 -ml-16 -mt-16 w-80 h-80 bg-white/5 rounded-full blur-2xl" }), /* @__PURE__ */ React.createElement("div", { className: "absolute bottom-0 right-0 -mr-16 -mb-16 w-80 h-80 bg-white/5 rounded-full blur-2xl" }), /* @__PURE__ */ React.createElement("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" }, /* @__PURE__ */ React.createElement("div", { className: "text-center max-w-2xl mx-auto space-y-3 mb-16" }, /* @__PURE__ */ React.createElement("span", { className: "bg-white/10 text-emerald-100 font-bold text-xs px-3.5 py-1 rounded-full tracking-widest inline-block font-rounded" }, "WEB ESTIMATOR"), /* @__PURE__ */ React.createElement("h2", { className: "text-2xl sm:text-4xl font-bold font-rounded" }, "\u30EA\u30A2\u30EB\u30BF\u30A4\u30E0\u7D0D\u5F97\u898B\u7A4D\u308A\u30B7\u30DF\u30E5\u30EC\u30FC\u30BF\u30FC"), /* @__PURE__ */ React.createElement("div", { className: "w-12 h-[2px] bg-white/40 mx-auto mt-4" }), /* @__PURE__ */ React.createElement("p", { className: "text-emerald-50/85 text-xs sm:text-sm pt-2" }, "\u3054\u5E0C\u671B\u306E\u7B87\u6240\u3092\u30DD\u30C1\u30DD\u30C1\u9078\u629E\u3059\u308B\u3060\u3051\u3067\u3001\u305D\u306E\u5834\u3067\u7D0D\u5F97\u306E\u3044\u304F\u660E\u5FEB\u306A\u6982\u7B97\u898B\u7A4D\u308A\u304C\u7B97\u51FA\u3055\u308C\u307E\u3059\u3002\u5F37\u5F15\u306A\u8FFD\u52A0\u3084\u5F8C\u304B\u3089\u306E\u62BC\u3057\u58F2\u308A\u306F\u4E00\u5207\u3054\u3056\u3044\u307E\u305B\u3093\u3002")), /* @__PURE__ */ React.createElement("div", { className: "grid lg:grid-cols-12 gap-8 items-start" }, /* @__PURE__ */ React.createElement("div", { className: "lg:col-span-7 bg-white/10 backdrop-blur rounded-2xl p-6 sm:p-8 border border-white/10 space-y-6" }, /* @__PURE__ */ React.createElement("h3", { className: "text-base sm:text-lg font-bold border-b border-white/20 pb-3 font-rounded" }, "\u2460 \u304A\u6383\u9664\u7B87\u6240\u3068\u30AA\u30D7\u30B7\u30E7\u30F3\u3092\u30C1\u30A7\u30C3\u30AF\u3059\u308B"), /* @__PURE__ */ React.createElement("div", { className: "space-y-4 max-h-[440px] overflow-y-auto pr-2 custom-scrollbar" }, servicesData.map((service) => {
      const itemInCart = estimateCart[service.id];
      return /* @__PURE__ */ React.createElement("div", { key: service.id, className: `p-4 rounded-xl transition-all border ${itemInCart ? "bg-white/15 border-white/40" : "bg-white/5 border-transparent hover:bg-white/10"}` }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center justify-between gap-4" }, /* @__PURE__ */ React.createElement("label", { className: "flex items-center cursor-pointer select-none" }, /* @__PURE__ */ React.createElement(
        "input",
        {
          type: "checkbox",
          checked: !!itemInCart,
          onChange: () => handleEstimateToggle(service.id),
          className: "w-5 h-5 rounded text-[#0E4C86] focus:ring-[#1E86D4] bg-white/20 border-white/30 mr-3.5 cursor-pointer"
        }
      ), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("span", { className: "font-bold text-xs sm:text-sm md:text-base block" }, service.name), /* @__PURE__ */ React.createElement("span", { className: "text-[11px] text-emerald-100 font-medium" }, "\u7D0D\u5F97\u4FA1\u683C\uFF1A", service.price.toLocaleString(), "\u5186 / ", service.unit))), itemInCart && /* @__PURE__ */ React.createElement("div", { className: "flex items-center bg-slate-900/60 rounded-lg overflow-hidden p-1 border border-white/10 shrink-0" }, /* @__PURE__ */ React.createElement(
        "button",
        {
          onClick: () => updateQuantity(service.id, -1),
          className: "px-2.5 py-1 text-xs hover:bg-white/10 rounded font-bold"
        },
        "\u2212"
      ), /* @__PURE__ */ React.createElement("span", { className: "px-3 font-bold text-xs sm:text-sm" }, itemInCart.qty), /* @__PURE__ */ React.createElement(
        "button",
        {
          onClick: () => updateQuantity(service.id, 1),
          className: "px-2.5 py-1 text-xs hover:bg-white/10 rounded font-bold"
        },
        "\uFF0B"
      ))), itemInCart && service.options.length > 0 && /* @__PURE__ */ React.createElement("div", { className: "mt-3.5 pl-8 pt-3 border-t border-white/10 space-y-2" }, /* @__PURE__ */ React.createElement("p", { className: "text-[11px] text-emerald-100 font-bold" }, "\u8FFD\u52A0\u30AA\u30D7\u30B7\u30E7\u30F3\uFF1A"), service.options.map((opt, optIdx) => {
        const isOptChecked = itemInCart.options.includes(optIdx);
        return /* @__PURE__ */ React.createElement("label", { key: optIdx, className: "flex items-center justify-between bg-white/5 hover:bg-white/10 p-2 rounded-lg cursor-pointer text-xs" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center" }, /* @__PURE__ */ React.createElement(
          "input",
          {
            type: "checkbox",
            checked: isOptChecked,
            onChange: () => handleEstimateToggle(service.id, optIdx),
            className: "w-4 h-4 rounded text-[#1E86D4] bg-white/20 mr-2"
          }
        ), /* @__PURE__ */ React.createElement("span", null, opt.name)), /* @__PURE__ */ React.createElement("span", { className: "font-bold text-[#FAF7F2]" }, "+", opt.extraPrice.toLocaleString(), "\u5186"));
      })));
    }))), /* @__PURE__ */ React.createElement("div", { className: "lg:col-span-5 bg-white text-[#333333] rounded-2xl p-6 sm:p-8 shadow-2xl space-y-6" }, /* @__PURE__ */ React.createElement("div", { className: "border-b border-slate-100 pb-4" }, /* @__PURE__ */ React.createElement("h3", { className: "text-base sm:text-lg font-bold text-[#0E4C86] font-rounded" }, "\u2461 \u7D0D\u5F97\u304A\u898B\u7A4D\u308A\u91D1\u984D\u5408\u8A08"), /* @__PURE__ */ React.createElement("p", { className: "text-xs text-slate-400 mt-1" }, "\u9078\u3093\u3060\u30E1\u30CB\u30E5\u30FC\u306E\u660E\u6717\u306A\u5185\u8A33\u3067\u3059\uFF08\u7A0E\u8FBC\uFF09")), /* @__PURE__ */ React.createElement("div", { className: "space-y-3 min-h-[160px]" }, Object.keys(estimateCart).length === 0 ? /* @__PURE__ */ React.createElement("div", { className: "flex flex-col items-center justify-center py-10 text-slate-400 text-xs sm:text-sm text-center" }, /* @__PURE__ */ React.createElement("svg", { className: "w-10 h-10 mb-2.5 text-slate-300", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24" }, /* @__PURE__ */ React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", d: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" })), /* @__PURE__ */ React.createElement("span", null, "\u304A\u6383\u9664\u9805\u76EE\u3092\u9078\u629E\u3059\u308B\u3068\u3001", /* @__PURE__ */ React.createElement("br", null), "\u3053\u3061\u3089\u306B\u30EA\u30A2\u30EB\u30BF\u30A4\u30E0\u3067\u53CD\u6620\u3055\u308C\u307E\u3059\u3002")) : Object.entries(estimateCart).map(([id, item]) => {
      const s = servicesData.find((x) => x.id === id);
      if (!s) return null;
      let baseTotal = s.price;
      const selectedOpts = item.options.map((optIdx) => {
        baseTotal += s.options[optIdx].extraPrice;
        return s.options[optIdx].name;
      });
      const rowTotal = baseTotal * item.qty;
      return /* @__PURE__ */ React.createElement("div", { key: id, className: "flex justify-between items-start text-xs border-b border-slate-100 pb-2.5" }, /* @__PURE__ */ React.createElement("div", { className: "space-y-0.5" }, /* @__PURE__ */ React.createElement("span", { className: "font-bold text-[#0E4C86]" }, s.name, " \xD7 ", item.qty), selectedOpts.length > 0 && /* @__PURE__ */ React.createElement("span", { className: "block text-slate-400 text-[9px]" }, "\u30AA\u30D7\u30B7\u30E7\u30F3\uFF1A", selectedOpts.join(", "))), /* @__PURE__ */ React.createElement("span", { className: "font-bold text-[#0E4C86]" }, rowTotal.toLocaleString(), "\u5186"));
    })), /* @__PURE__ */ React.createElement("div", { className: "bg-[#EAF5FF] rounded-xl p-4 border border-[#1E86D4]/40 space-y-2" }, /* @__PURE__ */ React.createElement("div", { className: "flex justify-between items-center text-xs" }, /* @__PURE__ */ React.createElement("span", { className: "font-bold text-[#333333]/70" }, "\u304A\u6383\u9664\u306E\u5408\u8A08\u7B87\u6240\u6570"), /* @__PURE__ */ React.createElement("span", { className: "font-extrabold text-[#0E4C86]" }, Object.values(estimateCart).reduce((acc, cur) => acc + cur.qty, 0), " \u7B87\u6240")), /* @__PURE__ */ React.createElement("div", { className: "flex justify-between items-end pt-3 border-t border-slate-200" }, /* @__PURE__ */ React.createElement("span", { className: "text-xs sm:text-sm font-bold text-[#0E4C86] font-rounded" }, "\u7D0D\u5F97\u898B\u7A4D\u91D1\u984D\u5408\u8A08"), /* @__PURE__ */ React.createElement("div", { className: "text-right" }, /* @__PURE__ */ React.createElement("span", { className: "text-3xl font-extrabold text-[#0E4C86] font-rounded" }, calculateTotal().toLocaleString()), /* @__PURE__ */ React.createElement("span", { className: "text-xs font-bold text-[#0E4C86] ml-1" }, "\u5186")))), /* @__PURE__ */ React.createElement("div", { className: "text-center" }, /* @__PURE__ */ React.createElement("p", { className: "text-[10px] text-slate-400 mb-4 font-gothic" }, "\u203B\u51FA\u5F35\u4EA4\u901A\u8CBB\u306F\u5BFE\u8C61\u30A8\u30EA\u30A2\u5185\u7121\u6599\u3002\u4E8B\u524D\u898B\u7A4D\u3082\u308A\u4EE5\u5916\u306E\u8FFD\u52A0\u8ACB\u6C42\u306F\u4E00\u5207\u767A\u751F\u3044\u305F\u3057\u307E\u305B\u3093\u3002"), /* @__PURE__ */ React.createElement(
      "a",
      {
        href: "#contact",
        className: `w-full block text-center py-4 rounded-xl font-bold text-xs sm:text-sm tracking-wider transition-all shadow-md ${Object.keys(estimateCart).length > 0 ? "bg-[#0E4C86] text-white hover:bg-[#0E4C86]/90 shadow-[#F5921E]/30 cursor-pointer" : "bg-slate-100 text-slate-400 cursor-not-allowed"}`,
        onClick: (e) => {
          if (Object.keys(estimateCart).length === 0) {
            e.preventDefault();
          }
        }
      },
      "\u3053\u306E\u30B7\u30DF\u30E5\u30EC\u30FC\u30B7\u30E7\u30F3\u7D50\u679C\u3067\u4E88\u7D04\u76F8\u8AC7\u3078\u9032\u3080"
    )))))), /* @__PURE__ */ React.createElement("section", { id: "youtube", className: "py-24 bg-white" }, /* @__PURE__ */ React.createElement("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, /* @__PURE__ */ React.createElement("div", { className: "grid lg:grid-cols-12 gap-16 items-center" }, /* @__PURE__ */ React.createElement("div", { className: "lg:col-span-5 space-y-6" }, /* @__PURE__ */ React.createElement("span", { className: "text-[#1E86D4] font-bold text-xs tracking-widest block uppercase font-rounded" }, "TRUST & VISIBILITY"), /* @__PURE__ */ React.createElement("h2", { className: "text-2xl sm:text-4xl font-bold text-[#0E4C86] leading-tight font-rounded" }, "\u5168\u304A\u6383\u9664\u4F5C\u696D\u306E\u69D8\u5B50\u3092", /* @__PURE__ */ React.createElement("br", null), "YouTube\u3067\u4F59\u3055\u305A\u914D\u4FE1"), /* @__PURE__ */ React.createElement("div", { className: "w-12 h-[2px] bg-[#1E86D4]" }), /* @__PURE__ */ React.createElement("p", { className: "text-[#333333]/90 text-xs sm:text-sm leading-relaxed font-gothic" }, "\u304A\u305D\u3046\u3058\u4FC2\u30C6\u30A3\u30C7\u30A3\u30BA\u30CF\u30A6\u30B9\u3067\u306F\u3001\u30B9\u30BF\u30C3\u30D5\u306B\u3088\u308B\u30A8\u30A2\u30B3\u30F3\u6D17\u6D44\u306E\u5177\u4F53\u7684\u306A\u624B\u9806\u3084\u3001\u6C34\u56DE\u308A\u6D17\u6D44\u306E\u4E00\u90E8\u59CB\u7D42\u3092YouTube\u30C1\u30E3\u30F3\u30CD\u30EB\u306B\u3066\u3059\u3079\u3066\u30AA\u30FC\u30D7\u30F3\u306B\u3057\u3066\u304A\u308A\u307E\u3059\u3002"), /* @__PURE__ */ React.createElement("p", { className: "text-[#333333]/90 text-xs sm:text-sm leading-relaxed font-gothic" }, "\u300C\u8AB0\u304C\u6765\u3066\u3001\u3069\u306E\u3088\u3046\u306B\u4F5C\u696D\u3057\u3066\u3044\u308B\u304B\u300D\u3092\u4E8B\u524D\u306B\u304A\u5BA2\u3055\u307E\u81EA\u8EAB\u306E\u76EE\u3067\u78BA\u8A8D\u3067\u304D\u308B\u304B\u3089\u3053\u305D\u3001\u521D\u3081\u306E\u304A\u7533\u3057\u8FBC\u307F\u3067\u3082\u4F59\u8A08\u306A\u5FC3\u914D\u306A\u304F\u3001\u5FC3\u304B\u3089\u5B89\u5FC3\u3057\u3066\u3054\u4F9D\u983C\u3044\u305F\u3060\u3051\u307E\u3059\u3002"), /* @__PURE__ */ React.createElement("div", { className: "p-4 bg-[#EAF5FF] rounded-xl border border-[#1E86D4]/30 flex items-center gap-4" }, /* @__PURE__ */ React.createElement("div", { className: "w-12 h-12 rounded-full bg-red-100 flex items-center justify-center shrink-0" }, /* @__PURE__ */ React.createElement("svg", { className: "w-6 h-6 text-red-600 fill-current", viewBox: "0 0 24 24" }, /* @__PURE__ */ React.createElement("path", { d: "M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.507a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.87.507 9.388.507 9.388.507s7.518 0 9.388-.507a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" }))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("span", { className: "block font-bold text-[#0E4C86] text-xs sm:text-sm font-rounded" }, "\u516C\u5F0F\u304A\u305D\u3046\u3058\u5B9F\u6CC1\u30C1\u30E3\u30F3\u30CD\u30EB"), /* @__PURE__ */ React.createElement("p", { className: "text-[10px] text-slate-400 mt-0.5 font-gothic" }, "\u719F\u7DF4\u30B9\u30BF\u30C3\u30D5\u306E\u624B\u5143\u306E\u3053\u3060\u308F\u308A\u3001\u9AD8\u5727\u6D17\u6D44\u306E\u5A01\u529B\u3092\u516C\u958B\u4E2D\uFF01")))), /* @__PURE__ */ React.createElement("div", { className: "lg:col-span-7" }, /* @__PURE__ */ React.createElement("div", { className: "relative aspect-video w-full bg-slate-900 rounded-2xl shadow-xl overflow-hidden group border border-[#1E86D4]/30" }, /* @__PURE__ */ React.createElement(
      "img",
      {
        src: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1000&q=80",
        alt: "YouTube\u4F5C\u696D\u5B9F\u6CC1\u30B5\u30E0\u30CD\u30A4\u30EB",
        className: "w-full h-full object-cover opacity-80 group-hover:scale-103 transition-transform duration-700"
      }
    ), /* @__PURE__ */ React.createElement("div", { className: "absolute inset-0 bg-black/45 group-hover:bg-black/35 transition-colors" }), /* @__PURE__ */ React.createElement("div", { className: "absolute inset-0 flex flex-col items-center justify-center text-white p-6" }, /* @__PURE__ */ React.createElement("div", { className: "w-16 h-16 sm:w-20 sm:h-20 bg-red-600 rounded-full flex items-center justify-center shadow-xl hover:bg-red-700 active:scale-95 transition-all duration-300" }, /* @__PURE__ */ React.createElement("svg", { className: "w-8 h-8 text-white fill-current ml-1", viewBox: "0 0 24 24" }, /* @__PURE__ */ React.createElement("path", { d: "M8 5v14l11-7z" }))), /* @__PURE__ */ React.createElement("span", { className: "mt-4 font-bold text-xs sm:text-sm tracking-widest block drop-shadow-md font-rounded" }, "\u30AF\u30EA\u30C3\u30AF\u3057\u3066YouTube\u3067\u5B9F\u969B\u306E\u4F5C\u696D\u3092\u30C1\u30A7\u30C3\u30AF"), /* @__PURE__ */ React.createElement("span", { className: "text-[10px] text-slate-300 drop-shadow mt-1 font-gothic" }, "\u203B\u5916\u90E8\u306EYouTube\u516C\u5F0F\u30B5\u30A4\u30C8\u304C\u958B\u304D\u307E\u3059")), /* @__PURE__ */ React.createElement("div", { className: "absolute top-4 left-4 right-4 flex items-center justify-between text-white drop-shadow" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-2" }, /* @__PURE__ */ React.createElement("div", { className: "w-7 h-7 rounded-full bg-[#1E86D4] flex items-center justify-center font-bold text-[10px] text-white" }, "T"), /* @__PURE__ */ React.createElement("span", { className: "font-bold text-[11px] sm:text-xs font-rounded" }, "\u3010\u30CE\u30FC\u30AB\u30C3\u30C8\u3011\u30D7\u30ED\u304C\u89E3\u8AAC\u3059\u308B\uFF01\u30A8\u30A2\u30B3\u30F3\u5206\u89E3\u30FB\u9AD8\u5727\u6D17\u6D44\u306E\u4E00\u90E8\u59CB\u7D42"))), /* @__PURE__ */ React.createElement(
      "a",
      {
        href: "https://www.youtube.com",
        target: "_blank",
        rel: "noopener noreferrer",
        className: "absolute inset-0 z-20 cursor-pointer",
        "aria-label": "\u516C\u5F0FYouTube\u30EA\u30F3\u30AF"
      }
    )))))), /* @__PURE__ */ React.createElement("section", { id: "flow", className: "py-24 bg-[#EAF5FF] border-t border-slate-100" }, /* @__PURE__ */ React.createElement("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, /* @__PURE__ */ React.createElement("div", { className: "text-center max-w-3xl mx-auto space-y-3 mb-16" }, /* @__PURE__ */ React.createElement("span", { className: "text-[#1E86D4] font-bold text-xs tracking-widest block font-rounded" }, "ORDER FLOW"), /* @__PURE__ */ React.createElement("h2", { className: "text-2xl sm:text-4xl font-bold text-[#0E4C86] font-rounded" }, "\u304A\u7533\u8FBC\u307F\u304B\u3089\u30B5\u30FC\u30D3\u30B9\u63D0\u4F9B\u307E\u3067\u306E\u6D41\u308C"), /* @__PURE__ */ React.createElement("div", { className: "w-12 h-[2px] bg-[#1E86D4]/50 mx-auto mt-4" }), /* @__PURE__ */ React.createElement("p", { className: "text-[#333333]/80 text-xs sm:text-sm pt-2 leading-relaxed" }, "\u304A\u5BA2\u3055\u307E\u306E\u624B\u3092\u7169\u308F\u305B\u306A\u3044\u3001\u5927\u5909\u30B7\u30F3\u30D7\u30EB\u3067\u30B9\u30E0\u30FC\u30BA\u306A\u3084\u308A\u3068\u308A\u3092\u5FC3\u639B\u3051\u3066\u304A\u308A\u307E\u3059\u3002")), /* @__PURE__ */ React.createElement("div", { className: "grid md:grid-cols-4 gap-12 md:gap-8 pt-4" }, /* @__PURE__ */ React.createElement("div", { className: "bg-white rounded-2xl p-6 pt-10 shadow-sm border border-[#1E86D4]/20 flex flex-col justify-between relative" }, /* @__PURE__ */ React.createElement("div", { className: "absolute top-0 left-6 -translate-y-1/2 bg-[#1E86D4] text-white font-bold px-3.5 py-1.5 rounded-full text-xs font-rounded shadow-md tracking-wider" }, "STEP 01"), /* @__PURE__ */ React.createElement("div", { className: "space-y-3" }, /* @__PURE__ */ React.createElement("h3", { className: "font-bold text-base text-[#0E4C86] font-rounded" }, "\u304A\u554F\u3044\u5408\u308F\u305B\u30FB\u898B\u7A4D\u4F9D\u983C"), /* @__PURE__ */ React.createElement("p", { className: "text-xs text-[#333333]/90 leading-relaxed font-gothic" }, "\u672C\u30B5\u30A4\u30C8\u306E\u30B7\u30DF\u30E5\u30EC\u30FC\u30BF\u30FC\u3001\u307E\u305F\u306F\u304A\u96FB\u8A71\uFF08050-6870-6753\uFF09\u3001\u516C\u5F0FLINE\u304B\u3089\u3054\u5E0C\u671B\u30E1\u30CB\u30E5\u30FC\u3092\u3054\u9023\u7D61\u304F\u3060\u3055\u3044\u3002")), /* @__PURE__ */ React.createElement("div", { className: "mt-4 pt-3 border-t border-slate-50 text-[10px] text-[#1E86D4] font-bold font-rounded" }, "\u203B\u3082\u3061\u308D\u3093\u304A\u898B\u7A4D\u3082\u308A\u306F100%\u7121\u6599\u3067\u3059")), /* @__PURE__ */ React.createElement("div", { className: "bg-white rounded-2xl p-6 pt-10 shadow-sm border border-[#1E86D4]/20 flex flex-col justify-between relative" }, /* @__PURE__ */ React.createElement("div", { className: "absolute top-0 left-6 -translate-y-1/2 bg-[#1E86D4] text-white font-bold px-3.5 py-1.5 rounded-full text-xs font-rounded shadow-md tracking-wider" }, "STEP 02"), /* @__PURE__ */ React.createElement("div", { className: "space-y-3" }, /* @__PURE__ */ React.createElement("h3", { className: "font-bold text-base text-[#0E4C86] font-rounded" }, "\u65E5\u7A0B\u306E\u8ABF\u6574\uFF06\u6599\u91D1\u306E\u78BA\u5B9A"), /* @__PURE__ */ React.createElement("p", { className: "text-xs text-[#333333]/90 leading-relaxed font-gothic" }, "\u62C5\u5F53\u8005\u3088\u308A\u3054\u5E0C\u671B\u65E5\u6642\u3092\u3046\u304B\u304C\u3044\u3001\u8A2A\u554F\u30D7\u30E9\u30F3\u3092\u8ABF\u6574\u3002\u4E8B\u524D\u306E\u304A\u898B\u7A4D\u3082\u308A\u3067\u6700\u7D42\u7684\u306A\u300C\u3054\u7D0D\u5F97\u6599\u91D1\u300D\u3092\u4E8B\u524D\u306B\u660E\u793A\u3057\u307E\u3059\u3002")), /* @__PURE__ */ React.createElement("div", { className: "mt-4 pt-3 border-t border-slate-50 text-[10px] text-[#1E86D4] font-bold font-rounded" }, "\u203B\u3054\u90FD\u5408\u306B\u5FDC\u3058\u305F\u65E5\u6642\u5909\u66F4\u3082\u67D4\u8EDF\u306B\u5BFE\u5FDC")), /* @__PURE__ */ React.createElement("div", { className: "bg-white rounded-2xl p-6 pt-10 shadow-sm border border-[#1E86D4]/20 flex flex-col justify-between relative" }, /* @__PURE__ */ React.createElement("div", { className: "absolute top-0 left-6 -translate-y-1/2 bg-[#1E86D4] text-white font-bold px-3.5 py-1.5 rounded-full text-xs font-rounded shadow-md tracking-wider" }, "STEP 03"), /* @__PURE__ */ React.createElement("div", { className: "space-y-3" }, /* @__PURE__ */ React.createElement("h3", { className: "font-bold text-base text-[#0E4C86] font-rounded" }, "\u30D7\u30ED\u306B\u3088\u308B\u5165\u5FF5\u306A\u304A\u6383\u9664"), /* @__PURE__ */ React.createElement("p", { className: "text-xs text-[#333333]/90 leading-relaxed font-gothic" }, "\u78BA\u5B9A\u3057\u305F\u65E5\u6642\u306B\u5C02\u9580\u30B9\u30BF\u30C3\u30D5\u304C\u6A5F\u6750\u3092\u6301\u53C2\u3057\u8A2A\u554F\u3002\u4F5C\u696D\u7B87\u6240\u306E\u5468\u56F2\u3092\u53B3\u91CD\u306B\u4FDD\u8B77\u3057\u305F\u4E0A\u3067\u3001\u4E01\u5BE7\u306B\u30AF\u30EA\u30FC\u30CB\u30F3\u30B0\u3092\u5B9F\u884C\u3057\u307E\u3059\u3002")), /* @__PURE__ */ React.createElement("div", { className: "mt-4 pt-3 border-t border-slate-50 text-[10px] text-[#1E86D4] font-bold font-rounded" }, "\u203B\u6C5A\u308C\u304C\u843D\u3061\u3066\u3044\u304F\u5DE5\u7A0B\u3092\u4E00\u7DD2\u306B\u78BA\u8A8D\u53EF\u80FD")), /* @__PURE__ */ React.createElement("div", { className: "bg-white rounded-2xl p-6 pt-10 shadow-sm border border-[#1E86D4]/20 flex flex-col justify-between relative" }, /* @__PURE__ */ React.createElement("div", { className: "absolute top-0 left-6 -translate-y-1/2 bg-[#1E86D4] text-white font-bold px-3.5 py-1.5 rounded-full text-xs font-rounded shadow-md tracking-wider" }, "STEP 04"), /* @__PURE__ */ React.createElement("div", { className: "space-y-3" }, /* @__PURE__ */ React.createElement("h3", { className: "font-bold text-base text-[#0E4C86] font-rounded" }, "\u5B8C\u4E86\u78BA\u8A8D\u3068\u7D0D\u5F97\u304A\u652F\u6255\u3044"), /* @__PURE__ */ React.createElement("p", { className: "text-xs text-[#333333]/90 leading-relaxed font-gothic" }, "\u30AF\u30EA\u30FC\u30CB\u30F3\u30B0\u7D42\u4E86\u5F8C\u3001\u304A\u5BA2\u69D8\u306B\u4ED5\u4E0A\u304C\u308A\u3092\u3057\u3063\u304B\u308A\u3068\u3054\u78BA\u8A8D\u3044\u305F\u3060\u304D\u307E\u3059\u3002\u3054\u6E80\u8DB3\u3044\u305F\u3060\u3044\u305F\u5F8C\u306B\u306E\u307F\u6C7A\u6E08\u3068\u306A\u308A\u307E\u3059\u3002")), /* @__PURE__ */ React.createElement("div", { className: "mt-4 pt-3 border-t border-slate-50 text-[10px] text-[#1E86D4] font-bold font-rounded" }, "\u203B\u4E0D\u5F53\u306A\u8FFD\u52A0\u8CBB\u7528\u306E\u767A\u751F\u306A\u3069\u306F\u4E00\u5207\u306A\u3057"))))), /* @__PURE__ */ React.createElement("section", { id: "faq", className: "py-24 bg-white" }, /* @__PURE__ */ React.createElement("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8" }, /* @__PURE__ */ React.createElement("div", { className: "text-center space-y-3 mb-16" }, /* @__PURE__ */ React.createElement("span", { className: "text-[#1E86D4] font-bold text-xs tracking-widest block font-rounded" }, "FREQUENT QUESTIONS"), /* @__PURE__ */ React.createElement("h2", { className: "text-2xl sm:text-4xl font-bold text-[#0E4C86] font-rounded" }, "\u304A\u305D\u3046\u3058\u306B\u95A2\u3059\u308B\u3088\u304F\u3042\u308B\u3054\u8CEA\u554F"), /* @__PURE__ */ React.createElement("div", { className: "w-12 h-[2px] bg-[#1E86D4]/50 mx-auto mt-4" })), /* @__PURE__ */ React.createElement("div", { className: "space-y-4" }, [
      {
        q: "\u306A\u305C\u3053\u3053\u307E\u3067\u300C\u7D0D\u5F97\u4FA1\u683C\u300D\u3067\u4E0A\u8CEA\u306A\u30B5\u30FC\u30D3\u30B9\u304C\u3067\u304D\u308B\u306E\u3067\u3059\u304B\uFF1F",
        a: "\u7279\u5B9A\u306E\u5E02\u533A\u753A\u6751\u306B\u7D5E\u3063\u305F\u96C6\u4E2D\u8A2A\u554F\u30EB\u30FC\u30C8\u55B6\u696D\u3092\u7D44\u307F\u3001\u7121\u99C4\u306A\u5E83\u544A\u8CBB\u3092\u5FB9\u5E95\u3057\u3066\u6291\u3048\u308B\u3053\u3068\u3067\u3001\u30B5\u30FC\u30D3\u30B9\u306E\u8CEA\u3092\u843D\u3068\u3059\u3053\u3068\u306A\u304F\u7D0D\u5F97\u306E\u9069\u6B63\u4FA1\u683C\u3092\u5B9F\u73FE\u3057\u3066\u3044\u307E\u3059\u3002\u3082\u3061\u308D\u3093\u4F7F\u7528\u3059\u308B\u6D17\u5264\u3001\u9AD8\u5727\u6D17\u6D44\u306E\u6A5F\u6750\u3001\u30B9\u30BF\u30C3\u30D5\u306E\u6280\u8853\u3059\u3079\u3066\u81EA\u793E\u8CAC\u4EFB\u306E\u30D7\u30ED\u4ED5\u69D8\u3067\u3059\u3002"
      },
      {
        q: "\u51FA\u5F35\u5BFE\u5FDC\u53EF\u80FD\u30A8\u30EA\u30A2\u306F\u3069\u3053\u3067\u3059\u304B\uFF1F\u672C\u5F53\u306B\u51FA\u5F35\u4EA4\u901A\u8CBB\u306E\u8ACB\u6C42\u306F\u3042\u308A\u307E\u305B\u3093\u304B\uFF1F",
        a: "\u6771\u4EAC\u90FD\u3001\u57FC\u7389\u770C\u3001\u5343\u8449\u770C\u5168\u57DF\u304A\u3088\u3073\u305D\u306E\u8FD1\u8FBA\u306B\u5BFE\u5FDC\u3057\u3066\u304A\u308A\u307E\u3059\u3002\u4E8B\u524D\u304A\u898B\u7A4D\u3082\u308A\u4EE5\u5916\u306E\u51FA\u5F35\u4EA4\u901A\u8CBB\u7B49\u306F\u4E00\u5207\u9802\u3044\u3066\u304A\u308A\u307E\u305B\u3093\u3002\u3054\u81EA\u5B85\u306B\u99D0\u8ECA\u30B9\u30DA\u30FC\u30B9\u304C\u306A\u3044\u5834\u5408\u3001\u8FD1\u96A3\u306E\u30B3\u30A4\u30F3\u30D1\u30FC\u30AD\u30F3\u30B0\u3092\u5229\u7528\u3044\u305F\u3057\u307E\u3059\u3002\u305D\u306E\u969B\u306E\u99D0\u8ECA\u5834\u4EE3\uFF08\u5B9F\u8CBB\uFF09\u3082\u5F53\u793E\u304C\u8CA0\u62C5\u3044\u305F\u3057\u307E\u3059\u306E\u3067\u3054\u5B89\u5FC3\u304F\u3060\u3055\u3044\u3002"
      },
      {
        q: "\u30A8\u30A2\u30B3\u30F3\u304C\u304A\u6383\u9664\u6A5F\u80FD\u4ED8\u304D\u304B\u308F\u304B\u3089\u306A\u3044\u306E\u3067\u3059\u304C\u3001\u5BFE\u5FDC\u3067\u304D\u307E\u3059\u304B\uFF1F",
        a: "\u306F\u3044\u3001\u3082\u3061\u308D\u3093\u5BFE\u5FDC\u53EF\u80FD\u3067\u3059\u3002\u30EA\u30E2\u30B3\u30F3\u306B\u300C\u304A\u305D\u3046\u3058\u300D\u300C\u30D5\u30A3\u30EB\u30BF\u30FC\u6E05\u6383\u300D\u306A\u3069\u306E\u30DC\u30BF\u30F3\u304C\u3042\u308B\u3001\u307E\u305F\u306F\u30A8\u30A2\u30B3\u30F3\u672C\u4F53\u306E\u30C0\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9\u306A\u3069\u306E\u6709\u7121\u3067\u5224\u5B9A\u3067\u304D\u307E\u3059\u3002\u304A\u7533\u3057\u8FBC\u307F\u6642\u306B\u578B\u756A\u7B49\u3092\u304A\u77E5\u3089\u305B\u3044\u305F\u3060\u3051\u308C\u3070\u3001\u3053\u3061\u3089\u3067\u4E8B\u524D\u306B\u304A\u8ABF\u3079\u3059\u308B\u3053\u3068\u3082\u53EF\u80FD\u3067\u3059\u3002"
      },
      {
        q: "\u5F53\u65E5\u4F5C\u696D\u958B\u59CB\u307E\u3067\u306B\u4F55\u304B\u81EA\u5206\u3067\u52D5\u304B\u3057\u305F\u308A\u3001\u6E96\u5099\u3059\u308B\u3082\u306E\u306F\u3042\u308A\u307E\u3059\u304B\uFF1F",
        a: "\u30A8\u30A2\u30B3\u30F3\u9AD8\u5727\u6D17\u6D44\u306E\u5834\u5408\u3001\u771F\u4E0B\u306B\u811A\u7ACB\u3092\u7ACB\u3066\u3066\u7CBE\u5BC6\u306A\u990A\u751F\u3092\u884C\u3044\u307E\u3059\u3002\u30A8\u30A2\u30B3\u30F3\u4E0B\u306E\u30D9\u30C3\u30C9\u3001\u30C6\u30EC\u30D3\u3001\u30C7\u30B9\u30AF\u3084\u5927\u5207\u306A\u5C0F\u7269\u304C\u3082\u3057\u3054\u3056\u3044\u307E\u3057\u305F\u3089\u3001\u4E8B\u524D\u306B\u79FB\u52D5\u3057\u3066\u304A\u3044\u3066\u3044\u305F\u3060\u3051\u307E\u3059\u3068\u4F5C\u696D\u304C\u30B9\u30E0\u30FC\u30BA\u306B\u958B\u59CB\u3067\u304D\u307E\u3059\u3002\u307E\u305F\u3001\u30D1\u30FC\u30C4\u6D17\u6D44\u306E\u305F\u3081\u6D74\u5BA4\u3084\u6C34\u6D17\u3092\u304A\u501F\u308A\u3059\u308B\u3053\u3068\u304C\u3054\u3056\u3044\u307E\u3059\u3002"
      },
      {
        q: "\u6C5A\u308C\u304C\u304B\u306A\u308A\u6FC0\u3057\u3044\u306E\u3067\u3059\u304C\u3001\u8FFD\u52A0\u306E\u5BFE\u5FDC\u6599\u306F\u767A\u751F\u3057\u307E\u3059\u304B\uFF1F",
        a: "\u3069\u308C\u307B\u3069\u6C5A\u308C\u304C\u84C4\u7A4D\u3057\u3066\u3044\u3066\u3082\u3001\u6700\u521D\u306E\u304A\u898B\u7A4D\u91D1\u984D\u304B\u3089\u8FFD\u52A0\u3055\u308C\u308B\u3053\u3068\u306F\u4E00\u5207\u3054\u3056\u3044\u307E\u305B\u3093\u3002\u30D7\u30ED\u4ED5\u69D8\u306E\u6D17\u5264\u30FB\u6A5F\u6750\u3092\u99C6\u4F7F\u3057\u3001\u9A5A\u304F\u307B\u3069\u304D\u308C\u3044\u306B\u5206\u89E3\u6D17\u6D44\u3044\u305F\u3057\u307E\u3059\u3002\u30AB\u30D3\u3084\u6CB9\u6C5A\u308C\u3092\u8AE6\u3081\u3066\u3057\u307E\u3046\u524D\u306B\u3001\u305C\u3072\u3054\u76F8\u8AC7\u304F\u3060\u3055\u3044\u3002"
      }
    ].map((item, idx) => {
      const isOpen = !!faqOpen[idx];
      return /* @__PURE__ */ React.createElement("div", { key: idx, className: "bg-[#EAF5FF]/60 rounded-xl border border-[#1E86D4]/20 overflow-hidden transition-all duration-300" }, /* @__PURE__ */ React.createElement(
        "button",
        {
          onClick: () => toggleFaq(idx),
          className: "w-full text-left p-5 flex justify-between items-center font-bold text-[#0E4C86] hover:bg-[#EAF5FF] transition-colors focus:outline-none"
        },
        /* @__PURE__ */ React.createElement("span", { className: "pr-4 text-xs sm:text-sm md:text-base flex items-start" }, /* @__PURE__ */ React.createElement("span", { className: "text-[#1E86D4] mr-2.5 font-bold font-rounded" }, "Q."), item.q),
        /* @__PURE__ */ React.createElement("svg", { className: `w-5 h-5 text-slate-400 transition-transform duration-300 shrink-0 ${isOpen ? "rotate-180" : ""}`, fill: "none", stroke: "currentColor", viewBox: "0 0 24 24" }, /* @__PURE__ */ React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2.5", d: "M19 9l-7 7-7-7" }))
      ), isOpen && /* @__PURE__ */ React.createElement("div", { className: "p-5 bg-white border-t border-[#1E86D4]/20 text-xs sm:text-sm text-[#333333] leading-relaxed flex items-start transition-all" }, /* @__PURE__ */ React.createElement("span", { className: "text-[#1E86D4] mr-2.5 font-bold font-rounded" }, "A."), /* @__PURE__ */ React.createElement("div", null, item.a)));
    })))), /* @__PURE__ */ React.createElement("section", { id: "contact", className: "py-24 bg-[#EAF5FF] border-t border-slate-100" }, /* @__PURE__ */ React.createElement("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8" }, /* @__PURE__ */ React.createElement("div", { id: "validation-error-anchor" }), /* @__PURE__ */ React.createElement("div", { className: "bg-white rounded-3xl shadow-xl border border-[#1E86D4]/20 overflow-hidden" }, /* @__PURE__ */ React.createElement("div", { className: "bg-[#0E4C86] p-8 sm:p-10 text-white text-center space-y-2.5" }, /* @__PURE__ */ React.createElement("span", { className: "bg-white/10 text-emerald-100 text-xs font-bold px-3.5 py-1 rounded-full tracking-widest inline-block uppercase font-rounded" }, "CONTACT FORM"), /* @__PURE__ */ React.createElement("h2", { className: "text-2xl sm:text-3xl font-bold font-rounded text-white" }, "\u7121\u6599\u304A\u898B\u7A4D\u308A\u30FB\u304A\u554F\u3044\u5408\u308F\u305B"), /* @__PURE__ */ React.createElement("p", { className: "text-xs sm:text-sm text-emerald-50/85 max-w-xl mx-auto leading-relaxed" }, "\u4EE5\u4E0B\u306E\u30D5\u30A9\u30FC\u30E0\u306B\u3054\u5165\u529B\u304F\u3060\u3055\u3044\u3002\u3044\u305F\u3060\u3044\u305F\u5185\u5BB9\u3092\u3082\u3068\u306B\u3001\u62C5\u5F53\u8005\u3088\u308A1\u55B6\u696D\u65E5\u4EE5\u5185\u306B\u4E01\u5BE7\u306B\u3054\u9023\u7D61\u3044\u305F\u3057\u307E\u3059\u3002")), /* @__PURE__ */ React.createElement("div", { className: "p-6 sm:p-10" }, formValidationError && /* @__PURE__ */ React.createElement("div", { className: "mb-6 p-4 bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm rounded-xl flex items-start gap-2.5 font-gothic" }, /* @__PURE__ */ React.createElement("svg", { className: "w-5 h-5 text-red-500 shrink-0 mt-0.5", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24" }, /* @__PURE__ */ React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2.5", d: "M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", { className: "font-bold font-rounded" }, "\u5165\u529B\u5185\u5BB9\u3092\u3054\u78BA\u8A8D\u304F\u3060\u3055\u3044"), /* @__PURE__ */ React.createElement("p", { className: "mt-1" }, formValidationError))), formSubmitted ? /* @__PURE__ */ React.createElement("div", { className: "text-center py-12 space-y-4" }, /* @__PURE__ */ React.createElement("div", { className: "w-16 h-16 bg-[#EAF5FF] text-[#1E86D4] border border-[#1E86D4]/30 rounded-full flex items-center justify-center mx-auto shadow-sm" }, /* @__PURE__ */ React.createElement("svg", { className: "w-8 h-8", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24" }, /* @__PURE__ */ React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "3", d: "M5 13l4 4L19 7" }))), /* @__PURE__ */ React.createElement("h3", { className: "text-xl font-bold text-[#0E4C86] font-rounded" }, "\u304A\u7533\u8FBC\u307F\u76F8\u8AC7\u3092\u9001\u4FE1\u5B8C\u4E86\u3044\u305F\u3057\u307E\u3057\u305F"), /* @__PURE__ */ React.createElement("p", { className: "text-xs sm:text-sm text-[#333333]/70 max-w-md mx-auto leading-relaxed" }, "\u304A\u554F\u5408\u305B\u3044\u305F\u3060\u304D\u3042\u308A\u304C\u3068\u3046\u3054\u3056\u3044\u307E\u3059\u3002\u3054\u5165\u529B\u3055\u308C\u305F\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9\u5B9B\u306B\u81EA\u52D5\u304A\u63A7\u3048\u3092\u304A\u9001\u308A\u3044\u305F\u3057\u307E\u3057\u305F\u3002\u62C5\u5F53\u8005\u3088\u308A\u8FC5\u901F\u306B\u3054\u63D0\u6848\u3068\u30B9\u30B1\u30B8\u30E5\u30FC\u30EB\u78BA\u8A8D\u3092\u884C\u3044\u307E\u3059\u3002"), /* @__PURE__ */ React.createElement(
      "button",
      {
        onClick: () => {
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
        },
        className: "mt-6 inline-block bg-[#EAF5FF] hover:bg-slate-200 text-[#0E4C86] border border-[#1E86D4]/20 font-bold px-6 py-3 rounded-lg text-xs tracking-wider transition-all font-rounded"
      },
      "\u65B0\u3057\u3044\u898B\u7A4D\u3082\u308A\u3092\u4F5C\u6210\u3059\u308B"
    )) : /* @__PURE__ */ React.createElement("form", { onSubmit: handleSubmit, className: "space-y-6" }, /* @__PURE__ */ React.createElement("div", { className: "grid md:grid-cols-2 gap-6" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { className: "block text-xs font-bold text-[#0E4C86] mb-2 font-rounded" }, "\u304A\u540D\u524D ", /* @__PURE__ */ React.createElement("span", { className: "text-red-500 font-bold" }, "*")), /* @__PURE__ */ React.createElement(
      "input",
      {
        type: "text",
        name: "name",
        value: formData.name,
        onChange: handleInputChange,
        required: true,
        placeholder: "\u4F8B\uFF09\u5C71\u7530 \u592A\u90CE",
        className: "w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#1E86D4] focus:border-transparent text-xs sm:text-sm text-[#333333]"
      }
    )), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { className: "block text-xs font-bold text-[#0E4C86] mb-2 font-rounded" }, "\u304A\u96FB\u8A71\u756A\u53F7 ", /* @__PURE__ */ React.createElement("span", { className: "text-red-500 font-bold" }, "*")), /* @__PURE__ */ React.createElement(
      "input",
      {
        type: "tel",
        name: "tel",
        value: formData.tel,
        onChange: handleInputChange,
        required: true,
        placeholder: "\u4F8B\uFF09090-1234-5678",
        className: "w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#1E86D4] focus:border-transparent text-xs sm:text-sm text-[#333333]"
      }
    ))), /* @__PURE__ */ React.createElement("div", { className: "grid md:grid-cols-2 gap-6" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { className: "block text-xs font-bold text-[#0E4C86] mb-2 font-rounded" }, "\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9 ", /* @__PURE__ */ React.createElement("span", { className: "text-red-500 font-bold" }, "*")), /* @__PURE__ */ React.createElement(
      "input",
      {
        type: "email",
        name: "email",
        value: formData.email,
        onChange: handleInputChange,
        required: true,
        placeholder: "\u4F8B\uFF09info@example.com",
        className: "w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#1E86D4] focus:border-transparent text-xs sm:text-sm text-[#333333]"
      }
    )), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { className: "block text-xs font-bold text-[#0E4C86] mb-2 font-rounded" }, "\u3054\u5E0C\u671B\u306E\u8A2A\u554F\u30B9\u30B1\u30B8\u30E5\u30FC\u30EB"), /* @__PURE__ */ React.createElement(
      "input",
      {
        type: "text",
        name: "preferredDate",
        value: formData.preferredDate,
        onChange: handleInputChange,
        placeholder: "\u4F8B\uFF0911\u670823\u65E5(\u571F) \u5348\u524D\u67A0\u5E0C\u671B",
        className: "w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#1E86D4] focus:border-transparent text-xs sm:text-sm text-[#333333]"
      }
    ))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { className: "block text-xs font-bold text-[#0E4C86] mb-2 font-rounded" }, "\u3054\u4F4F\u6240 (\u5E02\u533A\u753A\u6751\u307E\u3067\u3067\u3082\u53EF\u80FD\u3067\u3059)"), /* @__PURE__ */ React.createElement(
      "input",
      {
        type: "text",
        name: "address",
        value: formData.address,
        onChange: handleInputChange,
        placeholder: "\u4F8B\uFF09\u6771\u4EAC\u90FD\u8DB3\u7ACB\u533A\u3007\u3007 1-2-3",
        className: "w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#1E86D4] focus:border-transparent text-xs sm:text-sm text-[#333333]"
      }
    )), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "flex justify-between items-center mb-2" }, /* @__PURE__ */ React.createElement("label", { className: "block text-xs font-bold text-[#0E4C86] font-rounded" }, "\u3054\u76F8\u8AC7\u5185\u5BB9\u30FB\u3054\u8981\u671B"), calculateTotal() > 0 && /* @__PURE__ */ React.createElement("span", { className: "text-[10px] bg-[#EAF5FF] text-[#1E86D4] font-bold px-2.5 py-0.5 rounded-full border border-[#1E86D4]/30 font-rounded" }, "\u7D0D\u5F97\u898B\u7A4D\u30B7\u30DF\u30E5\u30EC\u30FC\u30B7\u30E7\u30F3\u7D50\u679C\u3092\u53CD\u6620\u6E08")), /* @__PURE__ */ React.createElement(
      "textarea",
      {
        name: "message",
        value: formData.message,
        onChange: handleInputChange,
        rows: "6",
        placeholder: "\u30A8\u30A2\u30B3\u30F3\u30D5\u30A3\u30EB\u30BF\u30FC\u304A\u6383\u9664\u4ED8\u304D\u304C2\u53F0\u3002\u4ED6\u3001\u304A\u60A9\u307F\u3084\u304A\u805E\u304D\u3057\u305F\u3044\u70B9\u304C\u3054\u3056\u3044\u307E\u3057\u305F\u3089\u81EA\u7531\u306B\u3054\u8A18\u5165\u304F\u3060\u3055\u3044\u3002",
        className: "w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#1E86D4] focus:border-transparent text-xs sm:text-sm font-mono leading-relaxed text-[#333333]"
      }
    )), /* @__PURE__ */ React.createElement("div", { className: "pt-4 text-center" }, /* @__PURE__ */ React.createElement(
      "button",
      {
        type: "submit",
        disabled: isSubmitting,
        className: "bg-[#F5921E] hover:bg-[#F5921E]/90 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold text-sm sm:text-base px-10 py-4.5 rounded-xl shadow-lg shadow-[#F5921E]/30 transition-all w-full sm:w-auto tracking-widest font-rounded"
      },
      isSubmitting ? "\u9001\u4FE1\u4E2D..." : "\u304A\u898B\u7A4D\u308A\u30FB\u304A\u554F\u3044\u5408\u308F\u305B\u3092\u9001\u4FE1\u3059\u308B"
    ), /* @__PURE__ */ React.createElement("p", { className: "text-[10px] text-slate-400 mt-3 font-gothic" }, "\u203B\u304A\u5BA2\u69D8\u306E\u500B\u4EBA\u60C5\u5831\u306FSSL\u901A\u4FE1\u306B\u3088\u308A\u53B3\u91CD\u306B\u4FDD\u8B77\u30FB\u7BA1\u7406\u3055\u308C\u307E\u3059\u3002"))))))), /* @__PURE__ */ React.createElement("footer", { className: "bg-[#0E4C86] text-slate-300 py-16 border-t border-[#0E4C86]/80" }, /* @__PURE__ */ React.createElement("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, /* @__PURE__ */ React.createElement("div", { className: "grid md:grid-cols-12 gap-12 items-start border-b border-slate-800 pb-12" }, /* @__PURE__ */ React.createElement("div", { className: "md:col-span-5 space-y-4" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-3" }, /* @__PURE__ */ React.createElement("div", { className: "w-10 h-10 bg-[#1E86D4] rounded-xl flex items-center justify-center text-white font-bold font-rounded text-lg" }, "T"), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h3", { className: "text-white font-bold text-base font-rounded" }, "\u304A\u305D\u3046\u3058\u4FC2\u30C6\u30A3\u30C7\u30A3\u30BA\u30CF\u30A6\u30B9"), /* @__PURE__ */ React.createElement("p", { className: "text-[10px] text-slate-400 font-medium" }, "\u30C6\u30A3\u30C7\u30A3\u30BA\u304A\u6383\u9664\u4E88\u7D04\u7A93\u53E3"))), /* @__PURE__ */ React.createElement("p", { className: "text-xs text-slate-300 leading-relaxed font-gothic" }, "\u6771\u4EAC\u30FB\u57FC\u7389\u30FB\u5343\u8449\u3092\u4E2D\u5FC3\u306B\u3001\u4E00\u6589\u96C6\u4E2D\u52B9\u7387\u5316\u30EB\u30FC\u30C8\u306B\u3088\u308B\u300C\u672C\u5F53\u306B\u7D0D\u5F97\u3067\u304D\u308B\u5B89\u5FC3\u4FA1\u683C\u300D\u3067\u304A\u6383\u9664\u30B5\u30FC\u30D3\u30B9\u3092\u63D0\u4F9B\u3002\u6280\u8853\u306E\u900F\u660E\u6027\u306B\u3053\u3060\u308F\u308A\u3001\u5168\u30AF\u30EA\u30FC\u30CB\u30F3\u30B0\u5DE5\u7A0B\u3092\u52D5\u753B\u3067\u30AA\u30FC\u30D7\u30F3\u306B\u3057\u3066\u3044\u307E\u3059\u3002")), /* @__PURE__ */ React.createElement("div", { className: "md:col-span-3 space-y-3.5" }, /* @__PURE__ */ React.createElement("h4", { className: "text-white font-bold text-sm font-rounded" }, "\u304A\u6383\u9664\u30E1\u30CB\u30E5\u30FC"), /* @__PURE__ */ React.createElement("ul", { className: "text-xs space-y-2.5 font-gothic" }, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", { href: "#services", className: "hover:text-[#1E86D4] transition-colors" }, "\u30FB\u30A8\u30A2\u30B3\u30F3\u9AD8\u5727\u30AF\u30EA\u30FC\u30CB\u30F3\u30B0")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", { href: "#services", className: "hover:text-[#1E86D4] transition-colors" }, "\u30FB\u63DB\u6C17\u6247\u30FB\u30EC\u30F3\u30B8\u30D5\u30FC\u30C9\u6D17\u6D44")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", { href: "#services", className: "hover:text-[#1E86D4] transition-colors" }, "\u30FB\u304A\u98A8\u5442\u30FB\u6D74\u5BA4\u30AF\u30EA\u30F3\u30EA\u30CD\u30B9")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", { href: "#services", className: "hover:text-[#1E86D4] transition-colors" }, "\u30FB\u30AD\u30C3\u30C1\u30F3\u30FB\u30AC\u30B9\u30EC\u30F3\u30B8\u6E05\u6383")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", { href: "#services", className: "hover:text-[#1E86D4] transition-colors" }, "\u30FB\u30C8\u30A4\u30EC\u30FB\u5C3F\u77F3\u9664\u83CC\u5206\u89E3\u30AF\u30EA\u30FC\u30CB\u30F3\u30B0")))), /* @__PURE__ */ React.createElement("div", { className: "md:col-span-4 space-y-3.5" }, /* @__PURE__ */ React.createElement("h4", { className: "text-white font-bold text-sm font-rounded" }, "\u304A\u305D\u3046\u3058\u53D7\u4ED8\u4E88\u7D04\u30BB\u30F3\u30BF\u30FC"), /* @__PURE__ */ React.createElement("p", { className: "text-xs text-slate-300 leading-relaxed font-gothic" }, "\u304A\u305D\u3046\u3058\u4FC2\u30C6\u30A3\u30C7\u30A3\u30BA\u30CF\u30A6\u30B9 \u672C\u90E8\u7A93\u53E3", /* @__PURE__ */ React.createElement("br", null), "\u5BFE\u5FDC\u53EF\u80FD\u30A8\u30EA\u30A2\uFF1A\u6771\u4EAC\u90FD\u30FB\u57FC\u7389\u770C\u30FB\u5343\u8449\u770C", /* @__PURE__ */ React.createElement("br", null), "\u53D7\u4ED8\u53EF\u80FD\u6642\u9593\uFF1A9:00\u301C19:00 (\u571F\u65E5\u30FB\u795D\u65E5\u3082\u5E74\u4E2D\u7121\u4F11)", /* @__PURE__ */ React.createElement("br", null), "\u96FB\u8A71\u756A\u53F7\uFF1A", /* @__PURE__ */ React.createElement("a", { href: "tel:050-6870-6753", className: "text-[#1E86D4] font-bold hover:underline" }, "050-6870-6753"), /* @__PURE__ */ React.createElement("br", null), "LINE ID\uFF1A@877vzdtl"))), /* @__PURE__ */ React.createElement("div", { className: "pt-8 text-[10px] text-slate-400 leading-relaxed space-y-2.5 font-gothic" }, /* @__PURE__ */ React.createElement("p", { className: "font-bold text-slate-300 font-rounded" }, "\u3010\u500B\u4EBA\u60C5\u5831\u306E\u4FDD\u8B77\u306B\u3064\u3044\u3066\u3011"), /* @__PURE__ */ React.createElement("p", null, "\u5F53\u793E\u304C\u904B\u55B6\u3059\u308B\u672C\u30A6\u30A7\u30D6\u30B5\u30A4\u30C8\u306B\u304A\u3051\u308B\u304A\u7533\u8FBC\u307F\u30FB\u3054\u76F8\u8AC7\u30D5\u30A9\u30FC\u30E0\u3067\u5165\u529B\u3055\u308C\u305F\u304A\u5BA2\u69D8\u306E\u500B\u4EBA\u60C5\u5831\uFF08\u304A\u540D\u524D\u3001\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9\u3001\u3054\u4F4F\u6240\u3001\u96FB\u8A71\u756A\u53F7\u306A\u3069\uFF09\u306F\u3001\u9069\u5207\u306A\u30DE\u30C3\u30C1\u30F3\u30B0\u304A\u3088\u3073\u30AF\u30EA\u30FC\u30CB\u30F3\u30B0\u30B5\u30FC\u30D3\u30B9\u306E\u624B\u914D\u3001\u3054\u9023\u7D61\u4EE5\u5916\u306E\u76EE\u7684\u306B\u306F\u7D76\u5BFE\u306B\u6D41\u7528\u3044\u305F\u3057\u307E\u305B\u3093\u3002\u6CD5\u4EE4\u3092\u9075\u5B88\u3057\u3001\u30BB\u30AD\u30E5\u30A2\u306B\u7BA1\u7406\u30FB\u7834\u68C4\u3057\u3066\u304A\u308A\u307E\u3059\u3002"), /* @__PURE__ */ React.createElement("p", { className: "text-center pt-8 text-slate-500 font-rounded" }, "\xA9 ", (/* @__PURE__ */ new Date()).getFullYear(), " \u304A\u305D\u3046\u3058\u4FC2\u30C6\u30A3\u30C7\u30A3\u30BA\u30CF\u30A6\u30B9. All Rights Reserved.")))), /* @__PURE__ */ React.createElement("div", { className: "fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white/95 backdrop-blur border-t border-slate-100 py-3.5 px-4 shadow-2xl flex gap-3 items-center justify-between font-gothic" }, /* @__PURE__ */ React.createElement(
      "a",
      {
        href: "tel:050-6870-6753",
        className: "flex-1 bg-slate-100 text-[#0E4C86] font-bold text-xs py-3 px-2 rounded-xl text-center flex items-center justify-center gap-1 hover:bg-slate-200 transition-colors"
      },
      PHONE_ICON,
      " \u96FB\u8A71"
    ), /* @__PURE__ */ React.createElement(
      "a",
      {
        href: "https://line.me/ti/p/%40877vzdtl",
        target: "_blank",
        rel: "noopener noreferrer",
        className: "flex-1 bg-[#25D366] text-white font-bold text-xs py-3 px-2 rounded-xl text-center flex items-center justify-center gap-1"
      },
      LINE_ICON,
      " LINE\u76F8\u8AC7"
    ), /* @__PURE__ */ React.createElement(
      "a",
      {
        href: "#estimator",
        className: "flex-1 bg-[#0E4C86] text-white font-bold text-xs py-3 px-2 rounded-xl text-center block font-rounded"
      },
      "\u898B\u7A4D\u308A\u30FB\u7C21\u5358WEB\u4E88\u7D04"
    )));
  }
  const container = document.getElementById("root");
  const root = ReactDOM.createRoot(container);
  root.render(/* @__PURE__ */ React.createElement(App, null));
})();
