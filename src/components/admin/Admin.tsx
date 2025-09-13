type adminProps = {
  admin: {
    name: string;
    age: number;
    role: string;
    lang: string[];
  };
};

const Admin = ({ admin }: adminProps) => {
  return (
    <div className="border m-3 rounded shadow p-1">
      <h1>Custom type</h1>
      <p>
        {" "}
        <strong>name: </strong> {admin.name}
      </p>
      <p>
        {" "}
        <strong>age: </strong> {admin.age}
      </p>
      <p>
        {" "}
        <strong>Role: </strong> {admin.role}
      </p>
    </div>
  );
};

export default Admin;
