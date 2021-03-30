class Quiz{
    constructor(_img,_correct,_note) {
        this.img=_img;
        this.correct=_correct;
        this.note =_note;
    }
}
let quizs=[];
let arr =new Quiz("image/bactinh.png","bạc tình","Trong hình có bạc và trái tim")
let arr1= new Quiz("image/trangluoiliem.png","trăng lưỡi liềm","Trăng đang cầm gì vậy")
let arr2= new Quiz("image/baocao.png","báo cáo","Trong hình có cáo và ...")
let arr3= new Quiz("image/baola.png","bao la","cái bao đang làm gì")
let arr4= new Quiz("image/cadao.png","ca dao","Trong hình có gì thì câu trả lời ở đó")
let arr5= new Quiz("image/obama.jpg","ô ba ma","Tên một vị tổng thống" )
let arr6= new Quiz("image/chidiem.png","chỉ điểm","Trong hình có gì thì câu trả lời ở đó")
let arr7= new Quiz("image/mynhanngu.jpg","mỹ nhân ngư","Cờ nước mỹ và mỹ nhân")
let arr81= new Quiz("image/loinguocdong.png","lội ngược dòng","Cái chân đang làm gì")
let arr8= new Quiz("image/matma.png","mật mã","Con ngựa và lọ mật")
let arr9= new Quiz("image/cungcau.png","cung cầu","Một câu thể hiện kinh doanh")
let arr10= new Quiz("image/canbang.png","cân bằng","Trong hình có gì nào")
let arr11= new Quiz("image/bahoa.png","ba hoa","Chỉ có hoa")
quizs.push(arr);
quizs.push(arr1);
quizs.push(arr2);
quizs.push(arr3);
quizs.push(arr4);
quizs.push(arr5);
quizs.push(arr6);
quizs.push(arr7);
quizs.push(arr81);
quizs.push(arr8);
quizs.push(arr9);
quizs.push(arr10);
quizs.push(arr11);
