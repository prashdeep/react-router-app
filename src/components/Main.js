import React from 'react';
import {UserList} from './UserList';
import {removeUser} from '../redux/actions';

 class Main extends React.Component{

    constructor(){
        super();
        this.state = {
            users:[
                {
                    id:1,
                    name:"Suresh"
                },
                {
                    id:2,
                    name:"Vinay"
                },
                {
                    id:3,
                    name:"hari"
                },
                {
                    id:4,
                    name:"Jeevan"
                },
                {
                    id:15,
                    name:"Mani"
                }
            ]
        }
    }

    componentDidMount(){
        this.props.dispatch(removeUser(1));
    }
    render(){
        console.log(this.props);
        return (
            <div>
              <h1>Hello Main</h1>
              <UserList users={this.props.users} />
            </div>
        )
    }
}

export default Main;
