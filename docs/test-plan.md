# テスト計画

- Repo: `home-file-transfer-nas-backup`
- Domain: IoT
- Rank: 53 / P2 / Score 54
- Idea No: 10
- アイデア名: 家庭内ファイル転送・NAS・バックアップ
- 公開先: GitHub Release / 自宅LAN
- Version: 0.1.0-alpha.1

## 自動テスト
- Command: `npm test`
- Working directory: `D:\AI\IoT\home-file-transfer-nas-backup`
- Expected: `dist/validation-result.json`、`dist/web-smoke-result.json`、`dist/home-file-transfer-nas-backup-docs.zip` が生成される。

## 代表シナリオ
| ID | 期待 |
| --- | --- |
| happy-path | pass |
| missing-required | fail |
| warning | warning |
| mixed-batch | fail |

## 手動テスト
Codex側では未実施。手順はmanual-testとstrict addendumに記載。
