var BASEURL = 'https://nhakhoa-d418.restdb.io/rest/';
var TOKEN = 'd062c603b4ade764a0eea854287175b7d55dd';

var postData = (url, body, params = null, successCallback, failCallback) => {
    url = new URL(BASEURL + url);
    if (params) {
        Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
    }

    console.log('body', JSON.stringify(body));
    $.ajax({
        url: url,
        method: 'POST',
        data: JSON.stringify(body),
        headers: {
            "content-type": "application/json",
            "x-apikey": TOKEN,
            "cache-control": "no-cache",
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'TOKEN': TOKEN,
            'Access-Control-Allow-Origin': '*',
            xhrFields: {
                withCredentials: false
            }
        },
        dataType: 'json',
        crossDomain: false,

        xhrFields: {
            withCredentials: false
        },
        success: successCallback,
        error: failCallback
    });
}


var putData = (url, body, params = null, successCallback, failCallback) => {
    url = new URL(BASEURL + url);
    if (params) {
        Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
    }

    console.log('body', JSON.stringify(body));
    $.ajax({
        url: url,
        method: 'PUT',
        data: JSON.stringify(body),
        headers: {
            "content-type": "application/json",
            "x-apikey": TOKEN,
            "cache-control": "no-cache",
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'TOKEN': TOKEN,
            'Access-Control-Allow-Origin': '*',
            xhrFields: {
                withCredentials: false
            }
        },
        dataType: 'json',
        crossDomain: false,

        xhrFields: {
            withCredentials: false
        },
        success: successCallback,
        error: failCallback
    });
}


var getData = (url, params, successCallback, failCallback) => {
    url = new URL(BASEURL + url);
    if (params) { Object.keys(params).forEach(key => url.searchParams.append(key, params[key])) }

    $.ajax({
        url: url,
        crossDomain: false,
        method: 'GET',
        headers: {
            "content-type": "application/json",
            "x-apikey": TOKEN,
            "cache-control": "no-cache",
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'TOKEN': TOKEN,
            'Access-Control-Allow-Origin': '*',
            xhrFields: {
                withCredentials: false
            }
        },
        dataType: 'json',

        xhrFields: {
            withCredentials: false
        },
        success: successCallback,
        error: failCallback
    });
};


var delteData = (url, params, successCallback, failCallback) => {
    url = new URL(BASEURL + url);
    if (params) {
        Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
    }

    $.ajax({
        url: url,
        method: 'DELETE',
        headers: {
            "content-type": "application/json",
            "x-apikey": TOKEN,
            "cache-control": "no-cache",
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'TOKEN': TOKEN,
            'Access-Control-Allow-Origin': '*',
            xhrFields: {
                withCredentials: false
            }
        },
        dataType: 'json',
        crossDomain: false,

        xhrFields: {
            withCredentials: false
        },
        success: successCallback,
        error: failCallback
    });
}