//This function is use to reveal the image after 10 seconds
setTimeout(function(){
    const image = document.querySelector(".myImage");
    image.classList.remove("hidden");
}, 10000);

// This here to give a footer copyright text and current date in it
const footer = document.getElementById("footerText");
const year = new Date().getFullYear();

footer.innerHTML = `&copy; ${year} Wiranata. All rights reserved.`;


// This here function to convert mark to grade

function convertMark(){
    const mark = parseFloat(document.getElementById("markInput").value);
    const result = document.getElementById("result");

    let grade = "";

    if(isNaN(mark) || mark < 0 || mark > 100){
        result.textContent = "Please input a valid number between 0 and 100"
        return
    }

    if(mark >= 90) {
        grade = "A";
    }
    else if(mark < 90 && mark >= 80) {
        grade = "B";
    }
    else if(mark < 80 && mark >= 70) {
        grade = "C";
    }
    else if(mark < 70 && mark >= 60) {
        grade = "D";
    }
    else if(mark < 60 && mark >= 50) {
        grade = "E";
    }
    else{
        grade = "F";
    }

    result.textContent = `Your Grade is: ${grade}`;    
}