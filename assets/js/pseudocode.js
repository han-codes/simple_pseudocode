// $(".input-group").keypress(function(){
//     console.log('press');
// });
// $("button[type='submit']").click(function(){
//     var code = $("input[type='text']").val();
//     console.log(code);
// });


// $(".input-group input[type='text']").val();

$("input[type='text']").on("keypress", function(){
    if (event.which === 13){
        // Grabbing new todo text from input
        var codeInput = $(this).val();
        // clears the value in the text area
        $(this).val("");
        $("#results").append("<p>" + "<i class='fa fa-pencil-square-o' aria-hidden='true'></i>" +
            "&nbsp;" + codeInput + "</p>");
    }
});

$("#results").on("click", "i", function(){
    console.log("clicked");
    var editText = prompt("Enter new text: ");
    $(this).parent().html("<p>" + "<i class='fa fa-pencil-square-o' aria-hidden='true'></i> " +
        "&nbsp;" + editText + "</p>");
    // $(this).parent().text(editText);
});

$("input[type='reset']").on("click", function(){
    $("#results").text("");
});

// $("#results").on("click", function(){
//     var newEdit = prompt("Please enter your new text: ");
//     $(this).text(newEdit);
// });

// $("button[type='submit']").on("click", function(){
//     $("input[type='text']").val();
// });

// $("input[type='reset']").on("click", function(){
//     $("#results").remove();
// });
