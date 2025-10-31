import './App.css'

// App.jsx
import React from "react";

// Task 1: WelcomeMessage Component
function WelcomeMessage() {
  return (
    <div>
      <h1>Hello everyone, I am learning React at ALX!</h1>
      <p>This is a simple JSX component.</p>
      <p>I am learning about JSX!</p>
    </div>
  );
}

// Task 2: Three Specific Components (Header, MainContent, Footer)
function Header() {
  return (
    <header>
      <h1>My Favorite Cities</h1>
    </header>
  );
}

function MainContent() {
  return (
    <main>
      <p>I love to visit New York, Paris, and Tokyo.</p>
    </main>
  );
}

function Footer() {
  return (
    <footer>
      <p>© 2023 City Lovers</p>
    </footer>
  );
}

// Task 3: UserProfile Component using props
function UserProfile(props) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "15px", marginTop: "20px", borderRadius: "8px" }}>
      <h2>{props.name}</h2>
      <p>Age: {props.age}</p>
      <p>Bio: {props.bio}</p>
    </div>
  );
}

// Main App Component that integrates everything
function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      {/* Welcome Message */}
      <WelcomeMessage />

      {/* Page Layout Components */}
      <Header />
      <MainContent />
      <Footer />

      {/* User Profile Card */}
      <UserProfile
        name="Alice"
        age="25"
        bio="Loves hiking and photography."
      />
    </div>
  );
}

export default App;
