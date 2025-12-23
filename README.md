# **欢迎来到我的博客源文件**

欢迎您来到本项目，祝您玩的愉快！

## 一、使用我的模板

### 1.克隆本项目

如果你想要直接使用我的文件并进行二次创作，请使用控制台的
```shell
git clone https://github.com/LiuDaiJun07/MarkLiu07Blog.git
```
命令获取当前整个文件，接下来我会教你如何使用这个模板

### 2.主页的更改

在这个项目中你几乎不用做出更多的更改就能完成度属于你自己的静态博客，因为所有的内容都是完善的，你可以在任何平台中访问，并且会针对不同屏幕进行自动调节。

**如果你想要修改主页视频：**

请访问以下目录：`MarkLiu07Blog/statics/Image/`
里面存在文件：`MainVideo.mp4`

请替换这个视频文件，放上你喜欢的横向视频。注意！你需要控制视频大小在20MB以内，以便用户可以快速加载，适当调整分辨率是不错的选择。

**如果你想修改其他内容**

请访问根目录目录的以下文件：`index.html`

请在这个文件中直接更改文本或者增加代码块，或者根据文件中的内容修改图像文件，以此达到你想要的效果。

**如果你想修改菜单栏**

注意！此步骤修改后你需要修改所有`MarkLiu07Blog/Pages/`目录下的html文件！

### 3.简历的更改

请使用Word文档书写您的简历，然后导出为PNG格式，随后前往以下目录：`MarkLiu07Blog/statics/Image/`
修改`CV.png`文件

### 4.文章的更改

这一步是重点，请访问：`MarkLiu07Blog/Pages/Post/`
找到`model.html`文件，此文件是已经准备好的模板文件，把它直接复制一份出来，重命名为你的标题，进入文件后就开始进行你的创作吧。

**大标题和日期的修改：**

```html
<div class="MainLargeTitle">
	<h1 style="font-weight: bold;">大标题</h1>
	<h4 style="color: gray; padding-top: 1%;">年月日</h4>
</div>
```
**文本内容的修改**

```html
<p class="MainFont">这是文章的正文部分。在这里，你可以添加你的内容</p>
```
**图像的修改**

```html
<div class="MainIMG">
	<img src="../../statics/Image/VIEWICON.jpg" alt="Example" class="img-responsive">
</div>
```
**代码块的插入**

注意：本方法有缺陷，我建议您使用插件！本方法需要手动添加行数！

```html
<div class="MainCode">
	<h4>Python代码块</h4>
	<pre>
		<code>
1| print("Hello, World!")//这个代码是实例代码
		</code>
	</pre>
</div>
```

## 二、参观我的博客

如果你只是想单纯访问我的博客，请访问：[MarkLiu的博客](https://markliublog.tbit.top/ "MarkLiu的博客")

## 三、其他

**感谢：**
- 影视剧风提供的主页视频（FREE资源）
- [影视剧风](https://markliublog.tbit.top/)网站主页提供的灵感
- 豆泽晨，杨安迪提供的精神支持
- 程创空间ChanceSpace提供的其他支持
- [公益域名之家](https://www.freedns.fun/)提供的二级域名支持
