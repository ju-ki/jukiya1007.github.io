# Jukiya's Portfolio Website

ポートフォリオウェブサイト - Built with Svelte, TypeScript, Tailwind CSS, and Vite

## 🚀 特徴

- **Svelte + TypeScript**: モダンで反応的なコンポーネント
- **Tailwind CSS**: ユーティリティファースト CSS フレームワーク
- **Vite**: 高速なビルドツール
- **GitHub Actions**: 自動デプロイメント
- **レスポンシブデザイン**: モバイルフレンドリー

## 📁 プロジェクト構成

```
src/
├── App.svelte          # メインアプリケーションコンポーネント
├── app.css             # グローバルスタイル（Tailwind CSS）
├── main.ts             # エントリーポイント
└── lib/
    ├── Hero.svelte     # トップセクション
    ├── Profile.svelte  # プロフィールセクション
    ├── Skills.svelte   # スキルセクション
    ├── Works.svelte    # 作品セクション
    ├── Blog.svelte     # ブログセクション
    └── Contact.svelte  # コンタクトセクション

public/
├── background.jpg      # 背景画像
├── profile_image.jpg   # プロフィール画像
├── python.svg          # Python ロゴ
├── c-sharp.svg         # C# ロゴ
├── php.svg             # PHP ロゴ
└── javascript.svg      # JavaScript ロゴ
```

## 🛠️ セットアップ

### 必要要件
- Node.js 16.x 以上
- npm または yarn

### インストール

```bash
# 依存関係をインストール
npm install

# 開発サーバーを起動
npm run dev

# プロダクション用にビルド
npm run build

# ビルド結果をプレビュー
npm run preview

# TypeScript と Svelte をチェック
npm run check
```

## 📝 開発ガイド

### コンポーネント追加時の注意点
- 新しいセクションを追加する場合は `src/lib/` に新しい `.svelte` ファイルを作成
- `App.svelte` にインポートしてセクション用の div に追加

### Tailwind CSS のカスタマイズ
- `tailwind.config.js` でカスタムカラーやフォントを追加
- ダークモード対応: `dark:` プレフィックスで実装

## 🚀 GitHub Actions によるデプロイ

このプロジェクトは GitHub Actions を使用して自動デプロイされます：

1. `dev` ブランチへの push で自動的にビルド
2. ビルド成功時に GitHub Pages にデプロイ

### デプロイ設定
- ワークフローファイル: `.github/workflows/deploy.yml`
- デプロイ先: GitHub Pages (jukiya1007.github.io)
- トリガー: `dev` ブランチへの push または Pull Request

## 📚 使用技術

- **Svelte 5.x**: リアクティブな Web フレームワーク
- **TypeScript**: 型安全な JavaScript
- **Tailwind CSS 4.x**: ユーティリティファースト CSS
- **Vite 8.x**: 次世代フロントエンドビルドツール
- **PostCSS**: CSS トランスフォーマー

## 📄 ライセンス

このプロジェクトは MIT ライセンスの下で公開されています。

## 👤 作成者

**Jukiya**
- Twitter: [@jukiya_engineer](https://twitter.com/jukiya_engineer)
- GitHub: [@ju-ki](https://github.com/ju-ki)
- Email: juki.programming@gmail.com
