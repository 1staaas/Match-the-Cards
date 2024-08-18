
class Image {
    constructor(img, idImg) {
        this.img= document.createElement("img");
        this.img.src= img;
        this.idImg= idImg;
    }
}

class Box {
    constructor(box, idBox) {
        this.box= box;
        this.idBox= idBox;
    }
}

let boxDivs= [];
let imgArray= [];
const boxArray= [];
let ids= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
let imgSrcArray= [
    "cards_jpeg_zip/JPEG/2C.jpg",
    "cards_jpeg_zip/JPEG/3H.jpg",
    "cards_jpeg_zip/JPEG/KC.jpg",
    "cards_jpeg_zip/JPEG/5D.jpg",
    "cards_jpeg_zip/JPEG/AC.jpg",
    "cards_jpeg_zip/JPEG/JD.jpg",
    "cards_jpeg_zip/JPEG/5S.jpg",
    "cards_jpeg_zip/JPEG/QH.jpg"
]

for(let i=0; i < ids.length; i++) {
    boxDivs[i]= document.createElement("div");
    boxDivs[i].className= "box";
    boxDivs[i].id= "box"+(i+1);
    document.getElementById("containerGrid").append(boxDivs[i]);
}


for(let i=0; i < ids.length; i++) {
    boxArray[i]= new Box(document.getElementById("box"+(i+1)), i+1);
}

for(let i=0; i <imgSrcArray.length; i++) {
    imgArray[i]= new Image(imgSrcArray[i], null);
}


/*
function shuffle(array) {
    for(let i= array.length - 1; i >= 0; i--) {
        let j= Math.floor(Math.random() * (i + 1));
        let temp= array[i];
        array[i]= array[j];
        array[j]= temp;
    }
    return array;
}

function randomInsert(boxArray, imgArray) {
    for(let i=0; i < imgArray.length; i++) {
        for(let j=0; j < imgArray.length; j++) {
            if(boxArray[i].idBox === imgArray[j].idImg) {
                console.log(`box id: ${boxArray[i].idBox}, img id: ${imgArray[j].idImg}`);
                boxArray[i].box.appendChild(imgArray[j].img);

            }
        }
    }
}


box1.box.addEventListener("click", function() {
    console.log("box1 clicked");
    ids= shuffle(ids);
    for(let i=0; i < imgArray.length; i++) {
        imgArray[i].idImg= ids[i];
    }
    console.log(ids);
    randomInsert(boxArray, imgArray);

    console.log("done");
});

*/