import React, {Component} from 'react';
import { Card, CardSection, Input, Button } from './common';

class LoginForm extends Component{
    render() {
        return(
            <Card>
                <CardSection>
                    <Input 
                    label="Email"
                    placeholder='user@email.com'
                    >
                    </Input>
                </CardSection>

                <CardSection>
                    <Input
                    label="Password"
                    placeholder="enter your password"
                    ></Input>
                </CardSection>
                
                <CardSection>
                    <Button>
                        Login
                    </Button>
                </CardSection>
            </Card>
        )
    }
}
export default LoginForm;