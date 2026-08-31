# 个人简历网站

一个基于 Jekyll 构建的响应式个人简历网站，针对性能、可访问性和 SEO 进行了全面优化。

## 🌐 在线预览

- **地址**: https://uhaiin.com/resume
- **部署状态**: 优化后待部署

## ✨ 特性

- ✅ **响应式布局** - 完美适配手机、平板和桌面设备
- ✅ **性能优化** - Lighthouse 移动端评分预计 90+，桌面端 95+
- ✅ **可访问性** - WCAG 2.1 AA 标准，屏幕阅读器友好
- ✅ **SEO 优化** - 完整的 meta 标签、语义化 HTML
- ✅ **代码质量** - 现代 JavaScript (const/let)、清晰的结构

## 📊 Lighthouse 评分

| 类别 | 优化前 | 优化后 (预期) |
|------|--------|----------------|
| **性能** | 55 | **90+** (移动端) / **95+** (桌面端) |
| **可访问性** | 88 | **100** ✓ |
| **最佳实践** | 100 | **100** ✓ |
| **SEO** | 92 | **100** ✓ |

### 性能指标对比 (移动端)

| 指标 | 优化前 | 优化后 (预期) | 改进 |
|------|--------|----------------|------|
| FCP | 19.1s | 0.5-1.0s | **18-19s** |
| LCP | 30.3s | 0.8-1.5s | **28-29s** |
| Speed Index | 19.1s | 0.8-1.5s | **17-18s** |

## 🚀 优化内容

### 图像优化
- 头像从 325KB 优化到 3.7KB (移动端) + 14.6KB (桌面端)
- 响应式 srcset 自动选择合适的图像尺寸
- 日期图标从 8.8KB 优化到 0.8KB

### 字体优化
- 添加 preconnect 提示，提前建立与字体服务器的连接
- Google Fonts 添加 display=swap 避免文本不可见
- 减少 297ms 的渲染阻塞时间

### JavaScript 优化
- 用 IntersectionObserver 替换 setInterval 轮询
- 添加 defer 属性避免阻塞渲染
- 提升滚动性能和响应速度

### 可访问性优化
- 修复颜色对比度问题 (h1 文字从 2.91 提升到 3.73:1)
- 添加语义化的 <main> 标记
- 添加完整的 meta description
- 图片添加 lt 属性和 ria-label

### 代码优化
- 所有 ar 替换为 const/let
- 现代化 JavaScript 写法
- 减少变量提升带来的意外行为

### 响应式优化
- 移动端头像保持圆形显示
- 优化移动端布局，避免水平滚动
- 添加 overflow-x: hidden 防止溢出

## 🛠️ 技术栈

- **静态站点生成器**: Jekyll 3.10
- **CSS 预处理器**: SCSS
- **字体**: Google Fonts (Poppins)
- **图标**: FontAwesome SVG
- **图片**: WebP 格式 (响应式)

## 📁 项目结构

`
resume/
├── _config.yml          # Jekyll 配置文件
├── _layouts/
│   └── home.html         # 主布局模板
├── _data/
│   ├── Education.yml    # 教育背景
│   ├── Experience.yml   # 工作经验
│   ├── Skills.yml       # 专业技能
│   └── Projects.yml     # 项目经历
├── assets/
│   ├── css/
│   │   └── style.scss   # 主样式文件
│   ├── img/
│   │   ├── zjc-256.webp   # 移动端头像 (3.7KB)
│   │   ├── zjc-512.webp   # 桌面端头像 (14.6KB)
│   │   ├── calendar-48.webp  # 日期图标 (0.8KB)
│   │   └── ...             # 其他图标
│   └── js/
│       └── main.js      # 主要 JavaScript
├── Gemfile               # Ruby 依赖
└── README.md            # 项目说明
`

## 🔧 本地开发

### 前置要求

- Ruby >= 3.3
- Bundler >= 2.5
- Node.js >= 24 (用于图像处理)

### 安装依赖

`ash
# 安装 Ruby gems
bundle install

# 安装 Node.js 依赖
npm install
`

### 构建网站

`ash
# 生产环境构建
bundle exec jekyll build

# 开发环境 (自动重载)
bundle exec jekyll serve --host 0.0.0.0 --port 4000
`

### 图像优化

项目包含图像优化脚本，使用 Sharp 库：

`ash
# 优化头像
node -e \"
const sharp = require('sharp');
sharp('assets/img/zjc.webp').resize(256, 256).webp({quality: 82}).toFile('assets/img/zjc-256.webp');
sharp('assets/img/zjc.webp').resize(512, 512).webp({quality: 82}).toFile('assets/img/zjc-512.webp');
\"

# 优化图标
node -e \"
const sharp = require('sharp');
sharp('assets/img/calendar.webp').resize(48, 48).webp({quality: 85}).toFile('assets/img/calendar-48.webp');
\"
`

## 📦 部署

### 部署清单

部署前请确保上传以下文件：

**必须部署的文件：**
- _layouts/home.html - 优化后的布局
- ssets/css/style.scss - 优化后的样式
- ssets/js/main.js - 优化后的脚本
- _config.yml - 添加的 meta description
- ssets/img/zjc-256.webp - 新增移动端头像
- ssets/img/zjc-512.webp - 新增桌面端头像
- ssets/img/calendar-48.webp - 新增日期图标
- Gemfile - wdm 版本更新 (仅部署环境需要)

**部署步骤：**

1. 将修改的文件上传到服务器
2. 运行构建命令：undle exec jekyll build
3. 将 _site 目录部署到服务器
4. 清除 CDN 缓存 (如果有)
5. 验证线上网站功能正常

### 验证部署

`ash
# 运行 Lighthouse 验证性能
npx lighthouse https://uhaiin.com/resume --view

# 预期结果：
# - Performance: 90+ (mobile), 95+ (desktop)
# - Accessibility: 100
# - Best Practices: 96-100
# - SEO: 100
`

## 📝 自定义内容

### 编辑个人信息

编辑 _config.yml:

`yaml
title: 你的名字
name: \"你的名字\"
job: \"你的职位\"
phone_number: 155 0753 0622
address: 广东·广州
email: your.email@example.com
github_url: https://github.com/yourusername
`

### 编辑简历内容

编辑 _data/ 目录下的 YAML 文件：

- Education.yml - 教育背景
- Experience.yml - 工作经验
- Skills.yml - 专业技能
- Projects.yml - 项目经历

### 修改颜色主题

编辑 ssets/css/style.scss 中的 CSS 变量：

`scss
:root {
    --theme3-light: #FFF8E4;
    --theme3-medium: #EBDFBB;
    --theme3-dim: #C8B887;
    --theme3-dark: #94824A;    // 已优化对比度
    --theme4-light: #AABEB6;
    --theme4-medium: #7FA093;
    --theme4-dim: #5C8876;
    --theme4-dark: #3D725D;
}
`

## 🎨 设计说明

### 颜色方案
- **主题色 1**: 温暖的棕色调 (#F6D8CB - #8A5843)
- **主题色 2**: 柔和的紫灰色 (#B1B1C2 - #484776)
- **主题色 3**: 米黄色系 (#FFF8E4 - #94824A) - 已优化对比度
- **主题色 4**: 清新绿色调 (#AABEB6 - #3D725D)

### 响应式断点
- **移动端**: < 768px
- **平板/桌面**: >= 768px
- **大屏桌面**: >= 1024px

## 🔍 Lighthouse 审计报告

### 优化前 (线上版本)

`
Performance: 55
Accessibility: 88
Best Practices: 100
SEO: 92

FCP: 19.1s (score: 0)
LCP: 30.3s (score: 0)
Speed Index: 19.1s (score: 0)
`

### 优化后 (本地测试，预期线上结果)

`
Performance: 90+ (mobile), 95+ (desktop)
Accessibility: 100
Best Practices: 96-100
SEO: 100

FCP: 0.5-1.0s (score: 90+)
LCP: 0.8-1.5s (score: 95+)
Speed Index: 0.8-1.5s (score: 95+)
`

## 📄 许可证

MIT License - 自由使用、修改和分发。

## 👨‍💻 作者

**钟健材** - [GitHub](https://github.com/springvortex)

Java 研发工程师，4.5 年后端开发经验，精通 Spring Boot、微服务架构、高并发与大数据量处理。

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📞 联系方式

- **邮箱**: jiancai.zhong.1997@gmail.com
- **GitHub**: [springvortex](https://github.com/springvortex)
- **电话**: 155 0753 0622
