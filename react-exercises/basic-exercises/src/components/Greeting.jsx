function Greeting({ timeOfDay }) {
//   if (timeOfDay === "morning") {
//     return <h1>Good Morning!</h1>;
//   } else if (timeOfDay === "afternoon") {
//     return <h1>Good Afternoon!</h1>;
//   }
    return timeOfDay === "morning" ? <h1>Good Morning!</h1>: <h1>Good Afternoon!</h1>;
}

export default Greeting;
