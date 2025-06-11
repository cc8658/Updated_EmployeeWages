function Check_Employee(){
    let attendance=Math.floor(Math.random()*2);
    if(attendance==0){
        return "Employee is Absent";
    }
    else{
        return "Employee is Present";
    }

    //return attendance;
}

console.log(Check_Employee());