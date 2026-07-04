---
title: tldr
alias: [tldr]
os: [Linux]
category: [Utility]
tags: [Manual]
description: man 的简易版
---

# {{ $frontmatter.title }}

[官网](https://github.com/tldr-pages/tldr)

**Description：** {{ $frontmatter.description }}。

| 适用系统 | 类型 | 标签 |
| --- | --- | --- |
| {{ $frontmatter.os.join(', ') }} | {{ $frontmatter.category.join(', ') }} | {{ $frontmatter.tags.join(', ') }}



## 安装
```bash
pipx install tldr
pipx ensurepath
source ~/.bashrc
tldr --update
```

## 常用命令
查看某命令的帮助
```bash
tldr <command>
```

更新 tldr 数据。如果 `tldr <command>` 的输出要等很长时间，就需要更新了。
```bash
tldr --update
```
