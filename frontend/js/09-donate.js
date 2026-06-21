const donationForm =
document.getElementById("donationForm");



document.getElementById("campaignId").value =
localStorage.getItem("campaignId");



document.getElementById("campaignTitle").value =
localStorage.getItem("campaignTitle");




donationForm.addEventListener("submit", async(e)=>{


e.preventDefault();



const donationData={


donorName:
document.getElementById("donorName").value,


donorEmail:
document.getElementById("donorEmail").value,


campaignId:
document.getElementById("campaignId").value,


campaignTitle:
document.getElementById("campaignTitle").value,


amount:
Number(document.getElementById("amount").value)


};



const response = await fetch(

"http://localhost:5000/api/donations/donate",

{

method:"POST",

headers:{

"Content-Type":"application/json"

},


body:JSON.stringify(donationData)

}

);



const data = await response.json();



alert(data.message);



if(response.ok){

donationForm.reset();

}



});