function wallpaper() {
    const target = document.getElementById("content");
    target.innerHTML = "";
    const start_x = document.getElementById("start_x").value;
    const start_y = document.getElementById("start_y").value;
    const side = document.getElementById("side").value;
    for (let i = 0; i < 100; i++) {
        for (let j = 0; j < 100; j++) {
            const x = start_x + (i * side) / 100;
            const y = start_y + (j * side / 100);
            const value = Math.floor(Math.pow(x, 2) + Math.pow(y, 2))
            plot(i, j, value)
        }
    }
}

function plot(i, j, value) {
    let color = getColor(value);
    const target = document.getElementById("content")
    const div = document.createElement('div');
    div.style.position = "absolute"
    div.style.backgroundColor = color;
    div.style.left = i * 3 + "px";
    div.style.top = j * 3 + "px";
    div.style.width = "3px"
    div.style.height = "3px"
    target.appendChild(div);
}

function getColor(value){
    switch (value % 8){
        case 0: return "black";
        case 1: return "red";
        case 2: return "yellow";
        case 3: return "blue";
        case 4: return "green";
        case 5: return "orange";
        case 6: return "magenta";
        default: return "brown";
    }
}
