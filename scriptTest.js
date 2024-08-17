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

let ids= [1, 2, 3];
let imgArray= [];
const boxArray= [];


const img1= new Image("cards_jpeg_zip/JPEG/2C.jpg", null);
const img2= new Image("cards_jpeg_zip/JPEG/3H.jpg", null);
const img3= new Image("cards_jpeg_zip/JPEG/KC.jpg", null);

imgArray.push(img1, img2, img3);

const box1= new Box(document.getElementById("box1"), 1);
const box2= new Box(document.getElementById("box2"), 2);
const box3= new Box(document.getElementById("box3"), 3);

boxArray.push(box1, box2, box3);

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

