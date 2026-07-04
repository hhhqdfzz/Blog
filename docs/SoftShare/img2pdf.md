---
title: img2pdf
alias: [img2pdf]
os: [Linux]
category: [Utility]
tags: [Translation]
description: 图片转PDF
---

# {{ $frontmatter.title }}

**Description：** {{ $frontmatter.description }}。

| 适用系统 | 类型 | 标签 |
| --- | --- | --- |
| {{ $frontmatter.os.join(', ') }} | {{ $frontmatter.category.join(', ') }} | {{ $frontmatter.tags.join(', ') }}

---

```bash
sudo apt install img2pdf
```

```bash
img2pdf image.jpg -o image.pdf
img2pdf image1.jpg image2.jpg ... imageN.jpg -o image.pdf
```