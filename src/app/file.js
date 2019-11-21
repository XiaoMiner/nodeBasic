const fs = require('fs');
const path = require('path');

// 解析要遍历的目录 path.resolve('./audio')
// 一个路径或者一个路径片段(相对路径)解析成一个绝对路径,返回解析后的路径字符串。
const audioDirPath = path.resolve('D:\\test');
// const audioDirPath = path.resolve('./router');

// console.log(audioDirPath);

traversingFiles(audioDirPath);

// 循环遍历文件
function traversingFiles(audioDirPath){
//读取路径下的文件,返回目录下的 【目录or文件】 数组对象。fs.readdir(path, callback);
    fs.readdir(audioDirPath, function(err, files){
        if(err){
            console.warn(err);
        }else {
            // [ 'data',
            //   'driver',
            //   'extensions',
            //   'locales',
            //   'ModuleDll',
            //   'PepperFlash',
            //   'plugin',
            //   'qbroker',
            //   'service' ]
            // console.log(files);
            // 遍历读取到的文件列表-(包括文件和目录)
            files.forEach(function(filename){
                    //    'data'
                    //   'driver'
                    //   'extensions'
                    //   'locales'
                    //   'ModuleDll'
                    //   'PepperFlash'
                    //   'plugin'
                    //   'qbroker'
                    //   'service'
                // console.log(filename);
                // 把全部给定的 path 片段连接到一起，并规范化生成的路径
                const fileAbsolutePath = path.join(audioDirPath, filename);
                fs.stat(fileAbsolutePath, function(err, stats){ // 获取到文件信息对象stats。
                    // console.log(stats);
                    if(err){
                        console.warn('获取文件信息对象stats失败!')
                    }else {

                        if(stats.isFile()){ // 当前为文件
                            console.log(fileAbsolutePath);
                        }
                        if(stats.isDirectory()){ // 当前为文件
                            traversingFiles(fileAbsolutePath); // 递归如果时文件夹,就继续遍历文件夹
                            console.log(fileAbsolutePath)
                        }
                    }
                })
            })
        }
    })
}