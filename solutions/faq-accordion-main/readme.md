# FAQ accordion solution

<p align="center">
  <a href="https://johanxtheking.github.io/SolutionsLIVE-Frontend-Mentor-Solutions/solutions/faq-accordion-main/">Ver demo</a> -
   <a href="https://github.com/JohanXTheKing/SolutionsLIVE-Frontend-Mentor-Solutions/issues">Report bug</a> -
  <a href="https://github.com/JohanXTheKing/SolutionsLIVE-Frontend-Mentor-Solutions/issues">Request Feature</a>
</p>

## Preview

![IMAGEN](design/desktop-preview.jpg)

## Screenshot(For mobil)

![IMAGEN](assets/images/iPhone.png)

## Links

- Solution URL: [INDEX.HTML](https://www.frontendmentor.io/solutions/my-solution-for-challenge-newslettersignupwithsuccessmessagema-8hGCSmReky)


- Live Site URL: [FAQ accordion main](https://johanxtheking.github.io/SolutionsLIVE-Frontend-Mentor-Solutions/solutions/faq-accordion-main/)

# My process

## Built with
* ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) 

* ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
* ![CSS3](https://img.shields.io/badge/git-brightgreen.svg?style=for-the-badge&logo=git&logoColor=white)

##  What I learned
```html
<div class="faqz">
    <div class="label">
        What is Frontend Mentor, and how will it help me?
    </div>
    <div class="content">
    <p>
    Frontend Mentor offers realistic coding challenges to help developers improve their 
    frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for 
    all levels and ideal for portfolio building.
    </p>          
    </div>
</div>
```
```css
.container_faqs .faqz .content
{
    position: relative;
    overflow: hidden;
    transition: .5s;
    height: 0;
    overflow: auto;
    color: var(--GrayishPurple);
}
.container_faqs .faqz.active .content
{
    height: auto;
    padding: .5rem 0 2.5rem 0;
}
```
```js
const accordeon = document.getElementsByClassName('faqz');
for(i = 0 ; i < accordeon.length; i++)
{
    accordeon[i].addEventListener('click', function(){
        this.classList.toggle('active')
    })
}
}
```

## Tools Used

* ![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)  
* ![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)  
* ![GitHub](https://img.shields.io/badge/linux-%23921011.svg?style=for-the-badge&logo=linux&logoColor=white) 
* ![GitHub](https://img.shields.io/badge/brave-%23921072.svg?style=for-the-badge&logo=brave&logoColor=white) 
* ![GitHub](https://img.shields.io/badge/google-%23527041.svg?style=for-the-badge&logo=google&logoColor=white) 
