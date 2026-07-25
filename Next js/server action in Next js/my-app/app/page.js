import {submitAction} from "@/actions/form";

export default function Home() {
  


  return (
   <div>
    <form action={submitAction}>
      <div>
        <label htmlFor="name">Name</label>
        <input name="name" id="name" className="text-black bg-white" type="text" />
      </div>

      <div>
        <label htmlFor="add">Address</label>
        <input name="add" id="add" className="text-black bg-white" type="text" />
      </div>
      <div>
        <button>Submit</button>
      </div>

    </form>
   </div>
  );
}
  