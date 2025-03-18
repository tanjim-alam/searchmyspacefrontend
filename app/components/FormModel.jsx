import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import LeadForm from "./LeadForm";

function FormModel() {
  return (
<dialog id="formModel" className="modal">
  <div className="modal-box p-0">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <div>
        <LeadForm/>
    </div>
  </div>
</dialog>
  );
}

export default FormModel;
