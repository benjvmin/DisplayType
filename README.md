# DisplayType
A responsive, flexbox based utility library for rapidly prototyping user interfaces. Create powerful layouts with minimal CSS. 

# Introduction
DisplayType aims to make creating responsive, flexbox-based components easier by providing a small layer of abstraction and logical grouping of common CSS layout properties and breakpoints. DisplayType focuses on the benefits of functional based CSS while integrating nicely with existing CSS methodologies such as BEM. DisplayType is primarily used best for projects that require a quicker development cycle, or projects that are dependant on prototyping in the browser. 

##### Purpose
Since DisplayType lives somewhere between often conflicting CSS methodologies, it's primary goal is to broadly explore and seek to improve the way we think about and construct user interfaces by extracting the benefits of functional CSS while steering clear of muddling up your organized naming conventions. 

Read more about the underlying methodology and idea here: ()[Link]


# Basics
If you are already familiar with flexbox, learning the naming conventions for DisplayType's utilities is a breeze. Refer to the API below for a hard coded reference with descriptions.

1. Add a ```data-display-type``` attribute to elements you wish to apply display utilities to. 

2. Inside this special data attribute, add any corresponding display utility.

```html 
<header>
  <div class=""></div>
  <div class=""></div>
  <div class=""></div>
</header>
```
3. Refer to the API for all display combinations.

# API 

## Attributes
DisplayType provides five seperate attributes to communicate your layout.

#### Base Attribute
###### ```data-display-type``` 
The data-display-type attribute is used as a base for defining your layout utilities.
Instead of declaring ```display:``` repeatedly in your stylesheets, simply express it as a utility at element level.

```<section class="content" data-display-type="">```

#### Responsive Attributes
###### ```data-breakpoint-sm```
The data-breakpoint-sm attribute expresses layout utilities that activate at breakpoints greater than > 580px viewport. This is the equivalent of declaring in your stylesheets:

```@media screen and (min-width: 580px) {  } ```

###### ```data-breakpoint-md```
The data-breakpoint-sm attribute expresses layout utilities that activate at breakpoints greater than > 580px viewport. This is the equivalent of declaring in your stylesheets:

```@media screen and (min-width: 768px) {  } ```

###### ```data-breakpoint-lg```
The data-breakpoint-lg attribute expresses layout utilities that activate at breakpoints greater than > 1050px viewport. This is the equivalent of declaring in your stylesheets:

```@media screen and (min-width: 1050px) {  } ```

###### ```data-breakpoint-xl```
The data-breakpoint-lg attribute expresses layout utilities that activate at breakpoints greater than > 1440px viewport. This is the equivalent of declaring in your stylesheets:

```@media screen and (min-width: 1440px) {  } ```
___


## Properties

#### Flexbox
#### ```d-f``` 
###### display: flex; flex-direction: row;
Sets the element's display property to flex and flex-direction property to row.

#### ```d-fc``` 
###### display: flex; flex-direction: column;
Sets the element's display property to flex and flex-direction property to column.

#### ```jc-c``` 
###### justify-content: center;
Sets the element's justify-content property to center.

#### ```jc-sb``` 
###### justify-content: space-between;
Sets the element's justify-content property to space-between.

#### ```jc-sa``` 
###### justify-content: space-around;
Sets the element's justify-content property to space-around.

#### ```jc-se``` 
###### justify-content: space-evenly;
Sets the element's justify-content property to space-evenly.

#### ```jc-vc``` 
###### justify-content: center; align-items: center;
A shortcut property that automatically vertically centers content. VC stands for vertical centering.





### Display
#### ```d-n``` 
##### display: none;
Sets the element's display property to none.

____


# Genetic Makeup
This project is born from my own inner curiosity and hackathon-like sleep schedule. 