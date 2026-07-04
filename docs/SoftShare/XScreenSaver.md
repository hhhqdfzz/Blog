---
title: XScreenSaver
alias: [xscreensaver]
os: [Linux, macOS]
category: [System]
tags: [Screen Saver]
description: 屏幕保护程序
---


# {{ $frontmatter.title }}

[官网](https://www.jwz.org/xscreensaver/)

**Description：** {{ $frontmatter.description }}。

| 适用系统 | 类型 | 标签 |
| --- | --- | --- |
| {{ $frontmatter.os.join(', ') }} | {{ $frontmatter.category.join(', ') }} | {{ $frontmatter.tags.join(', ') }}

---

于 1992 年发布，历史悠久。

按如下方法覆盖当前桌面环境的屏保程序，从而使得锁屏界面受 XScreenSaver 控制，以 Cinnamon 桌面环境为例，其他桌面环境使用类似的方法：
```bash
#!/bin/bash
# file-path: ~/.local/bin/cinnamon-screensaver-command

# 检测传入的参数中是否包含锁屏请求 (--lock 或 -l)
if [[ "$*" == *"--lock"* ]] || [[ "$*" == *"-l"* ]]; then
    # 调用 xscreensaver 锁屏
    xscreensaver-command -lock
else
    # 如果是其他查询状态的参数，传回给原生的 cinnamon-screensaver
    /usr/bin/cinnamon-screensaver-command "$@"
fi
```

作者 Jamie Zawinski 极度反感微软公司的行径，并且微软毁了自己的网景公司，所以他拒绝使用微软的任何产品，认为其他人也不应该使用，如果自己开发的任何产品支持 Windows，就是在给微软助力，这不是他希望的。所以 [XScreenSaver 没有 Windows 版本](https://www.jwz.org/xscreensaver/xscreensaver-windows.html)。