import "./App.css";
import Admin from "./components/admin/admin";
import Agent from "./components/Agent/Agent";
import User from "./components/User/User";

function App() {
  const admin = {
    name: "admin antor",
    age: 24,
    role: "admiral",
    lang: ["bangla", "english", "hindi"],
  };
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
      </div>
    </>
  );
}

export default App;
