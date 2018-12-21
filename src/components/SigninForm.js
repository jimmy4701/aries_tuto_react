import React, {Component} from 'react'
import { Form, Button, Input } from '../common'
import { withUser } from '../contexts';

class SigninForm extends Component {

    state = {
        username: "Jimmy",
        email: "jimmy@yopmail.com"
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    submitForm = (event) => {
        event.preventDefault()
        this.props.userAuth.signIn(this.state)
        if(this.props.onFormSubmit){
            this.props.onFormSubmit(this.state)
        }
    }

    render(){
        const {username, email, password} = this.state
        return(
            <Form onSubmit={this.submitForm}>
                <Input value={username} placeholder="Username" name="username" onChange={this.handleChange} />
                <Input value={email} type="email" placeholder="Email" name="email" onChange={this.handleChange} />
                <Input value={password} type="password" placeholder="password" name="password" onChange={this.handleChange} />
                <Button>CONNEXION</Button>
            </Form>
        )
    }
}

export default withUser(SigninForm)