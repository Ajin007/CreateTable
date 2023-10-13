
const story=document.body.querySelector(".story")

const setText=document.body.querySelector("#set-text")
console.log(setText)

setText.addEventListener("click",()=>{
    // Reset the tableCreated flag to allow table creation
    tablecreated = false;
    story.textContent="Create table and access three buttons for project"
    story.style.background="green"
})
console.log(setText)


const refreshText=document.body.querySelector("#delete-text")
console.log(refreshText)
refreshText.addEventListener("click",()=>{
    const table=document.querySelector("table");
    if (table){
        table.remove();
    }
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

    for (let i=0;i <1;i++){
        const row= document.createElement("tr");
        for (let j=0;j<=2;j++){
            const cell=document.createElement("td");
            const createdata=document.createElement("button")
            cell.appendChild(createdata)
            row.appendChild(cell)
            row.style.background="green"
        }
        
        
        body.appendChild(row);
    }
    
    table.appendChild(body);
    document.body.appendChild(table);
    table.setAttribute("border","2");

    //to ensure table is created 
    tablecreated=true;
}

}