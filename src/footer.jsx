const Today = new Date();
const Year = Today.getFullYear();
console.log(Year);

console.log(Date);

const footer = () => {
  return (
    <footer>
      <p>Copyright ⓒ {Year}</p>
    </footer>
  );
};

export default footer;
