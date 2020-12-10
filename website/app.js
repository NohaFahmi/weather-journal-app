/* Global Variables */

// Create a new date instance dynamically with JS

let input = document.querySelector('#zip');
let userFeelings = document.querySelector('#feelings');
const api_key = '6e982cc853f655889dc57517af0dd134';
let dataObj = {}

document.querySelector('.generate').addEventListener('click',
    async function getTemperature () {
        let zipCode = input.value;
        // console.log(zipCode);
        let res = await fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&appid=${api_key}&units=metric`)
        try {
            let data = await res.json();
            // console.log(data);
            console.log(data.weather[0].icon)
            console.log(data.weather[0].main)

            dataObj = {
                city: data.name,
                temp: Math.floor(data.main.temp),
                icon: data.weather[0].icon,
                status: data.weather[0].main,
                date: data.dt,
                userResponse: userFeelings.value
            }
        
            postData('/add', dataObj);
            updateUI(dataObj);
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

const updateUI = (data) => {
    document.querySelector('.temp-title').innerHTML = data.temp + '&deg;';
    document.querySelector('.city').innerHTML = data.city;
    document.querySelector('.icon-img').src = `http://openweathermap.org/img/wn/${data.icon}.png`;
    document.querySelector('.des').innerHTML = data.status;
    document.querySelector('.content').innerHTML = data.userResponse;
    
    let d = new Date(data.date * 1000);
    let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    let days = ['Sunday', 'Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

    let newDate =  d.getDate() + ' ' + months[d.getMonth()] + ' ' + d.getFullYear();
    document.querySelector('.date').innerHTML = days[d.getDay()] + ', ' + newDate;

}
