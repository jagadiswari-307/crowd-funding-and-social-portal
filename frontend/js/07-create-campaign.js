console.log("Campaign JS connected");


const campaignForm = document.getElementById("campaignForm");


if(campaignForm){


    campaignForm.addEventListener("submit", async(e)=>{


        e.preventDefault();


        alert("Form submitted");


        const title = document.getElementById("title").value;

        const description = document.getElementById("description").value;

        const category = document.getElementById("category").value;

        const goal = document.getElementById("goal").value;

        const image = document.getElementById("image").value;

        const creator = document.getElementById("creator").value;



        try{


            const response = await fetch(
                "http://localhost:5000/api/campaigns/create",
                {

                    method:"POST",

                    headers:{

                        "Content-Type":"application/json"

                    },


                    body:JSON.stringify({

                        title:title,

                        description:description,

                        category:category,

                        goal:Number(goal),

                        image:image,

                        creator:creator

                    })

                }
            );



            const data = await response.json();



            alert(data.message);



            if(response.ok){

                campaignForm.reset();

            }


        }

        catch(error){


            console.log(error);


            alert("Server connection failed");


        }



    });


}

else{

    console.log("Campaign form not found");

}