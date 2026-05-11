#!/bin/bash
set -euo pipefail

REPO_DIR="${REPO_DIR:-/www/wwwroot/huayao-repo}"
SITE_DIR="${SITE_DIR:-/www/wwwroot/huayao-site}"
BACKUP_ROOT="${BACKUP_ROOT:-/www/wwwroot/huayao-backups}"
BRANCH="${BRANCH:-main}"
KEEP_BACKUPS="${KEEP_BACKUPS:-3}"
BACKUP_DIR="$BACKUP_ROOT/$(date +%F-%H%M%S)"

require_command() {
  if ! command -v "$1" >/dev/null 2>&1; then
    echo "缺少命令: $1" >&2
    exit 1
  fi
}

require_command git
require_command npm
require_command rsync

echo "== 部署参数 =="
echo "源码目录: $REPO_DIR"
echo "发布目录: $SITE_DIR"
echo "备份目录: $BACKUP_ROOT"
echo "部署分支: $BRANCH"
echo "保留备份: $KEEP_BACKUPS 份"

echo "== 同步 GitHub 远端代码 =="
cd "$REPO_DIR"
git fetch origin
git reset --hard "origin/$BRANCH"
git clean -fd

echo "== 当前版本 =="
git log -1 --oneline

echo "== 安装依赖 =="
npm ci

echo "== 构建项目 =="
npm run build

echo "== 校验构建产物 =="
test -f dist/index.html
test -f dist/assets/index-TTqxUK_v.css
test -d dist/images/ceo-column
test -f dist/images/ceo-column/ceo-109.jpg
test -f dist/report-library/resources/index.html
test -f dist/report-library/resources/coal-industry-report-2025/downloads/china-coal-industry-report-2025.pdf

echo "== 准备目录 =="
mkdir -p "$SITE_DIR" "$BACKUP_ROOT"

echo "== 备份当前站点 =="
if [ -n "$(ls -A "$SITE_DIR" 2>/dev/null || true)" ]; then
  mkdir -p "$BACKUP_DIR"
  rsync -a --delete "$SITE_DIR/" "$BACKUP_DIR/"
  echo "当前备份目录: $BACKUP_DIR"
else
  echo "发布目录为空，跳过备份"
fi

echo "== 发布新版本 =="
rsync -a --delete dist/ "$SITE_DIR/"

echo "== 清理旧备份，只保留最近 $KEEP_BACKUPS 份 =="
BACKUP_LIST=$(ls -1dt "$BACKUP_ROOT"/* 2>/dev/null || true)
if [ -n "$BACKUP_LIST" ]; then
  printf '%s\n' "$BACKUP_LIST" | tail -n +$((KEEP_BACKUPS + 1)) | xargs -r rm -rf
fi

echo "== 完成 =="
echo "站点发布目录: $SITE_DIR"
echo "请访问站点并重点检查: /#/news 与 /#/report-library"
