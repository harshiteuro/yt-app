import React from "react";
import {connect} from 'react-redux';
import{signIn,signOut} from '../actions';

//797401886567-9cumct9mrt3v2va409rasa7fa6fq02hh.apps.googleusercontent.com
class GoogleAuth extends React.Component{
    // state={isSignedIn:null};
    componentDidMount(){
        window.gapi.load('client:auth2',()=>{
            window.gapi.client.init({
                clientId:'1075162417069-nn15mecbd96ici0t5kopkpsp1qq3f8f5.apps.googleusercontent.com',
                scope:'email',
                plugin_name:'streami'
            }).then(()=>{
                this.auth=window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get());
                //this.setState({isSignedIn:this.auth.isSignedIn.get()})
                //listen have call back funct which calls the func when the signin or out status is change
                this.auth.isSignedIn.listen(this.onAuthChange);
            })
        });
    }
    onAuthChange=(isSignedIn)=>{
        if(isSignedIn){
            this.props.signIn(this.auth.currentUser.get().getId());
        }
        else{
            this.props.signOut();
        }
    }
    onSignInClick=()=>{
        this.auth.signIn();
    };
    onSignOutClick=()=>{
        this.auth.signOut();
    };  
    renderAuthButton(){
        if(this.props.isSignedIn==null){
            return null;
        }
        else if(this.props.isSignedIn){
            return (
                <button onClick={this.onSignOutClick} className="ui red google button">
                    <i className="google icon"/>
                    Sign Out
                </button>
            );
        }
        else{
            return (
                <button onClick={this.onSignInClick} className="ui blue google button">
                    <i className="google icon"/>
                    Sign In with Google
                </button>
            );
        }
    }
    render(){
        return <div>{this.renderAuthButton()}</div>;
    }
}
const mapStateToProps=(state)=>{
    return {isSignedIn:state.auth.isSignedIn};
}
export default connect(mapStateToProps,{signIn,signOut})(GoogleAuth);