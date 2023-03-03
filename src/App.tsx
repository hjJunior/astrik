import UserCard from "./components/User/UserCard";
import user from "./assets/user.json";

function App() {
  return (
    <div className="flex justify-center p-8">
      <UserCard user={user} />
    </div>
  );
}

export default App;
