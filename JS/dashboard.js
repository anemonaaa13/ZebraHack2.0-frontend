console.log("test");


const resurse = document.getElementById("resurse");

resurse.addEventListener("change", () => {

    const selectedValue = resurse.value;
    
    console.log("Selected option: " + selectedValue)


    const webinarii = document.getElementById("webinarii");
    const blog = document.getElementById("blog");
    const template = document.getElementById("template");
    const video = document.getElementById("video");
    const oportunitati = document.getElementById("oportunitati");


    if (selectedValue === 'webinarii') {
        webinarii.style.display = "inherit";
        blog.style.display = "none";
        template.style.display = "none";
        video.style.display = "none";
        oportunitati.style.display = "none";
    } else if (selectedValue === 'blog') {
        webinarii.style.display = "none";
        blog.style.display = "inherit";
        template.style.display = "none";
        video.style.display = "none";
        oportunitati.style.display = "none";
    } else if (selectedValue === 'template') {
        webinarii.style.display = "none";
        blog.style.display = "none";
        template.style.display = "inherit";
        video.style.display = "none";
        oportunitati.style.display = "none";
    } else if (selectedValue === 'video') {
        webinarii.style.display = "none";
        blog.style.display = "none";
        template.style.display = "none";
        video.style.display = "inherit";
        oportunitati.style.display = "none";
    } else if (selectedValue === 'oportunitati') {
        webinarii.style.display = "none";
        blog.style.display = "none";
        template.style.display = "none";
        video.style.display = "none";
        oportunitati.style.display = "inherit";
    }
})