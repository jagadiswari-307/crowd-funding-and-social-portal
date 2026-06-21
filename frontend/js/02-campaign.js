const container =
document.getElementById("campaignContainer");



async function loadCampaigns(){


try{


const response = await fetch(
"http://localhost:5000/api/campaigns"
);



const campaigns =
await response.json();




campaigns.forEach(campaign=>{



const card=document.createElement("div");


card.className="campaign-card";



card.innerHTML=`

<img src="${campaign.image}" 
alt="campaign image">



<h2>
${campaign.title}
</h2>



<p>
${campaign.description}
</p>



<h3>
Goal: ₹${campaign.goal}
</h3>



<h3>
Raised: ₹${campaign.raised || 0}
</h3>



<button onclick="goDonate('${campaign._id}','${campaign.title}')">

Donate Now ❤️

</button>


`;



container.appendChild(card);



});



}

catch(error){

console.log(error);

}



}



function goDonate(id,title){


localStorage.setItem(
"campaignId",
id
);


localStorage.setItem(
"campaignTitle",
title
);



window.location.href="06-donate.html";


}




loadCampaigns();