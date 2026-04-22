# 发布记录：CEO专栏内容更新与发布时间修正

发布日期：2026-04-22

分支：`main`

## 本次发布内容

1. 更新 `CEO专栏` 文章内容

- 根据 `/Users/ethanyu/Downloads/微信公众号文章 (1).json` 同步更新专栏文章数据。
- `CEO专栏` 文章总数由 `69` 篇更新为 `83` 篇。
- 新增文章序号范围：`ceo-70` 到 `ceo-83`。
- 原 `ceo-69` 内容已按最新素材替换为新文章。

2. 修正文章发布时间显示

- 按素材文件中的发布时间重新核对所有文章日期。
- 统一按北京时间 `Asia/Shanghai` 解析时间戳并显示日期。
- 修正后，网页上展示的每一篇文章日期均与素材文件发布时间对应。

3. 更新本地封面资源

- 新增本地封面图：`ceo-70.jpg` 到 `ceo-83.jpg`。
- 重新下载并替换：`ceo-69.jpg`。
- 页面继续全部使用本地封面资源，不依赖微信外链图片。

## 影响文件

- `data/mock.ts`
- `public/images/ceo-column/ceo-69.jpg`
- `public/images/ceo-column/ceo-70.jpg`
- `public/images/ceo-column/ceo-71.jpg`
- `public/images/ceo-column/ceo-72.jpg`
- `public/images/ceo-column/ceo-73.jpg`
- `public/images/ceo-column/ceo-74.jpg`
- `public/images/ceo-column/ceo-75.jpg`
- `public/images/ceo-column/ceo-76.jpg`
- `public/images/ceo-column/ceo-77.jpg`
- `public/images/ceo-column/ceo-78.jpg`
- `public/images/ceo-column/ceo-79.jpg`
- `public/images/ceo-column/ceo-80.jpg`
- `public/images/ceo-column/ceo-81.jpg`
- `public/images/ceo-column/ceo-82.jpg`
- `public/images/ceo-column/ceo-83.jpg`

## 验证记录

1. 日期一致性校验通过

- 校验方式：逐篇比对 `data/mock.ts` 中的 `date` 与 JSON 文件中的发布时间。
- 时区规则：按北京时间 `Asia/Shanghai` 解析。
- 校验结果：`83` 篇文章全部匹配，`mismatchCount 0`。

2. 本地构建验证通过

- 执行命令：`npm run build`
- 结果：构建成功。

3. 本地页面预览验证

- 预览地址：`http://127.0.0.1:3001/#/news`
- 核验结果：分页文案正常，显示为 `第 1 / 11 页，共 83 篇`。

## 说明

- 本次发布时间问题的根因是此前按 `UTC` 截取日期，导致少数文章晚一天的北京时间未被正确反映。
- 本次已统一更正为按文件中的发布时间并结合北京时间显示。
