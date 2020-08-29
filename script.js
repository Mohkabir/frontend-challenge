let iconShare = document.getElementById("icon");

iconShare.addEventListener("click",function(){
  let contactBox = document.getElementById("contact");
  let contactShare = document.getElementById("contact_share");
  let screenWidth = window.innerWidth;


  if(screenWidth >= 675){
  contactShare.style.display = "flex";
  }else{
  contactBox.style.display = "none";
  contactShare.style.display = "flex";
  };

});