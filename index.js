// Write your solution in this file!
const employee = {
    name: "Susan Fakename",
    streetAddress : "123 Fake St."
}

function updateEmployeeWithKeyAndValue(employeeObject,key,value){
    return {...employeeObject,[key] : value,}
}
function destructivelyUpdateEmployeeWithKeyAndValue(employeObject,key,value){
    employeObject[key]=value;
    return employeObject;
}
function deleteFromEmployeeByKey(employeeObject,key){
    const newEmployee = {...employeeObject};
    delete newEmployee[key];
    return newEmployee; 
}
function destructivelyDeleteFromEmployeeByKey(employeeObject,key){
    delete employeeObject[key];
    return employeeObject;
}