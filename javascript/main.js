var picture = [
    {    
        keywords : "ilovehaybalestookthissnaponadrivethroughthecountrysidepastsomestrawfields",
         picture : "#1"
     },
     {
         keywords : "thelakewassocalmtodaywehadagreatviewofthesnowonthemountainsfromhere",
         picture : "#2"
     },
     {
         keywords : "ihikedtothetopofthemountainandgotthispictureofthecanyonandtreesbelow",
         picture : "#3"
     },
     {
         keywords : "itwasamazingtoseeanicebergupcloseitwassocoldbutdidn’tsnowtoday",
         picture : "#4"
     },
     {
         keywords : "theredcliffswerebeautifulitwasreallyhotinthedesertbutwedidalotofwalkingthroughthecanyons",
         picture : "#5"   
     },
     {
         keywords : "falliscomingilovewhentheleavesonthetreesstarttochangecolor",
         picture : "#6"
     },
     {
         keywords : "idrovepastthisplantationyesterdayeverythingissogreen",
         picture : "#7"
     },
     {
         keywords : "mysummervacationtotheoregoncoastilovethesandydunes",
         picture : "#8"
     },
     {
         keywords : "weenjoyedaquietstrolldownthiscountrysidelane",
         picture : "#9"
     },
     {
         keywords : "sunsetatthecoasttheskyturnedalovelyshadeoforange",
         picture : "#10"
 
     },
     {
         keywords : "ididatourofacavetodayandtheviewofthelandscapebelowwasbreathtaking",
         picture : "#11"
     },
     {
         keywords : "iwalkedthroughthismeadowofbluebellsandgotagoodviewofthesnowonthemountainbeforethefogcamein",
         picture : "#12"
     }
     ];    
 
     $('#site-search').on('keyup', function() {
     for ( var i = 0; i <= 11; i++ ) {
     var search = picture[i].keywords.split("").indexOf($('#site-search').val().toLowerCase())
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


/* var picture = [
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
    }); */







