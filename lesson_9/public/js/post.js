// Promise recap
// https://www.npmjs.com/package/json-server

let url = 'http://localhost:3000/posts';

let data = {
    test: 'test',
    title: '12313',
    
};

let jsonData = JSON.stringify(data);

fetch(url, {
    method: "POST",
    body: jsonData,
    headers: {
        "Content-Type": "application/json"
    }
})