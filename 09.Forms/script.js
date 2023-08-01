// $(document).ready(function () {
//     $('#handleSubmit').submit(function (event) {


        //     if (!(this).checkValidity()) {
        //         event.preventDefault()
        //     } else {
        //         $('#label-name').text($('#field-name').val());
        //         $('#label-username').text($('#field-username').val());

        //         // $('#label-hobby').text('')
        //         // $('#label-hobby').append($('#hobby-cricket:checked').val()+", ")
        //         // $('#label-hobby').append($('#hobby-gardening:checked').val()+", ")
        //         // $('#label-hobby').append($('#hobby-reading:checked').val()+", ")


        //         // $('#label-gender').html($('.gender[name="gender"]:checked').val())

        //         // $('#field-name').val("sdjhfgbdsjh");

        //         event.preventDefault()
        //     }

        //     $(this).addClass('was-validated')


//     })
// });

$(document).ready(function () {
    $('#handleSubmit').submit(function (event) {
        event.preventDefault()
        const formData = new FormData($(this)[0]);
        // console.log(formData.entries());
        for (let entry of formData.entries()) {
            console.log(entry[0] + ": " + entry[1]);
        }
    })
});