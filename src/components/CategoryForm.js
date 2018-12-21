import React, {Component} from 'react'
import styled from 'styled-components'
import { Form, Button, Input } from '../common'
import { withCategories } from '../contexts';

class CategoryForm extends Component {
    state = {
        
    }

    submitForm = (e) => {
        e.preventDefault()
        this.props.categories_context.addCategory(this.state)
        if(this.props.onFormSubmit){
            this.props.onFormSubmit()
        }
    }

    handleChange = ({target: {name, value}}) => this.setState({[name]: value})

    render(){
        const {id, name} = this.state

        return(
            <MainContainer>
                <Form onSubmit={this.submitForm}>
                    <Input name="id" onChange={this.handleChange} value={id} placeholder="ID"/> 
                    <Input name="name" onChange={this.handleChange} value={name} placeholder="name"/>
                    <Button>Créer catégorie</Button>
                </Form>
            </MainContainer>
        )
    }
}


const MainContainer = styled.div`
    
`

export default withCategories(CategoryForm)