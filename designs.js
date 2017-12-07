$(function () {
    console.log('ready');

    $('#sizePicker input[type="submit"]').click(function (evt) {

        evt.preventDefault();
        console.log('clicked submit');
        makeGrid();
    });

    $('#clear').click(function (evt) {

        evt.preventDefault();
        console.log('clicked clear');
        clearGrid();
    });

    $("#pixel_canvas").on("click", "td", function (event) {

        event.preventDefault();

        let selectedColor = $('#colorPicker').val();

        if ($(this).css("background-color") != 'rgba(0, 0, 0, 0)') {
            $(this).css("background-color", "rgba(0, 0, 0, 0)");
        } else {
            $(this).css("background-color", selectedColor);
        }

    });

    function makeGrid() {

        let cols = $('#input_width').val();
        let rows = $('#input_height').val();

        let pixelCanvas = $('#pixel_canvas');
        pixelCanvas.empty();
        for (let r = 0; r < rows; r++) {
            var $newRow = document.createElement("tr");

            for (let c = 0; c < cols; c++) {
                $($newRow).append("<td></td>");
            }
            pixelCanvas.append($newRow);
        }
         $('#clear').show();
    }

    function clearGrid() {

        let pixelCanvas = $('#pixel_canvas');
        pixelCanvas.find('td').css("background-color", "rgba(0, 0, 0, 0)");

    }
});
