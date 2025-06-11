//UC1
function Check_Employee(){
    let attendance=Math.floor(Math.random()*2);
    let attend=0
    if(attendance==1){
        attend=1;
    }
    return attend;
}
let attends=Check_Employee();

//UC2
function worktimes(){
    let time=Math.floor(Math.random()*3);
    let worktime=0
    if(time==1){
        worktime=1;
    }
    else if(time==2){
        worktime=2;
    }
    return worktime;
}

//UC3
function DailyWorkHours(){
    let WorkType=worktimes();
    let hour=0
    switch (WorkType) {
        case 0:
            hour=0
            break;
        case 1:
            hour=4
            break;
        case 2:
            hour=8
            break;
    }
    return hour
}

//UC4
let montly_wages=0;
let montly_hours=0;
let hours=0;
let daily_wages=0
hours=DailyWorkHours();
daily_wages=hours*20;
montly_hours=hours*20;
montly_wages=daily_wages*20;
console.log(`Daily Hours of the Employee is: ${hours}`);
console.log(`Daily Wages: ${daily_wages}`);
console.log(`Montly Hours: ${montly_hours}`);
console.log(`Montly Wages: ${montly_wages}`);