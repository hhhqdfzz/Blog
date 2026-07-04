# 简化 sidebar 配置

1. 仅能阅读或修改 `config.mts` 中的 `sidebar` 部分，若要阅读或修改其他部分，请获取我的允许。
2. 简化、自动化 `config.mts` 中的 `sidebar`的配置。例如：
    ```ts
          // SoftShare 相关页面路径
          '/SoftShare/': [
            {
              text: '实用软件分享',
              items: [
                { text: '首页', link: '/SoftShare/index' },
                { text: 'Clash Verge', link: '/SoftShare/Clash_Verge' },
                { text: 'Claude Code CLI', link: '/SoftShare/Claude' },
                // 省略其他页面
              ]
            }
          ],
    ```
    归结为：
    ```ts
          // <目录名> 相关页面路径
          '/<目录名>/': [
            {
              text: '<目录名在nav中的label>',
              items: [
                { text: '首页', link: '/<目录名>/index' },
                { text: '<Markdown的Frontmatter中的title字段>', link: '/<目录名>/<Markdown文件名>' },
                // 除了 Index 外，其他页面按照 `.md`文件名排序。
                // 省略其他页面
              ]
            }
          ],
    ```
    用变量的方式实现这样的批量配置，这样我引入或删除笔记，或给笔记修改标题时，就不需要回到 `config.mts` 中手动修改`sidebar`了。
