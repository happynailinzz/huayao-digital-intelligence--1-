# 发布记录：CEO专栏内容更新

发布日期：2026-04-12

分支：`main`

已发布提交：

- `e9442d6` `update ceo column content and localize new cover assets`
- `b947b3e` `chore: ignore vite cache directory`

## 本次发布内容

1. 更新 `CEO专栏` 数据源

- 使用 `/Users/ethanyu/Downloads/微信公众号文章.json` 同步更新专栏文章数据。
- `CEO专栏` 文章总数更新为 `69` 篇。
- 页面继续保持按日期倒序展示，每页显示 `8` 篇。

2. 新增本地封面资源

- 新增本地封面图 `ceo-57.jpg` 到 `ceo-69.jpg`。
- `CEO专栏` 全部 `69` 篇文章现已统一使用项目本地图片资源。
- 页面不再依赖新增文章的微信外链封面地址，展示稳定性更高。

3. 开发环境清理

- 将 `.vite/` 加入 `.gitignore`。
- 清理本地 Vite 缓存目录，避免临时文件进入版本管理。

## 涉及文件

- `data/mock.ts`
- `public/images/ceo-column/ceo-57.jpg`
- `public/images/ceo-column/ceo-58.jpg`
- `public/images/ceo-column/ceo-59.jpg`
- `public/images/ceo-column/ceo-60.jpg`
- `public/images/ceo-column/ceo-61.jpg`
- `public/images/ceo-column/ceo-62.jpg`
- `public/images/ceo-column/ceo-63.jpg`
- `public/images/ceo-column/ceo-64.jpg`
- `public/images/ceo-column/ceo-65.jpg`
- `public/images/ceo-column/ceo-66.jpg`
- `public/images/ceo-column/ceo-67.jpg`
- `public/images/ceo-column/ceo-68.jpg`
- `public/images/ceo-column/ceo-69.jpg`
- `.gitignore`

## 验证记录

1. 本地构建验证通过

- 执行命令：`npm run build`
- 结果：构建成功

2. 页面预览验证通过

- 预览地址：`http://127.0.0.1:3000/#/news`
- 验证项：
  - `CEO专栏` 首页分页文案正常：`第 1 / 9 页，共 69 篇`
  - 末页文章内容可正常展示
  - 新增文章封面路径已确认为本地图片资源

3. 截图留档

- 本地截图：`/tmp/huayao-news-page9.png`

## 发布结果

- 已推送到远端仓库：`origin/main`
- 推送范围：`6180ba5..b947b3e`
