//api link for fetch temperature.. const url =`https://api.openweathermap.org/data/2.5/weather?q=delhi&units=metric&appid=abe181cd5440b15019bbf21067bac295`
console.log("Weather page js file");

const cityName = document.getElementById('cityName');
const submitBtn = document.getElementById('submitBtn');
const city_name = document.getElementById('city_name');
const temp = document.getElementById('temp');
const temp_status = document.getElementById('temp_status');
const dataHide = document.querySelector('.middle_layer');
const day = document.getElementById('day');
const today_date = document.getElementById('today_date');

const getInfo = async (e) => {
    e.preventDefault();

    let cityVal = cityName.value;

    if (cityVal === "") {
        city_name.innerHTML = `Plz Write the city name befor search`;
      dataHide.classList.add('data_hide');
    }
    else {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=abe181cd5440b15019bbf21067bac295`;
            const response = await fetch(url);
            const objData = await response.json();
            const arrData = [objData];
            temp.innerHTML = `${arrData[0].main.temp}°C`;
            city_name.innerHTML = `${arrData[0].name} | ${arrData[0].sys.country}`;
            
            // Condition to check sunny or cloudy
            const tempMood = arrData[0].weather[0].main;
            
            if(tempMood == "Clear"){
                temp_status.innerHTML = "<i class='fas fa-sun' style='color: orange;'></i>";
            } else if(tempMood == "Clouds"){
                temp_status.innerHTML = "<i class='fas fa-cloud' style='color: #f1f2f6;'></i>";
            } else if(tempMood == "Rain"){
                temp_status.innerHTML = "<i class='fas fa-cloud-rain' style='color: #a4b0be;'></i>";
            } else{
                temp_status.innerHTML = "<i class='fas fa-cloud-sun' style='color: #f9f180;'></i>";
            }
      dataHide.classList.remove('data_hide');

           
        } catch {
            city_name.innerHTML = "Plz Enter a Valid City Name";
      dataHide.classList.add('data_hide');

        }
    }
}
submitBtn.addEventListener('click', getInfo);

// For date 
const date = new Date();
function dayy(){
    const dayarr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thusday", "Friday", "Satarday"];
    let val = date.getDay();
    if(val == 7){
        day_name = dayarr[val-7];
    } else{

        day_name = dayarr[val];
    }
    return day_name;
};
const curDay = dayy();
day.innerHTML = `${curDay}`;

function month(){
    const montharr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const month_num = date.getMonth();
const cur_month = montharr[month_num];
return cur_month;
}
const curMonth = month();
const curDate = date.getDate();

today_date.innerHTML = `${curMonth} ${curDate}`;
