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
    }
});