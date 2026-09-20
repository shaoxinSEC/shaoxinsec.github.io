# myBlog

基于Hugo+Stack的个人网络安全博客，Markdown写作，GitHub Actions部署到GitHub Pages。

## 一、项目说明

| 项目 | 说明 |
|------|------|
| 框架 | [Hugo](https://gohugo.io/) v0.166.0 Extended |
| 主题 | [Stack](https://github.com/CaiJimmy/hugo-theme-stack) v4 |
| 布局 | 左侧边栏 + 右侧卡片式内容区 |
| 部署 | GitHub Actions → GitHub Pages |

## 二、环境配置

### 依赖

- Hugo Extended
- Go≥1.12（Hugo Module拉取主题）

### 拉取主题

    $env:HTTP_PROXY='http://127.0.0.1:7890'
    $env:HTTPS_PROXY='http://127.0.0.1:7890'
    hugo mod get

## 三、运行方法

    cd d:\CodeProject\myBlog
    .\scripts\dev.ps1

访问 http://127.0.0.1:1313/

### 新建文章

    hugo new content/post/my-writeup/index.md

文章目录为content/post/（注意是post不是posts）。

## 四、目录结构

    myBlog/
    ├── config/_default/     # 站点与主题配置
    ├── config/development/  # 本地开发 baseURL
    ├── content/post/        # 博客文章
    ├── go.mod / go.sum      # Hugo Module
    └── .github/workflows/   # GitHub Actions

## 五、部署到GitHub Pages

1. 推送代码到GitHub
2. Settings→Pages→Source选择GitHub Actions
3. 访问 https://shaoxinsec.top/

## 六、主题文档

- 官方文档：https://stack.cai.im/zh
- Demo：https://demo.stack.cai.im

