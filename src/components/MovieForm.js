import React, {Component} from 'react'
import styled from 'styled-components'
import { Form, Button, Input } from '../common'
import { withMovies, withCategories } from '../contexts';

class MovieForm extends Component {
    state = {
        
    }

    submitForm = (e) => {
        e.preventDefault()
        this.props.movies_context.addMovie(this.state)
        if(this.props.onFormSubmit){
            this.props.onFormSubmit()
        }
    }

    handleChange = ({target: {name, value}}) => this.setState({[name]: value})

    handleCategorySelect = (data) => console.log('CATEGORY SELECT', data)

    render(){
        const {id, title, description, url, embed, category_id} = this.state
        const {categories_context: { categories }} = this.props

        return(
            <MainContainer>
                <Form onSubmit={this.submitForm}>
                    <Input name="id" onChange={this.handleChange} value={id} placeholder="ID"/> 
                    <Input name="title" onChange={this.handleChange} value={title} placeholder="title"/>
                    <Input name="embed" onChange={this.handleChange} value={embed} placeholder="embed"/>
                    <Input name="url" onChange={this.handleChange} value={url} placeholder="url"/>
                    <Input name="description" onChange={this.handleChange} value={description} placeholder="description"/>
                    <select onChange={this.handleCategorySelect}>
                        <option value="">--Please choose an option--</option>
                        {categories.map(category => {
                            return <option value={category.category_id}>{category.name}</option>
                        })}
                    </select>
                    <Button>Créer catégorie</Button>
                </Form>
            </MainContainer>
        )
    }
}


const MainContainer = styled.div`
    
`

export default withCategories(withMovies(MovieForm))