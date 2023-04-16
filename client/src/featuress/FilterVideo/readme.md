Feature return 2 objects, first is the actions and the second is the state

> clickCategory function is the action to change the category

+ receive parameter is a string

> activeCategory function is the state to check if the category is active

+ receive parameter is a string
+ receive parameter is an object with the style to apply if the category is active

> Example

`const [{clickCategory, activeCategory} , videoFilterState] = VideoFilterFeature();`

`<ComponentTest
name = {categoryName}
clickCategory={() => clickCategory(categoryName)}
activeCategory={activeCategory(categoryName, {color: 'red'}
/>`

