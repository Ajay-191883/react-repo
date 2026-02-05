import "./App.css";
import Card from "./components/Card";

const App = () => {
  return (
    <div className="container">
      <Card
        name="John Abc"
        age={3}
        designation="UI Designer"
        pic="https://plus.unsplash.com/premium_photo-1732757787074-0f95bf19cf73?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlciUyMGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D"
      />
      <Card
        name="Mike Abc"
        designation="UI Developer"
        pic="https://images.unsplash.com/photo-1701615004837-40d8573b6652?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlciUyMGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D"
      />
      <Card
        name="Sant Abc"
        designation="Manager"
        pic="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D"
      />
    </div>
  );
};

export default App;
