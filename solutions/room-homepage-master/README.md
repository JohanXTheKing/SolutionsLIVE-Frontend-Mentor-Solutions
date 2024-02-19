# Frontend Mentor - Room homepage solution
<p align="center">
  <a href="https://johanxtheking.github.io/SolutionsLIVE-Frontend-Mentor-Solutions
/solutions/room-homepage-master">Ver demo</a> -
   <a href="https://github.com/JohanXTheKing/SolutionsLIVE-Frontend-Mentor-Solutions/issues">Report bug</a> -
  <a href="https://github.com/JohanXTheKing/SolutionsLIVE-Frontend-Mentor-Solutions/issues">Request Feature</a>
</p>

## Preview

![IMAGEN](design/desktop-preview.jpg)

## Screenshot

![IMAGEN](images/mobile.png) 

![IMAGEN](images/mobile2.png.png)

## Links

- Solution URL: [INDEX.HTML](https://github.com/JohanXTheKing/SolutionsLIVE-Frontend-Mentor-Solutions/tree/main/solutions/room-homepage-master)


- Live Site URL: [ROOM-HOMEPAGE-MASTER](https://johanxtheking.github.io/SolutionsLIVE-Frontend-Mentor-Solutions/solutions/room-homepage-master/#)

# My process

## Built with
* ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) 

* ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
* ![CSS3](https://img.shields.io/badge/git-brightgreen.svg?style=for-the-badge&logo=git&logoColor=white)



* ![CSS3](https://img.shields.io/badge/jss-yellow.svg?style=for-the-badge&logo=jss&logoColor=white)
## Tools Used

* ![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)  
* ![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)  
* ![GitHub](https://img.shields.io/badge/linux-%23921011.svg?style=for-the-badge&logo=linux&logoColor=white) 
* ![GitHub](https://img.shields.io/badge/brave-%23921072.svg?style=for-the-badge&logo=brave&logoColor=white) 
* ![GitHub](https://img.shields.io/badge/google-%23527041.svg?style=for-the-badge&logo=google&logoColor=white) 

  
## What I learned



```html
    <div class="buttonsChanges">
      <button title="left" id="beforeIMG">
        <img src="images/icon-angle-left.svg" alt="left-button-img">
      </button>
      <button title="right" id="afterIMG">
        <img src="images/icon-angle-right.svg" alt="righ-button-img">
      </button>
    </div>
```
```css
    .buttonsChanges button
    {
        width: 50%;
        background-color: #000;
        color:var(--VeryDarkGray);
        border: none;
        outline: none;
    }
```
```js

botonBefore.addEventListener('click', () => {
    if(indiceActual > 0)
    {
        indiceActual--;

    } else {
        indiceActual = imagenes.length - 1;
    }
    mostrarImagen();
})
}
```