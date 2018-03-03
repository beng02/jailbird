$(document).ready(function(){

var hid = $("#tie-block_1042, .logo_normal, .logo_2x, a[rel=noopener], .share-links, .author-name, .text-html-box, p:contains('QIURA'), p:contains('MOVIEU'), p:contains('FACEBOOK'), p:contains('====='), p:contains('media sosial'), p:contains('Samehada'), p:contains('Penerjemah'), p:contains('MANGAKYO'), ins, #disqus_thread, strong:contains('RiiE.net')");

hid.remove();
hid.css("display", "none !important");
hid.empty();
hid.hide();
var tit = $("title:eq(1)").text();
$("title:eq(0)").text( tit );

var lik = $("div.download-link").html();
$("#link").html("<br /><center style='font-weight:bold;font-size:large;text-color:red;'>"+lik+"</center>");
$("#telo").remove();

});
