const http = require('http');

function getDataFn(request,response){
    var options = {
        hostname:'fb.mylove920.com',
        port:80,
        method:'get',
        path:request.url.replace('api/','')
    }

    var req = http.request(options,function(res){
        var result = '';

        res.on('data',function(chunk){
            result += chunk;
        })

        res.on('end',function(){
            console.log(result);
            response.writeHead(200,{
                'Content-Type':'application/json;charset=utf-8'
            })
            response.end(result);
        })
    })

    req.end();
}


exports.postData = function(request, response) {
    var data = request.body; //提交过来的数据
    var dataString = JSON.stringify(data);

    console.log(dataString);

    var url = request.url.replace('api/','');

    var options = {
        hostname:'106.12.111.117',
        port:8084,
        method:'POST',
        path:url,
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
        }
    }

    console.log(options);

    var req = http.request(options, function(res) {
        res.setEncoding('utf-8');
        var pdata = '';

        res.on('data', function(chunk) {
            pdata += chunk;
        })
        res.on('end', function() {
            var result = JSON.parse(pdata);
            response.json(result);
        })

        res.on('error', function(e) {
            console.log(e);
        })
    })


    req.write(dataString);
    req.end();
}


exports.getData = function(req,res){
    getDataFn(req,res);
};