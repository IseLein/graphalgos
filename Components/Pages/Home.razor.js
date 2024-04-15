
function getElementWidth(id) {
    const canvas = document.getElementById(id);
    let width = window.innerWidth - canvas.offsetX;
    console.log('Width: ' + width);
    return width;
}

function getCanvasHeight() {
    const canvas = document.getElementById('canvas');
    let height = window.innerHeight - canvas.offsetY;
    console.log('Height: ' + height);
    return height;
}

function doStuff(id) {
    const canvas = document.getElementById(id);
    let width = window.innerWidth - canvas.offsetX;
    console.log('Width: ' + width);
    return width;
}
