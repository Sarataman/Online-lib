import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class SignUp extends Component {
    constructor(){
        super();
        this.state= {
            fullName: '',
            email: '',
            password:'',
            re_pass: ''
        };
    }
    handleChange = e => {
        this.setState({[e.target.name]: e.target.value});
    };

    handleSubmit = e => {
        e.preventDefault();
    }

    render() {
        return(
            <div class="container">
                <div class="signup-content">
                    <form onSubmit={this.handleSubmit}>
                    <h2>SIGN UP</h2>
                        <div class="form-group">
                            <label for="fullName">Full Name</label>
                            <input type="text" name="fullName" value={this.state.fullName} onChange={this.handleChange} class="form-input" placeholder="Your Name" required/>
                        </div>
                        <div class="form-group">
                            <label for="email">Email</label>
                            <input  type="email" name="email" value={this.state.email} onChange={this.handleChange} class="form-input" placeholder="Your Email" required/>
                        </div>
                        <div class="form-group">
                            <label for="pass">Password</label>
                            <input  type="password" name="password" value={this.state.password} onChange={this.handleChange} class="form-input" placeholder="Password" required/>
                        </div>
                        <div class="form-group">
                            <label for="re-pass">Repeat Password</label>
                            <input type="password" name="re_pass" value={this.state.re_pass} onChange={this.handleChange} class="form-input" placeholder="Repeat your password" required/>
                        </div>
                        <div class="form-group">
                            <Link to="/library">
                                <button 
                                    disabled={!this.state.fullName || !this.state.email || !this.state.password || !this.state.re_pass} class="form-submit">
                                Sign Up
                                </button>
                            </Link>
                        </div>
                    </form>
                    <div>
                        <p>
                            <strong>Already have an account? 
                                <Link to="/" >Log in here</Link>
                            </strong>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignUp;