var row=1;
var submit=document.getElementById("submit");
submit.addEventListener("click",displayElements);
function displayElements()
{
    var fname=document.getElementById("fname").value;
    console.log(fname);
    var lname=document.getElementById("lname").value;
    var add=document.getElementById("add").value;
    var pass=document.getElementById("pass").value;

    var radio=document.querySelectorAll('input[name="gender"]:checked');
    let gender = [];
    radio.forEach((rad) => {
    gender.push(rad.value);
});

    var checkboxes=document.querySelectorAll('input[name="food"]:checked');
    let colors = [];
    checkboxes.forEach((checkbox) => {
    colors.push(checkbox.value);
});
    if(!fname || !lname || !add || !pass || !gender || !colors)
    {
        alert("pleae fill all fields");
        return
    }

    var display=document.getElementById("display");
    var newrow=display.insertRow(row);

    var cell1=newrow.insertCell(0);
    var cell2=newrow.insertCell(1);
    var cell3=newrow.insertCell(2);
    var cell4=newrow.insertCell(3);
    var cell5=newrow.insertCell(4);
    var cell6=newrow.insertCell(5);
    
    cell1.innerHTML=fname;
    cell2.innerHTML=lname;
    cell3.innerHTML=add;
    cell4.innerHTML=pass;
    cell5.innerHTML=gender;
    cell6.innerHTML=colors;
    
    row++;
    
   
}



