# 要件定義

- Repo: `home-file-transfer-nas-backup`
- Domain: IoT
- Rank: 53 / P2 / Score 54
- Idea No: 10
- アイデア名: 家庭内ファイル転送・NAS・バックアップ
- 公開先: GitHub Release / 自宅LAN
- Version: 0.1.0-alpha.1

## 背景
家庭内メディア、素材バックアップ、バックアップ成功監視、LAN内ファイル転送をまとめる。

## 課題
PCやスマホ間のファイル移動、NAS保存、バックアップ確認が分かれ、成功状態を確認しづらい。

## closed alpha要件
- LAN simulator, mock device, CLI, and web dashboardとして実機や本番外部サービスなしで代表フローを確認できる。
- `samples/representative-suite.json`で4代表シナリオを自動検証する。
- MVPだけで止めず、UI/UX、責務分割、運用、配布準備まで整備する。
- 手動テスト未実施を明記し、QCDS最高評価はS-に制限する。
