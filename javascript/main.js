//search function using jQuery

$('#site-search').on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $('#container a').filter(function() {
    $(this).toggle($(this).attr('data-title').toLowerCase().indexOf(value) > -1)
    });

});