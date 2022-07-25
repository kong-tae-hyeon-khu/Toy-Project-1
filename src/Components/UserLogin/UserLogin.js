import { useState } from "react";

const UserLogin = () => {
  const [userNumber, setUserNumber] = useState("");

  const userNumberChangeHandler = (event) => {
    setUserNumber(event.target.value);
    console.log(userNumber);
  };

  const confirmUserNumber = (event) => {
    event.preventDefault();
    console.log(userNumber);
  };

  return (
    <div>
      <form onSubmit={confirmUserNumber}>
        <div>
          <input
            value={userNumber}
            onChange={userNumberChangeHandler}
            maxLength="4"
            placeholder="뒷번호 4자리"
          ></input>
        </div>
        <div>
          <button>로그인</button>
        </div>
      </form>
    </div>
  );
};

export default UserLogin;
