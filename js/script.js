
let pictureArray=[];
let count=0;
let timer=0;

$(()=>{
    //we initialize a string to refer to the name of the folder containing the pictures
    let pathname="images/";
    for(i=1;i<=5;i++){
        //since the pictures are called picture1.jpg,
        //picture2.jpg etc. it's easy to dynamically build the full path name

        let imagename= pathname + "picture"+i+".jpg";
        let myImage = new Image();
        myImage.src = imagename;
        pictureArray.push(myImage);
    }

    $(".banner").css("background",`linear-gradient( to bottom right,rgba(0, 0, 0, 0.4),rgba(0, 0, 0, 0.5)),url(${pictureArray[0].src}) no-repeat center / cover`);
    changePictureOnTimer();
}
)

function changePicture(){
    count = (count+1)%5;
    let elem1 =$(".banner");
    //we initialize the image element with the first element in the array
        elem1.css("background",`linear-gradient( to bottom right,rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.8)),url(${pictureArray[count].src}) no-repeat center / cover`);
}

function changePictureOnTimer(){
    timer= setInterval(changePicture,5000);
}