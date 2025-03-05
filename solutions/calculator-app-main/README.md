<div align="center">

  <img src="https://www.frontendmentor.io/static/images/logo-mobile.svg" alt="frontendmentor" width="80">

  <h2 align="center">Calculator App Main
</h2>
  <p align="center">
    <a href="https://www.frontendmentor.io/challenges/expenses-chart-component-e7yJBUdjwt" target="_blank"><strong>Frontend Mentor Challenge</strong></a>
    <br />
    <br />
    <a href="https://johanxtheking.github.io/SolutionsLIVE-Frontend-Mentor-Solutions/solutions/calculator-app-main/">Ver demo</a>
    &nbsp;·&nbsp;
    <a href="https://github.com/JohanXTheKing/SolutionsLIVE-Frontend-Mentor-Solutions/issues" target="_blank">Report bug</a>
    &nbsp;·&nbsp;
    <a href="https://github.com/JohanXTheKing/SolutionsLIVE-Frontend-Mentor-Solutions/issues"target="_blank">Request Feature</a>
  </p>
</div>

<!-- Badges -->
<div align="center">
  <!-- Profiles -->
  <a href="https://www.frontendmentor.io/profile/JohanXTheKing" target="_blank">
    <img src="https://img.shields.io/badge/Profile-Johanx-eee?style=for-the-badge&logo=frontendmentor" alt="Johan Profile">
  </a> &nbsp;&nbsp;&nbsp;

  <!-- Status -->
  <a href="#">
    <img src="https://img.shields.io/badge/Status-Completed-4ADE80?style=for-the-badge" alt="Status Completed">
  </a> &nbsp;&nbsp;&nbsp;

  <!-- Difficulty -->
  <a href="https://www.frontendmentor.io/challenges?difficulties=1"  target="_blank">
    <img src="https://img.shields.io/badge/Difficulty-Intermediate-f1b604?style=for-the-badge&logo=frontendmentor" alt="Challenge Difficulty - Newbie">
  </a>

</div>
<br />
<br />



## **Preview**

<div align='center'>
<img src='./design/desktop-preview.jpg' alt='FAQ Accordion Card solution desktop preview image'>
</div>


<br>

## **Links**

  |||
  | :----- | :----- |
  | Solution URL: | [------>](https://github.com/JohanXTheKing/SolutionsLIVE-Frontend-Mentor-Solutions/tree/main/solutions/calculator-app-main) |
  | Live Site URL: | [------>](https://johanxtheking.github.io/SolutionsLIVE-Frontend-Mentor-Solutions/solutions/calculator-app-main/) |
  |||


<br>


## Cap

<div align='center'>
<img src='./images/cap.png' alt='FAQ Accordion Card solution desktop preview image'>
</div>

## What i learned

```js
function calculate()
{
    let result;
    const num1 = parseFloat(firstNumber);
    const num2 = parseFloat(secondNumber);

    switch (operation)
    {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            return;
    }

    updateDisplay(result);
    firstNumber = result.toString();
    secondNumber = '';
    operation = '';
}
  ```


## **Built With**

<div align= "center">

  ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)

</div>

<br>

## **Tools Used**

<div align= "center">

![Google](https://img.shields.io/badge/google-DA4437?style=for-the-badge&logo=google&logoColor=white)
  ![GitHub](https://img.shields.io/badge/github-0D1117.svg?style=for-the-badge&logo=github&logoColor=white)  
  ![Arch](https://img.shields.io/badge/Arch%20Linux-1793D1?logo=arch-linux&logoColor=fff&style=for-the-badge)
  ![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)   

</div>

## **Let's Connect 👋**

<div align=center>
<a href="https://www.instagram.com/giio_joo_xtx/" target="_blank">
        <img src="https://img.shields.io/badge/instagram-%ff5851db.svg?color=f02b9a&style=for-the-badge&logo=instagram&logoColor=white" t=instagram style="margin-bottom: 5px;"/>
    </a>

  <a href="https://www.frontendmentor.io/profile/JohanXTheKing" target="_blank">
    <img src="https://img.shields.io/badge/FEM%20Profile-f8f9f8?style=for-the-badge&logo=Frontend-Mentor&logoColor=black" alt="Frontend-Mentor Profile">
  </a>

  <a href="https://github.com/JohanXTheKing" target="_blank">
    <img src="https://img.shields.io/badge/Github%20Profile-555?style=for-the-badge&logo=github&logoColor=white" alt="Github Profile">
  </a>

</div>

<br>