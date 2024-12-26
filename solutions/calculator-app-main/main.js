//elements
const calculator__barra = document.getElementById('calculator__barra')
const bodyy = document.getElementById('bodyy')
const logo = document.getElementById('logo')
const theme = document.getElementById('theme')
const res = document.getElementById('res')
const table = document.getElementById('table')
const del = document.getElementById('del')
const reset = document.getElementById('reset')
const equal = document.getElementById('equal')
const switcH__button = document.getElementById('switch-button')
const botones = document.getElementsByName('#button');
const numbers = document.getElementById('numbers')
const bt7 = document.getElementById('bt7');
const bt8 = document.getElementById('bt8');
const bt9 = document.getElementById('bt9');
const bt4 = document.getElementById('bt4');
const bt5 = document.getElementById('bt5');
const bt6 = document.getElementById('bt6');
const btplus = document.getElementById('btplus');
const bt1 = document.getElementById('bt1');
const bt2 = document.getElementById('bt2');
const btmenos = document.getElementById('btmenos');
const btpunto = document.getElementById('btpunto');
const bt0 = document.getElementById('bt0');
const btbarra = document.getElementById('btbarra');
const btequix = document.getElementById('btequis');


//colors
const rootStyles = getComputedStyle(document.documentElement);
const colores_barra_bkg = [
    rootStyles.getPropertyValue('--grayish-red').trim(),
    rootStyles.getPropertyValue('--very-dark-desaturate-blue').trim(),
    rootStyles.getPropertyValue('--very-dark-violetT').trim()
];
const colors_bkg = [
    rootStyles.getPropertyValue('--light-gray').trim(),
    rootStyles.getPropertyValue('--very-dark-desaturated-blue').trim(),
    rootStyles.getPropertyValue('--very-dark-violetM').trim()
];
const rest_colors = [
    rootStyles.getPropertyValue('--very-light-gray').trim(),
    rootStyles.getPropertyValue('--very-dark-desaturated-blue-screen').trim(),
    rootStyles.getPropertyValue('--very-dark-violetT').trim()
];
const table_colors = [
    rootStyles.getPropertyValue('--grayish-red').trim(),
    rootStyles.getPropertyValue('--very-dark-desaturate-blue').trim(),
    rootStyles.getPropertyValue('--very-dark-violetT').trim()
];

//keysColors
const keysColors = [
    rootStyles.getPropertyValue('--dark-moderate-cyan').trim(),
    rootStyles.getPropertyValue('--desaturated-dark-blue').trim(),
    rootStyles.getPropertyValue('--dark-violet').trim()
]
const equal_colors =[
    rootStyles.getPropertyValue('--Orange').trim(),
    rootStyles.getPropertyValue('--red').trim(),
    rootStyles.getPropertyValue('--pure-cyan').trim()
]
const logo_colors =[
    rootStyles.getPropertyValue('--very-dark-grayish-yellow').trim(),
    rootStyles.getPropertyValue('--White').trim(),
    rootStyles.getPropertyValue('--light-yellow').trim()
]

let indexColor = 0;
let position = 3;
calculator__barra.addEventListener('click', () => {
    // Cambiar color
    bodyy.style.backgroundColor = colors_bkg[indexColor];
    res.style.backgroundColor = rest_colors[indexColor];
    table.style.backgroundColor = table_colors[indexColor];
    reset.style.backgroundColor = keysColors[indexColor]
    indexColor = (indexColor + 1) % position;
    
    if(indexColor == 1)
        {
            switcH__button.style.display
            calculator__barra.style.backgroundColor = colores_barra_bkg[0];
            calculator__barra.style.justifyContent = 'center';
            logo.style.color = logo_colors[0];
            res.style.color = logo_colors[0]
            bt7.style.color = logo_colors[0];
            bt8.style.color = logo_colors[0];
            bt9.style.color = logo_colors[0];
            bt4.style.color = logo_colors[0];
            bt5.style.color = logo_colors[0];
            bt6.style.color = logo_colors[0];
            btplus.style.color = logo_colors[0];
            bt1.style.color = logo_colors[0];
            bt2.style.color = logo_colors[0];
            bt3.style.color = logo_colors[0];
            btmenos.style.color = logo_colors[0];
            btpunto.style.color = logo_colors[0];
            bt0.style.color = logo_colors[0];
            btbarra.style.color = logo_colors[0];
            btequix.style.color = logo_colors[0];

            bt7.style.backgroundColor = 'var(--light-grayish-orange)';
            bt8.style.backgroundColor = 'var(--light-grayish-orange)';
            bt9.style.backgroundColor = 'var(--light-grayish-orange)';
            bt4.style.backgroundColor = 'var(--light-grayish-orange)';
            bt5.style.backgroundColor = 'var(--light-grayish-orange)';
            bt6.style.backgroundColor = 'var(--light-grayish-orange)';
            btplus.style.backgroundColor ='var(--light-grayish-orange)';
            bt1.style.backgroundColor ='var(--light-grayish-orange)';
            bt2.style.backgroundColor ='var(--light-grayish-orange)';
            bt3.style.backgroundColor ='var(--light-grayish-orange)';
            btmenos.style.backgroundColor ='var(--light-grayish-orange)';
            btpunto.style.backgroundColor ='var(--light-grayish-orange)';
            bt0.style.backgroundColor = 'var(--light-grayish-orange)';
            btbarra.style.backgroundColor = 'var(--light-grayish-orange)';
            btequix.style.backgroundColor = 'var(--light-grayish-orange)';

            bt7.style.boxShadow = ' 0px 4px 0 0 var(--grayish-orange)';
            bt8.style.boxShadow = ' 0px 4px 0 0 var(--grayish-orange)';
            bt9.style.boxShadow = ' 0px 4px 0 0 var(--grayish-orange)';
            bt4.style.boxShadow = ' 0px 4px 0 0 var(--grayish-orange)';
            bt5.style.boxShadow = ' 0px 4px 0 0 var(--grayish-orange)';
            bt6.style.boxShadow = ' 0px 4px 0 0 var(--grayish-orange)';
            bt1.style.boxShadow = ' 0px 4px 0 0 var(--grayish-orange)';
            bt2.style.boxShadow = ' 0px 4px 0 0 var(--grayish-orange)';
            bt3.style.boxShadow = ' 0px 4px 0 0 var(--grayish-orange)';
            bt0.style.boxShadow = ' 0px 4px 0 0 var(--grayish-orange)';
            btplus.style.boxShadow =  ' 0px 4px 0 0 var(--grayish-orange)';
            btbarra.style.boxShadow = ' 0px 4px 0 0 var(--grayish-orange)';
            btmenos.style.boxShadow = ' 0px 4px 0 0 var(--grayish-orange)';
            btpunto.style.boxShadow = ' 0px 4px 0 0 var(--grayish-orange)';
            btequix.style.boxShadow = ' 0px 4px 0 0 var(--grayish-orange)';

            theme.style.color = logo_colors[0]
            equal.style.backgroundColor = equal_colors[0]
            del.style.backgroundColor = keysColors[0]
            switcH__button.style.backgroundColor = equal_colors[0];
            del.style.boxShadow = ' 0px 4px 0 0 var(--very-dark-cyan)';
            reset.style.boxShadow = '0px 4px 0 0 var(--very-dark-cyan)';
            numbers.style.color = 'var(--very-dark-blue)';
            equal.style.boxShadow = '0px 4px 0 0 var(--dark-orange)';
            equal.style.color = 'var(--White)';
            botones.style.color = 'var(--White)';
        }else if(indexColor == 2)
            {
                res.style.color = "white"
                calculator__barra.style.backgroundColor = colores_barra_bkg[1];
                switcH__button.style.backgroundColor = equal_colors[1];
                calculator__barra.style.justifyContent = 'start';
                logo.style.color = logo_colors[1];
                theme.style.color = logo_colors[1]
                equal.style.backgroundColor = equal_colors[1]
                equal.style.boxShadow = '0px 4px 0 0 var(--dark-red)';
                equal.style.color = 'var(--White)';
                del.style.backgroundColor = keysColors[1]
                del.style.boxShadow = ' 0px 4px 0 0  var(--desaturated-dark-blueS)';
                reset.style.boxShadow = '0px 4px 0 0 var(--desaturated-dark-blueS)';
                numbers.style.color = 'var(--White)';
                bt7.style.color = 'var(--desaturated-dark-blueS)';
                bt8.style.color = 'var(--desaturated-dark-blueS)';
                bt9.style.color = 'var(--desaturated-dark-blueS)';
                bt4.style.color = 'var(--desaturated-dark-blueS)';
                bt5.style.color = 'var(--desaturated-dark-blueS)';
                bt6.style.color = 'var(--desaturated-dark-blueS)';
                btplus.style.color =  'var(--desaturated-dark-blueS)';
                bt2.style.color =     'var(--desaturated-dark-blueS)';
                bt1.style.color =     'var(--desaturated-dark-blueS)';
                bt3.style.color =     'var(--desaturated-dark-blueS)';
                btmenos.style.color = 'var(--desaturated-dark-blueS)';
                btpunto.style.color = 'var(--desaturated-dark-blueS)';
                bt0.style.color =     'var(--desaturated-dark-blueS)';
                btbarra.style.color = 'var(--desaturated-dark-blueS)';
                btequix.style.color = 'var(--desaturated-dark-blueS)';

                bt7.style.backgroundColor = 'var(--light-grayish-orange)';
                bt8.style.backgroundColor = 'var(--light-grayish-orange)';
                bt9.style.backgroundColor = 'var(--light-grayish-orange)';
                bt4.style.backgroundColor = 'var(--light-grayish-orange)';
                bt5.style.backgroundColor = 'var(--light-grayish-orange)';
                bt6.style.backgroundColor = 'var(--light-grayish-orange)';
                btplus.style.backgroundColor = 'var(--light-grayish-orange)';
                bt1.style.backgroundColor = 'var(--light-grayish-orange)';
                bt2.style.backgroundColor = 'var(--light-grayish-orange)';
                bt3.style.backgroundColor = 'var(--light-grayish-orange)';
                btmenos.style.backgroundColor = 'var(--light-grayish-orange)';
                btpunto.style.backgroundColor = 'var(--light-grayish-orange)';
                bt0.style.backgroundColor = 'var(--light-grayish-orange)';
                btbarra.style.backgroundColor = 'var(--light-grayish-orange)';
                btequix.style.backgroundColor = 'var(--light-grayish-orange)';

                bt7.style.boxShadow = ' 0px 4px 0 0 var(--grayish-orange)';
                bt8.style.boxShadow = ' 0px 4px 0 0 var(--grayish-orange)';
                bt9.style.boxShadow = ' 0px 4px 0 0 var(--grayish-orange)';
                bt4.style.boxShadow = ' 0px 4px 0 0 var(--grayish-orange)';
                bt5.style.boxShadow = ' 0px 4px 0 0 var(--grayish-orange)';
                bt6.style.boxShadow = ' 0px 4px 0 0 var(--grayish-orange)';
                bt1.style.boxShadow = ' 0px 4px 0 0 var(--grayish-orange)';
                bt2.style.boxShadow = ' 0px 4px 0 0 var(--grayish-orange)';
                bt3.style.boxShadow = ' 0px 4px 0 0 var(--grayish-orange)';
                bt0.style.boxShadow = ' 0px 4px 0 0 var(--grayish-orange)';
                btplus.style.boxShadow =  ' 0px 4px 0 0 var(--grayish-orange)';
                btbarra.style.boxShadow = ' 0px 4px 0 0 var(--grayish-orange)';
                btmenos.style.boxShadow = ' 0px 4px 0 0 var(--grayish-orange)';
                btpunto.style.boxShadow = ' 0px 4px 0 0 var(--grayish-orange)';
                btequix.style.boxShadow = ' 0px 4px 0 0 var(--grayish-orange)';

            }else
    {
        res.style.color = logo_colors[2];
        calculator__barra.style.backgroundColor = colores_barra_bkg[2];
        calculator__barra.style.justifyContent = 'end';
        equal.style.backgroundColor = equal_colors[2];
        equal.style.boxShadow = '0px 4px 0 0 var(--soft-cyan)';
        theme.style.color = logo_colors[2]
        switcH__button.style.backgroundColor = equal_colors[2];
        del.style.backgroundColor = keysColors[2]
        logo.style.color = logo_colors[2];
        del.style.boxShadow = ' 0px 4px 0 0 var(--vivid-magenta)';
        reset.style.boxShadow = '0px 4px 0 0 var(--vivid-magenta)';
        numbers.style.color = 'var(--light-yellow)';
        equal.style.color = 'var(--very-dark-blue)';
        bt7.style.color = logo_colors[2];
        bt9.style.color = logo_colors[2];
        bt4.style.color = logo_colors[2];
        bt5.style.color = logo_colors[2];
        bt8.style.color = logo_colors[2];
        bt6.style.color = logo_colors[2];
        btplus.style.color = logo_colors[2];
        bt1.style.color = logo_colors[2];
        bt2.style.color = logo_colors[2];
        bt3.style.color = logo_colors[2];
        btmenos.style.color = logo_colors[2];
        btpunto.style.color = logo_colors[2];
        bt0.style.color = logo_colors[2];
        btbarra.style.color = logo_colors[2];
        btequix.style.color = logo_colors[2];

        bt7.style.backgroundColor =     'var(--very-dark-violet)';
        bt8.style.backgroundColor =     'var(--very-dark-violet)';
        bt9.style.backgroundColor =     'var(--very-dark-violet)';
        bt4.style.backgroundColor =     'var(--very-dark-violet)';
        bt5.style.backgroundColor =     'var(--very-dark-violet)';
        bt6.style.backgroundColor =     'var(--very-dark-violet)';
        bt1.style.backgroundColor =     'var(--very-dark-violet)';
        bt2.style.backgroundColor =     'var(--very-dark-violet)';
        bt3.style.backgroundColor =     'var(--very-dark-violet)';
        bt0.style.backgroundColor =     'var(--very-dark-violet)';
        btplus.style.backgroundColor =  'var(--very-dark-violet)';
        btbarra.style.backgroundColor = 'var(--very-dark-violet)';
        btmenos.style.backgroundColor = 'var(--very-dark-violet)';
        btpunto.style.backgroundColor = 'var(--very-dark-violet)';
        btequix.style.backgroundColor = 'var(--very-dark-violet)';

        bt7.style.boxShadow = '0px 4px 0 0 var(--dark-magenta)';
        bt8.style.boxShadow = '0px 4px 0 0 var(--dark-magenta)';
        bt9.style.boxShadow = '0px 4px 0 0 var(--dark-magenta)';
        bt4.style.boxShadow = '0px 4px 0 0 var(--dark-magenta)';
        bt5.style.boxShadow = '0px 4px 0 0 var(--dark-magenta)';
        bt6.style.boxShadow = '0px 4px 0 0 var(--dark-magenta)';
        bt1.style.boxShadow = '0px 4px 0 0 var(--dark-magenta)';
        bt2.style.boxShadow = '0px 4px 0 0 var(--dark-magenta)';
        bt3.style.boxShadow = '0px 4px 0 0 var(--dark-magenta)';
        bt0.style.boxShadow = '0px 4px 0 0 var(--dark-magenta)';
        btplus.style.boxShadow =  '0px 4px 0 0 var(--dark-magenta)';
        btbarra.style.boxShadow = '0px 4px 0 0 var(--dark-magenta)';
        btmenos.style.boxShadow = '0px 4px 0 0 var(--dark-magenta)';
        btpunto.style.boxShadow = '0px 4px 0 0 var(--dark-magenta)';
        btequix.style.boxShadow = '0px 4px 0 0 var(--dark-magenta)';
    }
});