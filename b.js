$(document).ready(function(){
var jj = $(".unduh").length;
    for (var i = 0; i < jj; i++) {
    if ( $("a.unduh").length == jj ){
      var a = $(".unduh").eq( i ).attr("href");
      var te = $(".unduh").eq( i ).html();
          
        var enca = btoa( a );
     $(".unduh").eq( i ).html("<a rel='nofollow' href='http://jail-bird.blogspot.co.id/p/link.html#" + enca + "'><strong>-- "+te+" --</strong></a>");
    } else {
      var b = $("b.unduh").eq( i ).text();
      var encb = btoa( b );
     $("b.unduh").eq( i ).html("<a rel='nofollow' href='http://jail-bird.blogspot.co.id/p/link.html#" + encb + "'><input type='button' style='color:red;text-color:white;margin:3px;padding:3px;' value='INI LINKNYA' /></a>");
    }
    }

if( $(".link").text() == "hhh" ) {

var url = window.location.href;
var urlm = url.replace("?m=1", "");
var urlr = urlm.replace("/p/link.html#", "' href='");
var urin = urlr.replace("http", "<a title='http");

$(".link").html("<center>" +urin+ "' class='vangke'>VISIT LINK</a></center>");
var vang = atob( $(".vangke").attr("href") );
$(".vangke").attr("href", vang);
} // endif
    
});
