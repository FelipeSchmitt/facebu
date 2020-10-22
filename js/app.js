function menu(){
    var menu = document.getElementById("menu_fullscreen").style
    var h1_title = document.getElementById("h1").style
    var descricao = document.getElementById("descricao").style
    var app = document.getElementById("app").style
	var instagram = document.getElementById("instagram").style
    var qr_code_content = document.getElementById("qr_code_content").style
    var news = document.getElementById("news").style
    if(menu.display == "none"){
        menu.display="block"
        h1_title.display="none"
        descricao.display="none"
        app.display="none"
		instagram.display="none"
        qr_code_content.display="none"
        news.display="none"
    }else{
        menu.display="none"
        h1_title.display="block"
        descricao.display="block"
        app.display="block"
		instagram.display="block"
        qr_code_content.display="grid"
        news.display="block"
    }
}
function gallery(){
    var see_more = document.getElementById("see_more")
    var news = document.getElementById("news_box").style
    if(news.height=="1000px"){
        news.height="auto"
        see_more.innerHTML="Veja Menos..."
    }else{
        news.height="1000px"
        see_more.innerHTML="Veja Mais..."
    }
}