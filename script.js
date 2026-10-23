// スタック・スカイ 紹介ページ
// 言語切替 (ja / en) ／ scroll ヘッダ ／ fade-in ／ ripple ／ lazy load ／ parallax
// （pocorin の紹介ページ、もとはパズルちゃんの tsudatech/puzzle_chan_web の script.js を踏襲）
//
// 英語の呼び名（Normal / Zen / Deep Dive / Rescue / Slim bonus など）は、アプリの
// tools/en_strings.py（en.lproj/Localizable.strings のもと）に合わせてある。ここで訳し直すと、アプリと呼び名が食い違う。
// 日本語は index.html の本文と同じもの（言語を切りかえて戻すため）。文言を変えたら両方を直すこと。

const translations = {
  "ja": {
    "page_title": "スタック・スカイ - どこまで積める？",
    "meta_description": "スタック・スカイは、左右に動くブロックをタップで落として、ぴったり重ねながら高く積んでいく iPhone 向けのゲームです。積むほど空の景色が変わり、雲の上、夕焼け、成層圏、そして宇宙へ。CPUと30秒で勝負するCPU対戦、失敗なしのゼン、下へ潜っていく深海へのモードもあります。ログインは不要です。",
    "app_name": "スタック・スカイ",
    "nav_modes": "モード",
    "nav_features": "機能",
    "nav_download": "ダウンロード",
    "nav_privacy": "プライバシー",
    "nav_contact": "お問い合わせ",
    "logo_line1": "スタック",
    "logo_line2": "・スカイ",
    "hero_title_line1": "積んで、",
    "hero_title_line2": "空の上へ。",
    "hero_description": "左右に動くブロックを、タップで落として積み上げます。はみ出した部分は切り落とされ、塔はだんだん細く。ぴったり重ねるたびにメロディが鳴り、積むほど空の景色が変わっていきます。",
    "hero_cta_download": "ダウンロード",
    "hero_cta_modes": "モードを見る",
    "modes_title": "4つのモード",
    "modes_lead": "ノーマルとCPU対戦は最初から。実績を解除すると、ゼンと深海へが遊べるようになります。",
    "mode_normal_title": "ノーマル",
    "mode_normal_text": "積むほど空の景色が変わっていきます。地上から雲の上、夕焼け、成層圏、150段で宇宙へ。金・はやい・フェイント・ガラスの特殊ブロックと、25段ごとに幅が元に戻る踊り場が出てきます。",
    "mode_zen_title": "ゼン",
    "mode_zen_text": "失敗なし。ずれても自動でそろうので、音と色と景色を楽しみながら、ただ積んでいけます。終わるときはメニューから。",
    "mode_cpu_title": "CPU対戦",
    "mode_cpu_text": "30秒で、CPUよりも高く積めたら勝ち。外しても終わりませんが、2秒の休憩で時間のロスになります。相手はひよこ・ふつう・つよい・達人の4段階で、右上の小窓に相手の塔が映ります。",
    "mode_deep_title": "深海へ",
    "mode_deep_text": "浮かぶいかだから、ブロックを下へ下へと吊るしていきます。1段で10m。サンゴ礁、薄明層、光る生きものの深海を抜けて、海溝の底まで。",
    "features_title": "主な機能",
    "feature_perfect_title": "ぴったりでメロディ",
    "feature_perfect_text": "ずれがほとんどなければ PERFECT。重ねるたびにメロディが続き、3回続けると塔の幅が少しずつ戻ります。積むときの音は、ベル・木琴・8ビットなど7種類から選べます。",
    "feature_zone_title": "積むほど変わる景色",
    "feature_zone_text": "高さに合わせて空の色と景色が移り変わり、BGM の楽器も増えていきます。10段ごとには、紙吹雪とひとことのごほうびがあります。",
    "feature_blocks_title": "特殊ブロックとボーナス",
    "feature_blocks_text": "ぴったりで点が増える金、速く動くはやい、途中で止まるフェイント、ずれると大きく切れるガラス。塔が細いほど点数が増える細さボーナスと、1度だけ置き直せるお助けもあります。",
    "feature_achievement_title": "実績でひらける",
    "feature_achievement_text": "31の実績があり、解除するとモードや積む音、BGM、ブロックの見た目、テーマが使えるようになります。解除した実績は、結果の画面でまとめて発表されます。",
    "feature_skin_title": "着せ替え",
    "feature_skin_text": "ブロックはカラフル・木・レンガ・お菓子・宝石の5種類。画面のテーマは空・深海・夕暮れの3つで、ライトとダークを選べます。",
    "feature_record_title": "毎日の塔が残る",
    "feature_record_text": "その日いちばん高く積んだ塔が、1日1本ずつ直近30日ぶん残ります。モード別のベスト、たどり着いたエリア、CPU対戦で勝った回数、プレイ時間も見られます。",
    "feature_icloud_title": "iCloud に預けられる",
    "feature_icloud_text": "記録を iCloud に置いておけば、機種を変えても続きから遊べます。使うかどうかは設定で選べます。",
    "feature_lang_title": "日本語と英語",
    "feature_lang_text": "端末の言語に合わせて、日本語と英語で表示します。はじめての人向けの案内と、ルールの画面もあります。",
    "feature_privacy_title": "ログインなしですぐ遊べる",
    "feature_privacy_text": "アカウントの登録はいりません。遊んだ記録は端末の中に保存されます。",
    "download_title": "ダウンロード",
    "download_heading": "App Store で今すぐダウンロード",
    "download_subheading": "iOS 17.0 以降に対応しています。",
    "download_button": "App Store でダウンロード",
    "download_requirements_title": "システム要件",
    "download_requirements_ios": "iOS 17.0 以降",
    "download_requirements_devices": "iPhone／縦向き",
    "download_requirements_language": "日本語・英語",
    "download_requirements_iap": "App内課金なし（広告あり）",
    "privacy_title": "プライバシーポリシー",
    "privacy_handling_heading": "個人情報の取り扱いについて",
    "privacy_handling_text": "スタック・スカイ（以下「本アプリ」）は、利用者のプライバシーを尊重し、個人情報の保護に努めます。本アプリはアカウント登録を必要とせず、開発者のサーバーを持ちません。",
    "privacy_collect_heading": "収集する情報",
    "privacy_collect_text": "本アプリが扱うのは、遊んだ記録（モード別のベスト、その日いちばんの塔、CPU対戦の勝敗、遊んだ回数、積んだ段数とPERFECTの合計、遊んだ日）、アプリを開いていた時間、実績の解除状況、および各種設定だけで、これらはすべて端末の中に留まります。開発者が氏名・メールアドレス・位置情報を収集することはなく、開発者が利用状況の解析（アナリティクス）を行うこともありません。なお、広告を表示するために、Google の広告サービスが端末の情報を扱います（「広告について」をご覧ください）。",
    "privacy_storage_heading": "情報の保存",
    "privacy_storage_text": "遊んだ記録と設定（音、テーマ、ライト・ダーク、選んだ積む音やBGMなど）は、端末内（UserDefaults）に保存されます。",
    "privacy_icloud_heading": "iCloud について",
    "privacy_icloud_text": "設定で iCloud バックアップを有効にした場合に限り、遊んだ記録が iCloud のキーバリューストアに保存され、同じ Apple アカウントの端末間で同期されます。この同期は Apple の iCloud 上で完結し、開発者がその内容を参照することはできません。設定は同期されず、その端末にだけ残ります。",
    "privacy_network_heading": "外部との通信",
    "privacy_network_text": "本アプリは、開発者のサーバーへ利用者の記録を送信しません。開発者はサーバーを持っていません。ネットワークを使うのは、広告の表示（Google AdMob）と、利用者が iCloud バックアップを有効にした場合の Apple のサービスとの通信だけです。",
    "privacy_ads_heading": "広告について",
    "privacy_ads_text": "本アプリは、Google LLC が提供する広告配信サービス「Google AdMob」を利用して、画面の下のバナー広告と、遊び終えたあとの全画面広告を表示します。AdMob は、広告の配信・効果の測定・不正の防止のために、広告識別子（IDFA）などの端末の情報を利用することがあります。あなたに合った広告を表示するための追跡は、初回に表示される確認画面で許可した場合にのみ行われ、iOS の「設定」＞「プライバシーとセキュリティ」＞「トラッキング」からいつでも変更できます。Google によるデータの扱いについては、Google のプライバシーポリシー（https://policies.google.com/privacy）をご覧ください。",
    "privacy_delete_heading": "データの削除",
    "privacy_delete_text": "アプリを削除すると、端末内に保存された記録と設定も一緒に削除されます。iCloud バックアップを使っている場合は、iOS の設定から iCloud 上のデータを削除できます。",
    "privacy_children_heading": "お子さまの利用について",
    "privacy_children_text": "本アプリは年齢を問わず利用できます。開発者は個人情報を収集せず、アプリ内購入もありません。広告は表示されます。",
    "privacy_contact_heading": "お問い合わせ",
    "privacy_contact_text_before": "プライバシーポリシーに関するご質問は、",
    "privacy_contact_link": "お問い合わせ",
    "privacy_contact_text_after": "までご連絡ください。",
    "privacy_update": "最終更新: 2026 年 10 月",
    "contact_title": "お問い合わせ",
    "contact_intro": "アプリに関するご質問、バグ報告、機能要望などがございましたら、お気軽にお問い合わせください。",
    "contact_email_heading": "📧 メール",
    "contact_bug_heading": "🐛 バグ報告",
    "contact_bug_text": "ブロックが動かない、記録が残らないといった不具合を見つけたら、上記メールアドレスまで詳細をお送りください。",
    "contact_feature_heading": "💡 機能要望",
    "contact_feature_text": "こんなモードや見た目がほしい、といったご要望もお待ちしています。",
    "footer_copyright": "© 2026 スタック・スカイ. All rights reserved."
  },
  "en": {
    "page_title": "Stack Sky - How high can you go?",
    "meta_description": "Stack Sky is an iPhone game where you tap to drop a sliding block and stack it as high as you can. The sky changes as you climb: above the clouds, into the sunset, the stratosphere, and out into space. There's also VS CPU, a 30-second race against the CPU; Zen, where you can't fail; and Deep Dive, where you stack downward into the sea. No login needed.",
    "app_name": "Stack Sky",
    "nav_modes": "Modes",
    "nav_features": "Features",
    "nav_download": "Download",
    "nav_privacy": "Privacy",
    "nav_contact": "Contact",
    "logo_line1": "Stack",
    "logo_line2": " Sky",
    "hero_title_line1": "Stack your way",
    "hero_title_line2": "above the sky.",
    "hero_description": "Tap to drop the block sliding back and forth. Any overhang gets cut off, so your tower slowly gets slimmer. Every PERFECT plays the next note of a melody, and the sky changes as you climb.",
    "hero_cta_download": "Download",
    "hero_cta_modes": "See the Modes",
    "modes_title": "Four Modes",
    "modes_lead": "Normal and VS CPU are open from the start. Unlock achievements to open up Zen and Deep Dive.",
    "mode_normal_title": "Normal",
    "mode_normal_text": "The sky changes as you climb: from the ground to above the clouds, into the sunset, the stratosphere, and out into space at 150 floors. Gold, Fast, Feint and Glass blocks appear, and every 25 floors a landing restores the full width.",
    "mode_zen_title": "Zen",
    "mode_zen_text": "No failing. Every block lines itself up, so you can just keep stacking and enjoy the sounds, colors and views. End from the menu whenever you like.",
    "mode_deep_title": "Deep Dive",
    "mode_deep_text": "Hang blocks down from a floating raft. Each floor is 10m. Dive past the coral reef, the twilight zone and the glowing creatures of the deep sea, all the way to the trench floor.",
    "features_title": "Features",
    "feature_perfect_title": "Perfect Melodies",
    "feature_perfect_text": "Land a block nearly dead-on for a PERFECT. Each one plays the next note of a melody, and three in a row starts to grow your tower back. Choose from 7 stacking sounds, including Bell, Marimba and 8-bit.",
    "feature_zone_title": "A Sky That Changes",
    "feature_zone_text": "The colors and scenery shift with your height, and more instruments join the music. Every 10 floors brings a little celebration with confetti.",
    "feature_blocks_title": "Special Blocks & Bonuses",
    "feature_blocks_text": "Gold scores extra on a PERFECT, Fast moves quicker, Feint pauses mid-slide, and Glass cuts off twice as much. A slimmer tower earns a Slim bonus, and one Rescue lets you retry a bad miss.",
    "feature_achievement_title": "Unlock as You Play",
    "feature_achievement_text": "31 achievements open up modes, stacking sounds, music, block styles and themes. New ones are announced together on the result screen.",
    "feature_skin_title": "Change the Look",
    "feature_skin_text": "Five block styles: Colorful, Wood, Brick, Candy and Gem. Three themes, Sky, Deep Sea and Dusk, each in Light or Dark.",
    "feature_record_title": "A Tower for Every Day",
    "feature_record_text": "Your tallest tower of each day is kept, one per day for the last 30 days. You can also see your best in each mode, the areas you've reached, your VS CPU wins, and your play time.",
    "feature_icloud_title": "Back Up to iCloud",
    "feature_icloud_text": "Keep your records in iCloud and pick up where you left off on a new phone. Backup is optional.",
    "feature_lang_title": "Japanese & English",
    "feature_lang_text": "Shown in Japanese or English to match your device, with a first-time walkthrough and a Rules screen.",
    "feature_privacy_title": "No Login Needed",
    "feature_privacy_text": "No account needed. Your play records are saved on your device.",
    "download_title": "Download",
    "download_heading": "Download on the App Store",
    "download_subheading": "Requires iOS 17.0 or later.",
    "download_button": "Download on the App Store",
    "download_requirements_title": "Requirements",
    "download_requirements_ios": "iOS 17.0 or later",
    "download_requirements_devices": "iPhone / portrait",
    "download_requirements_language": "Japanese, English",
    "download_requirements_iap": "No in-app purchases (contains ads)",
    "privacy_title": "Privacy Policy",
    "privacy_handling_heading": "How We Handle Personal Information",
    "privacy_handling_text": "Stack Sky (\"the App\") respects your privacy and is committed to protecting personal information. The App requires no account, and the developer operates no servers.",
    "privacy_collect_heading": "Information We Handle",
    "privacy_collect_text": "The App only handles your play records (best height in each mode, your tallest tower of each day, VS CPU wins and losses, games played, total floors stacked and PERFECTs, and the days you played), the time the App was open, achievement progress, and your settings. All of this stays on your device. The developer does not collect names, email addresses, or location, and does not perform usage analytics. To show ads, however, Google's advertising service handles some device information (see \"About Ads\").",
    "privacy_storage_heading": "Where Information Is Stored",
    "privacy_storage_text": "Play records and settings (such as sound, theme, Light or Dark appearance, and the stacking sound and music you choose) are stored on your device (UserDefaults).",
    "privacy_icloud_heading": "About iCloud",
    "privacy_icloud_text": "Only if you turn on iCloud backup in Settings, your play records are stored in iCloud key-value storage and synced across devices using the same Apple Account. This sync happens entirely within Apple's iCloud, and the developer cannot see its contents. Settings are not synced and stay on each device.",
    "privacy_network_heading": "Network Communication",
    "privacy_network_text": "The App does not send your records to any developer server; the developer has no servers. The App only communicates over the network to show ads (Google AdMob) and, when you turn on iCloud backup, with Apple's services.",
    "privacy_ads_heading": "About Ads",
    "privacy_ads_text": "The App uses Google AdMob, an advertising service provided by Google LLC, to show a banner ad at the bottom of the screen and a full-screen ad after you finish a game. AdMob may use device information such as the advertising identifier (IDFA) to deliver ads, measure their performance, and prevent fraud. Tracking to show ads that are more relevant to you only happens if you allow it on the prompt shown the first time, and you can change this at any time in iOS Settings > Privacy & Security > Tracking. For how Google handles data, see Google's Privacy Policy (https://policies.google.com/privacy).",
    "privacy_delete_heading": "Deleting Your Data",
    "privacy_delete_text": "Deleting the App also deletes the records and settings stored on your device. If you use iCloud backup, you can delete the data in iCloud from the iOS Settings app.",
    "privacy_children_heading": "Use by Children",
    "privacy_children_text": "The App can be used by people of any age. The developer collects no personal information, and the App has no in-app purchases. The App does show ads.",
    "privacy_contact_heading": "Contact",
    "privacy_contact_text_before": "For questions about this Privacy Policy, please reach us via ",
    "privacy_contact_link": "Contact",
    "privacy_contact_text_after": ".",
    "privacy_update": "Last updated: October 2026",
    "contact_title": "Contact",
    "contact_intro": "If you have questions about the App, bug reports, or feature requests, please feel free to get in touch.",
    "contact_email_heading": "📧 Email",
    "contact_bug_heading": "🐛 Bug Reports",
    "contact_bug_text": "If you find a problem, such as blocks not moving or records not being saved, please send the details to the email address above.",
    "contact_feature_heading": "💡 Feature Requests",
    "contact_feature_text": "We'd love to hear ideas for new modes or looks, too.",
    "footer_copyright": "© 2026 Stack Sky. All rights reserved.",
    "mode_cpu_title": "VS CPU",
    "mode_cpu_text": "Stack higher than the CPU in 30 seconds to win. A miss won't end the game, but it costs you a 2-second rest. Choose from four opponents, Chick, Average, Strong and Master, and watch their tower in the small window at the top right."
  }
};

// ── Language ─────────────────────────────────────────────────────────────────

function detectLanguage() {
  const params = new URLSearchParams(window.location.search);
  if (params.has("lang")) return params.get("lang");
  const stored = localStorage.getItem("lang");
  if (stored) return stored;
  const browser = navigator.language || navigator.userLanguage || "ja";
  return browser.startsWith("ja") ? "ja" : "en";
}

function applyLanguage(lang) {
  const t = translations[lang] || translations["ja"];

  document.title = t["page_title"] || document.title;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute("content", t["meta_description"] || "");

  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n-key]").forEach((el) => {
    const key = el.getAttribute("data-i18n-key");
    if (t[key] !== undefined) {
      el.textContent = t[key];
    }
  });

  document.querySelectorAll("img[data-src-ja]").forEach((img) => {
    const src = lang === "ja" ? img.dataset.srcJa : img.dataset.srcEn;
    if (src) img.src = src;
  });

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });

  localStorage.setItem("lang", lang);
}

// ── Scroll & Header ───────────────────────────────────────────────────────────

function initHeader() {
  const header = document.querySelector(".header");
  if (!header) return;

  let lastScrollY = window.scrollY;

  window.addEventListener(
    "scroll",
    () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        header.style.transform = "translateY(-100%)";
      } else {
        header.style.transform = "translateY(0)";
      }
      lastScrollY = currentScrollY;
    },
    { passive: true },
  );

  header.style.transition = "transform 0.3s ease";
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      const targetId = anchor.getAttribute("href");
      if (targetId === "#") return;
      const target = document.querySelector(targetId);
      if (!target) return;
      e.preventDefault();
      const headerHeight = document.querySelector(".header")?.offsetHeight ?? 70;
      const top = target.getBoundingClientRect().top + window.scrollY - headerHeight;
      window.scrollTo({ top, behavior: "smooth" });
    });
  });
}

// ── Intersection Observer (fade-in) ──────────────────────────────────────────

function initFadeIn() {
  const targets = document.querySelectorAll(
    ".mode-card, .feature-card, .download-info, .download-requirements, .privacy-content, .contact-method",
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in-up");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 },
  );

  // 最初から見えている範囲は隠さない。
  // 隠してしまうと、監視が働かない場面（プレビュー、拡張機能、古い環境）で
  // 画面の先頭から真っ白になってしまう。
  targets.forEach((el) => {
    if (el.getBoundingClientRect().top <= window.innerHeight) return;
    el.style.opacity = "0";
    observer.observe(el);
  });

  document.addEventListener("animationstart", (e) => {
    if (e.animationName === "fadeInUp") {
      e.target.style.opacity = "";
    }
  });

  // 保険。何らかの理由で監視が働かなくても、必ず見える状態に戻す
  setTimeout(() => {
    targets.forEach((el) => {
      if (el.style.opacity === "0") el.style.opacity = "";
    });
  }, 4000);
}

// ── Ripple on buttons ─────────────────────────────────────────────────────────

function initRipple() {
  document.querySelectorAll(".btn, .app-store-placeholder").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const rect = btn.getBoundingClientRect();
      const ripple = document.createElement("span");
      const size = Math.max(rect.width, rect.height);
      ripple.style.cssText = `
        position:absolute;width:${size}px;height:${size}px;
        left:${e.clientX - rect.left - size / 2}px;
        top:${e.clientY - rect.top - size / 2}px;
        background:rgba(255,255,255,0.35);border-radius:50%;
        transform:scale(0);animation:ripple 0.5s linear;pointer-events:none;
      `;
      btn.style.position = "relative";
      btn.style.overflow = "hidden";
      btn.appendChild(ripple);
      ripple.addEventListener("animationend", () => ripple.remove());
    });
  });

  const style = document.createElement("style");
  style.textContent = `@keyframes ripple{to{transform:scale(2.5);opacity:0}}`;
  document.head.appendChild(style);
}

// ── Lazy images ───────────────────────────────────────────────────────────────

function initLazyImages() {
  const images = document.querySelectorAll("img.lazy");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src || img.src;
          img.classList.remove("lazy");
          observer.unobserve(img);
        }
      });
    });
    images.forEach((img) => observer.observe(img));
  }
}

// ── Parallax (hero) ───────────────────────────────────────────────────────────

function initParallax() {
  const hero = document.querySelector(".hero");
  if (!hero) return;
  window.addEventListener(
    "scroll",
    () => {
      const offset = window.scrollY * 0.3;
      hero.style.backgroundPositionY = `${offset}px`;
    },
    { passive: true },
  );
}

// ── Init ──────────────────────────────────────────────────────────────────────

document.addEventListener("DOMContentLoaded", () => {
  const lang = detectLanguage();
  applyLanguage(lang);

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => applyLanguage(btn.dataset.lang));
  });

  initHeader();
  initSmoothScroll();
  initFadeIn();
  initRipple();
  initLazyImages();
  initParallax();
});
