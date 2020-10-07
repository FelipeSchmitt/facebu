function menu(){
    var menu = document.getElementById("menu_fullscreen").style
    var h1_title = document.getElementById("h1").style
    var descricao = document.getElementById("descricao").style
    var qr_code_content = document.getElementById("qr_code_content").style
    if(menu.display == "none"){
        menu.display="block"
        h1_title.display="none"
        descricao.display="none"
        qr_code_content.display="none"
    }else{
        menu.display="none"
        h1_title.display="block"
        descricao.display="block"
        qr_code_content.display="grid"
    }
}