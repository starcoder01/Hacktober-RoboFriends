var robots = [{
    id:"one",
    image:"https://robohash.org/1"
},{
    id:"two",
    image:"https://robohash.org/2"
},{
    id:"three",
    image:"https://robohash.org/3"
},{
    id:"four",
    image:"https://robohash.org/4"
},{
    id:"five",
    image:"https://robohash.org/5"
},{
    id:"six",
    image:"https://robohash.org/6"
},{
    id:"seven",
    image:"https://robohash.org/7"
},{
    id:"eight",
    image:"https://robohash.org/8"
},{
    id:"nine",
    image:"https://robohash.org/9"
}]

var container = document.getElementById("container");
robots.forEach(element => {
    container.innerHTML += `
        <div class="card">
            <div id=${element.id} class="robot front">
                <img  src=${element.image} title="Hi! I am robot ${element.id}">
                <span class="back">Hi, I am robot ${element.id}</span>
            </div>

            
        </div>
    `
});

