# コンポーネント設計ルール

## なぜこのルールがあるか
似た責務のコンポーネント（Button、Cardなど）が画面ごとに別名で重複生成されると、後からデザインや挙動を一括で直したいときに全箇所を探して直す必要が出る。1つの責務は1つのコンポーネントに集約し、見た目の差分は props で吸収する。

---

## ディレクトリ構成

```
src/components/
  common/                 # 見た目のみの責務。ロジック・API呼び出しを持たない
    Button.tsx
    Card.tsx
    Badge.tsx
    Modal.tsx
    ListItem.tsx
    index.ts               # barrel export。他からは必ずここ経由でimportする
  features/
    stamp-rally/
      StampCard.tsx         # common/Card をラップし、スタンプ固有のロジックを持つ
      RallyMap.tsx
    camera/
      ScanOverlay.tsx
```

### 分類基準
- **common** : 「このコンポーネントはスタンプラリーの仕様を何も知らない」もの
- **features/\<feature\>** : 特定機能のデータ構造・状態・ロジックに依存するもの

判断に迷った場合は common 側に置く（common → features への分割より、features → common への引き上げの方がコストが高い）。

---

## 新規UIコンポーネントを作成する前に必ず行う手順

1. `components/common/index.ts` の一覧を確認する
2. 同じ責務（見た目の役割）の既存コンポーネントがあるか確認する
3. ある場合 → 新規作成せず、既存コンポーネントに `variant` / `size` などのpropsを追加して対応する
4. ない場合のみ → `components/common/` に追加し、`index.ts` に登録する
5. 機能固有の見た目が必要な場合は、common側をラップする形で `features/<feature>/` に作る。common側のファイルやpropsを機能名（例: `StampButton`）で汚さない

---

## 命名固定

以下を正式名として固定する。似た役割の別名コンポーネント（`CustomButton`, `MyCard`, `StampButton` 等）を新たに作らない。

`Button`, `Card`, `Badge`, `Modal`, `ListItem`

新しい基本パーツが必要になった場合は、このリストに追記してから作成する。



機能固有の見た目を追加したくなったら、別コンポーネントを作るのではなく `variant` に選択肢を増やす。

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