var portfolio_count;
var old_portfolio = 0;
var current_portfolio = 0;

$(document).ready(function(){
	$("a.contactlink").click(function() {
		$("#contactback").slideDown();
	});
	$("a.exit").click(function() {
		$("#contactback").slideUp();
		$("#contactbackSHARE").slideUp();
	});
	$("#sendbutton").click(function() {
		$("#contactback").slideUp();
		$("#contactbackSHARE").slideUp();
	});
	$("a.backlink").click(function() {
		$("#whybtp").fadeOut();
		$("#aboutbtp").fadeOut();
		$("#sharebtp").fadeOut();
		$("#contactback").fadeOut();
	});
	$("a.whybtplink").click(function() {
		$("#whybtp").slideDown();
		$("#aboutbtp").fadeOut();
		$("#sharebtp").fadeOut();
		$("#contactback").fadeOut();
	});
	$("a.aboutbtplink").click(function() {
		$("#aboutbtp").slideDown();
		$("#whybtp").fadeOut();
		$("#sharebtp").fadeOut();
		$("#contactback").fadeOut();
	});
	$("a.sharebtplink").click(function() {
		$("#contactbackSHARE").slideDown();
	});
	
	
  portfolio_count = $("div.box").size();
  $("div.box:eq("+current_portfolio+")").css('left', '0px');
	$("a.portfolioarrowright").click(function() {
	  $("div.box:eq("+current_portfolio+")").css('left', '0px');
		portfolioright_rotate();
	});
	function portfolioright_rotate() {
  current_portfolio = (old_portfolio + 1) % portfolio_count;
  $("div.box:eq(" + old_portfolio + ")").animate({left: -740},"slow", function() {
	  $(this).css('left', '740px');
	});
  $("div.box:eq(" + current_portfolio + ")")
	.animate({left: 0},"slow");
  old_portfolio = current_portfolio;
}



  portfolio_count = $("div.box").size();
  $("div.box:eq("+current_portfolio+")").css('left', '0px');
	$("a.portfolioarrowleft").click(function() {
	  $("div.box:eq("+current_portfolio+")").css('left', '0px');
		portfolioleft_rotate();
	});
	function portfolioleft_rotate() {
  current_portfolio = (old_portfolio - 1) % portfolio_count;
  $("div.box:eq(" + old_portfolio + ")").animate({left:740},"slow", function() {
	  $(this).css('left', '740px');
	});
  $("div.box:eq(" + current_portfolio + ")")
	.animate({left: 0},"slow");
  old_portfolio = current_portfolio;
}
	});