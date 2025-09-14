import "./App.css";
import Admin from "./components/admin/Admin";
import Agent from "./components/Agent/Agent";
import Button from "./components/Button/Button";
import Card from "./components/Card/Card";
import DataFetch from "./components/DataFetch/DataFetch";
import UseStateHook from "./components/LearnHookType/UseStateHook/UseStateHook";
import Modarotor from "./components/Modaretor/Modarotor";
import StyleProps from "./components/StyleProps/StyleProps";
import User from "./components/User/User";
import NewUserForm from "./components/Form/NewUserForm";
function App() {
  const admin = {
    name: "admin antor",
    age: 24,
    role: "admiral",
    lang: ["bangla", "english", "hindi"],
  };
  const modaretors = [
    {
      id: 1,
      name: "mukto",
      age: 21,
      email: "mukto@gmail.com",
    },
    {
      id: 11,
      name: "swadinn",
      age: 22,
      email: "swadinn@gmail.com",
    },
    {
      id: 111,
      name: "nasim",
      age: 11,
      email: "nasim@gmail.com",
    },
    {
      id: 222,
      name: "murad",
      age: 23,
      email: "murad@gmail.com",
    },
  ];
  return (
    <>
      <div className="flex justify-between flex-col md:flex-row">
        <User
          name="Ashiful islam"
          age={21}
          address="Dhaka, Bangladesh"
          isRegistered={false}
        />
        <User
          name="Swadinn"
          age={20}
          address="Bangladesh"
          isRegistered={true}
        />
        <Agent
          name="afds"
          age={24}
          role="agent"
          lang={["bangla", "english", "hindi"]}
        />
        <Admin admin={admin} />

        <Modarotor modaretors={modaretors} />
      </div>

      <div>
        <DataFetch data="success" />
      </div>
      <div>
        <Button>
          Click{" "}
          <span className="text-sky-400 text-2xl font-bold font-mono">
            Children type
          </span>
        </Button>
      </div>
      <Card>
        <h1>TypeScript type annotation for React props</h1>
        <p>
          Learned from here how should i use TypeScript type annotation for
          React props for a reuseable react component
        </p>
      </Card>
      <div>
        <UseStateHook />
      </div>
      <div>
        <StyleProps
          btnStyle={{
            backgroundColor: "red",
            color: "white",
            padding: "5px",
            borderRadius: "5px",
          }}
        ></StyleProps>
      </div>
      <div>
        <NewUserForm />
      </div>
    </>
  );
}

export default App;
