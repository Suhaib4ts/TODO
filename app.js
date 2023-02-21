function addTask(){
    var inp = document.getElementById("inp").value;
    var txt = document.createTextNode(inp);

    var div2 = document.createElement("div");
    div2.setAttribute("id","tasks");
    div2.appendChild(txt);
    div2.setAttribute("class","divs");

    var div = document.createElement("div");
    div.setAttribute("class","divs");

    var edit = document.createElement("button");
    edit.setAttribute("onclick","edit(this)");
    edit.setAttribute("id","edit");
    edit.innerHTML= "edit";
    div.appendChild(edit);

    var del = document.createElement("button");
    del.setAttribute("onclick","del(this)");
    del.setAttribute("id","delete");
    del.innerHTML="delete";
    div.appendChild(del);
    
    var mainDiv = document.createElement("div");
    mainDiv.setAttribute("id","main")
    mainDiv.appendChild(div2);
    mainDiv.appendChild(div);   

    var main = document.getElementById("mains");
    main.appendChild(mainDiv);

    document.getElementById("inp").value = "";
}

function edit(val){
    var any = val.parentNode.parentNode.childNodes[0].textContent;
    var res = prompt("Edit Value",any);
    val.parentNode.parentNode.childNodes[0].textContent = res
}


function del(e)
{
    
    var b = e.parentNode.parentNode.remove();
    console.log(b)
}

