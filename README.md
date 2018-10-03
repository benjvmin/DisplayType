# DisplayType
A flexbox based utility library for rapidly prototyping user interfaces.



# Introduction
DisplayType aims to integrate well with existing and widely used CSS methodologies while extracting and applying benefits of a functional approach to CSS. DisplayType primarily exists at the intersection of (often conflicting) CSS methodologies, in order to explore and seek to improve the way we think about and construct user interfaces. 


# Basics

1. Add a ```data-display-type``` attribute to elements you wish to apply display utilities to. 

2. Inside this special data attribute, add any corresponding display utility. For example: a navigation with ```display: flex``` and ````justify-content: center``` applied. 

```html 
<nav>
  <ul data-display-type="d-f jc-c">
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Contact</a></li>
    <li><a href="#">Support</a></li>
    <li><a href="#">Github</a></li>
  </ul>
</nav>
```
3. Refer to the API for all display combinations.

# API 



# Genetic Makeup
This project is born from my own inner curiosity and hackathon-like sleep schedule. 