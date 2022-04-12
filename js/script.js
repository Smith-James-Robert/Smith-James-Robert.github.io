
window.onload = (event) =>{
    let options = {
        weekday: "short",
        year: "numeric",
        month: "long",
        day: "numeric",
      }; //Sets way to display
    let date=document.querySelector(`.date`); //Find the date value
    let tempDate=new Date(); //Get current date
    let tempString = tempDate.toLocaleDateString("en-US", options); //Modify current date to show in a nicer formate.
    date.textContent=tempString; //Update the date section
}
function updateForm(control) { //makes wage input visible if radiobutton 1 is checked or makes it invisible when other radio button clicked.
    const wage=document.querySelectorAll(`.wage`);
    if (control.id==1)
    {
        wage[1].style.visibility='visible';
        wage[0].style.visibility='visible';
        wage[2].style.visibility='visible';  
    }
    else
    {
        wage[1].style.visibility='hidden';
        wage[0].style.visibility='hidden';
        wage[2].style.visibility='hidden';
    }
}