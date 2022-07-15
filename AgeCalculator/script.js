function age_cal(){
    let DateInputValue=document.getElementById('datCls').value;
    let mybirthdate=new Date(DateInputValue)
    let myDate=DateInputValue.toString()
    let myDay=myDate.slice(8)
    console.log(myDay)
    let MillisecondParse=Date.parse(mybirthdate)//return the millisecond between 1970and my date
    let millisecondnow=Date.now() //returns the millisecond between 1970 and now
    let millisecond=millisecondnow-MillisecondParse

    let Currentmillisecond=millisecond
    let second=1000 //====>1second to 1000millisecond
    let minutes=second*60
    let hour=minutes*60
    let day=hour*24
    let month=day*30
    let year=day*365
    let TotalAge =Math.floor(Currentmillisecond/year)
    let TotalMonth=(mybirthdate.getMonth())+TotalAge*12
    let TotalMonth1=TotalAge*12
    let TotalDay=TotalAge*365
    let Totalhours=Math.round(Currentmillisecond/hour)
    let Totalseconds=Math.round(Currentmillisecond/second)
    let today=new Date()
    let TotalDay1=today.getDate()-myDay
    if(today.getMonth() == mybirthdate.getMonth() &&(today.getDate() == mybirthdate.getDate())){
    alert("today is your birthday")
    }else if(isNaN(mybirthdate)){
    alert('invalid date')
    }
    else{
    console.log("your Age:"+TotalAge)
    document.getElementById('TotalAge').innerHTML= "your Age:"+TotalAge
    if(TotalMonth1 == 0){
    console.log("total months:"+TotalMonth)
    document.getElementById('TotalMonth').innerHTML= "total months:"+TotalMonth
    }
    else{
    console.log("total months:"+TotalMonth)
    document.getElementById('TotalMonth').innerHTML= "total months:"+TotalMonth
    }
    //
    if(TotalDay == 0){
    console.log("TotalDays:"+TotalDay1)
    document.getElementById('TotalDays').innerHTML="TotalDays:"+TotalDay1
    }else{
    console.log("TotalDays:"+TotalDay)
    document.getElementById('TotalDays').innerHTML="TotalDays:"+TotalDay
    }
    console.log("Total hours:"+Totalhours)
    document.getElementById('TotalHours').innerHTML="Total hours:"+Totalhours
    console.log("Total seconds:"+Totalseconds)
    document.getElementById('TotalSeconds').innerHTML="Total seconds:"+Totalseconds
    }
    }