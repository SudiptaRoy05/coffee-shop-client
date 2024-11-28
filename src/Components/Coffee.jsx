import Swal from "sweetalert2";

export default function Coffee({ coffee }) {
  const { _id, name, available, quantity, details, category, photoURL } =
    coffee;
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/coffee/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };
  return (
    <div className="w-10/12 mx-auto">
      <div className=" flex gap-3 justify-between bg-base-100 shadow-xl">
        <figure>
          <img src={photoURL} className="w-[200px]" alt={name} />
        </figure>
        <div className="">
          <h2 className="card-title text-green-500">Name : {name}</h2>
          <p className="text-sky-700">Category : {category}</p>
          <p className="text-sky-700">Available : {available}</p>
          <p className="text-sky-700">Details : {quantity}</p>
          <p className="text-sky-700">Details : {details}</p>
        </div>
        <div className="flex flex-col gap-6 items-center justify-center">
          <button className="btn btn-xs btn-success ">U</button>
          <button
            onClick={() => handleDelete(_id)}
            className="btn btn-xs btn-error"
          >
            X
          </button>
        </div>
      </div>
    </div>
  );
}
