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
 console.log(attends);

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
let worktype=worktimes();
    // const no_time=0;
    // const part_time=1;
    // const full_time=2;
const wage_per_hour=20;

if(attends) {
    switch (worktype) {
        case 0:
            console.log(`The Employee Wage for Zero Working Hours is: ${0 * wage_per_hour}`);
            break;
        case 1:
            console.log(`The Employee Wage for Four Hours is: ${4 * wage_per_hour}`);
            break;
        case 2:
            console.log(`The Employee Wage for 8 Hours is: ${8 * wage_per_hour}`);
            break;
    }
}
else {
    console.log("The Employee is Absent");
}