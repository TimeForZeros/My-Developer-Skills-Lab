// let inputText = document.querySelector('.skills').value;
// console.log(inputText);

$('#button').on('click', function(){
    var $inputText = $('input').val();
    var li = $('<li></li>');
    li.html($inputText);
$('ul').append(li);
$('input').val('');
});
