
function sleep(ms) {
    return new Promise(res => setTimeout(res, ms));    
}

document.addEventListener("keydown", function(event) {
    if(event.key === "Shift") {
        lightemup();
    }
} )


document.querySelector(".start-timer").onclick = lightemup;


async function lightemup () {
    document.querySelector(".timer").innerHTML = "000"
    lightemup1();
    await sleep(1000);
    lightemup2();
    await sleep(1000);
    lightemup3();
    await sleep(1000);
    lightemup4();
    await sleep(1000);
    lightemup5();

    turnoff();
}



function lightemup1 () {
    document.querySelector(".lights-section1 .l3").classList.add("lightup");
    document.querySelector(".lights-section1 .l4").classList.add("lightup");
}        

function lightemup2 () {
    document.querySelector(".lights-section2 .l3").classList.add("lightup");
    document.querySelector(".lights-section2 .l4").classList.add("lightup");
};

function lightemup3 () {
    document.querySelector(".lights-section3 .l3").classList.add("lightup");
    document.querySelector(".lights-section3 .l4").classList.add("lightup");
};

function lightemup4 () {
    document.querySelector(".lights-section4 .l3").classList.add("lightup");
    document.querySelector(".lights-section4 .l4").classList.add("lightup");
};

function lightemup5 () {
    document.querySelector(".lights-section5 .l3").classList.add("lightup");
    document.querySelector(".lights-section5 .l4").classList.add("lightup");
};
//PART 2: 
// make the lights turn off after a random interval of time between 1 to 4 seconds

//selects random number between 0 to 9
function getRandomValue(arr){
    const randomIndex = Math.floor(Math.random() * arr.length);
    const randomValue = arr[randomIndex];
    return randomValue;
}

async function turnoff() {
    const myArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const randomValue = getRandomValue(myArr);

    switch(randomValue) {
        case 0:
            await sleep(500);
            document.querySelector(".lights-section1 .l3").classList.remove("lightup");
            document.querySelector(".lights-section1 .l4").classList.remove("lightup");

            document.querySelector(".lights-section2 .l3").classList.remove("lightup");
            document.querySelector(".lights-section2 .l4").classList.remove("lightup");

            document.querySelector(".lights-section3 .l3").classList.remove("lightup");
            document.querySelector(".lights-section3 .l4").classList.remove("lightup");

            document.querySelector(".lights-section4 .l3").classList.remove("lightup");
            document.querySelector(".lights-section4 .l4").classList.remove("lightup");

            document.querySelector(".lights-section5 .l3").classList.remove("lightup");
            document.querySelector(".lights-section5 .l4").classList.remove("lightup");
            break;
        
        case 1:
            await sleep(1000);
            document.querySelector(".lights-section1 .l3").classList.remove("lightup");
            document.querySelector(".lights-section1 .l4").classList.remove("lightup");

            document.querySelector(".lights-section2 .l3").classList.remove("lightup");
            document.querySelector(".lights-section2 .l4").classList.remove("lightup");

            document.querySelector(".lights-section3 .l3").classList.remove("lightup");
            document.querySelector(".lights-section3 .l4").classList.remove("lightup");

            document.querySelector(".lights-section4 .l3").classList.remove("lightup");
            document.querySelector(".lights-section4 .l4").classList.remove("lightup");

            document.querySelector(".lights-section5 .l3").classList.remove("lightup");
            document.querySelector(".lights-section5 .l4").classList.remove("lightup");
            break;
            
        case 2:
            await sleep(1500);
            document.querySelector(".lights-section1 .l3").classList.remove("lightup");
            document.querySelector(".lights-section1 .l4").classList.remove("lightup");

            document.querySelector(".lights-section2 .l3").classList.remove("lightup");
            document.querySelector(".lights-section2 .l4").classList.remove("lightup");

            document.querySelector(".lights-section3 .l3").classList.remove("lightup");
            document.querySelector(".lights-section3 .l4").classList.remove("lightup");

            document.querySelector(".lights-section4 .l3").classList.remove("lightup");
            document.querySelector(".lights-section4 .l4").classList.remove("lightup");

            document.querySelector(".lights-section5 .l3").classList.remove("lightup");
            document.querySelector(".lights-section5 .l4").classList.remove("lightup");
            break;

        case 3:
            await sleep(2000);
            document.querySelector(".lights-section1 .l3").classList.remove("lightup");
            document.querySelector(".lights-section1 .l4").classList.remove("lightup");

            document.querySelector(".lights-section2 .l3").classList.remove("lightup");
            document.querySelector(".lights-section2 .l4").classList.remove("lightup");

            document.querySelector(".lights-section3 .l3").classList.remove("lightup");
            document.querySelector(".lights-section3 .l4").classList.remove("lightup");

            document.querySelector(".lights-section4 .l3").classList.remove("lightup");
            document.querySelector(".lights-section4 .l4").classList.remove("lightup");

            document.querySelector(".lights-section5 .l3").classList.remove("lightup");
            document.querySelector(".lights-section5 .l4").classList.remove("lightup");
            break;

        case 4:
            await sleep(2500);
            document.querySelector(".lights-section1 .l3").classList.remove("lightup");
            document.querySelector(".lights-section1 .l4").classList.remove("lightup");

            document.querySelector(".lights-section2 .l3").classList.remove("lightup");
            document.querySelector(".lights-section2 .l4").classList.remove("lightup");

            document.querySelector(".lights-section3 .l3").classList.remove("lightup");
            document.querySelector(".lights-section3 .l4").classList.remove("lightup");

            document.querySelector(".lights-section4 .l3").classList.remove("lightup");
            document.querySelector(".lights-section4 .l4").classList.remove("lightup");

            document.querySelector(".lights-section5 .l3").classList.remove("lightup");
            document.querySelector(".lights-section5 .l4").classList.remove("lightup");
            break;

        case 5:
            await sleep(3000);
            document.querySelector(".lights-section1 .l3").classList.remove("lightup");
            document.querySelector(".lights-section1 .l4").classList.remove("lightup");

            document.querySelector(".lights-section2 .l3").classList.remove("lightup");
            document.querySelector(".lights-section2 .l4").classList.remove("lightup");

            document.querySelector(".lights-section3 .l3").classList.remove("lightup");
            document.querySelector(".lights-section3 .l4").classList.remove("lightup");

            document.querySelector(".lights-section4 .l3").classList.remove("lightup");
            document.querySelector(".lights-section4 .l4").classList.remove("lightup");

            document.querySelector(".lights-section5 .l3").classList.remove("lightup");
            document.querySelector(".lights-section5 .l4").classList.remove("lightup");
            break;
            
        case 6:
            await sleep(3500);
            document.querySelector(".lights-section1 .l3").classList.remove("lightup");
            document.querySelector(".lights-section1 .l4").classList.remove("lightup");

            document.querySelector(".lights-section2 .l3").classList.remove("lightup");
            document.querySelector(".lights-section2 .l4").classList.remove("lightup");

            document.querySelector(".lights-section3 .l3").classList.remove("lightup");
            document.querySelector(".lights-section3 .l4").classList.remove("lightup");

            document.querySelector(".lights-section4 .l3").classList.remove("lightup");
            document.querySelector(".lights-section4 .l4").classList.remove("lightup");

            document.querySelector(".lights-section5 .l3").classList.remove("lightup");
            document.querySelector(".lights-section5 .l4").classList.remove("lightup");
            break;

        case 7:
            await sleep(4000);
            document.querySelector(".lights-section1 .l3").classList.remove("lightup");
            document.querySelector(".lights-section1 .l4").classList.remove("lightup");

            document.querySelector(".lights-section2 .l3").classList.remove("lightup");
            document.querySelector(".lights-section2 .l4").classList.remove("lightup");

            document.querySelector(".lights-section3 .l3").classList.remove("lightup");
            document.querySelector(".lights-section3 .l4").classList.remove("lightup");

            document.querySelector(".lights-section4 .l3").classList.remove("lightup");
            document.querySelector(".lights-section4 .l4").classList.remove("lightup");

            document.querySelector(".lights-section5 .l3").classList.remove("lightup");
            document.querySelector(".lights-section5 .l4").classList.remove("lightup");
            break;

        case 8:
            await sleep(4500);
            document.querySelector(".lights-section1 .l3").classList.remove("lightup");
            document.querySelector(".lights-section1 .l4").classList.remove("lightup");

            document.querySelector(".lights-section2 .l3").classList.remove("lightup");
            document.querySelector(".lights-section2 .l4").classList.remove("lightup");

            document.querySelector(".lights-section3 .l3").classList.remove("lightup");
            document.querySelector(".lights-section3 .l4").classList.remove("lightup");

            document.querySelector(".lights-section4 .l3").classList.remove("lightup");
            document.querySelector(".lights-section4 .l4").classList.remove("lightup");

            document.querySelector(".lights-section5 .l3").classList.remove("lightup");
            document.querySelector(".lights-section5 .l4").classList.remove("lightup");
            break;

        case 9:
            await sleep(5000);
            document.querySelector(".lights-section1 .l3").classList.remove("lightup");
            document.querySelector(".lights-section1 .l4").classList.remove("lightup");

            document.querySelector(".lights-section2 .l3").classList.remove("lightup");
            document.querySelector(".lights-section2 .l4").classList.remove("lightup");

            document.querySelector(".lights-section3 .l3").classList.remove("lightup");
            document.querySelector(".lights-section3 .l4").classList.remove("lightup");

            document.querySelector(".lights-section4 .l3").classList.remove("lightup");
            document.querySelector(".lights-section4 .l4").classList.remove("lightup");

            document.querySelector(".lights-section5 .l3").classList.remove("lightup");
            document.querySelector(".lights-section5 .l4").classList.remove("lightup");
            break;
    }

    let startDate = new Date();
    
    document.querySelector(".go").onclick = function () {
        let endDate = new Date();
        let timeElapsed = endDate - startDate;
        document.querySelector(".timer").innerHTML = timeElapsed;

        document.querySelector("h3").innerHTML = "done";

        if (document.querySelector("h3").innerHTML = "done") {
            document.querySelector("h3").innerHTML = "notdone";
        }        
    }

    document.addEventListener("keydown", function(event) {
        if(event.key === "Enter") {
                let endDate = new Date();
                let timeElapsed = endDate - startDate;
                document.querySelector(".timer").innerHTML = timeElapsed;
        
                document.querySelector("h3").innerHTML = "done";
        
                if (document.querySelector("h3").innerHTML = "done") {
                    document.querySelector("h3").innerHTML = "notdone";
                    window.reload();
                }
        }
    } )
}


//PART 3: 
//start a timer once the lights go off and stop the timer once a click is made anywhere in the document



const btn = document.getElementById('btn');

btn.onclick = myFunction;

// Check if the user has a preferred light mode stored
if (localStorage.getItem('darkMode') === 'true') {
  document.body.classList.add('dark-mode');
}

function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");

  // Store the user's choice of light mode
  if (element.classList.contains('dark-mode')) {
    localStorage.setItem('darkMode', 'true');
  } else {
    localStorage.setItem('darkMode', 'false');
  }
}