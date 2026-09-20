---
title: 博客搭建完成
date: 2026-03-20 10:00:00
updated: 2026-03-20 10:00:00
categories:
  - 随笔
tags:
  - Hexo
  - Butterfly
description: Hexo+Butterfly博客初始化说明
---

## 欢迎

本站基于 Hexo + Butterfly 搭建，Markdown 写作，GitHub Actions 自动部署到 GitHub Pages。

## 本地预览

    cd d:\CodeProject\myBlog
    .\scripts\dev.ps1

浏览器访问 http://127.0.0.1:4000/

## 发布新文章

    npx hexo new post 文章标题

编辑 `source/_posts/` 下生成的 Markdown 文件，推送到 GitHub 即可自动部署。

## 代码示例

    sqlmap -u "https://example.com/api?id=1" --batch --dbs
    nmap -sV -p 80,443 target.example.com
