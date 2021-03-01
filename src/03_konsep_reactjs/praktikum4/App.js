function Kartu(props) {
  return <h1>Halo, {props.nim} - {props.nama}</h1>;
}

function App() {
  return (
    <div>
      <Kartu nim="1841720218" nama="Rizal Anhari" />
      <Kartu nim="0000000000" nama="????????????" />
      <Kartu nim="1111111111" nama="????????????" />
    </div>
  );
}

export default App;