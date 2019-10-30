function displayDate() {
    var display = $("#currentDay");
    var date = moment().format("dddd MMMM Do");
    $(display).html(date);
}

function getTasks(){
    for (i=9; i<=17; i++){
        $("#block" + i).val(localStorage.getItem(i));
    }
}

function colorBlocks() {
    var t = moment().format("H");
    console.log(t.toString("H"));
    var blocks = ["#block9", "#block10", "#block11", "#block12", "#block13", "#block14", "#block15", "#block16", "#block17"];
    for (var i = 0; i < 9; i++) {
        var mess = i + 9;

        if (t < mess) {
            $(blocks[i]).css("background-color", "green");

        } else if (t > mess) {
            $(blocks[i]).css("background-color", "gray");

        } else if (t = mess) {
            $(blocks[i]).css("background-color", "red");

        }
    }
}

$(".saveBtn").on("click", function () {
    var val = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(time, val);
})

getTasks();
setInterval(displayDate, 1000*60);
displayDate();
setInterval(colorBlocks, 1000 * 60);
colorBlocks();
