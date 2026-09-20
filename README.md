# myBlog

基于Hexo+Butterfly的个人网络安全博客，Markdown写作，GitHub Actions部署到GitHub Pages。

## 一、项目说明

| 项目 | 说明 |
|------|------|
| 框架 | [Hexo](https://hexo.io/) 7.x |
| 主题 | [Butterfly](https://github.com/jerryc0823/hexo-theme-butterfly) |
| 部署 | GitHub Actions → GitHub Pages |
| 域名 | https://shaoxinsec.top/ |

## 二、环境配置

### 依赖

- Node.js LTS
- npm

### 安装依赖

    cd d:\CodeProject\myBlog
    $env:HTTP_PROXY='http://127.0.0.1:7890'
    $env:HTTPS_PROXY='http://127.0.0.1:7890'
    npm install

## 三、运行方法

    cd d:\CodeProject\myBlog
    .\tools\dev.ps1

访问 http://127.0.0.1:4000/

### 新建文章

    npx hexo new post 文章标题

文章位于 source/_posts/ 目录。

## 四、写文章：归档、分类与标签

每篇文章通过front matter（Markdown文件顶部YAML）控制元数据。站点会自动生成归档页、分类页和标签页。

### 字段说明

| 字段 | 作用 | 显示位置 |
|------|------|----------|
| date | 发布日期 | 归档（按年份汇总） |
| categories | 分类，建议每篇1个 | 分类页、文章卡片 |
| tags | 标签，可多个 | 标签页 |
| description | 摘要 | 首页卡片 |

### 文章模板

    ---
    title: 某平台API存在SQL注入
    date: 2026-03-21 14:30:00
    updated: 2026-03-21 14:30:00
    categories:
      - SRC挖洞
    tags:
      - SQL注入
      - API
      - MySQL
    description: 参数id未过滤导致的数据库注入
    ---

    ## 漏洞背景

    ## 复现过程

    ## 修复建议

### 常用分类参考

- 漏洞分析
- 渗透测试
- SRC挖洞
- 工具笔记
- 随笔

### 发布流程

1. 编辑 source/_posts/ 下的 Markdown 文件
2. 本地预览：.\scripts\dev.ps1
3. push到GitHub，Actions自动部署到 https://shaoxinsec.top/

## 五、目录结构

    myBlog/
    ├── _config.yml           # Hexo站点配置
    ├── _config.butterfly.yml # Butterfly主题配置
    ├── source/               # 文章与静态资源
    │   ├── _posts/           # 博客文章
    │   ├── tags/             # 标签页
    │   └── categories/       # 分类页
    ├── package.json
    └── .github/workflows/    # GitHub Actions

## 六、部署到GitHub Pages

1. 推送代码到 https://github.com/shaoxinSEC/shaoxinsec.github.io
2. Settings → Pages → Source 选择 GitHub Actions
3. 访问 https://shaoxinsec.top/

## 七、主题文档

- 中文文档：https://butterfly.js.org/
- Demo：https://butterfly.js.org/demo/
