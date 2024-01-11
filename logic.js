const navbarToggle = document.getElementById("navbar-toggle")
const navBar = document.getElementById("navbar")
const about =  document.getElementById("about-section")
const projects =  document.getElementById("project-section")
const resume =  document.getElementById("resume-section")
const navbarDropdown = document.getElementById("navbar-dropdown")

about.style.display = "flex"
projects.style.display = "none"
resume.style.display = "none"

let navbarVisible = false
let navbarToggleActive = true
function navbarHamburgerToggle(){
    if(navbarToggleActive === false){
        return
    }
    navbarToggleActive = false
    if(navbarVisible === false){
        navbarVisible = true
        navBar.style.display = 'flex'
        navBar.classList.add('slide-in')
        navbarDropdown.style.transform = "translateY(100px) translateX(-50%)"
        navbarDropdown.querySelectorAll(".triangle").forEach(t => {
            t.style.transform = "rotate(180deg)"
        })
        setTimeout(() =>{
            navBar.classList.remove('slide-in')
            setTimeout(() =>{
                navbarToggleActive = true
            }, 200)
        }, 1000)
    }
    else if(navbarVisible === true){
        navbarVisible = false
        navBar.classList.add('slide-out')
        navbarDropdown.style.transform = "translateY(0px) translateX(-50%)"
        navbarDropdown.querySelectorAll(".triangle").forEach(triangle => {
            triangle.style.transform = "rotate(0deg)"
        })
        setTimeout(() =>{
            navBar.classList.remove('slide-out')
            navBar.style.display = "none"
            setTimeout(() =>{
                navbarToggleActive = true
            }, 200)
        }, 1000)
    }
}


function navbarDropdownToggle(){
    if(navbarToggleActive === false){
        return
    }
    navbarToggleActive = false
    if(navbarVisible === false){
        navbarVisible = true
        navBar.style.display = 'flex'
        navBar.classList.add('slide-in')
        navbarDropdown.classList.add('drop-down')
        setTimeout(() =>{
            navBar.classList.remove('slide-in')
            navbarDropdown.classList.remove('drop-down')
            navbarDropdown.style.transform = "translateY(100px) translateX(-50%)"
            navbarDropdown.classList.add("spinning-up")
            setTimeout(() =>{
                navbarDropdown.classList.remove("spinning-up")
                navbarDropdown.querySelectorAll(".triangle").forEach(t => {
                    t.style.transform = "rotate(180deg)"
                })
            }, 300)
            setTimeout(() =>{
                navbarToggleActive = true
            }, 350)
        }, 1000)
    }
    else if(navbarVisible === true){
        navbarVisible = false
        navBar.classList.add('slide-out')
        navbarDropdown.classList.add('drop-up')
        setTimeout(() =>{
            navBar.classList.remove('slide-out')
            navbarDropdown.classList.remove('drop-up')
            navbarDropdown.style.transform = "translateY(0px) translateX(-50%)"
            navbarDropdown.classList.add("spinning-down")
            setTimeout(() =>{
                navbarDropdown.classList.remove("spinning-down")
                navbarDropdown.querySelectorAll(".triangle").forEach(triangle => {
                    triangle.style.transform = "rotate(0deg)"
                })
            }, 300)
            navBar.style.display = "none"
            setTimeout(() =>{
                navbarToggleActive = true
            }, 350)
        }, 1000)
    }
}
function toggleAbout(){
    about.style.display = "flex"
    projects.style.display = "none"
    resume.style.display = "none"
}
function toggleResume(){
    about.style.display = "none"
    projects.style.display = "none"
    resume.style.display = "flex"
}
function toggleProjects(){
    about.style.display = "none"
    projects.style.display = "flex"
    resume.style.display = "none"
}