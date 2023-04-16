> clickCategory function and activeCategory function are used common in Component

`Define: Feature return an array contain 2 objects`

+ First objects contain 2 functions
    + clickCategory (categoryName): call api by category name
        + categoryName is a string
        + is async function call api
    + activeCategory(categoryName, styles ={}) : return style
        + categoryName is a string
+ Second object contain 4 states
    + loading : default is false
    + videos : default is []
    + error : default is null
    + selectingCategory : default is 'all'

> Example

`const [{clickCategory, activeCategory} , videoFilterState] = VideoFilterFeature();`

`<ComponentTest
clickCategory={clickCategory}
activeCategory={activeCategory(categoryName, {color: 'red'}
/>`