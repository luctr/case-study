let count = Math.floor(Math.random() * ((quizs.length - 1) - 0 + 1) + 0);
let count1 = 0;
let point = 0;
let array = [];

let getQuizs = document.getElementById("img");

if (getQuizs!=null)
getQuizs.setAttribute("src", quizs[count].img);


function point1()  {
    document.getElementById("sp1").innerText =userName + " " +"điểm của bạn là  " + point;
}

function support() {
    document.getElementById("text").innerText = quizs[count].note;
}

function reset() {
    let a = confirm("Bạn có chắc chắn muốn reset không")
    if (a) {
        location.reload();
    }
}
//set tên lấy từ localStorage
let userName=document.getElementById("sp1").innerText = get()
//hàm bỏ qua câu hỏi 1 lần
function next() {

    count = Math.floor(Math.random() * ((quizs.length - 1) - 0 + 1) + 0);
    while (array.includes(count)) {
        count = Math.floor(Math.random() * ((quizs.length - 1) - 0 + 1) + 0);
    }

    if (count1 == 0) {

        count1++;
        getQuizs.setAttribute("src", quizs[count].img);
    } else {
        alert("hết lượt");
    }

}
//hàm chuyển ảnh ngẫu nhiên
function next2() {

    count = Math.floor(Math.random() * ((quizs.length - 1) - 0 + 1) + 0);
    while (array.includes(count)) {
        if(array.length === quizs.length)
            break


        count = Math.floor(Math.random() * ((quizs.length - 1) - 0 + 1) + 0);
    }
    if (count < quizs.length) {
        console.log(quizs[count])
        getQuizs.setAttribute("src", quizs[count].img);
    }

    if (array.length == quizs.length-1) {
        alert("câu hỏi cuối cùng rồi nè")

    }


    if (array.length == quizs.length){
        document.getElementById("kq").style.display='none'
        document.getElementById("ip-1").style.display='none'
        document.getElementById("win").style.display='block'
        addElement()

    }
}
//hàm hiện ra khi win và đặt lại trò chơi
function handleClose(){
    // document.getElementById("win").style.display='none'
    count = Math.floor(Math.random() * ((quizs.length - 1) - 0 + 1) + 0);
    document.getElementById("nhacnenwin").pause()
    location.reload()

}
//hàm check kết quả
function result() {
    let value = document.getElementById("ip-1").value
    let check = value === quizs[count].correct
    if (check) {
        music()
        array.push(count)
        point++;
        next2();
        point1();
        document.getElementById("ip-1").value = "";
    } else {
        musicc()
    }
}
//nhạc khi đúng câu hỏi
function music() {
    document.getElementById("nhacdung").play()

}
//nhạc khi sai
function musicc() {
    document.getElementById("nhacsai").play()
}
//nhạc khi thắng toàn bộ
function addElement(){
    document.getElementById("nhacnenwin").play()
}
function get() {
    return localStorage.getItem("user")
}





