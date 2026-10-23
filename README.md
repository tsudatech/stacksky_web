# スタック・スカイ — 紹介ページ

スタック・スカイ（iPhone 向けの積み上げゲーム）の紹介ページ。HTML / CSS / Vanilla JS だけの静的サイトで、GitHub Pages 等にそのままデプロイできる。

pocorin の紹介ページ（もとはパズルちゃんの `tsudatech/puzzle_chan_web`）の構成を踏襲し、配色をアプリのライトモード・テーマ「空」（`stacksky/Rendering/Theme.swift` の `nightLight`）に合わせてある。
スクリーンショットの節は置いていない。

## ファイル

| ファイル | 役割 |
|---|---|
| `index.html` | セマンティック HTML。各テキストは `data-i18n-key` で多言語化対応 |
| `styles.css` | 配色・レイアウト・レスポンシブ。地は `#E6F0FD`、文字は `#1C2350`、アクセントは `#2F8CEB` |
| `script.js` | 言語切替 (ja / en) ／ scroll ヘッダ ／ fade-in ／ ripple ／ lazy load ／ parallax |
| `images/app-icon.png` | ヘッダ・hero・favicon に使うアプリアイコン（AppIcon の 1024×1024 を 512 に縮小） |
| `images/hero-tower.png` | hero の塔の絵。App Store のヘッダ画像（`design/header/header_notext.png`）の中央を切り出したもの |
| `images/modes/*.png` | モードのアイコン。アプリの `ModeCube` と同じ形と色（深海へは上下さかさま） |

文字は M PLUS Rounded 1c（アプリの HTML 版と同じ）を Google Fonts から読む。

## 文言

- 日本語は `index.html` に直接書いてあり、`script.js` の `translations.ja` にも同じものを持っている（言語を切りかえて戻すため）。
  文言を変えたら両方を直すこと。
- 英語の呼び名（Normal / Zen / Deep Dive / Rescue / Slim bonus / Landing など）は、アプリの `tools/en_strings.py` に合わせてある。
- App Store のリンク（`#download` の「App Store でダウンロード」）は、公開後に実際の URL に差しかえる。
- **広告**：アプリは Google AdMob でバナーと全画面広告を出す。プライバシーポリシーの「広告について」の節と、
  「収集する情報」「外部との通信」「お子さまの利用について」、システム要件（「App内課金なし（広告あり）」）はそれに合わせてある。
  広告の出し方を変えたら（別の広告会社を足すなど）ここも直すこと。
- 対応 iOS（17.0 以降）は、アプリのビルド設定 `IPHONEOS_DEPLOYMENT_TARGET` に合わせてある。変えたらここも直す。

## 手元で見る

```bash
cd web
python3 -m http.server 8765
# http://localhost:8765/ を開く。?lang=en で英語
```
# stacksky_web
