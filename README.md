# 寰曜数智官网

这是一个基于 `Vite + React + TypeScript` 构建的企业官网项目，面向政企数智化转型、解决方案展示、案例展示、CEO 专栏与资料导航场景。

## 当前内容

- 首页：品牌展示、服务能力、核心产业、成功案例与联系入口。
- 服务与解决方案：行业领域与四位一体服务能力。
- 成功案例：企业数字化、智慧能源、智慧教育、产教融合案例。
- CEO专栏：从公众号文章数据同步，当前共 `109` 篇，本地封面图为 `ceo-1.jpg` 到 `ceo-109.jpg`。
- 资料导航：集中展示报告、简报、政策文件和重点项目清单。
- 资料资源：静态下载页、预览页和 PDF 统一放在 `/report-library/resources/` 下。

## 技术栈

- `React 18`
- `TypeScript`
- `Vite`
- `react-router-dom`
- `lucide-react`

## 目录说明

```text
components/                         通用页面组件
pages/                              路由页面
data/                               本地展示数据
public/images/                      站点图片资源
public/images/ceo-column/           CEO专栏封面图
public/report-library/resources/    资料导航静态下载页、预览页和 PDF
scripts/deploy-huayao.sh            VPS 部署脚本
```

关键文件：

- `data/mock.ts`：成功案例与 `CEO专栏` 数据。
- `pages/ReportLibrary.tsx`：资料导航页。
- `public/report-library/resources/index.html`：资料资源目录页。
- `scripts/deploy-huayao.sh`：VPS 从 GitHub 拉取、构建、备份和发布脚本。

## 本地开发

安装依赖：

```bash
npm install
```

启动开发环境：

```bash
npm run dev
```

构建生产版本：

```bash
npm run build
```

本地预览构建结果：

```bash
npm run preview -- --host 0.0.0.0 --port 4173
```

本地访问地址：

```text
http://localhost:4173/
http://localhost:4173/#/news
http://localhost:4173/#/report-library
http://localhost:4173/report-library/resources/
```

## GitHub 到 VPS 部署方案

当前采用“本地提交并推送到 GitHub，VPS 从 GitHub 拉取并构建发布”的方案。

### 发布链路

1. 本地完成修改。
2. 本地执行 `npm run build` 验证。
3. 提交代码并推送到 GitHub 的 `main` 分支。
4. 登录 VPS。
5. 在 VPS 源码仓库目录执行 `scripts/deploy-huayao.sh`。
6. 脚本从 GitHub 同步最新 `main`，执行 `npm ci` 和 `npm run build`。
7. 脚本备份当前站点，再把新的 `dist/` 同步到站点发布目录。

### GitHub 仓库

```text
https://github.com/happynailinzz/huayao-digital-intelligence--1-.git
```

### VPS 推荐目录

```text
/www/wwwroot/huayao-repo      源码仓库目录，从 GitHub clone 或 pull
/www/wwwroot/huayao-site      网站发布目录，Nginx 指向这里
/www/wwwroot/huayao-backups   发布前自动备份目录
```

### VPS 首次初始化

安装基础工具：

```bash
sudo apt update
sudo apt install -y git rsync curl
```

安装 Node.js。推荐使用 Node.js `20` 或更新 LTS 版本：

```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs
node -v
npm -v
```

拉取仓库：

```bash
mkdir -p /www/wwwroot
cd /www/wwwroot
git clone https://github.com/happynailinzz/huayao-digital-intelligence--1-.git huayao-repo
mkdir -p /www/wwwroot/huayao-site /www/wwwroot/huayao-backups
```

首次部署：

```bash
cd /www/wwwroot/huayao-repo
chmod +x scripts/deploy-huayao.sh
bash scripts/deploy-huayao.sh
```

### 日常发布

本地推送后，在 VPS 执行：

```bash
cd /www/wwwroot/huayao-repo
bash scripts/deploy-huayao.sh
```

脚本会自动完成：

1. `git fetch origin`
2. `git reset --hard origin/main`
3. `git clean -fd`
4. `npm ci`
5. `npm run build`
6. 校验关键构建产物、CEO 图片和资料导航 PDF
7. 备份当前 `/www/wwwroot/huayao-site`
8. 用新 `dist/` 覆盖发布目录
9. 默认保留最近 `3` 份备份

### 可配置环境变量

如 VPS 目录或分支不同，可以用环境变量覆盖默认值：

```bash
REPO_DIR=/www/wwwroot/huayao-repo \
SITE_DIR=/www/wwwroot/huayao-site \
BACKUP_ROOT=/www/wwwroot/huayao-backups \
BRANCH=main \
KEEP_BACKUPS=3 \
bash scripts/deploy-huayao.sh
```

### Nginx 配置参考

本项目使用 `HashRouter`，主页面路由形如 `/#/news`，静态资料路径形如 `/report-library/resources/`。Nginx 指向 `dist` 发布目录即可。

```nginx
server {
    listen 80;
    server_name your-domain.com;

    root /www/wwwroot/huayao-site;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    location ~* \.(js|css|png|jpg|jpeg|gif|svg|webp|pdf|ico)$ {
        try_files $uri =404;
        expires 30d;
        add_header Cache-Control "public";
    }
}
```

部署后重点检查：

```text
https://your-domain.com/
https://your-domain.com/#/news
https://your-domain.com/#/report-library
https://your-domain.com/report-library/resources/
https://your-domain.com/report-library/resources/coal-industry-report-2025/downloads/china-coal-industry-report-2025.pdf
```

### 回滚方式

备份目录按时间戳保存，例如：

```text
/www/wwwroot/huayao-backups/2026-05-11-153000
```

回滚到某个备份：

```bash
rsync -a --delete /www/wwwroot/huayao-backups/<备份目录>/ /www/wwwroot/huayao-site/
```

## 当前部署注意事项

- `CEO专栏` 已使用本地图片，不依赖微信图片外链。
- `public/images/ceo-column/` 目前应包含 `ceo-1.jpg` 到 `ceo-109.jpg`。
- `资料导航` 的静态资源和 PDF 体积较大，必须随 GitHub 仓库一起推送到 VPS。
- VPS 部署请使用 `npm ci`，确保依赖版本与 `package-lock.json` 一致。
- 如果服务器下载 GitHub 速度慢，优先检查 VPS 到 GitHub 的网络连通性，而不是改动构建流程。
