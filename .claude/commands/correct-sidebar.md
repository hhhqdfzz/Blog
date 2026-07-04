# 修正 sidebar 的排序逻辑

1. `docs/config.mts` 中，function autoSidebarSort()的 `items.sort` 的排序逻辑应该修改，不是 frontmatter.title 顺序，而是按照 `.md`文件名排序。
