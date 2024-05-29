// sign up and log in form modal open and close 
document.querySelector('.close').addEventListener( 'click', function() {
    document.querySelector('.bg-modal').style.display = "none";
});
document.querySelector('.lgn').addEventListener('click', function() {
    document.querySelector('.bg-modal').style.display = "flex";
});

// mobile nav responsiveness#

document.querySelector('.ham-menu').addEventListener('click', function() {
    document.querySelector('.nav').style.display = "flex";
});

document.querySelector('.cancel').addEventListener('click', function() {
    document.querySelector('.nav').style.display = "none";
});


//sign up for begins here

let sform= document.getElementById("sform")
sform.addEventListener("submit" , (e)=>{
    e.preventDefault()
    let name ={
        semail : sform.semail.value,
        spass : sform.spass.value,
        sname : sform.smatric.value,
     }

     let formData = new FormData(sform);

     let subForm= async ()=>{
        let api = await fetch("sign up.php" ,
            {    
                method : "POST",
                body : formData,
                // headers : {
                //     "Content-Type": "application/x-www-form-urlencoded"
                //     }
                    }
        )
        let res = await api.text()
            console.log(res)

     }
     subForm()
    
})

