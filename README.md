## CreateProject-webpack3-vue2-router2 ##

使用webpack3+vue2+router2创建项目

### 初始化项目 ###

新建项目目录 vueproject，在目录下执行 npm init --y 来创建一个 package.json，在 package.json 中先添加以下必备的模块：


    "devDependencies": { 
    	"vue": "^2.4.4",
		"vue-loader": "^13.0.5",
    	"vue-template-compiler": "^2.4.4",
    	"vue-router": "^2.7.0",
    	"webpack": "^3.6.0",
    	"webpack-dev-server": "^2.8.2"
    }

### 新建目录结构如下 ###

	vueproject
		|-- package.json
		|-- index.html
		|-- webpack.config.js
		|--src
			|-- components
			|-- vuews
			|-- main.js
			|-- router.js
			|-- app.vue

### 配置 webpack ###

webpack 默认取 webpack.config.js，所以文件名不能乱取，配置如下：

	module.exports = {
		entry: './src/main.js',
		output: {
			path: __dirname,
			publicPath: '/dist/',
			filename: 'build.js'
		}
	}

配置 webpack-dev-server，在 package.json 添加如下代码：

	"scripts": {
		"dev": "webpack-dev-server --inline --hot --open"
	}

### 验证配置 ###

为了验证配置是否正确，我们添加一些测试代码

在 index.html 中添加测试文字，引入打包后的 JS 文件

	<!-- index.html -->
	<body>
		Hello, World!
		<br>
		<script src="/dist/build.js"></script>
	</body>

在 main.js 中添加如下测试代码：

	//main.js
	document.write('来自 main.js 的问候')

执行下面代码来安装模块并启动服务器：

	npm i && npm run dev

启动后浏览器会自动打开 http://localhost:8080，如果控制台没有报错，页面正确显示 index.html 和 main.js 的内容，改动 main.js 后浏览器不刷新能看到效果，刚表示配置没有问题。

### 创建 vue 页面 ###

在 views 目录下新建 index.vue、about.vue、contact.vue

index.vue

	<template>
		<div>
			这是 {{page}} 页面
		</div>
	</template>
	<script>
		export default {
			data: function () {
				return {
					page: 'index'
				}
			}
		}
	</script>

about.vue

	<template>
		<div>
			这是 {{page}} 页面
		</div>
	</template>
	<script>
		export default {
			data: function () {
				return {
					page: 'about'
				}
			}
		}
	</script>

contact.vue

	<template>
		<div>
			这是 {{page}} 页面
		</div>
	</template>
	<script>
		export default {
			data: function () {
				return {
					page: 'contact'
				}
			}
		}
	</script>

### 配置路由 ###

将 vue-router 实例化传入参数 **new VueRouter(参数)** 提取到 router.js 形成路由配置文件

router.js 添加代码如下：

	import index from './views/index.vue'
	import about from './views/about.vue'
	import contact from './views/contact.vue'

	export default {
		routes: [
			{
				path: '/index',
				component: index
			},
			{
				path: '/about',
				component: about
			},
			{
				path: '/contact',
				component: contact
			}
		]
	}

### index.html ###

修改 index.html 代码如下：

	<body>
	<div id="example"></div>
	<script src="/dist/build.js"></script>
	</body>

### main.js ###

添加 main.js 代码如下

	import Vue from 'vue';
	import VueRouter from 'vue-router';

	import App from './app.vue';
	import routerConfig from './router';

	Vue.use(VueRouter);

	var router = new VueRouter(routerConfig);

	new Vue({
		el: '#example',
		router: router,
		render: h => h(App)
	})

### app.vue ###

app.vue 添加代码如下：

	<template>
	<div>
		<div>
			<router-link to="/index">Home</router-link>
			<router-link to="/about">About</router-link>
			<router-link to="/contact">Contact</router-link>
		</div>
		<div>
			<router-view></router-view>
		</div>
	</div>
	</template>

### 配置 loader ###

在 webpack.config.js 中配置 vue 文件对应的 loader 。

	modules: {
		rules: [
			{
				test: /\.vue$/,
				use: ["vue-loader"]
			}
		]
	}


**恭喜你， 项目已经创建成功了**
