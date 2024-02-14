const navbarToggle = document.getElementById("navbar-toggle")
const navBar = document.getElementById("navbar")
const about =  document.getElementById("about-section")
const projects =  document.getElementById("project-section")
const resume =  document.getElementById("resume-section")
const navbarDropdown = document.getElementById("navbar-dropdown")


projects.classList.add('invisible')
resume.classList.add('invisible')
navBar.classList.add('invisible')



let navbarVisible = false
let navbarToggleActive = true
let navbarButtonActive = true
function toggleNavbar(){
    if(navbarToggleActive === false){
        return
    }
    navbarToggleActive = false
    if(navbarVisible === true){
        navbarVisible = false
        navBar.classList.add('slide-out')
        navbarDropdown.classList.add('drop-up')
        setTimeout(() =>{
            navBar.classList.remove('slide-out')
            navbarDropdown.classList.remove('drop-up')
            navbarDropdown.classList.remove('navbar-visible')
            navbarDropdown.classList.remove("pointing-in")
          
            navBar.classList.add('invisible')
            setTimeout(() =>{
                navbarToggleActive = true
            }, 150)
        }, 1000)
    }
    else if (navbarVisible === false){
        navbarVisible = true
        navBar.classList.remove('invisible')
        navBar.classList.add('slide-in')
        navbarDropdown.classList.add('drop-down')
        setTimeout(() =>{
            navBar.classList.remove('slide-in')
            navbarDropdown.classList.remove('drop-down')
            navbarDropdown.classList.add("navbar-visible")
            navbarDropdown.classList.add("pointing-in")
           
            setTimeout(() =>{
                navbarToggleActive = true
            }, 150)
        }, 1000)
    }
}
function toggleAbout(){
    if(!navbarButtonActive){
       return 
    }
    navbarButtonActive = false
    about.classList.remove('invisible')
    projects.classList.add('invisible')
    resume.classList.add('invisible')
    animateAbout().then(() =>{
        navbarButtonActive = true
    })
}
function toggleResume(){
    if(!navbarButtonActive){
        return 
     }
    navbarButtonActive = false
    about.classList.add('invisible')
    projects.classList.add('invisible')
    resume.classList.remove('invisible')
    animateResume().then(() =>{
        navbarButtonActive = true
    })
}
function toggleProjects(){
    if(!navbarButtonActive){
        return 
     }
    navbarButtonActive = false
    about.classList.add('invisible')
    projects.classList.remove('invisible')
    resume.classList.add('invisible')
    animateProjects().then(() =>{
        navbarButtonActive = true
    })
}
toggleAbout()
