type modaretorType = {
  modaretors: {
    id: number;
    name: string;
    age: number;
    email: string;
  }[];
};

const Modarotor = ({ modaretors }: modaretorType) => {
  return (
    <div className="border m-3 rounded shadow p-1">
      <h2 className="text-2xl font-bold">Modarotor</h2>
      {modaretors.map((item, index) => (
        <div className="border my-1 rounede text-start pl-2" key={index}>
          <h3>{item.name}</h3> <p>{item.age}</p>
          <p>{item.email}</p>
        </div>
      ))}
    </div>
  );
};

export default Modarotor;
