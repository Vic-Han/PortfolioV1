const animationTime = 1300;
const animationGap = 450;
async function slideDivLeft(div, timetoWait){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            div.classList.remove('invisible')
            div.classList.add('fade-in-left')
            setTimeout(() =>{
                div.classList.remove('fade-in-left')
                resolve()
            }, animationTime)
        }, timetoWait)
    })
}
async function slideDivRight(div, timetoWait){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            div.classList.remove('invisible')
            div.classList.add('fade-in-right')
            setTimeout(() =>{
                div.classList.remove('fade-in-right')
                resolve()
            }, animationTime)
        }, timetoWait)
    })
}
async function slideDivUp(div, timetoWait){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            div.classList.remove('invisible')
            div.classList.add('fade-in-up')
            setTimeout(() =>{
                div.classList.remove('fade-in-up')
                resolve()
            }, animationTime)
        }, timetoWait)
    })
}
async function slideDivDown(div, timetoWait){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            div.classList.remove('invisible')
            div.classList.add('fade-in-down')
            setTimeout(() =>{
                div.classList.remove('fade-in-down')
                resolve()
            }, animationTime)
        }, timetoWait)
    })
}

async function makeDivVisible(div, timetoWait){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            div.classList.remove('invisible')
            resolve()
        }, timetoWait)
    })

}


async function animateAbout(){
    const aboutChildren = about.children;
    for(let i = 0; i < aboutChildren.length; i++){
        aboutChildren[i].classList.add('invisible')
    }
    const promises = []
    promises.push(slideDivLeft(aboutChildren[0], 0))
    promises.push(slideDivLeft(aboutChildren[1], animationGap * 1.4))
    promises.push(slideDivUp(aboutChildren[2], animationGap * 2.8))
    promises.push(slideDivUp(aboutChildren[3], animationGap * 2.8))
    promises.push(slideDivUp(aboutChildren[4], animationGap * 2.8))
    promises.push(slideDivUp(aboutChildren[5], animationGap * 2.8))
    await Promise.all(promises)
    return;
}


async function animateResume(){
    const resumeChildren = resume.children;
    const skillsChildren = resumeChildren[2].children;

    resumeChildren[0].classList.add('invisible')
    resumeChildren[1].classList.add('invisible')
    resumeChildren[2].classList.add('invisible')

    for(let i = 0; i < skillsChildren.length; i++){
        skillsChildren[i].classList.add('invisible')
    }
    const promises = []
    promises.push(slideDivUp(resumeChildren[0], 0))
    promises.push(slideDivUp(resumeChildren[1], animationGap * 0.7))
    promises.push(makeDivVisible(resumeChildren[2], animationGap * 1.4))
    promises.push(slideDivUp(skillsChildren[0], animationGap * 1.4))
    for(let i = 1; i < skillsChildren.length; i++){
        promises.push(slideDivLeft(skillsChildren[i], animationGap * (3+i) / 2))
    }
    await Promise.all(promises)
    return;
}


async function animateProjects(){
    const projectsChildren = projects.children;
    for(let i = 0; i < projectsChildren.length; i++){
        projectsChildren[i].classList.add('invisible')
    }
    const promises = []
    promises.push(slideDivUp(projectsChildren[0], 0))
    for(let i = 1; i < projectsChildren.length; i++){
        promises.push(slideDivLeft(projectsChildren[i], animationGap * i * 0.7))
    }
    await Promise.all(promises)
    return;
}