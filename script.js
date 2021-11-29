var row=1;
var submit=document.getElementById("submit");
submit.addEventListener("click",displayElements);
function displayElements()
{
    var firstName=document.getElementById("first-name").value;
    console.log(firstName);
    var lastName=document.getElementById("last-name").value;
    var address=document.getElementById("address").value;
    var pinCode=document.getElementById("pincode").value;

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
    

    var display=document.querySelector("table");
    var newrow=display.insertRow(row);

    var cell1=newrow.insertCell(0);
    var cell2=newrow.insertCell(1);
    var cell3=newrow.insertCell(2);
    var cell4=newrow.insertCell(3);
    var cell5=newrow.insertCell(4);
    var cell6=newrow.insertCell(5);
    
    cell1.innerHTML=firstName;
    cell2.innerHTML=lastName;
    cell3.innerHTML=address;
    cell4.innerHTML=pinCode;
    cell5.innerHTML=gender;
    cell6.innerHTML=colors;
    
    row++;
    
   
}



