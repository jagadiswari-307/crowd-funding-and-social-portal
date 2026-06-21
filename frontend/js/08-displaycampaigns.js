const campaignContainer =
document.getElementById("campaignContainer");



async function loadCampaigns(){


    try{


        const response = await fetch(
            "http://localhost:5000/api/campaigns/all"
        );


        const campaigns = await response.json();



        campaignContainer.innerHTML="";



        campaigns.forEach(campaign=>{


            const card = document.createElement("div");


            card.className="card";



            card.innerHTML = `

                <img src="${campaign.image}"
                width="100%"
                height="200">


                <h3>
                ${campaign.title}
                </h3>


                <p>
                ${campaign.description}
                </p>


                <p>
                Category:
                ${campaign.category}
                </p>


                <p>
                Goal:
                ₹${campaign.goal}
                </p>


                <button class="btn">
                Donate Now
                </button>

            `;



            campaignContainer.appendChild(card);



        });



    }


    catch(error){

        console.log(error);

    }


}



loadCampaigns();