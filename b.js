$(document).ready(function(){
var jj = $("b.unduh").length;
    for (var i = 0; i < jj; i++) {
   var fix = $("b.unduh").eq( i ).text();
   var enc = btoa( fix );
   
   $("b.unduh").eq( i ).html("<a rel='nofollow' href='http://jail-bird.blogspot.co.id/p/link.html#" + enc + "'><input type='button' style='color:red;text-color:white;margin:3px;padding:3px;' value='INI LINKNYA' /></a>");
    }
    
       var jjj = $("a.unduh").length;
    for (var i = 0; i < jjj; i++) {
   var fx = $("a.unduh").eq( i ).attr('href');
   var ec = btoa( fx );
   
   $("a.unduh").eq( i ).html("<a rel='nofollow' href='http://jail-bird.blogspot.co.id/p/link.html#" + ec + "'><input type='button' style='color:red;text-color:white;margin:3px;padding:3px;' value='INI LINKNYA' /></a>");
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
