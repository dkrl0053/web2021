var id,password;
id = prompt("아이디 입력");

if( id=="admin"){
    // document.write("관리자 입니다."); 
    location.href = "login.html"
}else{
    // document.write("나가주세요.");
    location.href = "error.html"
}