var gulp = require('gulp');
var server = require('gulp-webserver');


gulp.task("default",function(){
	gulp.src("src")
		.pipe(server({
			port:7979,
			livereload:true,
			middleware:function(req,res,next){
				if(req.url==='/lb'){
				res.end(JSON.stringify(data))
			}
			next()
			}
		}))
})


