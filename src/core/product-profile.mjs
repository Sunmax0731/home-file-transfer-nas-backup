export const productProfile = {
  "repo": "home-file-transfer-nas-backup",
  "title": "家庭内ファイル転送・NAS・バックアップ",
  "domain": "IoT",
  "version": "0.1.0-alpha.1",
  "rank": 53,
  "tier": "P2",
  "score": 54,
  "publicTarget": "GitHub Release / 自宅LAN",
  "overview": "家庭内メディア、素材バックアップ、バックアップ成功監視、LAN内ファイル転送をまとめる。",
  "problem": "PCやスマホ間のファイル移動、NAS保存、バックアップ確認が分かれ、成功状態を確認しづらい。",
  "differentiation": "家庭内LAN前提で、転送、保存、バックアップ成功確認を同じワークフローにする。",
  "modules": [
    "src/core",
    "src/validators",
    "src/report",
    "src/review-model",
    "src/cli",
    "app",
    "src/simulator",
    "src/device-adapter",
    "src/host-adapter"
  ],
  "manualTestStatus": "not-run",
  "qcdsGrades": {
    "Quality": "S-",
    "Cost": "A+",
    "Delivery": "A+",
    "Satisfaction": "S-"
  },
  "securityBoundaries": [
    "実機なしで検証できるようsample telemetry、mock device、dry-run CLI、Web dashboardに閉じる。",
    "家庭LAN公開時は認証、端末allowlist、危険操作の二段階確認、ログ、復旧手順を必須にする。",
    "カメラ、ファイル、MQTT、自動化、バックアップ、OCR、音声/RSS保存は読み取り、匿名サンプル、dry-runを既定にする。"
  ]
};
