// Code for Analog Clock
console.log("HELLO ,This project is created by 'Mohammed shabaaz❤️'");

setInterval(()=>{
date = new Date();
hours = date.getHours();
mins = date.getMinutes();
secs = date.getSeconds();

hour_rotate = 30*hours + (mins/2);
min_rotate = 6*mins;
sec_rotate = 6*secs;

hour.style.transform = `rotate(${hour_rotate}deg)`;
minute.style.transform = `rotate(${min_rotate}deg)`;
second.style.transform = `rotate(${sec_rotate}deg)`;
},1000);

// Code for Digital Clock
let clock=()=>{
    date = new Date();
    hrs = date.getHours();
    mins = date.getMinutes();
    secs = date.getSeconds(); 
    let time_period = "AM";
    if(hrs==0){
        hrs=12;
    }
    else if(hrs>=12){
        hrs = hrs-12;
        time_period ="PM";
    }
    hrs = hrs < 10 ? "0" + hrs : hrs;
    mins = mins < 10 ? "0" + mins : mins;
    secs = secs < 10 ? "0" + secs : secs;

    let time = `${hrs}:${mins}:${secs}:${time_period}`;
    document.getElementById("digital").innerText = time;
    setTimeout(clock,1000);
};

clock();

//Inter-conversion code

let s = document.getElementById("clk");
s.addEventListener("click",(e)=>{
      document.getElementById("contain").style.display ="none";  
      document.getElementById("digital").style.visibility = "visible";
      document.getElementById("title").innerHTML = "DIGITAL CLOCK";
      document.getElementById("clk").innerHTML = "Switch to Analog";
      document.getElementById("body").style.backgroundColor = "black";
      document.getElementById("title").style.color = "white";
      document.getElementById("clk").style.backgroundColor = "yellow";
      document.getElementById("clk").style.boxShadow = "2px 2px 10px yellow";
      document.getElementById("clk").style.border = "none";

});

//For reverse operetion
s.addEventListener("mousedown",(e)=>{
    document.getElementById("contain").style.display ="table";  
    document.getElementById("digital").style.visibility = "hidden";
    document.getElementById("title").innerHTML = "ANALOG CLOCK";
    document.getElementById("clk").innerHTML = "Switch to Digital";
    document.getElementById("body").style.backgroundColor = "white";
    document.getElementById("title").style.color = "black";
    document.getElementById("clk").style.backgroundColor = "rgb(108, 247, 247)";
    document.getElementById("clk").style.boxShadow = "2px 2px 10px black";

});