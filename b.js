$(document).ready(function(){
var jj = $("a.unduh").length;
    for (var i = 0; i < jj; i++) {
     var a = $("a.unduh").eq( i ).attr("href");
     var enca = btoa( a );
     $("a.unduh").eq( i ).html("<a rel='nofollow' href='http://jail-bird.blogspot.co.id/p/link.html#" + enca + "'><input type='button' style='color:red;text-color:white;margin:3px;padding:3px;' value='INI LINKNYA' /></a>");
    }
var jjj = $("b.unduh").length;
    for (var u = 0; u < jjj; u++) {
     var b = $("b.unduh").eq( u ).text();
     var encb = btoa( b );
     $("b.unduh").eq( u ).html("<a rel='nofollow' href='http://jail-bird.blogspot.co.id/p/link.html#" + encb + "'><input type='button' style='color:red;text-color:white;margin:3px;padding:3px;' value='INI LINKNYA' /></a>");
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
