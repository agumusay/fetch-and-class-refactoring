import "../styles/main.scss";

import "regenerator-runtime/runtime";
// GET, POST, PUT, DELETE, PATCH
const baseURL = 'https://api.adviceslip.com/';

// const request =  fetch(`${baseURL}advice`);

// ```js
// {
//     "id": 3, 
//     "advice": "Lorem ipsum",
// }
// ```

// 1. got data
// 2. error data - error
// 3. loading

document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');

    const p = document.querySelector('p[data-status]');
    const main = document.querySelector('main');
    const adviceTitle = document.querySelector('.advice-title');

    document.querySelector('button').addEventListener('click', (e) => {
        p.dataset.status = "loading";
        adviceTitle.innerText = '';
        // REST
        fetch(`${baseURL}advice`)
            .then((res) => {
                if (res.ok) {
                    return res.json();
                } else {
                    throw new Error(`${res.status} ${res.statusText}`)
                }
            })
            .then((data) => {
                // things worked out
                p.dataset.status = "done";

                // {
                //     slip: {
                //         id: 4567,
                //         advice: fghjkl
                //     }
                // }
                
                adviceTitle.innerText = data.slip.advice;
    
            })
            .catch((e) => {
                console.log(e);
            });
    });
});


