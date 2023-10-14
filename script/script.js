
const story=document.body.querySelector(".story")

const setText=document.body.querySelector("#set-text")
console.log(setText)

setText.addEventListener("click",()=>{
    // Reset the tableCreated flag to allow table creation
    
    story.textContent="Use Switch to forecast three buttons which points out to the given project"

})
console.log(setText)


const refreshText=document.body.querySelector("#delete-text")
console.log(refreshText)
refreshText.addEventListener("click",()=>{
    const table=document.querySelector("table");
    if (table){
        table.remove();
    }
    tablecreated=false;
story.textContent=""
story.style.background=""
})  
console.log(refreshText)

//this is for a paragrapgh which is presently not used in this project
function createdoc()    {
    const create=document.getElementsByTagName("P").item(0);
    create.firstChild.data="Refreshed paragraph";




}

//To chack whether the table is created or not 
let tablecreated=false;

function createTable(){

    if (!tablecreated){
    const table=document.createElement("table");
    const body=document.createElement("tbody");

    const buttonnames=["login page","Operators","Pattern creator"];
    for (let i=0;i <1;i++){
        const row= document.createElement("tr");
        for (let j=0;j<buttonnames.length;j++){
            const cell=document.createElement("td");
            const createdata=document.createElement("button")
            createdata.textContent=buttonnames[j]
            //adding style for the button, using classlist
            createdata.classList.add("fullscreenbutton");
            
        
//Event added for the button processing
            createdata.addEventListener("click",()=>{
                

                if (buttonnames[j]==="login page"){
                    generatelogin();


                }
                else if(buttonnames[j]==="Pattern creator"){
                    createPattern();

                }
                else {
                    alert(`${buttonnames[j]} is clicked`);
                }
            })

            
            cell.appendChild(createdata)
            row.appendChild(cell)
            //row.style.background="green"
        }
        
        
        body.appendChild(row);
    }
    
    table.appendChild(body);
    document.body.appendChild(table);
    //table.setAttribute("border","2");

    //to ensure table is created 
    tablecreated=true;
}

}
let loginPageOpen = false;
// To create the table
function generatelogin(){

    if (!loginPageOpen){

        loginPageOpen=true;

    const loginmodel=document.createElement("div")
    loginmodel.classList.add("loginmodel");

    const content=document.createElement("div");
    content.classList.add("content");

    content.innerHTML=`
    <form action="" class="login-form" >
                <h2>Login</h2>
                <label for="username">UserName</label>
                <input type="text" id="username" name="username" placeholder="username" required>
                <label for="password">Password</label>
                <input type="password" id="password" name="password" placeholder="password" required>
                <button type="submit" id="login-submit" name="login-submit">Submit</button>
                <p>Create an Account?<a href="">Sign up</a></p>
            </form>
            <button id="close-login-model" class="close">&times;</button>`
            ;

            loginmodel.appendChild(content);
            document.body.appendChild(loginmodel);

             
            const closebutton = document.getElementById("close-login-model")
            closebutton.addEventListener("click",()=>{
                loginPageOpen = false;
                loginmodel.remove();
            })
        }
}


function createPattern(){

    let n=5
    let String=""

    for (let i=1;i<=n;i++){
        for (let j=n;j<;j++){

        }
    }


}