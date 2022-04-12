let imagesItems = [...document.querySelectorAll(".img-wrap")];
let titles = [...document.querySelectorAll(".second-title")];
let texts = [...document.querySelectorAll(".text-area")];
let titleMessage = document.querySelector(".profile-title");


let setItemActive = (entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("active");
        }else{
            entry.target.classList.remove("active");
        }
    });
};

let options = {
    rootMargin:"0px",
    threshold:0.5,
};

let observer = new IntersectionObserver(setItemActive,options);

observer.observe(titleMessage);

//img-wrapは奇数と偶数で出現する場所が違うように調整する

imagesItems.map((item,index)=>{
    item.children[0].style.backgroundImage = `url(./images/${index + 1}.jpg)`;
    index % 2 ==0 ? (item.style.left = "55%") : (item.style.left = "5%");
    observer.observe(item);
});

titles.map((title,index)=>{
    index % 2 == 0 ? title.style.left ="40%" : title.style.left="35%"
    observer.observe(title);
});

texts.map((text,index)=>{
    index % 2 ==0 ? text.style.left="40%" : text.style.left="35%"
    observer.observe(text);
});