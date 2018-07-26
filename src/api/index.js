// 动态判断请求域名
const domain = /localhost/ig.test(window.location.host)?'http://baojia-test.chelun.com':'https://baojia.chelun.com';

// 填充请求参数
function sendRequest(url){
    let ua = navigator.userAgent,
        os = '';
    // 添加系统参数
    if ((/iPhone|iPad/ig).test(ua)){
        os = 'ios';
    }else{
        os = 'android';
    }
    let char = '?';
    if (/\?/.test(url)){
        char = '&';
    }
    url += `${char}os=${os}&_=${+new Date()}`;
    return fetch(domain+url);
}



let AllId = localStorage.getItem("id");

export const getImgList = (id)=>{
    AllId = id;
    return sendRequest(`/v2-car-getImageList.html?SerialID=${id}`);
}

export const getCate = (id, page)=>{
    console.log("id4..." , id)
    return sendRequest(`/v2-car-getCategoryImageList.html?SerialID=${AllId}&ImageID=${id || localStorage.getItem("pageid")}&Page=${page}&PageSize=30`)
}