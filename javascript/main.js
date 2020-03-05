var picture = [
   {    
       keywords : ["sky", "tree", "trees", "hay", "bales", "hay bales", "field", "strawfields", "i love hay bales. took this snap on a drive through the countryside past some straw fields."],
        picture : "#1"
    },
    {
        keywords : ["sky", "lake", "snow", "mountain", "mountains", "the lake was so calm today. we had a great view of the snow on the mountains from here."],
        picture : "#2"
    },
    {
        keywords : ["sky", "tree", "trees", "canyon", "mountain", "mountains", "i hiked to the top of the mountain and got this picture of the canyon and trees below."],
        picture : "#3"
    },
    {
        keywords : ["sky", "lake", "iceburg", "mountain", "mountains", "snow", "it was amazing to see an iceberg up close, it was so cold but didn’t snow today."],
        picture : "#4"
    },
    {
        keywords : ["cliffs", "red cliffs", "mountain", "mountains", "desert", "canyon", "canyons", "the red cliffs were beautiful. it was really hot in the desert but we did a lot of walking through the canyons."],
        picture : "#5"   
    },
    {
        keywords : ["tree", "fall", "leaves", "trees", "fall is coming, i love when the leaves on the trees start to change color."],
        picture : "#6"
    },
    {
        keywords : ["tree", "trees", "plantation", "I drove past this plantation yesterday, everything is so green!"],
        picture : "#7"
    },
    {
        keywords : ["sand", "coast", "oregon", "oregon coast", "dunes", "sandy dunes", "my summer vacation to the oregon coast. i love the sandy dunes!"],
        picture : "#8"
    },
    {
        keywords : ["road", "lane", "countryside lane", "we enjoyed a quiet stroll down this countryside lane."],
        picture : "#9"
    },
    {
        keywords : ["ocean", "sunset", "coast", "sky", "sunset at the coast! the sky turned a lovely shade of orange."],
        picture : "#10"

    },
    {
        keywords : ["tree", "trees", "cave", "i did a tour of a cave today and the view of the landscape below was breathtaking."],
        picture : "#11"
    },
    {
        keywords : ["sky", "tree", "trees", "bluebells", "snow", "mountain", "mountains", "i walked through this meadow of bluebells and got a good view of the snow on the mountain before the fog came in."],
        picture : "#12"
    }
    ];    

    $('#site-search').on('keyup', function() {
    for ( var i = 0; i <= 11; i++ ) {
    var search = picture[i].keywords.indexOf($('#site-search').val().toLowerCase())
    if ( search > -1  ) { 
        $(picture[i].picture).show()
    } 
    if (search === -1){
        $(picture[i].picture).hide()
    }
    if ($('#site-search').val() === "") {
        $('img').show()
    }
    }
    });







/* var picture = {
    1 : ["tree", "trees", "hay", "bales", "hay bales", "field", "strawfields", "i love hay bales. took this snap on a drive through the countryside past some straw fields."],
    2 : ["lake", "snow", "mountain", "mountains", "the lake was so calm today. we had a great view of the snow on the mountains from here."],
    3 : ["tree", "trees", "canyon", "mountain", "mountains", "i hiked to the top of the mountain and got this picture of the canyon and trees below."],
    4 : ["lake", "iceburg", "mountain", "mountains", "snow", "it was amazing to see an iceberg up close, it was so cold but didn’t snow today."],
    5 : ["cliffs", "red cliffs", "mountain", "mountains", "desert", "canyon", "canyons", "the red cliffs were beautiful. it was really hot in the desert but we did a lot of walking through the canyons."],
    6 : ["tree", "fall", "leaves", "trees", "fall is coming, i love when the leaves on the trees start to change color."],
    7 : ["tree", "trees", "plantation", "I drove past this plantation yesterday, everything is so green!"],
    8 : ["sand", "coast", "oregon", "oregon coast", "dunes", "sandy dunes", "my summer vacation to the oregon coast. i love the sandy dunes!"],
    9 : ["road", "lane", "countryside lane", "we enjoyed a quiet stroll down this countryside lane."],
    10 : ["ocean", "sunset", "coast", "sky", "sunset at the coast! the sky turned a lovely shade of orange."],
    11 : ["tree", "trees", "cave", "i did a tour of a cave today and the view of the landscape below was breathtaking."],
    12 : ["tree", "trees", "bluebells", "snow", "mountain", "mountains", "i walked through this meadow of bluebells and got a good view of the snow on the mountain before the fog came in."]  
};

$('#site-search').on('keyup', function() {
    const valueOne = picture[1].indexOf($('#site-search').val().toLowerCase());
    const valueTwo = picture[2].indexOf($('#site-search').val().toLowerCase());
    const valueThree = picture[3].indexOf($('#site-search').val().toLowerCase());
    const valueFour = picture[4].indexOf($('#site-search').val().toLowerCase());
    const valueFive = picture[5].indexOf($('#site-search').val().toLowerCase());
    const valueSix = picture[6].indexOf($('#site-search').val().toLowerCase());
    const valueSeven = picture[7].indexOf($('#site-search').val().toLowerCase());
    const valueEight = picture[8].indexOf($('#site-search').val().toLowerCase());
    const valueNine = picture[9].indexOf($('#site-search').val().toLowerCase());
    const valueTen = picture[10].indexOf($('#site-search').val().toLowerCase());
    const valueEleven = picture[11].indexOf($('#site-search').val().toLowerCase());
    const valueTwelve = picture[12].indexOf($('#site-search').val().toLowerCase());

$('img').hide()

if ( valueOne > -1  ) { 
        $("#1").show()
    } 
if ( valueTwo > -1  ) {      
        $("#2").show()
    } 
if ( valueThree > -1  ) {      
        $("#3").show()
    } 
if ( valueFour > -1  ) {      
        $("#4").show()
    } 
if ( valueFive > -1  ) {      
        $("#5").show()
    } 
if ( valueSix > -1  ) {      
        $("#6").show()
    } 
if ( valueSeven > -1  ) {      
        $("#7").show()
    } 
if ( valueEight > -1  ) {      
        $("#8").show()
    } 
if ( valueNine > -1  ) {      
        $("#9").show()
    } 
if ( valueTen > -1  ) {      
        $("#10").show()
    } 
if ( valueEleven > -1  ) {      
        $("#11").show()
    } 
if ( valueTwelve > -1  ) {      
        $("#12").show()
    } 
if ( $('#site-search').val() === "") {
    $('img').show()
}

}); */
