import './App.css';

const data = {
  name: "Dmytro",
  surname: "Yushchyk",
  contacts: {
    phone: "093-405-02-51",
    mail: "yushchyk.developer@yahoo.com"
  },
  city: "Kyiv"
}

const Header = () => (
  <header><h1>Profile</h1></header>
)

const ProfileCard = () => (
  <div>
    <h1>{data.name} {data.surname}</h1>
    <h2>Contacts</h2>
    <h3>Phone: {data.contacts.phone}</h3>
    <h3>Mail: {data.contacts.mail}</h3>
  </div>
)

const Footer = () => (
  <footer>{data.city}</footer>
)

function App() {
  return (
    <div className="App">
      <Header />
      <ProfileCard />
      <Footer />  
    </div>
  );
}

export default App;
