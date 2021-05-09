var usrInput = document.getElementById("usrInput")
var checkList = document.getElementById("CheckList")
var btnClick = document.getElementById("btnFindClick")
var errMessage = document.getElementById("errorMessage")

var findValue = []
while (findValue.length < 4) {
    var randomNumber = Math.floor(Math.random() * 10)
    if (findValue.indexOf(randomNumber) === -1) findValue.push(randomNumber)
    if (findValue[0] == 0) findValue[0] = Math.ceil(Math.random() * 9)
}
console.log("test")

var resultArray = []

function CheckNumberControl() {

    if (usrInput.value.length < 4) {
        ShowErrorMessage("Girilen Sayı En Az 4 Haneli Olmalıdır !");
        return;
    }

    let usrInputArray = usrInput.value.toString().split('').map(Number)

    if (new Set(usrInputArray).size !== usrInputArray.length) {
        ShowErrorMessage("Girilen Sayının Rakamları Farklı Olmalıdır !")
        usrInput.value = null;
    } else CheckNumber()
}

function CheckNumber() {

    let usrInputArray = usrInput.value.toString().split('').map(Number)

    for (let i = 0; i <= 3; i++) {

        if (usrInputArray[i] == findValue[i]) {
            resultArray.push(+1)
            usrInputArray[i] = -1
        }
        if (usrInputArray.includes(findValue[i])) {
            resultArray.push(-1)
        }
    }

    let li = document.createElement("li")

    if (resultArray.filter((num) => num == 1).length == 4)
        li.textContent = `Sayı (${usrInput.value}) Bulundu !!`
    else
        li.textContent = `${usrInput.value} : +${resultArray.filter((num) => num == 1).length} , -${resultArray.filter((num) => num == -1).length} `

    li.style.marginLeft = "19px";
    li.style.marginTop = "5px";
    li.style.fontSize = "16px";

    checkList.appendChild(li)

    resultArray = [];
    usrInput.value = null;
}

function ShowErrorMessage(errorString) {

    errMessage.style.display = "flex";
    errMessage.textContent = errorString;

    setTimeout(() => {
        errMessage.style.display = "none";
    }, 2000);

    usrInput.value = null;
}

function CheckUserInput() {
    if (usrInput.value.length > 4) usrInput.value = usrInput.value.substring(0, 4)
}