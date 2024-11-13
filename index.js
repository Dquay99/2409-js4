// const Class = {
//     Name: '13A1',
//     students : [
//         {
//             id: 1, 
//             name: "Quốc Anh",
//             age: 18,
//             mark: 8,
//             gender: "male"
//         },
//         {
//             id: 2,
//             name: "Nhung",
//             age: 18,
//             mark: 9,
//             gender: "female"
//         },
//         {
//             id: 3,
//             name: "Sơn",
//             age: 17,
//             mark: 7, gender: "male"
//         },
//         {
//             id: 4,
//             name: "Trang",
//             age: 16, mark: 8,
//             gender: "female"
//         },
//         {
//             id: 5,
//             name: "Thảo",
//             age: 15,
//             mark: 75,
//             gender: "female"
//         }
//     ]
// };

// //1:
// Class.students.forEach(student => {
//     console.log(`ID:${student.id}`,`Name :${student.name}`)
// });

// //2:
// const newStudent = { id: 6, name: "Phong", age: 18, mark: 6, gender: "male" };
// Class.students.unshift(newstudent)
// console.log(newStudent);

// //3:
// const topStudent = Class.students.reduce((max, student) => (student.mark > max.mark ? student : max), Class.students[0]);

// console.log("Học sinh có điểm cao nhất:");
// console.log(`ID: ${topStudent.id}, Name: ${topStudent.name}, Age: ${topStudent.age}, Mark: ${topStudent.mark}, Gender: ${topStudent.gender}`);

//4:

//quizz1:

let me = {
    ten: "Duong Quoc Anh",
    tuoi: 21,
    diaChi: "Hà Nội",
    gioiTinh: "Nam",
    soThich: ["Đọc sách", "Nghe nhạc", "Chạy bộ"],
    chieuCao: 165,
    canNang: 65,
    tinhTrangHonNhan: "Độc thân",
    soDienThoai: "0123456789"
};

let banGai = {
    ten: "Dang Ngoc Anh",
    tuoi: 21,
    suTotBung: 10,
    nhaGiau: true
};

if (me.tuoi > 20 && banGai.tuoi > 20) {
    console.log("Tầm này cưới được rồi");
} else {
    console.log("Chờ thêm chút nữa");
}

//quizz2 :
function xinchao(name) {
    console.log("Hello world, " + name);
}
xinchao("Quoc Anh");

function tinhtoan(a,b){
    return (a+b)**2
}
console.log(tinhtoan(2,5));

function promptForPositiveNumber() {
    let a;
    do {
        a = parseFloat(prompt("Hãy nhập 1 số lớn hơn 0:"));
    } while (a <= 0 || isNaN(a));
    return a;
}
let positiveNumber = promptForPositiveNumber();
console.log("Số đã nhập :" + positiveNumber);

//quizz3:

function inSlogan(slogan) {
    let counter = 1;
    setInterval(() => {
        console.log(`${slogan} - ${counter}`);
        counter++;
    }, 5000); 
}
inSlogan(`${"anh em oi"}`);


const texts = ["Anh", "yeu", "tat", "ca","cac","em"];
const textsLength = texts.map(text => text.length);
console.log(textsLength); 


//thuchanh:
//1:



//2:
function tamgiac(a, b, c) {
    if (a > 0 && b > 0 && c > 0 && (a + b > c) && (a + c > b) && (b + c > a)) {
        return true;
    }else{
        return false;
    }
}
console.log(tamgiac(7, 8, 9)); 
console.log(tamgiac(1, 1, 3)); 
console.log(tamgiac(0, 3, 9)); 

//3:
function isValidDate(day, month, year) { 
    const date = new Date(year, month - 1, day); 
    return date.getDate() === day && date.getMonth() === month - 1 && date.getFullYear() === year ;
}
console.log(isValidDate(10, 12, 2004));
console.log(isValidDate(17, 8, 2006)); 
console.log(isValidDate(32, 13, 2009)); 



