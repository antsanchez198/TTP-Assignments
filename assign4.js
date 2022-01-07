//Question #1
const btn1 = document.getElementById("btn1")
const btn1Text = document.getElementById("btn1Text")
const btn2 = document.getElementById("btn2")
const btn2Text = document.getElementById("btn2Text")

btn1.onclick = function btn1Clicked() {
    btn1Text.textContent = "I'm right"
    btn2Text.textContent = " "
};

btn2.onclick = function btn2Clicked() {
    btn2Text.textContent = "No I'm right"
    btn1Text.textContent = " "
};

//Question 2
const dontHover = document.getElementById("paraHover")
console.log(dontHover)
dontHover.onmouseover = function hoverTriggered(){
    alert("Hey, I told you not to hover over me!")
};

//Question 3
const submitBtn = document.getElementById("submitBtn")
const usernameTxt = document.getElementById("usernameInput")
const emailTxt = document.getElementById("emailInput")
const passwordTxt = document.getElementById("passInput")
const info = document.getElementById("headingInfo")

console.log(submitBtn)

submitBtn.onclick = function submitBtnClicked() {
    //Question 4
    console.log(usernameTxt.value)
    let passFilled = undefined
    let userFilled = undefined
    let emailFilled = undefined
    let finalAlert = ""
    if (passwordTxt.value != "12345678"){
        passFilled = false
        let passMess = " 'Password Incorrect' "
        finalAlert += passMess
    }
    if (usernameTxt.value == ""){
        userFilled = false
        let userMess = " 'Username left empty' "
        finalAlert += userMess
    }
    if (emailTxt.value == ""){
        emailFilled = false
        let emailMess = " 'Email left Empty' "
        finalAlert += emailMess
    }
    if (passFilled == false || userFilled == false || emailFilled == false){
        alert("Error:" + finalAlert)
    }
    else {
        info.textContent = "Submitted Successfully"
    }    
}
