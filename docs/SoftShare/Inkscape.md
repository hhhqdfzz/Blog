---
title: Inkscape
alias: [inkscape]
os: [Windows, Linux, macOS]
category: [Graphics]
tags: [Vector Graphics]
description: 矢量图绘制
---

# {{ $frontmatter.title }}


**Description：** {{ $frontmatter.description }}。

| 适用系统 | 类型 | 标签 |
| --- | --- | --- |
| {{ $frontmatter.os.join(', ') }} | {{ $frontmatter.category.join(', ') }} | {{ $frontmatter.tags.join(', ') }}



## 插入LaTeX公式
[参考链接](https://inkscape.org/zh-hans/learn/tutorials/latex/)

如果仅仅需要实现在Inkscape中插入LaTeX公式，按下面的做，实现最小化安装，如果已经安装了[TeX Live](#texlive)，请跳过这一步。
```bash
sudo apt install texlive-base texlive-latex-recommended texlive-latex-extra pstoedit
```
然后在Inkscape中选择“扩展->渲染->公式(pdflatex)"，输入公式，点击“应用”即可。输入的公式必须要在数学环境（`$...$`或者`$$...$$`）内。
参考：
- [官网](https://inkscape.org/zh-hans/learn/tutorials/latex/)
- TeXText
  - https://github.com/textext/textext?tab=readme-ov-file
  - https://textext.github.io/textext/install/linux.html#for-ubuntu-based-systems-with-apt-get-package-manager
