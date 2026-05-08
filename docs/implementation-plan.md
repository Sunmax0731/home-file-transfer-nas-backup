# 実装計画

- Repo: `home-file-transfer-nas-backup`
- Domain: IoT
- Rank: 53 / P2 / Score 54
- Idea No: 10
- アイデア名: 家庭内ファイル転送・NAS・バックアップ
- 公開先: GitHub Release / 自宅LAN
- Version: 0.1.0-alpha.1

## 責務
- `src/core`
- `src/validators`
- `src/report`
- `src/review-model`
- `src/cli`
- `app`
- `src/simulator`
- `src/device-adapter`
- `src/host-adapter`

## 工程
1. .gitattributes、README、AGENTS、SKILL、docsを配置。
2. core、validators、report、review-model、CLI、UIを実装。
3. mock device、sample telemetry、危険操作dry-run境界を実装。
4. `npm test`でvalidation、web smoke、docs ZIPを生成。
5. GitHub prerelease assetとrelease evidenceを確認。
