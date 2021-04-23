
$(() => { 

    console.log("jQuery is ready");

    $("button").on("click", () => {
        console.debug("The button is clicked!");
    });

    let value = $(".tonya").val();
    console.log(value);
    value = Number(value) + 3;
    $(".tonya").val(value);

    
});