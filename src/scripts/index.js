import "../styles/main.scss";
import "regenerator-runtime/runtime";

class FetchPage {
    constructor(newBaseURL) {
        this.baseUrl = newBaseURL;
        this.p = document.querySelector('p[data-status]');
        this.main = document.querySelector('main');
        this.adviceTitle = document.querySelector('.advice-title');

        this.addEvent();
    }

    addEvent() {
        document.querySelector('button')
            .addEventListener('click', () => {
                this.handleClick();
            });
    }

    handleClick() {
        this.p.dataset.status = "loading";
        this.adviceTitle.innerText = '';
        // REST
        fetch(`${this.baseUrl}advice`)
            .then((res) => {
                if (res.ok) {
                    return res.json();
                } else {
                    throw new Error(`${res.status} ${res.statusText}`)
                }
            })
            .then((data) => {
                // things worked out
                this.p.dataset.status = "done";

                // {
                //     slip: {
                //         id: 4567,
                //         advice: fghjkl
                //     }
                // }
                
                this.adviceTitle.innerText = data.slip.advice;
    
            })
            .catch((e) => {
                console.log(e);
            });
    }
}

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
    // TODO: init class here

    new FetchPage(baseURL);

    // FetchPage.addEvent()
    // const page = new FetchPage(baseURL);
    // page.addEvent();


    // const p = document.querySelector('p[data-status]');
    // const main = document.querySelector('main');
    // const adviceTitle = document.querySelector('.advice-title');

    // document.querySelector('button').addEventListener('click', (e) => {
    //     p.dataset.status = "loading";
    //     adviceTitle.innerText = '';
    //     // REST
    //     fetch(`${baseURL}advice`)
    //         .then((res) => {
    //             if (res.ok) {
    //                 return res.json();
    //             } else {
    //                 throw new Error(`${res.status} ${res.statusText}`)
    //             }
    //         })
    //         .then((data) => {
    //             // things worked out
    //             p.dataset.status = "done";

    //             // {
    //             //     slip: {
    //             //         id: 4567,
    //             //         advice: fghjkl
    //             //     }
    //             // }
                
    //             adviceTitle.innerText = data.slip.advice;
    
    //         })
    //         .catch((e) => {
    //             console.log(e);
    //         });
    // });
});


