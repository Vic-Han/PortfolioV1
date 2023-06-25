function get_work_html()
{
    return `<section class = "dynamic_contents" id= "my_projects">
    <h1 class = "heading">
       Click to see my projects:
    </h1>
    <div class = "projects">
        
        <a href = "fitness_tracker/Fitness.html">
            <div class = project id = fitness_tracker>
                <h1 style="color: #ffffff;"> Fitness </h1>
                <h1 style="color: #ffffff;"> Tracker </h1>
                </div>
        </a>
        <a href="tictactoe/UTTT.html">
            <div class = project id = UTTT>
            <h1 style = "color: #000000;"> Ulitimate </h1>
            <h1 style = "color: #000000;"> Tic Tac Toe AI </h1>
            </div>
        </a>
        
        <a href= "selector/recipe_selector.html">
        <div class = project id = image_compressor>
            <h1 style = "color: #000000;"> Recipe </h1>
            <h1 style = "color: #ffffff;"> Selector </h1>
            </div>
        </a>
    </div>
</section>`
}
function get_about_html()
{
    return` <section class = "dynamic_contents" id = "about_me">
    <h2 class = "heading"> A little bit about me: </h2>
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
        As a problem solver, I also enjoy chess. I used to play competitively when I was younger, 
        and I still follow top level chess.  

    </h4>
    <a href = Resume.pdf target = "_blank"> <h1 align = center> My Full Resume</h1></a>
    </section>`
}
function get_skills_html()
{
    return `<section class = "dynamic_contents" id = "my_skills">
    <h2 class = "heading"> An overview of my skills: </h2>
    <h4 class = "skillset"> Throughout the challenges of my post-secondary education,
    I have embraced and leveraged the inherent pressures to cultivate a valuable array of transferable skills.
    I am confident I can manage several deadlines effectively.
    I understand that I must start early to prepare for the unexpected challenges that will arise.
    Additionally, I can demonstrate the ability to work in a team and communicate effectively.
    I often am the one setting tasks and internal deadlines at group meetings,
    and I communicate outside allotted meeting times to ensure everyone, myself included,
    understands what they need to do and how to do it. </h4>
    <h4 class = "skillset"> I possess a strong proficiency in Object-Oriented Programming languages, having worked with them extensively. 
    Developing a Java-based web application and a complex C++ backend has enriched my knowledge of various concepts. 
    I have an excellent grasp of data structures, methods, and attributes at a lower level. 
    Furthermore, I have significantly enhanced my ability to trace low-level code. 
    On a higher level, I have gained a better understanding of data flow, encapsulation, 
    abstraction, as well as architectural and design patterns.
    </h4>
    <h4 class = "skillset"> Currently, I am enhancing my skill set in web development. 
    This involves mastering fundamentals such as HTML, CSS, and JavaScript. 
    Additionally, I possess knowledge of relational databases (RDBMS) and essential web-based protocols such as TCP, 
    UDP, and IP. I am also learning React and MongoDB which I use to tackle my latest project idea.
    </h4>
    <a href = Resume.pdf> <h1 align = center> My Full Resume</h1></a>
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