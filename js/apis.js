const BASEURL = 'https://nhakhoa-d418.restdb.io/rest/';
const TOKEN = '61968472fc71545b0f5e092a';
const db = new restdb(TOKEN);

const postData = (url, body, params = null, successCallback, failCallback) => {
    // url = new URL(BASEURL + url);
    // if (params) {
    //     Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
    // }

    console.log('body', JSON.stringify(body));
    const instance = new db.products(body);
    instance.save(function(err, res){
        if (err){
            failCallback(err);  
        } else {
            successCallback(res);
        }
    });

    // $.ajax({
    //     url: url,
    //     method: 'POST',
    //     data: JSON.stringify(body),
    //     headers: {
    //         "content-type": "application/json",
    //         "x-apikey": TOKEN,
    //         "cache-control": "no-cache",
    //         'Accept': 'application/json',
    //         'Content-Type': 'application/json',
    //         'TOKEN': TOKEN,
    //         'Access-Control-Allow-Origin': '*',
    //         xhrFields: {
    //             withCredentials: false
    //         }
    //     },
    //     dataType: 'json',
    //     crossDomain: false,

    //     xhrFields: {
    //         withCredentials: false
    //     },
    //     success: successCallback,
    //     error: failCallback
    // });
}


const putData = (url, body, params = null, successCallback, failCallback) => {
    // url = new URL(BASEURL + url);
    // if (params) {
    //     Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
    // }

    // console.log('body', JSON.stringify(body));
    // $.ajax({
    //     url: url,
    //     method: 'PUT',
    //     data: JSON.stringify(body),
    //     headers: {
    //         "content-type": "application/json",
    //         "x-apikey": TOKEN,
    //         "cache-control": "no-cache",
    //         'Accept': 'application/json',
    //         'Content-Type': 'application/json',
    //         'TOKEN': TOKEN,
    //         'Access-Control-Allow-Origin': '*',
    //         xhrFields: {
    //             withCredentials: false
    //         }
    //     },
    //     dataType: 'json',
    //     crossDomain: false,

    //     xhrFields: {
    //         withCredentials: false
    //     },
    //     success: successCallback,
    //     error: failCallback
    // });

    console.log('body', JSON.stringify(body));
    const instance = new db.products(body);
    instance.save(function(err, res){
        if (err){
            failCallback(err);  
        } else {
            successCallback(res);
        }
    });
}


const getData = (url, query, successCallback, failCallback) => {
    // url = new URL(BASEURL + url);
    // if (params) { Object.keys(params).forEach(key => url.searchParams.append(key, params[key])) }
    // console.log(params)
    // $.ajax({
    //     url: url,
    //     crossDomain: false,
    //     method: 'GET',
    //     headers: {
    //         "content-type": "application/json",
    //         "x-apikey": TOKEN,
    //         "cache-control": "no-cache",
    //         'Accept': 'application/json',
    //         'Content-Type': 'application/json',
    //         'TOKEN': TOKEN,
    //         'Access-Control-Allow-Origin': '*',
    //         xhrFields: {
    //             withCredentials: false
    //         }
    //     },
    //     dataType: 'json',

    //     xhrFields: {
    //         withCredentials: false
    //     },
    //     success: successCallback,
    //     error: failCallback
    // });
 
    const hint = {}; // {"$max": 2000}; // first 10 only
    db[url].find(query, hint, function(err, productlist) {
        if (err) {
            failCallback && failCallback(err);
        } else {
            successCallback(productlist);
        }
    });
};


const delteData = (url, body, successCallback, failCallback) => {
    // url = new URL(BASEURL + url);
    // if (params) {
    //     Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
    // }

    // $.ajax({
    //     url: url,
    //     method: 'DELETE',
    //     headers: {
    //         "content-type": "application/json",
    //         "x-apikey": TOKEN,
    //         "cache-control": "no-cache",
    //         'Accept': 'application/json',
    //         'Content-Type': 'application/json',
    //         'TOKEN': TOKEN,
    //         'Access-Control-Allow-Origin': '*',
    //         xhrFields: {
    //             withCredentials: false
    //         }
    //     },
    //     dataType: 'json',
    //     crossDomain: false,

    //     xhrFields: {
    //         withCredentials: false
    //     },
    //     success: successCallback,
    //     error: failCallback
    // });
    console.log('body', JSON.stringify(body));
    const instance = new db.products(body);
    instance.delete(function(err, res){
        if (err){
            failCallback(err);  
        } else {
            successCallback(res);
        }
    });
}