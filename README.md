# giaugt

Giaugt Is A Uikit Ghost Theme
此主题基于 UIkit 开发，以简洁为风格提供博客最基础的 UI 展示

## Info

### user

- 未对多用户做适配，默认博客为个人博客，多用户在 ui 显示和逻辑上可能会出现冲突（例如单篇文章有多个作者，博文的作者显示栏将溢出）

### nav

导航栏默认设置了三个主内容

1. 博客 Navigation (后台 Design 设置)，所有 Navigation 条目都会被渲染出来(建议不要设置超过三条内容)
2. 博客归档 archive 导航（以下拉菜单的形式展示所有 tag 链接->(`url:/tag/{tagName}`)) -> ARCHIVE(`url:/archive/`)
3. 博客 page 导航(以下拉菜单的形式展示所有 page,除了`archive`和`more`) -> MORE(`url:/more/`)

### page

主题需要占用`archive`和`more`两个 page 的 url，
到管理页面新建两个 page,title 和 url 都相同
title: archive, url: /archive/
title: more, url: /more/

### tag

对于 tag,使用了几个`internal tag`：

- `#hide-feature-img`
- `#show-feature-img`
- `#hide-sider-bar`
- `#show-sider-bar`
- `#hide-cc-license`
- `#show-cc-license`

对于 post,默认显示侧边栏和图片和`cc-license`，如需关闭侧边栏，则对 post 加上`#hide-sider-bar`标签，图片同理
对于 page,默认不显示侧边栏和图片和`cc-license`,如需打开侧边栏，则对 page 加速`#show-sider-bar`标签，图片同理

## 感谢

- [uikit](https://github.com/uikit/uikit)
- [github.com/yijian166/md-toc.js](https://github.com/yijian166/md-toc.js)
- [gitalk](https://github.com/gitalk/gitalk)
- [prism](https://github.com/PrismJS/prism)
- [fontawesome](https://fontawesome.com)

## Usage

请先阅读 info 部分内容

1. 新建两个 page 页面`archive`和`more`，url 默认
2. 修改 `partials/social-icon.hbs` 里的内容，此为社交工具链接，请改为自己的链接
3. 修改 `partials/comment.hbs` 里的内容，改为自己的 `gitalk` 秘钥
4. 修改 `partials/author-description.hb`s` 里的内容

## Development

基于 nodejs 环境

1. 安装`ghost-cli`

   ```bash
   npm install ghost-cli -g
   ```

2. 新建文件夹并安装 ghost

   ```bash
   mkdir my_ghost
   cd my_ghost
   ghost install local
   ```

3. 启动 ghost

   ```bash
   cd my_ghost
   ghost start
   ```

4. ghost 管理页面上传此主题或者将此主题上传到`my_ghost/content/theme`文件夹里

5. 编辑文件，刷新 ghost 即可查看效果

## Copyright & License

Copyright (c) 2013-2019 Ghost Foundation - Released under the [MIT license](LICENSE).
