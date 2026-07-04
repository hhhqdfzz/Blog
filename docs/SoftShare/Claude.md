---
title: Claude Code CLI
alias: [claude-code, claude]
os: [Windows, Linux, macOS]
category: [Development]
tags: [AI]
description: AI编程助手
---

# {{ $frontmatter.title }}

[官网](https://claude.com/product/claude-code)

**Description：** {{ $frontmatter.description }}。

| 适用系统 | 类型 | 标签 |
| --- | --- | --- |
| {{ $frontmatter.os.join(', ') }} | {{ $frontmatter.category.join(', ') }} | {{ $frontmatter.tags.join(', ') }}

## 安装
```bash
curl -fsSL https://claude.ai/install.sh | bash
```
## 教程
- https://www.runoob.com/claude-code/claude-code-tutorial.html
- https://code.claude.com/docs/zh-CN/overview
## 删除
To uninstall Claude Code CLI, use the command for your installation method:

**macOS/Linux/WSL:**
```bash
rm -f ~/.local/bin/claude
rm -rf ~/.local/share/claude
rm -rf ~/.claude
rm ~/.claude.json
```

**Windows PowerShell:**
```powershell
Remove-Item -Path "$env:USERPROFILE\.local\bin\claude.exe" -Force
Remove-Item -Path "$env:USERPROFILE\.local\share\claude" -Recurse -Force
```

**Homebrew:** `brew uninstall --cask claude-code`

**WinGet:** `winget uninstall Anthropic.ClaudeCode`

**npm:** `npm uninstall -g @anthropic-ai/claude-code`



