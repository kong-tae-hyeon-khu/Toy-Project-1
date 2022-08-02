import { useState } from "react";
import axios from "axios";
const UserRegister = () => {
    const [userName, setUserName] = useState('');
    const [userNumber, setUserNumber] = useState('');
    const [userDate, setUserDate] = useState('');

    const userNameChangeHandler = (event) => {
        setUserName(event.target.value);
    }

    const userNumberChangeHandler = (event) => {
        setUserNumber(event.target.value);
    }

    const userDateChangeHandler = (event) => {
        setUserDate(event.target.value);
    }

    const confirmUserInfo = (event) => {
        event.preventDefault();
        axios.post("http://localhost:8080/members/new", {
            name : userName,
            phone : userNumber,
            start : "2022-07-08",
            finish : userDate
        })
        
        console.log(userName, userNumber, userDate)
    }
    return (
        <div>
            <form onSubmit={confirmUserInfo}>
                <div>
                    <input
                    value = {userName}
                    onChange = {userNameChangeHandler}
                    placeholder = "사용자 이름"
                    >
                    </input>
                    <input
                    value = {userNumber}
                    onChange = {userNumberChangeHandler}
                    placeholder = "사용자 번호"
                    >
                    </input>
                    <input
                    value = {userDate}
                    onChange = {userDateChangeHandler}
                    type = "date">
                    </input>
                </div>
                <div>
                    <button>회원 등록</button>
                </div>
            </form>
        </div>
    );
};

export default UserRegister;