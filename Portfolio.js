function get_work_html()
{
    return `<section class = "My Work" id= "my_projects">
    <h2>
       Some of my Projects:
    </h2>
    <div class = "projects">
        
        <a href = "fitness_tracker/Fitness.html">
            <div class = project id = fitness_tracker>
                <h1 style="color: #ffffff;"> Fitness </h1>
                <h1 style="color: #ffffff;"> Tracker </h1>
                </div>
        </a>
        <a href="tictactoe/UTTT.html">
            <div class = project id = UTTT>
            <h4> Ulitimate Tic Tac Toe AI </h4>
            </div>
        </a>
        
        <a href="Compressor/image_compressor.html">
        <div class = project id = image_compressor>
            <h4> Image </h4>
            <h4> Compressor </h4>
            </div>
        </a>
    </div>
</section>`
}
function get_about_html()
{
    return` <section class = \"introduction\" id = \"about_me\">
    <h4 class = description>
        
        I first started programming in high school as an elective. 
        I was drawn to programming because it involved problem-solving and abstraction in a way that I had never seen before. 
        My first language was C++, which helped teach me a combination of object-oriented and low-level memory management principles. 
        After C++, I moved on to Python and Java in my junior courses.
    </h4>
    <h4 class = description>
        Currently, I am working on my web development skills, striving to master the basics such as HTML, CSS, and JavaScript. 
        I am also working on gaining fluency in frameworks and databases such as Angular, React, MySQL, and MongoDB.
    </h4>
    <h4 class = description>
        Outside of programming, I love endurance sports. 
        They give me an opportunity to step outside my comfort zone and persevere through difficult situations.

    </h4>
    </section>`
}
function get_skills_html()
{
    return `<section class = "About Me" id = "my_skills">
    <h2 class = "list_title"> An overview of my skills: </h2>
    <h3 class = "skillset"> Leadership, Communication, Time Management, Problem Solving, Concurrency, Software Design & Architecture</h3>
    <h2 class = "list_title"> My programming languages: </h2>
    <h3 class = "skillset"> C++, Java, C#, Python, JavaScript, HTML, CSS </h3>
    <h2 class = "list_title"> FrameWorks, Databases, and Libraries: </h2>
    <h3 class = "skillset"> MySQL, React.js, Emscripten & Webassembly, Pytorch, Vaadin </h3>
    <a href = #Resume.pdf> <h1 align = center> My Full Resume</h1></a>
</section>`
}
function toggleAbout()
{
    document.getElementById("toggle_display").innerHTML = get_about_html()
}
function toggleWork()
{
    document.getElementById("toggle_display").innerHTML = get_work_html()
}
function toggleSkills(){
    document.getElementById("toggle_display").innerHTML = get_skills_html()
}
toggleAbout();