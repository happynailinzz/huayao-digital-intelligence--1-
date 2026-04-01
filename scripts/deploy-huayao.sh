#!/bin/bash
set -euo pipefail

REPO_DIR="/www/wwwroot/huayao-repo"
SITE_DIR="/www/wwwroot/huayao-site"
BACKUP_ROOT="/www/wwwroot/huayao-backups"
BACKUP_DIR="$BACKUP_ROOT/$(date +%F-%H%M%S)"

echo "== 同步远端代码 =="
cd "$REPO_DIR"
git fetch origin
git reset --hard origin/main
git clean -fd

echo "== 安装依赖 =="
npm install

echo "== 构建项目 =="
npm run build

echo "== 备份当前站点 =="
mkdir -p "$BACKUP_DIR"
rsync -av "$SITE_DIR/" "$BACKUP_DIR/"

echo "== 发布新版本 =="
rsync -av --delete dist/ "$SITE_DIR/"

echo "== 清理旧备份，只保留最近 2 份 =="
mkdir -p "$BACKUP_ROOT"
BACKUP_LIST=$(ls -1dt "$BACKUP_ROOT"/* 2>/dev/null || true)
if [ -n "$BACKUP_LIST" ]; then
  printf '%s\n' "$BACKUP_LIST" | tail -n +3 | xargs -r rm -rf
fi

echo "== 完成 =="
echo "当前备份目录: $BACKUP_DIR"
