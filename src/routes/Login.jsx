import React, { useEffect, useState, useRef } from "react";
import $ from "jquery";
import { connect } from "react-redux";

import PreLoader from "../component/PreLoader";

import { actionCreators } from "../store";
import { PAGE_ROUTE, HTTP, MediaType, ROLE} from "../util/Const";

const Login = ( {switchSignUp,switchMainBoard, addJwtToken, addUserInfo} ) => {

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const userNameRef = useRef(null);
    const passwordRef = useRef(null);

    useEffect(() => {
        history.pushState('','', '/Login');
        $(".preloader").fadeOut();
    }, []);

    const onChangeUserNameInput = (e) => {
        setUserName(e.target.value);
    };

    const onChangePasswordInput = (e) => {
        setPassword(e.target.value);
    };

    const onSubmitLoginForm = (e) => {
        e.preventDefault();
        if(userName === ""){
            alert("Please fill out 'User name' field");
            userNameRef.current.focus();
        } else if(password === ""){
            alert("Please fill out 'Password' field");
            passwordRef.current.focus();
        } else {
            const accountInfo = {
                accountname: userName,
                password: password
            }
            // s: Ajax ----------------------------------
            fetch(HTTP.SERVER_URL + "/auth", {
                method: HTTP.POST,
                headers: {
                    'Content-type': MediaType.JSON,
                    'Accept': MediaType.JSON
                },
                body: JSON.stringify(accountInfo)
                
            }).then((res) => {
                if(!res.ok){
                    throw res;
                }
                return res;
            }).then((res) => {
                return res.json();
            }).then((json) => {
                var JWT_TOKEN = json.token;
                if(JWT_TOKEN !== "" || JWT_TOKEN !== null){
                    addJwtToken(JWT_TOKEN);
                    
                    
                    fetch(HTTP.SERVER_URL + `/api/account/${userName}`, {
                        method: HTTP.GET,
                        headers: {
                            'Content-type': MediaType.JSON,
                            'Accept': MediaType.HAL_JSON,
                            'Authorization': HTTP.BASIC_TOKEN_PREFIX + JWT_TOKEN
                        },
                    }).then((res) => {
                        if(!res.ok){
                            throw res;
                        }
                        return res;
                    }).then((res) => {
                        return res.json();
                    }).then((json) => {
                        addUserInfo(json)
                        if(json.role === ROLE.USER){
                            switchMainBoard();
                        }else if(json.role === ROLE.ADMIN){
                            // TODO : switch ADMIN page..
                        }else {throw json;}
                    }).catch(error => {
                        alert("Please check account again.");
                    });
                }
            }).catch(error => {
                alert("Please check account again.");
            });
            // e: Ajax ----------------------------------
        }
    };

    const onclickSignUpBtn = () => {
        switchSignUp();
    };

    return(
        <>
            <div id="mainWrapper" className="main-wrapper">
                <PreLoader />
                
                <div className="auth-wrapper d-flex no-block justify-content-center align-items-center bg-dark">
                    <div className="auth-box bg-dark border-top border-secondary">
                        <div id="loginform">
                            <div className="text-center p-t-20 p-b-20">
                                <h2> Cellit </h2>
                            </div>
                            {/* Form */}
                            <form className="form-horizontal m-t-20" id="loginform" onSubmit={onSubmitLoginForm}>
                                <div className="row p-b-30">
                                    <div className="col-12">
                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text bg-success text-white" id="basic-addon1"><i className="ti-user"></i></span>
                                            </div>
                                            <input type="text" ref={userNameRef} onChange={onChangeUserNameInput} value={userName} className="form-control form-control-lg" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" required=""/>
                                        </div>
                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text bg-warning text-white" id="basic-addon2"><i className="ti-pencil"></i></span>
                                            </div>
                                            <input type="password" ref={passwordRef} onChange={onChangePasswordInput} value={password} className="form-control form-control-lg" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1" required=""/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row border-top border-secondary">
                                    <div className="col-12">
                                        <div className="form-group">
                                            <div className="p-t-20">
                                                {/* <button className="btn btn-info" id="to-recover" type="button"><i className="fa fa-lock m-r-5"></i> Lost password?</button> */}
                                                <button className="btn btn-danger" id="signUpBtn" type="button" onClick={onclickSignUpBtn}><i className="fa fa-lock m-r-5"></i> SignUp </button>
                                                <button className="btn btn-success float-right" type="submit">Login</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div id="recoverform">
                            <div className="text-center">
                                <span className="text-white">Enter your e-mail address below and we will send you instructions how to recover a password.</span>
                            </div>
                            <div className="row m-t-20">
                                {/* <!-- Form --> */}
                                <form className="col-12" action="index.html">
                                    {/* <!-- email --> */}
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text bg-danger text-white" id="basic-addon1"><i className="ti-email"></i></span>
                                        </div>
                                        <input type="text" className="form-control form-control-lg" placeholder="Email Address" aria-label="Username" aria-describedby="basic-addon1"/>
                                    </div>
                                    {/* <!-- pwd --> */}
                                    <div className="row m-t-20 p-t-20 border-top border-secondary">
                                        <div className="col-12">
                                            <a className="btn btn-success" href="#" id="to-login" name="action">Back To Login</a>
                                            <button className="btn btn-info float-right" type="button" name="action">Recover</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

const mapStateToProps = (state, ownProps) => {
    return state;
}

const mapDispathToProps = (dispatch) => {
    return {
        switchSignUp: () => dispatch(actionCreators.switchMainPageRoute(PAGE_ROUTE.SIGNUP)),
        switchMainBoard: () => dispatch(actionCreators.switchMainPageRoute(PAGE_ROUTE.MAINBOARD)),
        addJwtToken: (jwtToken) => dispatch(actionCreators.addJwtToken(jwtToken)),
        addUserInfo: (userInfo) => dispatch(actionCreators.addUserInfo(userInfo)),
        //addUserName: (username) => dispatch(actionCreators.addUserName(username)),
    };
}

export default connect(mapStateToProps, mapDispathToProps) (Login);