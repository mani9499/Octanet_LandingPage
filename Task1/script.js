let current = 0;
let img_urls = [
  "https://images.pexels.com/photos/4445240/pexels-photo-4445240.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/1631665/pexels-photo-1631665.jpeg?auto=compress&cs=tinysrgb&w=600"
];

function display() {
  const slider = document.getElementById("img-slider");
  if (slider) {
    slider.src = img_urls[current % img_urls.length];
    current++;
  }
}

document.addEventListener("DOMContentLoaded", ()=>{
    display();
    setInterval(display,3000);
});
