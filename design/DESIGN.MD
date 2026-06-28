# DESIGN.md

> 旅先でスタンプを押し、思い出を残すモバイルアプリのデザイン仕様書。

> UIの実際のデザイン（カラーUI）は [`design/color-ui.pen`](color-ui.pen) に定義されている。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 自然・旅行を想起させるアースグリーンを基調とした、清潔でミニマルなモバイルUI
- **密度**: 低〜中密度。余白を十分に取り、写真・スタンプを主役にした構成
- **キーワード**: ナチュラル、グリーン、ミニマル、旅、思い出
- **特徴**: iOS標準サイズ（390px幅）のモバイルアプリ。アクセントは **`#3d9c77`（ミッドグリーン）** のみで、カメラシャッターやアクティブ状態に限定使用。非アクティブ状態・セカンダリ要素には **`#73857e`（グレイッシュグリーン）** を用い、落ち着いたトーンを維持する

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

| Token | Hex | 用途 |
|-------|-----|------|
| **Primary Green** | `#3d9c77` | カメラシャッターボタン背景、アクティブタブのアイコン・ラベル |
| **Secondary Green** | `#73857e` | 非アクティブアイコン、セカンダリラベル（"デザインを変更する" など）、chevron |

### Text

| Token | Hex | 用途 |
|-------|-----|------|
| **Text Primary** | `#444444` | タイトル・見出し・本文の基本色（純黒は使わない） |
| **Text Muted** | `#73857e` | セカンダリラベル、ヒントテキスト（緑系グレー） |
| **Text Placeholder** | `#b4b8b6` | プレースホルダー、カメラプレビューラベル、bio日付など |

### Surface（面色）

| Token | Hex | 用途 |
|-------|-----|------|
| **Background White** | `#ffffff` | 画面標準背景、ナビゲーションバー |
| **Surface Mist** | `#f0f2f1` | タブバー背景、ボタン背景（セカンダリ）、カードセクション、ヒントストリップ |
| **Border Mint** | `#c3d6cf` | ストローク・ボーダー・区切り線（全コンポーネント共通） |
| **Active Tab Overlay** | `#33333315` | アクティブタブの背景（半透明の暗いオーバーレイ） |
| **Transparent** | `#00000000` | 非アクティブタブ背景、ガイドサークル塗りつぶし |

### CSS Custom Properties（参考）

```css
--color-primary:      #3d9c77;
--color-secondary:    #73857e;
--color-text:         #444444;
--color-text-muted:   #73857e;
--color-placeholder:  #b4b8b6;
--color-bg:           #ffffff;
--color-surface:      #f0f2f1;
--color-border:       #c3d6cf;
```

---

## 3. Typography Rules

### フォント

| 用途 | Font | 備考 |
|------|------|------|
| 全テキスト | **Inter** | Google Fonts |

> 日本語テキストにも Inter を使用（Google Fontsの Inter は基本的なCJK対応あり）。アプリ内では日本語文字列が多数使用されているが、フォント指定は Inter 統一。

### サイズ・ウェイト階層

| Role | Size | Weight | Color | 用途 |
|------|------|--------|-------|------|
| Screen Title | 22px | 700 | `#444444` | 「マイページ」などのページタイトル |
| Section Heading | 18px | 700 | `#444444` | スポット名、ユーザー名 |
| Nav Title | 16px | 700 | `#444444` | ナビゲーションバー中央タイトル |
| Body | 14px | 400 | `#444444` | 本文・日付・メモ内容 |
| Label Bold | 11–13px | 600 | `#444444` | メタラベル（「日付」「場所」「メモ」） |
| Button Label | 13px | 400 | `#73857e` | セカンダリボタンのテキスト |
| Caption / Hint | 12px | 400 | `#73857e` or `#b4b8b6` | ヒント文・bio登録日 |
| Tab Label | 10px | 400 | `#3d9c77` / `#73857e` | タブバーラベル（アクティブ/非アクティブ） |

### 行間・字間

- **line-height**: フォントデフォルト（明示指定なし）
- **letter-spacing**: デフォルト（0）

---

## 4. Component Stylings

### Tab Bar

- **Background**: `#f0f2f1`
- **Border**: top stroke `#c3d6cf` / 1px
- **Height**: 76px（padding top 10px, bottom 32px でホームインジケーター考慮）
- **アクティブタブ**: fill `#33333315`（半透明オーバーレイ）、icon・label `#3d9c77`
- **非アクティブタブ**: fill transparent、icon・label `#73857e`
- **タブ cornerRadius**: 16px

### Navigation Bar

- **Background**: `#ffffff`
- **Height**: 78–86px（padding horizontal 20px）
- **Back Button**: `#f0f2f1` bg + `#c3d6cf` border, cornerRadius 16, 34×26px, icon `#73857e`
- **Action Button（Settings, Help）**: `#f0f2f1` bg + `#c3d6cf` border, 円形または角丸, icon `#73857e`

### Buttons

**Primary（カメラシャッター）**
- Background: `#3d9c77`
- Icon: `#ffffff`
- Size: 72×72px、cornerRadius 36（正円）

**Secondary（"デザインを変更する" など）**
- Background: `#f0f2f1`
- Stroke: `#c3d6cf` / 1px
- Text/Icon: `#73857e`
- cornerRadius: 20px
- Padding: `[10, 20]`
- Font: 13px / 400

**Icon Button（zap, refresh-cw など小型）**
- Background: `#f0f2f1`
- Stroke: `#c3d6cf` / 1px
- Icon: `#73857e`
- Size: 44×44px、cornerRadius 22（正円）

### Cards / Section Panels

- Background: `#f0f2f1`
- Stroke: `#c3d6cf` / 1px
- cornerRadius: 12px
- 内部 padding: `[14, 16]`（リストアイテム）

### Separators / Dividers

- Fill: `#c3d6cf`
- Height: 1px
- Width: fill_container

### Avatar / Profile Circle

- Background: `#f0f2f1`
- Stroke: `#c3d6cf` / 2px
- Size: 80×80px、cornerRadius 40（正円）
- Icon: `#73857e`

### Stamp Circles（スタンプガイド）

- Outer Ring: `#f0f2f1` fill + `#c3d6cf` stroke 2.5px
- Inner Ring: transparent fill + `#c3d6cf` stroke 1px

### Hint Strip（ガイドテキストバー）

- Background: `#f0f2f1`
- Stroke: `#c3d6cf` / 1px
- cornerRadius: 14px
- Padding: `[6, 12]`
- Text: 11px / `#b4b8b6`

---

## 5. Layout Principles

### Spacing Scale

| Token | Value | 用途 |
|-------|-------|------|
| XS | 4px | アイコン内の小さなギャップ |
| S | 6px | タブアイテム内のアイコン-ラベル間 |
| M | 10px | カード内要素間 |
| L | 13–16px | セクション内パディング |
| XL | 20px | 水平パディング（全画面共通） |
| XXL | 24–28px | セクション間ギャップ |
| XXXL | 32–35px | 大セクション間 |

### Screen

- Width: **390px**（iPhone標準）
- Layout: vertical flex、clip: true
- Background: `#ffffff`
- Border: `#c3d6cf` / 1px（デザインファイル上の区切り）

### Grid / Lists

- 水平方向の repeating レイアウト: 横並びに `gap: 10px`
- 垂直リスト（設定メニュー等）: `fill_container` 幅、separator で区切る

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | 標準（shadow は基本不使用） |
| — | stroke `#c3d6cf` 1px | 境界線はシャドウではなく明示的なストロークで表現 |

> **特徴**: シャドウは使わず、`#c3d6cf` の薄いボーダーストロークで要素を区切る。

---

## 7. Do's and Don'ts

### Do（推奨）

- アクセントカラーは **`#3d9c77`** をプライマリアクション（シャッター・アクティブ状態）のみに限定
- セカンダリアイコン・非アクティブ要素には **`#73857e`** を使う
- ボーダー・区切り線は **`#c3d6cf`** で統一
- テキスト色は **`#444444`**（純黒回避）
- サーフェス色は **`#f0f2f1`**（白ではなく微グリーンのグレー）
- ボタンの cornerRadius は 16–22px（pill 寄り）
- Inter フォント統一

### Don't（禁止）

- 純黒 `#000000` をテキストや背景に使わない
- `#3d9c77` をアクセント以外（本文・背景・ボーダー）に使わない
- 強いドロップシャドウを使わない（ストロークで代替）
- タブバー以外に半透明オーバーレイ `#33333315` を多用しない
- 装飾的なグラデーションを使わない

---

## 8. Responsive Behavior

> モバイル専用アプリのため、レスポンシブ対応は基本的に不要。

- 対象デバイス: iPhone（390px幅基準）
- タブバーの bottom padding 32px はホームインジケーターの safe area 考慮

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Primary Color:    #3d9c77（アクション・アクティブ状態のみ）
Secondary Color:  #73857e（アイコン・セカンダリテキスト）
Text Primary:     #444444（純黒は使わない）
Text Muted:       #73857e
Placeholder:      #b4b8b6
Background:       #ffffff
Surface:          #f0f2f1（微グリーンのグレー）
Border:           #c3d6cf（全コンポーネント共通）
Active Overlay:   #33333315（タブアクティブ背景）

Font:             Inter
Screen Width:     390px
H-Padding:        20px（水平パディング標準）
Border Radius:    12px（カード）/ 16–22px（ボタン）/ 36px（シャッター・円形）
```


