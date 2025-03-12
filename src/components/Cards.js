const Cards = ({ characters, fetchCharactersDetails }) => {
  return (
    <div className="cards">
      {characters.map((c, index) => (
        <div
          key={index}
          className="card"
          onClick={() => fetchCharactersDetails(c.name)}
        >
          {c.name}
        </div>
      ))}
    </div>
  );
};
export default Cards;
