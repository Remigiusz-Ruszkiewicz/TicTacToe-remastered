let shapeType = 'O'
function GetCanvas(id) {    
    if (shapeType == 'O') {
        var c = document.getElementById(id);        
        var ctx = c.getContext("2d");
        ctx.beginPath();
        ctx.arc(72, 75, 70, 0, 2 * Math.PI);
        ctx.stroke();
        $.ajax(
            type: "POST",
            url: "Game/SetValue",
            data: {
                id: id,
                value: "O",
                succes(result) {
                    alert(result)
                },
                error(e) {
                    alert(e)
                }
            }
        )
    }
    else {
        var c = document.getElementById(id);        
        var ctx = c.getContext("2d");
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(c.width /2, c.height);
        ctx.stroke();
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(c.width / 2, 0);
        ctx.lineTo(0, c.height);
        ctx.stroke();
        shapeType = 'O'
    }
}