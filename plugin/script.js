//images name mujst be in 1,2,3,4,5,....1000(1.jpg,2.jpg....)
let selectionOfImage = document.querySelectorAll("img");
let selectionOfLightBox = document.querySelector("#milan");
let selectionofMainImage = document.querySelector(".k");
let selectionOfLeftButton = document.querySelector(".hero1");
let selectionOfrightButton = document.querySelector(".hero2");
let selectioOfCloseButton = document.querySelector(".hero");
let imageType = ".jpg"; //All image files formate must be same .... Enter you file formate here
for(let i=0;i<selectionOfImage.length;i++)
{  if(i>=4)
    {
        let milan = i;
        selectionOfImage[i].addEventListener("click",()=>{
            selectionOfLightBox.style.display = "flex";
    let ans=selectionOfImage[milan].getAttribute("src");
        var main = ans.match(/\d/g);
         main= main.join("");
       selectionofMainImage.setAttribute("src",`${main}${imageType}`);
        if(main==(selectionOfImage.length - 4))
        {
            selectionOfrightButton.style.display = "none"; 
        }
        if(main==1)
        {
            selectionOfLeftButton.style.display = "none";
        }
        selectionOfrightButton.addEventListener("click",()=>{
        if(main<(selectionOfImage.length - 4))
            {
                main = parseInt(main)+1
                selectionofMainImage.setAttribute("src",`${main}${imageType}`)
                if(main==(selectionOfImage.length - 4))
                {
                    selectionOfrightButton.style.display = "none";   
                }
                else{
                    selectionOfrightButton.style.display = "block";
                    selectionOfLeftButton.style.display = "block";
                }  } })
        selectionOfLeftButton.addEventListener("click",()=>{
         if(main>1) {
                main = main-1
                selectionofMainImage.setAttribute("src",`${main}${imageType}`)
                if(main==1)
                {
                    selectionOfLeftButton.style.display = "none";  
                }
                else
                {
                    selectionOfrightButton.style.display = "block";
                    selectionOfLeftButton.style.display = "block";
                }}})
        selectioOfCloseButton.addEventListener("click",()=>selectionOfLightBox.style="none")
})}}
