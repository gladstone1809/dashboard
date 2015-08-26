
var imgArray = ['asos-sample1 =asos-sample2 =asos-sample3 =asos-sample4 =asos-sample5 =chanel-woman-1-creative =chanel-woman-2-creative-loud =chanel-woman-3-loud =chanel-woman-4-creative-loud =chanel-woman-5 =chanel-woman-6-quiet =chanel-woman-7-creative-loud =gap-man-1 =gap-man-2 =gap-man-3 =gap-man-4 =gap-woman-1 =gap-woman-2 =gap-woman-3 =gap-woman-4 =mcqueen-man-1-loud =mcqueen-man-2-creative =mcqueen-man-3-creative =reiss-man-1 =reiss-man-2 =reiss-man-3 =reiss-man-4 =reiss-man-5 =reiss-man-6 =reiss-woman-1-quiet =reiss-woman-2-quiet =reiss-woman-3-quiet =reiss-woman-4-quiet =reiss-woman-5-quiet =reiss-woman-6-quiet =reiss-woman-7-quiet =vw-man-1 =vw-man-2 =vw-man-3 =vw-man-4 =vw-woman-1 =vw-woman-2 =vw-woman-3 =vw-woman-4 =vw-woman-5 =walmart-man-1 =walmart-man-2 =walmart-man-3 =walmart-woman-1 =walmart-woman-2-bright =walmart-woman-3-bright =walmart-woman-4-dull =walmart-woman-5-bright.jpg'];

var basePath="images/";

//this function randomly places an image to a location
function imgRandom(location) {
  for (var i = 0; i < 1; i++) {
    var rand = imgArray[Math.floor(Math.random() * imgArray.length)];
    var image = new Image();
    image.src = basePath+rand;
    $(location).append(image);
  }
}

var funds = 100000;
var sales = 0;
var purchaseScore = 0;
var profit = 0;


function profitScore() {
  profit = (sales - (100000-funds));
  return profit;
}

function updateFunds() {
  funds = funds + profit;
  return funds;
}

function scoreCost(element) {
  funds = funds - (element.cost*1000);
  console.log("Sourcing Funds " + funds);
}

function printFunds(element) {
  $(element).html('Remaining funds: £' + (funds));
}

function printSales(element) {
  $(element).html('Sales: ' + (sales));
}

function printProfit(element) {
  $(element).html('Profit: £' + profit);
}

function increasePurchaseScore(element) {
   purchaseScore = purchaseScore + element;
}

function consumerBuy() {
  if (purchaseScore >= 3) {
    sale();
  }
}

function sale() {
  sales = sales+1000;
}

var fashionStyle = function(gender, priceSensitivity, creativity, extraversion, brandName, cost) {
  return {
    gender: gender,
    priceSensitivity: priceSensitivity,
    creativity: creativity,
    extraversion: extraversion,
    brandName: brandName,
    cost: cost
    }
  }

var consumer1 = fashionStyle(Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), 0)
var consumer2 = fashionStyle(Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), 0)
var consumer3 = fashionStyle(Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), 0)
var consumer4 = fashionStyle(Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), 0)

consumerImg(consumer1, "#consumer1");
consumerImg(consumer2, "#consumer2");
consumerImg(consumer3, "#consumer3");
consumerImg(consumer4, "#consumer4");

function consumerImg(element, name) {
  if (((parseFloat(element.gender)*10) > 5) && ((parseFloat(element.priceSensitivity)*10) > 7) && ((parseFloat(element.creativity)*10) < 5) && ((parseFloat(element.extraversion)*10) < 5) && ((parseFloat(element.brandName)*10) > 6)) { 
      //coupon lady X
      displayConsumerImg("images/coupon2.jpg", name); 
    } else if (((parseFloat(element.gender)*10) <= 5) && ((parseFloat(element.priceSensitivity)*10) > 7) && ((parseFloat(element.creativity)*10) < 5) && ((parseFloat(element.extraversion)*10) < 5) && ((parseFloat(element.brandName)*10) > 6)) { 
      //coupon man X
      displayConsumerImg("images/couponman.jpg", name); 
    } else if (((parseFloat(element.gender)*10) <= 5) && ((parseFloat(element.creativity)*10) > 7) && ((parseFloat(element.extraversion)*10) > 5)) { 
      //artist man X
      displayConsumerImg("images/Tzuji_man.jpg", name); 
    } else if (((parseFloat(element.gender)*10) > 5) && ((parseFloat(element.creativity)*10) > 7) && ((parseFloat(element.extraversion)*10) > 5)) { 
      //artist lady X
      displayConsumerImg("images/Tzuji_woman.jpg", name); 
    } else if (((parseFloat(element.gender)*10) > 5) && ((parseFloat(element.priceSensitivity)*10) > 5) && ((parseFloat(element.creativity)*10) < 5) && ((parseFloat(element.extraversion)*10) > 5) && ((parseFloat(element.brandName)*10) > 6)) { 
      //plain jane X
      displayConsumerImg("images/plain-woman.jpg", name); 
    } else if (((parseFloat(element.gender)*10) <= 5) && ((parseFloat(element.priceSensitivity)*10) > 5) && ((parseFloat(element.creativity)*10) < 5) && ((parseFloat(element.extraversion)*10) < 5) && ((parseFloat(element.brandName)*10) > 6)) { 
      //plain joe (constanza) X
      displayConsumerImg("images/Costanza.jpg", name); 
    } else if (((parseFloat(element.gender)*10) <= 5) && ((parseFloat(element.brandName)*10) > 7) && ((parseFloat(element.priceSensitivity)*10) < 5)) { 
      //lux man (tom ford)
      displayConsumerImg("images/Tom_Ford.jpg", name); 
    } else if (((parseFloat(element.gender)*10) > 5) && ((parseFloat(element.brandName)*10) > 7) && ((parseFloat(element.priceSensitivity)*10) < 5)){ 
      //lux lady (cruella) X
      displayConsumerImg("images/Cruella-de-Vil.jpg", name); 
    } else if (((parseFloat(element.gender)*10) <= 5) && ((parseFloat(element.extraversion)*10) > 7)) { 
      //loud man (rupaul) X
      displayConsumerImg("images/rupaulman.jpg", name); 
    } else if (((parseFloat(element.gender)*10) > 5) && ((parseFloat(element.extraversion)*10) > 7)) { 
      //loud lady (rupaul) X
      displayConsumerImg("images/dragrace6.jpg", name); 
    } else if ((parseFloat(element.gender)*10) <= 5) { 
      //generic man (sienfeld) X
      displayConsumerImg("images/Seinfeld.jpg", name); 
    } else if ((parseFloat(element.gender)*10) > 5) { 
      //generic woman (avWoman) X
      displayConsumerImg("images/avewoman.jpg", name); 
    }
}


function displayConsumerImg(img, location) {
    var image = new Image();
    image.src = img
    $(location).append(image).css("width", "96px");
  }

$(document).ready(function(){
    $('#consumer1').hover(function () {
        $('#consumer-info').html(genderStatement(consumer1) + 
          priceSensitivityStatement(consumer1) +
          creativityStatement(consumer1) +
          extraversionStatement(consumer1) +
          brandNameStatement(consumer1));
    });
    $('#consumer2').hover(function () {
        $('#consumer-info').html(genderStatement(consumer2) + 
          priceSensitivityStatement(consumer2) +
          creativityStatement(consumer2) +
          extraversionStatement(consumer2) +
          brandNameStatement(consumer2));
    });
    $('#consumer3').hover(function () {
        $('#consumer-info').html(genderStatement(consumer3) + 
          priceSensitivityStatement(consumer3) +
          creativityStatement(consumer3) +
          extraversionStatement(consumer3) +
          brandNameStatement(consumer3));
    });
    $('#consumer4').hover(function () {
        $('#consumer-info').html(genderStatement(consumer4) + 
          priceSensitivityStatement(consumer4) +
          creativityStatement(consumer4) +
          extraversionStatement(consumer4) +
          brandNameStatement(consumer4));
    });
  });



function genderStatement(element) {
  if (element.gender > 0.5) {
    return "'I am female. "
  } else {
    return "'I am male. "
  }
}

function priceSensitivityStatement(element) {
  if (element.priceSensitivity <= 0.3) {
    return "Bring on the Prada baby, cause I'm about to make it rain. "
  } else if ((element.priceSensitivity > 0.3) && (element.priceSensitivity < 0.7)) {
    return "I like a bargain, but I'll get something nice if it's not TOO expensive. "
  } else if (element.priceSensitivity >= 0.7) {
    return "I can't buy anything expensive.  I really need a bargain. "
  }
}

function creativityStatement(element) {
  if (element.creativity <= 0.3) {
    return "But I'm not one of those art freaks – I really don't want anything crazy-looking. "
  } else if ((element.creativity > 0.3) && (element.creativity < 0.7)) {
    return "I don't mind trying out something different once in a while.  I can be open-minded if persuaded. "
  } else if (element.creativity >= 0.7) {
    return "In a nutshell, my style is surrealist chic elevated with a postmodern flair. "
  }
}


function extraversionStatement(element) {
  if (element.extraversion <= 0.3) {
    return "I really don't like busy prints. Give me something subtle. "
  } else if ((element.extraversion > 0.3) && (element.extraversion < 0.7)) {
    return "I like wearing a bit of colour. "
  } else if (element.extraversion >= 0.7) {
    return "I'm loud and proud - bring on the colour. "
  }
}

function brandNameStatement(element) {
  if (element.brandName <= 0.3) {
    return "I couldn't care less about labels.'"
  } else if ((element.brandName > 0.3) && (element.brandName < 0.7)) {
    return "I like getting a cheeky something from Harrods for special occasions.'"
  } else if (element.brandName >= 0.7) {
    return "I'll admit it, I'm a brand wh*re.'"
  }
}

var shirt1 = fashionStyle(0.1, 0.1, 0.1, 0.1, 0.1, 0.1);
var shirt2 = fashionStyle(0.2, 0.2, 0.2, 0.2, 0.2, 0.2);
var shirt3 = fashionStyle(0.3, 0.3, 0.3, 0.3, 0.3, 0.3);
var shirt4 = fashionStyle(0.4, 0.4, 0.4, 0.4, 0.4, 0.4);
var shirt5 = fashionStyle(0.5, 0.5, 0.5, 0.5, 0.5, 0.5);
var chanel-woman-1-creative =
var chanel-woman-2-creative-loud =
var chanel-woman-3-loud =
var chanel-woman-4-creative-loud = 
var chanel-woman-5 =
var chanel-woman-6-quiet =
var chanel-woman-7-creative-loud =
var gap-man-1 =
var gap-man-2 =
var gap-man-3 =
var gap-man-4 =
var gap-woman-1 =
var gap-woman-2 =
var gap-woman-3 =
var gap-woman-4 =
var mcqueen-man-1-loud =
var mcqueen-man-2-creative =
var mcqueen-man-3-creative =
var reiss-man-1 =
var reiss-man-2 =
var reiss-man-3 =
var reiss-man-4 =
var reiss-man-5 =
var reiss-man-6 =
var reiss-woman-1-quiet =
var reiss-woman-2-quiet =
var reiss-woman-3-quiet =
var reiss-woman-4-quiet =
var reiss-woman-5-quiet =
var reiss-woman-6-quiet =
var reiss-woman-7-quiet =
vw-man-1 =
vw-man-2 =
vw-man-3 =
vw-man-4 =
vw-woman-1 =
vw-woman-2 =
vw-woman-3 =
vw-woman-4 =
vw-woman-5 =
walmart-man-1 =
walmart-man-2 =
walmart-man-3 =
walmart-woman-1 =
walmart-woman-2-bright =
walmart-woman-3-bright =
walmart-woman-4-dull =
walmart-woman-5-bright =

function assignAttributes(img) {
  switch(img) {
    
    case 'images/asos-sample1.jpg':
    compareGender(shirt1);
    comparePriceSensitivity(shirt1);
    compareCreativity(shirt1);
    compareExtraversion(shirt1);
    compareBrandName(shirt1);
    scoreCost(shirt1);
    console.log('asos1');
    console.log('Purchase Score ' + purchaseScore)
    console.log('Sales ' + sales)
    break;
      
    case 'images/asos-sample2.jpg':
    compareGender(shirt2);
    comparePriceSensitivity(shirt2);
    compareCreativity(shirt2);
    compareExtraversion(shirt2);
    compareBrandName(shirt2);
    scoreCost(shirt2);
    console.log('asos2');
    console.log('Purchase Score ' + purchaseScore)
    console.log('Sales ' + sales)
    break;
      
    case 'images/asos-sample3.jpg':
    compareGender(shirt3);
    comparePriceSensitivity(shirt3);
    compareCreativity(shirt3);
    compareExtraversion(shirt3);
    compareBrandName(shirt3);
    scoreCost(shirt3);
    console.log('asos3');
    console.log('Purchase Score ' + purchaseScore)
    console.log('Sales ' + sales)
    break;
      
    case 'images/asos-sample4.jpg':
    compareGender(shirt4);
    comparePriceSensitivity(shirt4);
    compareCreativity(shirt4);
    compareExtraversion(shirt4);
    compareBrandName(shirt4);
    scoreCost(shirt4);
    console.log('asos4');
    console.log('Purchase Score ' + purchaseScore)
    console.log('Sales ' + sales)
    break;
      
    case 'images/asos-sample5.jpg':
    compareGender(shirt5);
    comparePriceSensitivity(shirt5);
    compareCreativity(shirt5);
    compareExtraversion(shirt5);
    compareBrandName(shirt5);
    scoreCost(shirt5);
    console.log('asos5');
    console.log('Purchase Score ' + purchaseScore)
    console.log('Sales ' + sales)
    break;
    }
  }

var genderAverage = ((((consumer1.gender) + 
                      (consumer2.gender) + 
                      (consumer3.gender) +
                      (consumer4.gender))*10) / 4);

var priceSensAverage = ((((consumer1.priceSensitivity) + 
                      (consumer2.priceSensitivity) + 
                      (consumer3.priceSensitivity) +
                      (consumer4.priceSensitivity))*10) / 4);

var creativeAverage = ((((consumer1.creativity) + 
                      (consumer2.creativity) + 
                      (consumer3.creativity) +
                      (consumer4.creativity))*10) / 4);

var extraversionAverage = ((((consumer1.extraversion) + 
                      (consumer2.extraversion) + 
                      (consumer3.extraversion) +
                      (consumer4.extraversion))*10) / 4);

var brandNameAverage = ((((consumer1.brandName) + 
                      (consumer2.brandName) + 
                      (consumer3.brandName) +
                      (consumer4.brandName))*10) / 4)

// this needs re-factoring
// how to count the number of times this is true

function compareGender(element){
  var genderArray = [(((parseFloat(consumer1.gender)*10)-2) >= (parseFloat(element.gender)*10)) && ((parseFloat(element.gender)*10) <= ((parseFloat(consumer1.gender)*10)+2)),
  (((parseFloat(consumer2.gender)*10)-2) >= (parseFloat(element.gender)*10)) && ((parseFloat(element.gender)*10) <= ((parseFloat(consumer2.gender)*10)+2)),
  (((parseFloat(consumer3.gender)*10)-2) >= (parseFloat(element.gender)*10)) && ((parseFloat(element.gender)*10) <= ((parseFloat(consumer3.gender)*10)+2)),
  (((parseFloat(consumer4.gender)*10)-2) >= (parseFloat(element.gender)*10)) && ((parseFloat(element.gender)*10) <= ((parseFloat(consumer4.gender)*10)+2))];
  var filteredArray = genderArray.filter(function(element){
    return element;
  })
  console.log('Gender matches ' + filteredArray.length)
  increasePurchaseScore(filteredArray.length);
  scoreCost(element);
  consumerBuy();
  profitScore();
  printFunds('#dashboard1funds');
  printSales('#dashboard1sales');
  printProfit('#dashboard1profit');
  increaseGenderScore(filteredArray.length);
  if (filteredArray.length > 3) {
    console.log ("Gender: OMG LOVE IT");
  } else if (filteredArray.length < 3) {
    console.log ("Gender: UGH HATE IT");
  }
}

function comparePriceSensitivity(element){
  var priceSensitivityArray = [(((parseFloat(consumer1.priceSensitivity)*10)-2) >= (parseFloat(element.priceSensitivity)*10)) && ((parseFloat(element.priceSensitivity)*10) <= ((parseFloat(consumer1.priceSensitivity)*10)+2)),
    (((parseFloat(consumer2.priceSensitivity)*10)-2) >= (parseFloat(element.priceSensitivity)*10)) && ((parseFloat(element.priceSensitivity)*10) <= ((parseFloat(consumer2.priceSensitivity)*10)+2)),
    (((parseFloat(consumer3.priceSensitivity)*10)-2) >= (parseFloat(element.priceSensitivity)*10)) && ((parseFloat(element.priceSensitivity)*10) <= ((parseFloat(consumer3.priceSensitivity)*10)+2)),
    (((parseFloat(consumer4.priceSensitivity)*10)-2) >= (parseFloat(element.priceSensitivity)*10)) && ((parseFloat(element.priceSensitivity)*10) <= ((parseFloat(consumer4.priceSensitivity)*10)+2))];
  var filteredArray = priceSensitivityArray.filter(function(element){
    return element;
  })
  console.log('Price sensitivity matches ' + filteredArray.length)
  increasePurchaseScore(filteredArray.length);
  increasePriceSensitivityScore(filteredArray.length);
  consumerBuy();
  if (filteredArray.length > 3) {
    console.log ("Creatvity: OMG LOVE IT");
  } else if (filteredArray.length < 3) {
    console.log ("Creatvity: UGH HATE IT");
  }
}

function compareCreativity(element){
  var creativityArray = [(((parseFloat(consumer1.creativity)*10)-2) >= (parseFloat(element.creativity)*10)) && ((parseFloat(element.creativity)*10) <= ((parseFloat(consumer1.creativity)*10)+2)),
  (((parseFloat(consumer2.creativity)*10)-2) >= (parseFloat(element.creativity)*10)) && ((parseFloat(element.creativity)*10) <= ((parseFloat(consumer2.creativity)*10)+2)),
  (((parseFloat(consumer3.creativity)*10)-2) >= (parseFloat(element.creativity)*10)) && ((parseFloat(element.creativity)*10) <= ((parseFloat(consumer3.creativity)*10)+2)),
  (((parseFloat(consumer4.creativity)*10)-2) >= (parseFloat(element.creativity)*10)) && ((parseFloat(element.creativity)*10) <= ((parseFloat(consumer4.creativity)*10)+2))];
  var filteredArray = creativityArray.filter(function(element){
    return element;
  })
  console.log('Creativity matches ' + filteredArray.length)
  increasePurchaseScore(filteredArray.length);
  increaseCreativityScore(filteredArray.length);
  consumerBuy();
  if (filteredArray.length > 3) {
    console.log ("Creatvity: OMG LOVE IT");
  } else if (filteredArray.length < 3) {
    console.log ("Creatvity: UGH HATE IT");
  }
}

function compareExtraversion(element){
  var extraversionArray = [(((parseFloat(consumer1.extraversion)*10)-2) >= (parseFloat(element.extraversion)*10)) && ((parseFloat(element.extraversion)*10) <= ((parseFloat(consumer1.extraversion)*10)+2)),
  (((parseFloat(consumer2.extraversion)*10)-2) >= (parseFloat(element.extraversion)*10)) && ((parseFloat(element.extraversion)*10) <= ((parseFloat(consumer2.extraversion)*10)+2)),
  (((parseFloat(consumer3.extraversion)*10)-2) >= (parseFloat(element.extraversion)*10)) && ((parseFloat(element.extraversion)*10) <= ((parseFloat(consumer3.extraversion)*10)+2)),
  (((parseFloat(consumer4.extraversion)*10)-2) >= (parseFloat(element.extraversion)*10)) && ((parseFloat(element.extraversion)*10) <= ((parseFloat(consumer4.extraversion)*10)+2))];
  var filteredArray = extraversionArray.filter(function(element){
    return element;
  })
  console.log('Extraversion matches ' + filteredArray.length)
  increasePurchaseScore(filteredArray.length);
  increaseExtraversionScore(filteredArray.length);
  consumerBuy();
  if (filteredArray.length > 3) {
    console.log ("Extraversion: OMG LOVE IT");
  } else if (filteredArray.length < 3) {
    console.log ("Extraversion: UGH HATE IT");
  }
}

function compareBrandName(element){
  var brandNameArray = [(((parseFloat(consumer1.brandName)*10)-2) >= (parseFloat(element.brandName)*10)) && ((parseFloat(element.brandName)*10) <= ((parseFloat(consumer1.brandName)*10)+2)), 
  (((parseFloat(consumer2.brandName)*10)-2) >= (parseFloat(element.brandName)*10)) && ((parseFloat(element.brandName)*10) <= ((parseFloat(consumer2.brandName)*10)+2)),
  (((parseFloat(consumer3.brandName)*10)-2) >= (parseFloat(element.brandName)*10)) && ((parseFloat(element.brandName)*10) <= ((parseFloat(consumer3.brandName)*10)+2)),
  (((parseFloat(consumer4.brandName)*10)-2) >= (parseFloat(element.brandName)*10)) && ((parseFloat(element.brandName)*10) <= ((parseFloat(consumer4.brandName)*10)+2))];
  var filteredArray = brandNameArray.filter(function(element){
    return element;
  })
  console.log('Brand matches ' + filteredArray.length)
  increasePurchaseScore(filteredArray.length);
  increaseBrandNameScore(filteredArray.length);
  consumerBuy();
  if (filteredArray.length > 3) {
    console.log ("Brand: OMG LOVE IT");
  } else if (filteredArray.length < 3) {
    console.log ("Brand: UGH HATE IT");
  }
}

var genderScore = 0;
var priceSensitivityScore = 0;
var creativityScore = 0;
var extraversionScore = 0;
var brandNameScore = 0;

$(document).ready(function(){

  // automatically load random images
  imgRandom('#img1');
  imgRandom('#img2');
  imgRandom('#img3');
  imgRandom('#img4');
  imgRandom('#img5');
  imgRandom('#img6');
  imgRandom('#img7');
  imgRandom('#img8');
  imgRandom('#img9');
  imgRandom('#img10');
  imgRandom('#img11');
  imgRandom('#img12');
  imgRandom('#img13');
  imgRandom('#img14');
  imgRandom('#img15');

  // there's the gallery and the store
  var $gallery = $( "#gallery" ),
    $store = $( "#store" );

  // let the gallery items be draggable
  $( "li", $gallery ).draggable({
    cancel: "a.ui-icon", // clicking an icon won't initiate dragging
    revert: "invalid", // when not dropped, the item will revert back to its initial position
    containment: "document",
    helper: "clone",
    cursor: "move",
  });

  // let the store be droppable, accepting the gallery items
  $store.droppable({
    accept: "#gallery > li",
    activeClass: "ui-state-highlight",
    drop: function( event, ui ) {
      assignImage( ui.draggable );
      var imgSource = ui.draggable.find('img').attr('src');
      assignAttributes(imgSource);
    }
  });

  // let the gallery be droppable as well, accepting items from the store
  $gallery.droppable({
    accept: "#store li",
    activeClass: "custom-state-active",
    drop: function( event, ui ) {
      returnImage( ui.draggable );
    }
  });

  // image deletion function
  var return_icon = "<a href='link/to/return/script/when/we/have/js/off' title='Return this image' class='ui-icon ui-icon-refresh'>Return</a>";
  function assignImage( $item ) {
    $item.fadeOut(function() {
      var $list = $( "ul", $store ).length ?
        $( "ul", $store ) :
        $( "<ul class='gallery ui-helper-reset'/>" ).appendTo( $store );

      $item.find( "a.ui-icon-store" ).remove();
      $item.append( return_icon ).appendTo( $list ).fadeIn(function() {
        $item
          .animate({ width: "20%" })
          .find( "img" )
            .animate({ height: "20%" });
      });
    });
  }

  // image return function
  var store_icon = "<a title='Assign this image' class='ui-icon ui-icon-store'></a>";
  function returnImage( $item ) {
    $item.fadeOut(function() {
      $item
        .find( "a.ui-icon-refresh" )
          .remove()
        .end()
        .css( "width", "37%")
        .append( store_icon )
        .find( "img" )
          .css( "height", "37%" )
        .end()
        .appendTo( $gallery )
        .fadeIn();
    });
  }

  // // image preview function, demonstrating the ui.dialog used as a modal window
  // function viewLargerImage( $link ) {
  //   var src = $link.attr( "href" ),
  //     title = $link.siblings( "img" ).attr( "alt" ),
  //     $modal = $( "img[src$='" + src + "']" );

  //   if ( $modal.length ) {
  //     $modal.dialog( "open" );
  //   } else {
  //     var img = $( "<img alt='" + title + "' width='384' height='288' style='display: none; padding: 8px;' />" )
  //       .attr( "src", src ).appendTo( "body" );
  //     setTimeout(function() {
  //       img.dialog({
  //         title: title,
  //         width: 400,
  //         modal: true
  //       });
  //     }, 1 );
  //   }
  // }

  // resolve the icons behaviour with event delegation
  $( "ul.gallery > li" ).click(function( event ) {
    var $item = $( this ),
      $target = $( event.target );

    if ( $target.is( "a.ui-icon-store" ) ) {
      assignImage( $item );
    } else if ( $target.is( "a.ui-icon-zoomin" ) ) {
      viewLargerImage( $target );
    } else if ( $target.is( "a.ui-icon-refresh" ) ) {
      returnImage( $item );
    }

    return false;
  });
});

    var ctx = $("#myChart").get(0).getContext("2d"); 

    var data = {
    labels: ["Gender", "Price Sensitivity", "Creativity", "Extraversion", "Prestige Sensitivity"],
    datasets: [
        {
            label: "Consumer dataset",
            fillColor: "rgba(220,220,220,0.2)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [genderAverage, priceSensAverage, creativeAverage, extraversionAverage, brandNameAverage]
        },
        {
            label: "Product dataset",
            fillColor: "rgba(151,187,205,0.2)",
            strokeColor: "rgba(151,187,205,1)",
            pointColor: "rgba(151,187,205,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: [genderScore, priceSensitivityScore, creativityScore, extraversionScore, brandNameScore]
        }
    ]
};

    var myRadarChart = new Chart(ctx).Radar(data);

    function updateChart() {
      myRadarChart.datasets[1].points[0].value = genderScore;
      myRadarChart.datasets[1].points[1].value = priceSensitivityScore;
      myRadarChart.datasets[1].points[2].value = creativityScore;
      myRadarChart.datasets[1].points[3].value = extraversionScore;
      myRadarChart.datasets[1].points[4].value = brandNameScore;
    }
  
  function increaseGenderScore(element) {
    genderScore = genderScore + element;
    updateChart();
    myRadarChart.update();
  };

  function increasePriceSensitivityScore(element) {
    priceSensitivityScore = priceSensitivityScore + element;
    updateChart();
    myRadarChart.update();
  };

  function increaseCreativityScore(element) {
    creativityScore = creativityScore + element;
    updateChart();
    myRadarChart.update();
  };

  function increaseExtraversionScore(element) {
    extraversionScore = extraversionScore + element;
    updateChart();
    myRadarChart.update();
  };

  function increaseBrandNameScore(element) {
    brandNameScore = brandNameScore + element;
    updateChart();
    myRadarChart.update();
  };
