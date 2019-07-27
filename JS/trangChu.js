document.addEventListener('DOMContentLoaded', function() {

    var buttonMenu = document.querySelectorAll('.btn-lg');
    /* z[0] la nut San Pham
        z[1] la nut Lo trinh
        z[2] la nut Back
    */
    function noClick(a) {
        a.style.opacity = '0';
        a.style.pointerEvents = 'none';
    }

    function canClick(a) {
        a.style.opacity = '1';
        a.style.pointerEvents = 'auto';
    }

    function hide(x){
        document.querySelector(x).style.transform = 'translateY(0)';
        canClick(buttonMenu[2]);
        document.querySelector('.hangPhai').style.opacity = '0';
        noClick(buttonMenu[0]);
        noClick(buttonMenu[1]);

        buttonMenu[2].onclick = function() {
            noClick(buttonMenu[2]);
            document.querySelector('.hangPhai').style.opacity = '1';
            canClick(buttonMenu[0]);
            canClick(buttonMenu[1]);
            document.querySelector(x).style.transform = 'translateY(-100%)';
        }
    };

    // mo 2 trang CV va portfolio
    document.querySelector('.CVbanner').onclick = function(){
        hide('.pageCV')
    };
    document.querySelector('.Pbanner').onclick = function(){
        hide('.pageP')
    };

    // mo trang lo trinh hoc tap
    var b = document.querySelector('.hangTrai').offsetWidth;

    buttonMenu[1].onclick = function() {
        canClick(buttonMenu[2]);
        noClick(buttonMenu[0]);
        noClick(buttonMenu[1]);
        document.querySelector('.hangGiua').style.opacity = '1';
        document.querySelector('.hangGiua').style.transform = 'translateX(25vw)'


        buttonMenu[2].onclick = function() {
            noClick(buttonMenu[2]);
            canClick(buttonMenu[0]);
            canClick(buttonMenu[1]);
            document.querySelector('.hangGiua').style.opacity = '0';
            document.querySelector('.hangGiua').style.transform = 'translateX(-100%)'
        }
    }




})