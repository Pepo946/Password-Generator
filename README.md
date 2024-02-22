## Overview
- [Overview](The Project "Password -Generator")
  - [Links](https://github.com/Pepo946/Password-Generator.git)
- [My process](#my-process)
  - [Built with](Html Css  JS)
  - [What I learned](**it make me remember how we can use hover and any things**   )
  - [Continued development](Now im try to make more helpful app )
  - [Useful resources](https://www.w3schools.com/CSS/default.asp)
- [Author => Pepo]

### Screenshot

![Design Preview](./imgs/Screenshot%202024-02-22%20005458.png)


### Built with

- Semantic HTML5 markup
- CSS custom properties
- Js for the logic

### What I learned


```js
function show() {
  let imgg = document.getElementById("first-img");
  if (passInput.type === "password") {
    passInput.type = "text";
    imgg.src = "./imgs/show.png";
  }else{
    passInput.type = "password";
    imgg.src = "./imgs/close-eye.png";
  }
}

```
```js
function copiepass() {
  passInput.select();
  let textToCopy = passInput.value;

  navigator.clipboard.writeText(textToCopy);
};
```


### Continued development

My future PLans is to be more good in Web-Dev{js}. 

### Useful resources

- [Example resource ](https://www.tutorialrepublic.com/css-tutorial/) - This helped me for design  and with how to manage Div  reason. I really liked this pattern and will use it going forward.


## Author

- LinkDen - [Pepo](https://www.linkedin.com/in/mohamed-gandoul-53a5ba258/)
- Frontend Mentor - [@Pepo946](https://www.frontendmentor.io/profile/Pepo946)
- Twitter - [@Pepo9461](https://www.twitter.com/yourusername)
