import React, { useState } from "react";

import "../../../App.css";

type UserType = {
  id: number;
  name: string;
};

const UseStateHook = () => {
  const [count, setCount] = useState<number>(0);

    const [user, setUser] = useState<null | UserType>(null);
//   const [user, setUser] = useState<UserType>({} as UserType);
  const handleAddUser = () => {
    setUser({ id: 12, name: "rafian" });
  };
  return (
    <div>
      <h1>{count}</h1>
      <button className="button" onClick={() => setCount(count + 1)}>
        {count} + 1
      </button>
      <button className="button" onClick={() => setCount(count - 1)}>
        {count} - 1
      </button>
      <hr />
      <button onClick={handleAddUser}>show User</button>
      {user && <p>{user?.name}</p>}
    </div>
  );
};

export default UseStateHook;
