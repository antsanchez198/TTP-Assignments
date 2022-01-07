//Question 1
const container = document.getElementById("container")

//Question 2
console.log(document.querySelector("#container"))

//Question 3
console.log(document.getElementsByClassName("second"))

//Question 4
console.log(document.querySelector("ol li.third"))

//Question 5
const newText = document.createElement("p")
newText.textContent = "Hello"
container.append(newText)

//Question 6
const divFooter = document.querySelector(".footer")
const newClass = document.createElement("p")
newClass.classList.add("main")
divFooter.append(newClass)
console.log(divFooter)

//Quesion 7
const removeClass = document.querySelector(".main")
removeClass.remove()

//Question 8 
const newLi = document.createElement("li")
//Question 9
newLi.textContent = "four"
//Question 10
const ulElement = document.querySelector("ul")
ulElement.append(newLi)

//Question 12
const oList = document.querySelectorAll("ol li");
    for (let i = 0; i<oList.length ;i++) 
    {
        oList[i].style.backgroundColor = "green";
    }

//Question 13
divFooter.remove
console.log(divFooter)
