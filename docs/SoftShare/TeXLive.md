---
title: TeX Live
alias: [texlive, tex]
os: [Windows, Linux, macOS]
category: [Development]
tags: [typeset, 排版]
description: 排版语言 LaTeX 的编译引擎
---

# {{ $frontmatter.title }}

**Description：** {{ $frontmatter.description }}。

| 适用系统 | 类型 | 标签 |
| --- | --- | --- |
| {{ $frontmatter.os.join(', ') }} | {{ $frontmatter.category.join(', ') }} | {{ $frontmatter.tags.join(', ') }}

---

```bash
sudo apt install texlive-full texlive-xetex
```
然后在 Visual Studio Code 中安装 LaTeX Workshop 插件，在 `settings.json` 中加入如下语句：
```json
"latex-workshop.latex.tools": [
    {
        "name": "xelatex",
        "command": "xelatex",
        "args": [
            "-shell-escape",
            "-synctex=1",
            "-interaction=nonstopmode",
            "-file-line-error",
            "%DOC%"
        ]
    },
    {
        "name": "pdflatex",
        "command": "pdflatex",
        "args": [
            "-shell-escape",
            "-synctex=1",
            "-interaction=nonstopmode",
            "-file-line-error",
            "%DOC%"
        ]
    },
    {
        "name": "lualatex",
        "command": "lualatex",
        "args": [
            "-shell-escape",
            "-synctex=1",
            "-interaction=nonstopmode",
            "-file-line-error",
            "%DOC%"
        ]
    },
    {
        "name": "bibtex",
        "command": "bibtex",
        "args": [
            "%DOCFILE%"
        ]
    }
],
"latex-workshop.latex.recipes": [
    {
        "name": "XeLaTeX",
        "tools": [
            "xelatex"
        ]
    },
    {
        "name": "PDFLaTeX",
        "tools": [
            "pdflatex"
        ]
    },
    {
        "name": "LuaLaTeX",
        "tools": [
            "lualatex"
        ]
    },
    {
        "name": "latexmk",
        "tools": [
            "latexmk"
        ]
    },
    {
        "name": "BibTeX",
        "tools": [
            "bibtex"
        ]
    },
    {
        "name": "pdflatex -> bibtex -> pdflatex*2",
        "tools": [
            "pdflatex",
            "bibtex",
            "pdflatex",
            "pdflatex"
        ]
    },
    {
        "name": "xelatex -> bibtex -> xelatex*2",
        "tools": [
            "xelatex",
            "bibtex",
            "xelatex",
            "xelatex"
        ]
    }
],
"latex-workshop.view.pdf.internal.synctex.keybinding": "double-click",
"latex-workshop.latex.autoBuild.run":"onFileChange",
"latex-workshop.intellisense.package.enabled": true,
"files.autoSave": "afterDelay",
```
这样就完成了 LaTeX 在 Visual Studio Code 的安装和配置。这个配置在 Windows 中也适用。
