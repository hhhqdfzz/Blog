# CLAUDE.md

## 项目名称/概述
个人博客

## 技术栈
- 博客正文：Markdown
- 网站生成：VitePress
- 搜索/Ask AI：Algolia DocSearch

## 核心文件
- `docs/.vitepress/config.mts` - VitePress 配置文件
- `scripts/upload-algolia.mjs` - Algolia 搜索索引上传脚本
- `SoftShare/tags.md` - 提供标签搜索功能，独立于 Algolia

## Commands
```bash
npm run docs:dev       # Start VitePress dev server (hot-reload)
npm run docs:build     # Build for production → docs/.vitepress/dist/
npm run docs:preview   # Preview production build locally
npm run upload-search  # Push Markdown content to Algolia search index
```

## 开发规范
见 `.claude/rules/`


