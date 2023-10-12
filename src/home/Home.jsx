import React from "react";
import StaffHierarchy from "./StaffHierarchy";
import FormModal from "../components/FormModal";
import AddStaffForm from "../forms/AddStaffForm";
import { toggleShowAddModal } from "../redux/slices/staffSlice";
import { useDispatch, useSelector } from "react-redux";
function Home() {
  const dispatch = useDispatch();
  const showAdd = useSelector((state) => state.staff.showAddModal);
  return (
    <div>
      <StaffHierarchy />
      <FormModal
        open={showAdd}
        handleClose={() => dispatch(toggleShowAddModal())}
        title="Add a staff member"
      >
        <AddStaffForm />
      </FormModal>
    </div>
  );
}

export default Home;
