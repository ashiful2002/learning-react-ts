type demoProp1 = {
  data: string;
};
type demoProp2 = {
  data: number;
};
type demoProp = demoProp1 | demoProp2;

type fetchDataType = {
  data: "loading" | "error" | "success";
};
const DataFetch = ({ data }: fetchDataType) => {
  if (data === "loading") {
    return <p>loading...</p>;
  } else if (data === "error") {
    return <p>error</p>;
  } else {
    return (
      <h2>
        DataFetch successfully using{" "}
        <span className="text-sky-400 text-2xl font-bold font-mono">union type</span>
      </h2>
    );
  }
};

export default DataFetch;
