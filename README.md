# 寰曜数智官网

这是一个基于 `Vite + React + TypeScript` 构建的企业官网项目，面向政企数智化转型、解决方案展示、案例展示与品牌内容传播场景。

## 当前版本特性

- 品牌名称、品牌战略与公司主体信息已统一为当前版本内容
- 首页保留品牌展示、服务能力、行业领域、成功案例与联系入口
- 导航中的 `行业动态` 已调整为 `CEO专栏`
- `CEO专栏` 页面已替换为本地文章数据与本地图片资源
- `CEO专栏` 支持按日期从近到远排序
- `CEO专栏` 支持分页浏览，每页显示 8 条
- 翻页后自动回到页面顶部
- 仓库已清理为以网站源码与有效静态资源为主的结构

## 技术栈

- `React 18`
- `TypeScript`
- `Vite`
- `react-router-dom`
- `lucide-react`

## 目录说明

```text
components/   页面组件
pages/        路由页面
data/         本地展示数据
public/       静态资源
```

其中：

- `data/mock.ts` 包含案例与 `CEO专栏` 页面使用的数据
- `public/images/ceo-column/` 存放 `CEO专栏` 本地封面图

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
npm run preview
```

## 部署方式

当前项目采用以下发布方式：

1. 本地修改并提交代码
2. 推送到 GitHub 仓库
3. 服务器仓库目录同步远端最新代码
4. 在服务器执行依赖安装与构建
5. 将 `dist/` 发布到站点目录
6. 发布前自动备份当前站点，并仅保留最近 2 份备份

示例命令：

```bash
git fetch origin
git reset --hard origin/main
git clean -fd
npm install
npm run build
```

### VPS 一键更新

当前服务器部署结构：

```text
/www/wwwroot/huayao-repo   源码仓库目录
/www/wwwroot/huayao-site   网站发布目录
/www/wwwroot/huayao-backups 站点备份目录
```

仓库内提供正式部署脚本：

```bash
scripts/deploy-huayao.sh
```

首次执行前请确保脚本有执行权限：

```bash
cd /www/wwwroot/huayao-repo
chmod +x scripts/deploy-huayao.sh
```

之后每次更新执行：

```bash
cd /www/wwwroot/huayao-repo
bash scripts/deploy-huayao.sh
```

该脚本会自动完成以下操作：

1. 强制同步远端 `main` 分支到服务器仓库
2. 安装依赖并执行生产构建
3. 备份当前站点目录到 `/www/wwwroot/huayao-backups/<时间戳>`
4. 将最新 `dist/` 同步到 `/www/wwwroot/huayao-site`
5. 自动清理旧备份，只保留最近 2 份

## 说明

- 当前仓库不再保留旧的部署脚本、Nginx 配置和无效图片资源
- `寰曜数智` 相关页面内容已按当前版本统一调整
- `“寰曜数智”为河南寰耀数字技术有限公司持有商标`
