var student = { 
    name : "David Rayy", 
    sclass : "VI", 
    rollno : 12 };

function getObjLength(obj) {
    return Object.keys(obj).length;
}

console.log('Size of object: ' + getObjLength(student));