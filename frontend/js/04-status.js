function getStats(){

return{

campaign:

JSON.parse(

localStorage.getItem(

"campaign"

)

),

donor:

localStorage.getItem(

"donor"

),

donation:

Number(

localStorage.getItem(

"totalDonation"

)

)

};

}