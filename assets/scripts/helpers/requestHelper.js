'use strict';

export const RequestHelper = (function() {

    this.get = function sendGetMethod(method, url, params, success) {
        let xhr = new XMLHttpRequest();

        xhr.open(method, url + params, true);
        xhr.setRequestHeader('Content-Type', 'application/json;charset=utf-8');

        xhr.send();
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== 4) return;
            if (xhr.status === 200) {
                let data = JSON.parse(xhr.responseText);
                success(data);
            }
        };
    };

    this.post = function sendPostMethod(method, url, body, success) {
        let xhr = new XMLHttpRequest();

        xhr.open(method, url, true);
        xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

        xhr.onreadystatechange = function () {
            if (xhr.readyState !== 4) return;
            success(xhr.responseText);
        };

        xhr.send(JSON.stringify(body));
    };

    this.put = function sendPutMethod(method, url, params, data, success) {
        let xhr = new XMLHttpRequest();
        var body = JSON.stringify(data);

        xhr.open(method, url + params, true);
        xhr.setRequestHeader('Content-Type', 'application/json;charset=utf-8');
        xhr.onreadystatechange = function () {
            if (xhr.readyState !== 4) return;
            success();
        };
        xhr.send(body);
    };

})();



