/* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();
let input = document.querySelector('#zip');
let userFeelings = document.querySelector('#feelings');
const api_key = '6e982cc853f655889dc57517af0dd134';
let dataObj = {}
/* 
document.querySelector('#generate').addEventListener('click',
    async function getTemperature () {
        let zipCode = input.value;
        // console.log(zipCode);
        let res = await fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&appid=${api_key}&units=metric`)
        try {
            let data = await res.json();
            // console.log(data);
            dataObj = {
                temp: data.main.temp,
                date: newDate,
                userResponse: userFeelings.value
            }
        
            postData('/add', dataObj);
        }
        catch(err) {
            console.log('ERROR:', err);
        }
    }
);



const postData = async (url, data) => {
    
    console.log("DATA", data);

    const res = await fetch(url, 
        { 
            method: 'POST', 
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        }
    );
    
    console.log("RES", res);

    const newData = await res.json();
    console.log('New', newData);
    return newData;
}

 */