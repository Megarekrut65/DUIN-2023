
export const extractText = (url)=>{
    const myHeaders = new Headers();
    myHeaders.append("apikey", "oxxfYyna6PTVsQXKJyS12n0rTasGIgZh");
    
    const requestOptions = {
        method: 'GET',
        redirect: 'follow',
        headers: myHeaders
    };
    
    const apiUrl = `https://api.apilayer.com/image_to_text/url?url=${encodeURIComponent(url)}`;

    return fetch(apiUrl, requestOptions)
        .then(response => response.text());
};