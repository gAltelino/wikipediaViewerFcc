function randomWikipediaPage(){
    window.open('https://en.wikipedia.org/wiki/Special:Random');
}

function searchWikipedia(){
    var inputText = $("#queryBox").val();
    console.log(inputText);

    $.ajax({
        url:'https://en.wikipedia.org/w/api.php?action=opensearch&search=' + inputText + '&limit=10&namespace=0&format=json',
        type: 'get',
        dataType:'jsonp'
    })
    .done(function(data){
       console.log(data);
       

        for (var i = 0; i < data[1].length; i++){
                    $( "#searchDiv" ).append( '<div class="card">');

            $( "#searchDiv" ).append( '<div class="card-block">');
            $( "#searchDiv" ).append( '<h3 class="card-title">' + data[1][i] + '</h3>');
            $( "#searchDiv" ).append( '<p class="card-text">' + data[2][i] + '</p>');
            $( "#searchDiv" ).append( '<a href="' + data[3][i] + '" class="btn btn-primary" target="_blank">Go to Wikipedia</a>');
            $( "#searchDiv" ).append( '</div>');
                    $( "#searchDiv" ).append( '</div>');

        }



    })
}