---
title: 博客搭建完成
description: Hugo+Stack博客初始化说明
slug: welcome
date: 2026-03-20T10:00:00+08:00
categories:
  - 随笔
tags:
  - Hugo
  - Stack
---

![博客封面](cover.jpg)

## 欢迎

本站基于Hugo+Stack搭建，左侧边栏 + 右侧内容区，比窄栏居中主题更充分利用屏幕空间。

## 本地预览

    cd d:\CodeProject\myBlog
    .\scripts\dev.ps1

浏览器访问 http://127.0.0.1:1313/（必须通过hugo server访问）。

## 发布新文章

    hugo new content/post/my-writeup/index.md

编辑后将draft: false，推送到GitHub即可自动部署。

## 代码示例

    sqlmap -u "https://example.com/api?id=1" --batch --dbs
    nmap -sV -p 80,443 target.example.com
