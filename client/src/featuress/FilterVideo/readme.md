Feature return 2 objects, first is the actions and the second is the state

1.The clickCategory function is the action to change the category
> Parameters

+ receive parameter is a string

> Return

+ no data return

2.The activeCategory function use to apply a style if the category is active

> Paremeters

+ receive first parameter is a string
+ receive second parameter is an object with the style to apply if the category is active . Default is
  `{color: 'white', background: 'black'}`

> Return

+ return an object containing the style to apply

> Example

`const [{clickCategory, activeCategory} , videoFilterState] = VideoFilterFeature();`

`<ComponentTest
name = {categoryName}
clickCategory={() => clickCategory(categoryName)}
activeCategory={activeCategory(categoryName, {color: 'red'}
/>`

