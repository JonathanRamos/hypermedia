var request = require('request'),
    dom = require('node-dom').dom,
    fs = require('fs'),
    URL = require('url'),
    cookies = require('node-cookies'),
    cookieJar = cookies.cookieJar;

var	args = require('tav').set({
                url:{
                    note:'URL of the page to parse'
                },
                cookies:{
                    value:'/tmp/cookies.txt',
                    note:'Where to store cookies'
                },
                post:{
                    value:'',
                    note:'Post parameters'
                }
            },'dom-node for node.js',true);

var url = URL.parse(args.url);

var req = {uri:url.href};

//check if the cookie file exists - create it if not
try {fs.statSync(args.cookies);} catch(ee) {fs.writeFile(args.cookies,'',function(err) {});}
var fullJar = new cookieJar(args.cookies);
var jar = fullJar.extractCookiesForUrl(url.href);
var cookiestr = jar.cookiesForUrl();
req['headers'] = { Cookies:cookiestr };

if (args.post!=''){
    req['method'] = 'post';
    req['body'] = args.post;
};

request(req,function (error, response, page) {

        if (!error && response.statusCode == 200) {

            // update cookies sent by the server

            if (response.headers['set-cookie']){
                jar.setCookiesForUrl(response.headers['set-cookie']);
            };

            var options =	{	url:url,
                                features: {
                                            FetchExternalResources  : {script:'', img:'', input:'', link:''},
                                            ProcessExternalResources: {script:'',img:'',link:'',input:''},
                                            removeScript: true, //Remove scripts for innerHTML and outerHTML output
                                },
                                cookie: jar
            };

            window=dom(page,null,options); //global

            document=window.document; //global

            document.onload=function() {
            //Warning : you are not in the window context here (ie you can not access window global var as global variables directly)
            //Contexts are explained here https://github.com/joyent/node/issues/1674
            //Add your code and do what you have to do with the DOM

                fs.writeFile('./outer.html', document.html.outerHTML, function (err) {});
                //check the result in outer.html file
                //to test the result in a browser, don't forget to put the base tag after <head> with the correct href

                //Example, add your class
                //var MyClass = new require('MyClass').MyClass();
                //window.$=window.jQuery=require('jQuery').jQuery (invention here, let's say you want to use jQuery)

                //Do what you have to do with the DOM
                //Ex1 : MyClass.do_some_stuff_in_the_page();
                //Ex2 : Use jQuery

                //save cookies
                cookies.mergeJar(fullJar,document._cookie).saveToFile(args.cookies);
            };
        };
});
