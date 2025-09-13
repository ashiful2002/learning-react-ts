type UserProps = {
  name: string;
  age: number;
  address: string;
  isRegistered: boolean;
};

const User = ({ name, age, address, isRegistered }: UserProps) => {
  return (
    <div className="border m-3 rounded shadow p-1 bg-blue-100 hover:bg-blue-200">
      <h1>Built in type</h1>
      {isRegistered ? (
        <div>
          <h2>
            <strong>Name: </strong>
            {name}
          </h2>
          <p>
            <strong>Age: </strong>
            {age}
          </p>
          <p>
            <strong>Address: </strong>
            {address}
          </p>
        </div>
      ) : (
        <div>
          <p>Please register as a new user</p>
        </div>
      )}
    </div>
  );
};

export default User;
