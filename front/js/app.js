window.addEventListener('DOMContentLoaded', () => {
    var switchtheme = document.querySelector('#switch-theme');
    var list = document.querySelectorAll("div[data-image]");
    for (var i = 0; i < list.length; i++) {
      var url = list[i].getAttribute('data-image');
      list[i].style.backgroundImage="url('" + url + "')";
    }
    // Dark Theme
        if(localStorage.getItem('theme')){
            theme = localStorage.getItem('theme');
            if(theme == 'dark')
                switchtheme.checked = true;
            changeTheme();
        }
        switchtheme.addEventListener('change', function(){
            if(this.checked){
                theme = 'dark';
            }else{
                theme = 'light';
            }
            localStorage.setItem('theme', theme);
            changeTheme();
        });
    // End Dark Theme
})
function changeTheme(){
    if(theme == 'light'){
        if (document.body.classList.contains('dark'))
            document.body.classList.remove('dark');
    }else{
        if (!document.body.classList.contains('dark'))
            document.body.classList.add('dark');
    }
}