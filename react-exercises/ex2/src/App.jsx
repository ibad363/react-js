import './App.css'

function App() {

  const styles = {backgroundColor : 'black', color: "White" , padding: "2rem"}
  return (
    <>
      <section>
        <h1 style={{backgroundColor : 'blue', color: "White" , padding: "2rem"}}>Inline Styles</h1>
        <h1 style={styles}>Styles by Variables</h1>
      </section>
    </>
  );
}

export default App