/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
		// 默认路径
		handlebars: { //定义预编译任务
		    compile: {
		        options: {
		            namespace: "JST" //命名空间，这个很重要，后面会提到
		        },
		        files: [{
		            expand: true,
		            cwd: 'temp',
		            src: '**/*.handlebars', //模板文件
		            dest: 'temp/', //编译后的文件存放位置
		            ext: '.js' //编译后的文件格式          
		        }]
		        //如果要把所有模板文件编译到一个 .js 文件，则可以写成：
		        //files: {"js/dest/template.js": ['js/src/handlebars/**/*.handlebars']}
		    }
		},
		watch: { //监控文件变化并自动执行预编译任务
		    precompile: {
		        files: 'temp/*.handlebars',
		        tasks: ['handlebars']
		    }
		}
	});

	// Grunt插件加载声明
	grunt.loadNpmTasks('grunt-contrib-handlebars');

	grunt.loadNpmTasks('grunt-contrib-watch');
	
};


