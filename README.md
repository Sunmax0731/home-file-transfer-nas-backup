# home-file-transfer-nas-backup

家庭内ファイル転送・NAS・バックアップ の closed alpha prototype。家庭内メディア、素材バックアップ、バックアップ成功監視、LAN内ファイル転送をまとめる。

## Status

- Version: 0.1.0-alpha.1
- Rank: 53 / P2 / Score 54
- Domain: IoT
- Public target: GitHub Release / 自宅LAN
- Manual testing: not run by Codex

## Included

- LAN simulator, mock device, CLI, and web dashboard
- core / validators / report / review-model / CLI / UI の責務分割
- happy-path、missing-required、warning、mixed-batch の代表suite
- QCDS、security/privacy、release evidence、docs ZIP

## Commands

```powershell
npm test
npm run serve -- --port 4173
```

Open `http://localhost:4173/app/` for the closed alpha UI.
