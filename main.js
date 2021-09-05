var canvas = new fabric.Canvas('myCanvas');
var x = document.getElementById("myAudio");
Img_object = ""

function new_image() {

    fabric.Image.fromURL("BirthdayImage.jpg", function (Img) {
        Img_object = Img
        Img_object.scaleToWidth(700)
        Img_object.scaleToHeight(510)
        Img_object.set({
            top:0,
            left:0
        })
        canvas.add(Img_object)
    })

}

function playSound() {
x.play()
}
