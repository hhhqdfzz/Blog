import DefaultTheme from 'vitepress/theme' // 1. 把官方做好的皮肤偷过来
import './custom.css' // 🧠 在这里引入你的自定义样式表

export default {
  ...DefaultTheme // 继承官方所有样式
}