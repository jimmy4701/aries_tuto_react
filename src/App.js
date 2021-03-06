import React, {Component, Fragment, Suspense} from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Landing, Contact, Signup, Movie } from './pages'
import { Navbar } from './components'
import { withUser } from './contexts';



class App extends Component {

    state = {
        
    }

    render(){
        const { userAuth } = this.props
        return(
            <Router>
                <Fragment>
                    <Navbar />
                    <Suspense fallback={<div>LOADING COMPONENTS</div>}>
                        <Switch>
                            <Route exact path="/" component={Landing} />
                            <Route path="/contact" component={Contact} />
                            <Route path="/signup" component={Signup} />
                            <Route path="/movie/:movie_id" component={Movie} />
                        </Switch>
                    </Suspense>
                </Fragment>
            </Router>
        )
    }

}

export default withUser(App)