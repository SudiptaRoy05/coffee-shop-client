export default function Coffee({ coffee }) {
  const { name, available, quantity, details, category, photoURL } = coffee;
  return (
    <div className="w-10/12 mx-auto">
      <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img
            src={photoURL} className="w-[200px]"
            alt={name}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{category}</p>
          <p>{available}</p>
          <p>{details}</p>
        </div>
      </div>
    </div>
  );
}
