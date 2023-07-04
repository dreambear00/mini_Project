
let modal = document.querySelector("#modal");
let modal_background = document.querySelector("#modal_background");
const modal_btn = () => {
    
    // document.querySelector('reg').style.color = 'gray';
    modal_background.style.display = "block";
    modal.style.display = "block";
    
}

const reg_btn = () => {
    // input 값 입력
    let nickNm = document.getElementById("inputNm")
    localStorage.setItem("nickName",nickNm.value)
    
    modal_background.style.display = "none";
    modal.style.display = "none";

    nickNm.value = "";
    
}

let test_storage = localStorage.getItem("nickName");
console.log(test_storage);


let exit_btn = () => {
    modal_background.style.display = "none";
    modal.style.display = "none";
}