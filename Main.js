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


//UC5
hours = 0;
let max_days = 0;
let max_wage = 0;
while (hours <= 160 && max_days < 20) {
    const workType = worktimes();
    switch (workType) {
        case 1:
            max_days++;
            break;
        case 0:
            hours += 4;
            max_days++;
            max_wage += 20 * 4;
            break;
        case 2:
            hours += 8;
            max_days++;
            max_wage += 20 * 8;
            break;
    }
}

console.log(`Total Working Hours: ${hours}`);
console.log(`Total Working Days: ${max_days}`);
console.log(`Total Wage for the Month: $${max_wage}`);