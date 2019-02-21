import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends React.Component {


    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div>
                { this.props.children }
            </div>
        );

    }
}



const mapStateToProps = (state) => {
    return {
        status: state.authentication.status,
        searchResults: state.search.usernames
    };
};

// const mapDispatchToProps = (dispatch) => {
//     return {
//         getStatusRequest: () => {
//             return dispatch(getStatusRequest());
//         },
//         logoutRequest: () => {
//             return dispatch(logoutRequest());
//         },
//         searchRequest: (keyword) => {
//             return dispatch(searchRequest(keyword));
//         }
//     };
// };


export default connect(mapStateToProps,null)(App);