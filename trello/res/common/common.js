(function($){
    $.extend( $ , {
        /*
        * 扩展jQuery的Ajax方法，用于异步获取数据:
        * post方式提交数据，适用于大数据提交。返回的JSON要符合规范。
        * 引号不能去掉。完整写法：{"key" , "value"}
        */
        PostJson: function(url, datas , callback , flag ) {
            //if(!flag){nbhtml5mobi.utils.showLoading('正在加载数据...');}
            $.ajax({
                url: url,
                type: "POST",
                data : datas +"&_=" + (new Date()).getTime(),
                cache: false,
                beforeSend: function (xhr) {
                    xhr.overrideMimeType("text/plain; charset=utf-8");
                },
                success: function(json) {
                    callback( "success",json );
                },
                error: function(e) {
                    callback( "error", {"returnMessage":"服务器连接出错!"} );
                },
                complete:function(){
                    //if(!flag){nbhtml5mobi.utils.hideLoading();}
                }
                
            });
        },
        /*
         * 获取url参数，多个参数
         * //Get object of URL parameters
         * var allVars = $.getUrlVars();
         * //Getting URL var by its name
         * var getName = $.getUrlVar('name');
         */
        getUrlVars: function(){
            var vars = [], hash;
            var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
            for(var i = 0; i < hashes.length; i++)
            {
              hash = hashes[i].split('=');
              vars.push(hash[0]);
              vars[hash[0]] = hash[1];
            }
            return vars;
        },
        getUrlVar: function(name){
            return $.getUrlVars()[name];
        }
    });
})(jQuery);
/*
    handlebars扩展
    eg:
    $('#content').temp( $('#template'),  { name: "Alan" } );
    $('#content').temp( 'string' ,  { name: "Alan" } );
*/
;(function($){
    var compiled = {};
    $.fn.temp = function(template, data) {
        /*
        if( $.zepto.isZ(template) ){
            template = template.val();
        }
        */
        if(template instanceof jQuery){
            template = template.val();
        }
        compiled[template] = Handlebars.compile(template);
        this.html(compiled[template](data));
        return this;
    };
})(jQuery);


 
$(function(){
    $('#J_slides').slidesjs({
        play: {
          interval: 5000,
          auto: true,
          swap: true,
          pauseOnHover: false,
          restartDelay: 5000
        }
    });
})