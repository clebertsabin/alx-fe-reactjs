import "./App.css";
import RegistrationForm from "./components/RegistrationForm";
import FormikForm from "./components/FormikForm";

function App() {
  return (
    <div className="container">
      <h1>Form Handling Demo</h1>
      <RegistrationForm />
      <div className="divider"></div>
      <FormikForm />
    </div>
  );
}

export default App;
