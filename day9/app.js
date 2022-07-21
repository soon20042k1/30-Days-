var search = document.querySelector('#search_input');
var city = document.querySelector('.city');
var country = document.querySelector('.country');
var time = document.querySelector('.time');
var valueTem = document.querySelector('.value');
var short_desc = document.querySelector('.short_desc');
var visibility = document.querySelector('.visibility span');
var wind = document.querySelector('.wind span');
var sun = document.querySelector('.sun span');
var content = document.querySelector('.content');
var body = document.querySelector('body');

async function changeWeather(capitalSearch){  // await chỉ có tác dụng trong hàm bất đồng bộ (asyns)
  let APIurl =`https://api.openweathermap.org/data/2.5/weather?q=${capitalSearch}&appid=c45c83ec7222604bc440deb6a614a508` // vào trang openweathermap để lấy API call và api key để ghép vào

    let data = await fetch(APIurl).then(res=> res.json());// chuyển về dạng js giống parse json ý
    //console.log(data); // để biết data. gì ra cái mình cần innerText
    if(data.cod == 200){
        content.classList.remove('hide')
        city.innerText = data.name;
        country.innerText = data.sys.country;
        short_desc.innerText = data.weather[0].description;
        visibility.innerText = data.visibility+' (m)';
        wind.innerText = data.wind.speed + (' (m/s)');
        sun.innerText = data.main.humidity + (' (%)');

        let valueTemp=Math.round (data.main.temp - 273.15) ;
        valueTem.innerText = valueTemp
     
        let date= new Date((data.dt)*1000);// dt:Hiển bị ngày giờ bản địa hóa
        time.innerText=date.toLocaleString();

         body.setAttribute('class','hot')
         if(valueTemp<=25){body.setAttribute('class','warm') } // nghĩ kỹ nha :))
         if(valueTemp<=19){body.setAttribute('class','cool') }
    }
    else{
        content.classList.add('hide')
    }
    
}

search.addEventListener("keypress", function(e){
    if(e.code ==='Enter'){
        let capitalSearch = search.value.trim();
        changeWeather(capitalSearch)
    }
})
changeWeather('ha noi')