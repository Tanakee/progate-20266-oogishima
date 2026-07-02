# コンポーネント設計ルール

## なぜこのルールがあるか
似た責務のコンポーネント（Button、Cardなど）が画面ごとに別名で重複生成されると、後からデザインや挙動を一括で直したいときに全箇所を探して直す必要が出る。1つの責務は1つのコンポーネントに集約し、見た目の差分は props で吸収する。

---

## ディレクトリ構成

```
src/components/
  common/                 # 見た目のみの責務。ロジック・API呼び出しを持たない
    Button/
      Button.tsx
      Button.stories.tsx  # Button と同じフォルダに同居させる
      index.ts            # export { Button } from './Button'
    Card/
      Card.tsx
      Card.stories.tsx
      index.ts
    index.ts               # barrel export。他からは必ずここ経由でimportする
  features/
    stamp-rally/
      StampCard.tsx         # common/Card をラップし、スタンプ固有のロジックを持つ
      RallyMap.tsx
    camera/
      ScanOverlay.tsx
```

### コンポーネントとStorybookファイルの配置

- コンポーネントごとに `コンポーネント名/` フォルダを作り、本体ファイルと `*.stories.tsx` を同じフォルダに同居させる（story を別階層の `.rnstorybook/stories/` にまとめない）
- フォルダ内に `index.ts` を置き `export { Button } from './Button';` の形でre-exportする。これにより親の `components/common/index.ts` からの `import from './Button'` は変更不要になる
- Storybook 側は `.rnstorybook/main.ts` の `stories` に `../src/components/**/*.stories.?(ts|tsx|js|jsx)` を指定し、この配置を自動検出する

### 分類基準
- **common** : 「このコンポーネントはスタンプラリーの仕様を何も知らない」もの
- **features/\<feature\>** : 特定機能のデータ構造・状態・ロジックに依存するもの

判断基準は使用箇所の数：

- 使用箇所が1つだけ → `features/<feature>/` に置く（最初から common に置かない）
- 2つ以上の機能から必要になった時点で → `common/` に引き上げ、feature固有のロジックは取り除いて汎用化する

1箇所でしか使わないものを先回りして common に置くと、将来の用途を見越してpropsや条件分岐を過剰に汎用化してしまい、結局誰も使わない複雑さだけが残ることがある（早すぎる抽象化）。

---

## 新規UIコンポーネントを作成する前に必ず行う手順

1. `components/common/index.ts` の一覧を確認する
2. 同じ責務（見た目の役割）の既存コンポーネントが common にあるか確認する
3. ある場合 → 新規作成せず、既存コンポーネントに `variant` / `size` などのpropsを追加して対応する
4. ない場合 → 今回が最初の利用なら `features/<feature>/` に作る。すでに他の機能で似たものを features 側に作っていたなら、その時点で `common/` に引き上げて汎用化し、`index.ts` に登録する
5. common 側のファイルやpropsを機能名（例: `StampButton`）で汚さない

---

## 命名固定

以下を正式名として固定する。似た役割の別名コンポーネント（`CustomButton`, `MyCard`, `StampButton` 等）を新たに作らない。

`Button`, `Card`, `Badge`, `Modal`, `ListItem`

新しい基本パーツが必要になった場合は、このリストに追記してから作成する。

---
## スタイルトークン

色・spacing・角丸・フォントサイズは `theme/tokens.ts` を参照し、コンポーネント内に直接値を書かない（`#4F46E5` のようなハードコードはBefore例のように重複・ズレの原因になる）。

---

## 既存コンポーネント カタログ（作成のたびに追記する）

| コンポーネント | 役割 | variant | 使用箇所 |
|---|---|---|---|
| Button | 汎用ボタン | primary / secondary / ghost | - |
| Card | 汎用カード | - | - |
| Badge | - | - | - |
| Modal | - | - | - |
| ListItem | - | - | - |