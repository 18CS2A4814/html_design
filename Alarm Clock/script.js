console.log(document.getElementById('playSound'));
class Alarm{

    constructor(){
       setInterval(()=>{
        this.getCurrentTime();
        this.checkAlarm();
       },100)
       setInterval(()=>{
        Alarm.paintToDom(alarmArr);
       },10000);
       
    }

     getCurrentTime()
    {
        let time=new Date();
        let hour=time.getHours();
        let minute=time.getMinutes();
        let second=time.getSeconds();
        hour=hour<10?'0'+hour:hour;
        minute=minute<10?'0'+minute:minute;
        second=second<10?'0'+second:second;
        let html=`<p><b>${hour} :</b><b> ${minute} :</b><b> ${second}</b></p>`;
        document.querySelector(".current-time").innerHTML=html;
    }

    checkAlarm()
    {
        let time=new Date();
        alarmArr.forEach((e)=>{
           let str=e;
           e=new Date(e);
           if(e.getDate()==time.getDate() && e.getFullYear()==time.getFullYear() && e.getMonth()==e.getMonth())
           {
            if(e.getMinutes()==time.getMinutes() && e.getSeconds()==time.getSeconds() && e.getHours()==time.getHours())
            {
                console.log("Alarm on");
                alarmArr=alarmArr.filter((e)=>{
                    return e!=str;
                });
                 //add to local storage.
                console.log(alarmArr);
                let arr=JSON.stringify(alarmArr);
                arr=btoa(arr);
                localStorage.setItem('alarm',arr);
                // alert("alarm on");
                document.getElementById("myAudio").loop=false;
                document.getElementById("myAudio").play();
            }
           }
            
        })
    }

    static paintToDom(arr)
    {
        
        document.querySelector('.alarm-list').innerHTML="";
        document.querySelector('.alarm-list').innerHTML="<h1>Your Alarm</h1>";
        arr.forEach((e)=>{
            let a=btoa(e);
            e=new Date(e);
            let minutes=(e - new Date());
            minutes=minutes/1000;
            minutes=Math.ceil(minutes/60);
            if(minutes<60)
            {
                var minutesLeft=`${minutes} minutes from now`;
            }
            else
            {
                let hours=Math.floor(minutes/60);
                minutes=Math.ceil(minutes%60);
                var minutesLeft=`${hours} hours and ${minutes} minutes from now`;
            }

           let div=document.createElement('div');
           div.classList.add(a);
           div.classList.add("alarms");
           div.innerHTML=`<div><p>Alarm at:<b> ${e}</b></p><button onclick="Alarm.removeAlarm(this)">Remove</button></div><h1>${minutesLeft}</h1>`;
           document.querySelector('.alarm-list').appendChild(div);
        })
    }

    static checkDateValid(target,present)
    {        
        if(target>present)
        {
            return true;
        }
        return false;
    }

    static setAlarm(num,format)
    {
        if(format=='min')
        {
            num=1;
            alert(`Alarm will ring after ${num} minutes`);
            let time=new Date();
            console.log(time)
            time.setMinutes(time.getMinutes()+num);
            time=time.toString();
            alarmArr.push(time);
            this.paintToDom(alarmArr);           
        }
        else
        {
            let date=document.querySelector("input[type='date']").value;
            let time=document.querySelector("input[type='time']").value;

            if(date && time)
            {
                let de=new Date();
                console.log(de.getDate())
                let d=new Date(date.toString()+" "+time.toString());
               if(this.checkDateValid(d,de))
               {
                  alarmArr.push(d);
                  this.paintToDom(alarmArr); 
               }
               else
               {
                    alert("Date can't be past")
                    return;
               }
                
                     
            }
            else
            {
                alert("Can't be empty")
            } 
        }
         //add to local storage.
         console.log(alarmArr);
         let arr=JSON.stringify(alarmArr);
         arr=btoa(arr);
         localStorage.setItem('alarm',arr);
    }

    static removeAlarm(e)
    {
        let time=atob(e.parentElement.parentElement.classList[0]);
        alarmArr=alarmArr.filter((e)=>{
            return e!=time;
        });
        e.parentElement.parentElement.remove();
       
        //add to localstorage
        let arr=JSON.stringify(alarmArr);
        arr=btoa(arr);
        localStorage.setItem('alarm',arr);
    } 
}


if(localStorage.getItem('alarm')!=undefined)
{
    var alarmArr=atob(localStorage.getItem('alarm'));
    alarmArr=JSON.parse(alarmArr);
    Alarm.paintToDom(alarmArr);
}
else
{
    var alarmArr=[];
}


let obj=new Alarm();

document.querySelector(".quick-alarm").addEventListener("click",(e)=>{
   
    if(document.querySelector('.quick-alarm-list').style.display=="block")
    {
        document.querySelector('.quick-alarm-list').style.display="none";
    }
    else
    {
        document.querySelector('.quick-alarm-list').style.display="block"
    }
});

// console.log(new Date())
var start = '2017/03/11 12:00:00';
var end = '2017/03/11 12:01:02';

// time in milliseconds:
var time =  Math.abs(new Date(start) - new Date(end));
// console.log(new Date(" 2022/12/11 12:01:45")-new Date("2022/12/10 01:00:00"));
// console.log(time)
