import React from 'react';

export class UserList extends React.Component{


    render(){
        return(
            <ul>
                <li>{this.props.users.length}</li>
            </ul>
        ) ;
        
    }

}