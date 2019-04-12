//selectors
const buttonBack = document.querySelector('.button-back')
const buttonNext = document.querySelector('.button-next')
const card = document.querySelector('.thecard')
const theFrontCard = document.querySelector('.thefront')
const studentInfoList = document.querySelector('.student-info-list')
const skillsBox = document.querySelector('.skills-box')
///////////////////////////////////

let index = 0;
let clickState = 0;

renderStudent(nextStudent(index))
///////////////////////////////////
//event listeners
card.addEventListener('click', function(){
    if(clickState===0){
        card.style.transform= 'rotateY(-180deg)'
        card.style.transition= 'all 1.5s'
        clickState=1   
    } else {
        card.style.transform= 'rotateY(0)'
        card.style.transition= 'all 1.5s'
        clickState=0
    }
})

buttonNext.addEventListener('click', function(){
    index++
    skillsBox.innerHTML = ''

    if (index > studentInfo.length -1){
        index = 0
    }
    renderStudent(nextStudent(index))
    return
    
})

buttonBack.addEventListener('click', function(){
    index--
    skillsBox.innerHTML = ''

    if (index <0){
        index = studentInfo.length -1
    }
    renderStudent(nextStudent(index))
    return
})
/////////////////////////////////
//functions

function nextStudent (index){

    return studentInfo[index]    
}

function renderStudent (obj) {
    
    studentInfoList.innerHTML = `
    <h4>Name</h4>
    <li>${obj.firstName + ' ' + obj.lastName}</li> <hr>
    <h4>Title</h4>
    <li>Junior Web Developer</li> <hr>
    <h4>Nationality</h4>
    <li>${obj.nationality}</li><hr>
    <h4>Skills</h4>` 

    obj.skills.forEach(element => {
        
        skillsBox.innerHTML += `<li class="skill-li">✔ ${element}</li>`;
        
    });


    theFrontCard.innerHTML = `<img src="./assets/images/${obj.src}" alt="${obj.alt}">`
}
//////////////////////////////////




