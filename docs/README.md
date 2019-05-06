---
title: DisplayType
lang: en-US
---


# DisplayType

A responsive, flexbox based utility library for rapidly prototyping user interfaces. Create powerful layouts without writing a single line CSS.

# Introduction

DisplayType aims to make creating responsive, flexbox-based components easier by providing a small layer of abstraction on top of logical groupings of common CSS layout properties. This library focuses on the rapid development and organization of utility based CSS approaches while aiming to integrate nicely with existing CSS methodologies such as BEM. DisplayType is primarily aimed at developers who are already well acclimated with flexbox but do not want to spend copious amounts of time constantly tweaking and managing grids, breakpoints, or layout styles.

# Purpose

Working with frameworks that feature traditional grid systems have allowed teams across the world to increase levels of productivity and construct responsive user interfaces at a rapid pace. However, developers that seek to have a closer relationship with layout styles may find themselves wrestling with higher levels of abstraction that these frameworks employ. DisplayType at it's core seeks to erase the notion that common layout properties must be tucked away in order to achieve rapid levels of organization, hierarchy, and productivity.

At the very least DisplayType's primary goal is an effort to broadly explore and seek to improve the way we think about and construct user interfaces by challenging abstractions that CSS frameworks have championed over the past decade. 


# Drawbacks & Benefits

The benefits of traditional grid systems also present some drawbacks as well. Namely: 

* Breakpoints are solely integrated into element sizing, while activating individual layout properties at specific breakpoint sizes are often an afterthought or not present at all. 
* Many grid systems provide naming conventions that make it hard to determine what layout properties are applied to an element without digging into the cascade.
* Developers may inadvertently overwrite properties (such as margin or padding) that are not properly articulated causing unintended layout issues that are hard to debug.


DisplayType aims to solve these problems by:

* Giving the developer control over individual layout properties at mobile-first responsive sizes.
* Providing a structured & well defined place to organize these styles without muddying up element class names. 
* Provide a straightforward API to clearly communicate layout intention to the developer.



# Prerequisite Knowledge

DisplayType uses a mixture of ```data``` attributes & CSS attribute selectors to accurately target and define common layout properties. If you are already familiar with flexbox, learning the naming conventions for DisplayType's utilities is a breeze.

# Basics

 Refer to the API below for a hard coded reference with examples.

1. Add a `data-dt` attribute to elements you wish to apply display utilities to.

2. Inside this special data attribute, add any corresponding display utility.

```html
<header>
  <div class=""></div>
  <div class=""></div>
  <div class=""></div>
</header>
```

3. Refer to the  API for all display combinations.

# Demos 

# API

## Attributes

DisplayType provides five separate attributes to communicate your layout.

#### Base Attribute

###### `data-display-type`

The data-display-type attribute is used as a base for defining your layout utilities.
Instead of declaring `display:` repeatedly in your stylesheets, simply express it as a utility at element level.

`<section class="content" data-display-type="">`

#### Responsive Attributes

###### `data-breakpoint-sm`

The data-breakpoint-sm attribute expresses layout utilities that activate at breakpoints greater than > 580px viewport. This is the equivalent of declaring in your stylesheets:

`@media screen and (min-width: 580px) { }`

###### `data-breakpoint-md`

The data-breakpoint-md attribute expresses layout utilities that activate at breakpoints greater than > 580px viewport. This is the equivalent of declaring in your stylesheets:

`@media screen and (min-width: 768px) { }`

###### `data-breakpoint-lg`

The data-breakpoint-lg attribute expresses layout utilities that activate at breakpoints greater than > 1050px viewport. This is the equivalent of declaring in your stylesheets:

`@media screen and (min-width: 1050px) { }`

###### `data-breakpoint-xl`

The data-breakpoint-lg attribute expresses layout utilities that activate at breakpoints greater than > 1440px viewport. This is the equivalent of declaring in your stylesheets:

`@media screen and (min-width: 1440px) { }`

---

## Properties

### Flexbox

#### `d-f`

### display: flex; flex-direction: row;

Sets the element's display property to flex and flex-direction property to row.

#### `d-fc`

### display: flex; flex-direction: column;

Sets the element's display property to flex and flex-direction property to column.

#### `jc-c`

### justify-content: center;

Sets the element's justify-content property to center.

#### `jc-sb`

### justify-content: space-between;

Sets the element's justify-content property to space-between.

#### `jc-sa`

### justify-content: space-around;

Sets the element's justify-content property to space-around.

#### `jc-se`

### justify-content: space-evenly;

Sets the element's justify-content property to space-evenly.

#### `jc-vc`

### justify-content: center; align-items: center;

A shortcut property that automatically vertically centers content. VC stands for vertical centering.

### Display

#### `d-n`

##### display: none;

Sets the element's display property to none.

### Display

#### `d-b`

##### display: block;

Sets the element's display property to block.

### Display

#### `d-ib`

##### display: inline-block;

Sets the element's display property to inline-block.

---

# Genetic Makeup

This project is born from my own inner curiosity and hackathon-like sleep schedule.
