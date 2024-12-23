import Swal from "sweetalert2";
export default function AddCoffee() {
  const handleAddCoffee = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);

    const name = form.get("name");
    const available = form.get("available");
    const quantity = form.get("quantity");
    const details = form.get("details");
    const category = form.get("category");
    const photoURL = form.get("photoURL");

    const coffee = { name, available, quantity, details, category, photoURL };
    // console.log(coffee);

    fetch("http://localhost:3000/coffee", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(coffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Coffee added successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div className="flex justify-center items-center mt-60 flex-col w-8/12 mx-auto">
      <h1 className="text-center text-3xl font-bold text-green-500">
        Add a Coffee
      </h1>
      <div className="card w-full shrink-0 shadow-2xl bg-blue-950">
        <form
          onSubmit={handleAddCoffee}
          className="card-body grid grid-cols-2 text-orange-500"
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Quantity</span>
            </label>
            <input
              type="text"
              name="quantity"
              placeholder="Quantity"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Available</span>
            </label>
            <input
              type="text"
              name="available"
              placeholder="Available"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Details</span>
            </label>
            <input
              type="text"
              name="details"
              placeholder="Details"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <input
              type="text"
              name="category"
              placeholder="Category"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">PhotoURL</span>
            </label>
            <input
              type="text"
              name="photoURL"
              placeholder="PhotoURL"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6 col-span-2">
            {/* <button className="btn btn-primary">Login</button> */}
            <input
              type="submit"
              value="Add Coffee"
              className="btn btn-success"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
