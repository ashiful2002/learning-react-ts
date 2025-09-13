type agentType = {
  name: string;
  lang: string[];
  role: string;
  age: number;
};
const Agent = ({ name, lang, age, role }: agentType) => {
  return (
    <div className="border m-3 rounded shadow p-1">
      <h1>User defined type</h1>
      {role === "agent" ? (
        <>
          {" "}
          <h2>
            <strong>Agent : </strong>
            {name}
          </h2>
          <p>
            language:{" "}
            {lang.map((la, index) => (
              <p key={index}>{la}</p>
            ))}
          </p>
          <p>age:{age}</p>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default Agent;
