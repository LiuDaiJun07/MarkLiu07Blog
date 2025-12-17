fetch('https://v1.hitokoto.cn')//获取一言
    .then(response => response.json())
    .then(data => {
        const hitokoto = document.querySelector('#hitokoto_text');
        hitokoto.innerText = "“" + data.hitokoto + "”";
    })
    .catch(console.error)