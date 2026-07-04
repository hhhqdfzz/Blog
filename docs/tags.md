---
title: 分类大厅
layout: page
---

# 🛠️ 软件分类大厅

<script setup>
import { ref, computed } from 'vue'
import { useData, withBase } from 'vitepress'

// 捞取全站所有文章的数据
const { pages } = useData()

// 定义当前选中的系统，默认是 'all' (显示全部)
const currentSystem = ref('all')

// 所有的系统标签列表
const systems = ['all', 'windows', 'linux', 'macOS']

// 💡 核心算法：动态过滤出含有当前选中系统的笔记
const filteredNotes = computed(() => {
  // 过滤掉首页(index.md)和当前分类页(tags.md)
  const allNotes = pages.value.filter(p => p.currentSystem !== 'page' && p.frontmatter.systems)
  
  if (currentSystem.value === 'all') {
    return allNotes
  }
  return allNotes.filter(p => {
    const sysList = p.frontmatter.systems || []
    return sysList.includes(currentSystem.value)
  })
})
</script>

<div class="filter-buttons">
  <button 
    v-for="sys in systems" 
    :key="sys"
    :class="{ active: currentSystem === sys }"
    @click="currentSystem = sys"
  >
    {{ sys.toUpperCase() }}
  </button>
</div>

---

<div class="notes-grid">
  <div v-if="filteredNotes.length === 0" class="no-data">
    没有找到支持该系统的软件笔记 
  </div>
  
  <a 
    v-for="note in filteredNotes" 
    :key="note.url" 
    :href="withBase(note.url)"
    class="note-card"
  >
    <h3>{{ note.frontmatter.title || note.title }}</h3>
    <div class="sys-tags">
      <span v-for="s in note.frontmatter.systems" :key="s" class="sys-tag">
        {{ s }}
      </span>
    </div>
  </a>
</div>

<style scoped>
.filter-buttons {
  display: flex;
  gap: 10px;
  margin: 20px 0;
}
.filter-buttons button {
  padding: 6px 16px;
  border: 1px solid var(--vp-c-brand);
  border-radius: 20px;
  cursor: pointer;
  background: transparent;
  color: var(--vp-c-brand);
  transition: all 0.2s;
}
.filter-buttons button:hover, .filter-buttons button.active {
  background: var(--vp-c-brand);
  color: white;
}
.notes-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 15px;
  margin-top: 20px;
}
.note-card {
  border: 1px solid var(--vp-c-bg-adv);
  background-color: var(--vp-c-bg-elv);
  padding: 15px;
  border-radius: 8px;
  text-decoration: none !important;
  color: inherit !important;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.note-card:hover {
  border-color: var(--vp-c-brand);
  transform: translateY(-2px);
  transition: all 0.2s;
}
.note-card h3 {
  margin: 0 0 10px 0;
  font-size: 1.1rem;
}
.sys-tags {
  display: flex;
  gap: 5px;
  flex-wrap: wrap;
}
.sys-tag {
  font-size: 0.75rem;
  background: var(--vp-c-bg-alt);
  padding: 2px 6px;
  border-radius: 4px;
  color: var(--vp-c-text-2);
}
</style>