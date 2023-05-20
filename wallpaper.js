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
            if (value % 2 === 0) {
                plot(i, j)
            }
        }
    }
}

function plot(i, j) {
    const target = document.getElementById("content")
    const div = document.createElement('div');
    div.style.position = "absolute"
    div.style.backgroundColor = "black"
    div.style.left = i * 3 + "px";
    div.style.top = j * 3 + "px";
    div.style.width = "3px"
    div.style.height = "3px"
    target.appendChild(div);
}
