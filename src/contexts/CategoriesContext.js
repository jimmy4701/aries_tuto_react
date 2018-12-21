import React from 'react'

const CategoriesContext = React.createContext(null)

export const withCategories = Component => props => (
    <CategoriesContext.Consumer>
        {categories_context => <Component {...props} categories_context={categories_context} />}
    </CategoriesContext.Consumer>
)

export default CategoriesContext