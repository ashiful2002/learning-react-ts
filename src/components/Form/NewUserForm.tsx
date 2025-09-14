import React, { useState } from "react";

const NewUserForm = () => {
  const [userName, setUserName] = useState<string>("");

  const handleUserNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value); // update state from input
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    console.log({ name, email });
  };

  return (
    <div>
      <h2>Controlled Input Example</h2>
      <input
        type="text"
        placeholder="Enter your name"
        value={userName}
        onChange={handleUserNameChange}
        className="border"
      />
      <h1>{userName}</h1>

      <h1>New User</h1>
      <form className="flex flex-col gap-4" onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="name">Name: </label>
          <input className="border" type="text" name="name" id="name" />
        </div>
        <div>
          <label htmlFor="email">Email: </label>
          <input className="border" type="email" name="email" id="email" />
        </div>
        <button className="w-32 mx-auto" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewUserForm;
