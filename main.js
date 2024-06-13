$(document).ready(function () {


    $('form').on('submit', function (e) {
        e.preventDefault();

        const nomeTarefa = $('#tarefa-nova').val();
        const novaTarefa = $(`<li>${nomeTarefa}</li>`)

        console.log(nomeTarefa);

        $(novaTarefa).appendTo('ul')

        $(novaTarefa).on('click', function () {
            $(this).toggleClass('tarefa-completa');
        });

        $('#tarefa-nova').val('');
    });
});