# dom-exercise-2-20191206

(Note: You will need to create all of the files for this exercise.)

As with the previous exercise, create links, but use the following array of information:

```js
const sites = [
    {
        "address": "https://apple.com",
        "logo": "https://www.logodesignlove.com/images/classic/apple-logo-rob-janoff-01.jpg"
    },
    {
        "address": "https://google.com",
        "logo": "https://cdn.vox-cdn.com/thumbor/8tLchaDMIEDNzUD3mYQ7v1ZQL84=/0x0:2012x1341/920x613/filters:focal(0x0:2012x1341):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/47070706/google2.0.0.jpg"
    },
    {
        "address": "https://microsoft.com",
        "logo": "https://cdn.vox-cdn.com/thumbor/drG69iSTSbsYDNcckVzB3x97pDA=/7x0:633x417/920x613/filters:focal(7x0:633x417):format(webp)/cdn.vox-cdn.com/assets/1311169/mslogo.jpg"
    },

];

```

Transform each object in the array into DOM elements structured like this:

```
<a href="https://apple.com">
    <img src="https://www.logodesignlove.com/images/classic/apple-logo-rob-janoff-01.jpg">
</a>
```

Add each of these to a single container element on the page.