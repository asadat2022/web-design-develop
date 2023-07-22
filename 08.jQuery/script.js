// $('.block').click(()=>{
//     $('.block').hide(1000)
// })


// let test = $('.block');

// $('.block').click((el)=>{
//     $(el.target).hide(1000)
// })


// $('.block').click(function (){
//     $(this).hide(1000)
// })


// $('.block').click(function (el){
//     $(el.target).hide(1000)
// })

// $('.block').click(function (el) {
//     $(this).hide(1000, function () {
//         console.log("Done");
//         $(el.target).show(3000, function () {
//             $(el.target).hide(1000, function () {
//                 console.log("Done");
//                 $(el.target).hide(3000);
//             })
//         });
//     })
// })



// $('#toggle').click(function (){
//     $('.block').animate({
//         height: '100px',
//         width: '100px',
//         opacity:'0.5',
//     })
// })

// $('#toggle').click(function (){
//     // let para = document.getElementsByTagName('p');
//     // let s = document.getElementsByTagName('span');
//     // s[0].innerText = para[0].innerText;
//     // $('span').text($('p').text())
// })


// $('#toggle').click(function () {
//     axios.get('https://jsonplaceholder.typicode.com/users').then(function (response) {
//         const users = response.data

//         let data = '<tr>' +
//             '<th>Name</th>' +
//             '<th>UserName</th>' +
//             '<th>Email</th>' +
//             '</tr>';
//         users.forEach((e) => {
//             data = data + '<tr>' +
//                 '<td>' + e.name + '</td>' +
//                 '<td>' + e.username + '</td>' +
//                 '<td>' + e.email + '</td>' +
//                 '</tr>';
//         })

//         $('#user_table').html(data)
//     })
// })

// $('#toggle').click(function () {


//     // console.log($('#user_table').html());

//     $('#test').html($('#user_table').html())

// })

// $('#toggle').click(function () {
//     axios.get('https://jsonplaceholder.typicode.com/users').then(function (response) {
//         const users = response.data


//         $('#user_table').prepend('<tr>' +
//         '<th>Id</th>' +
//         '<th>Name</th>' +
//             '<th>UserName</th>' +
//             '<th>Email</th>' +
//             '</tr>');

//         users.forEach((e) => {
//             let user = '<tr>' +
//             '<td>' + e.id + '</td>' +
//             '<td>' + e.name + '</td>' +
//                 '<td>' + e.username + '</td>' +
//                 '<td>' + e.email + '</td>' +
//                 '</tr>';

//             $('#user_table').prepend(user)
//         })
//     })
// })


// $('#toggle').click(function () {
//     jQuery('p').prepend("Madi");
//     jQuery('p').prepend("Ali");
//     jQuery('p').prepend("Hamza");
// })