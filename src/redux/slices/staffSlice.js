import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  staffMembers: [
    {
      id: "90",
      label: "Board of Directors (BOD)",
      name: "Sylvia Mugereka",
      subordinates: [
        {
          id: "1",
          label: "Chief Excecutive Officer (CEO)",
          name: "Kevin Wangira",
          subordinates: [
            {
              id: "2",
              label: "Chief Financial Officer (CFO)",
              name: "Juliet Nekesa",
              subordinates: [
                {
                  id: "52",
                  label: "Internal Audit",
                  name: "Nalujja Jacinta",
                  subordinates: [],
                },
                {
                  id: "53",
                  label: "Accountant",
                  name: "Adong Holga",
                  subordinates: [],
                },
              ],
            },
            {
              id: "3",
              label: "Chief Operating Officer (COO)",
              name: "Kenneth Bwire",
              subordinates: [
                {
                  id: "8",
                  label: "Human Resources",
                  name: "Janet Nalukwago",
                  subordinates: [],
                },
                {
                  id: "9",
                  label: "Operations Manager",
                  name: "Micheal Smith",
                  subordinates: [],
                },
              ],
            },
            {
              id: "4",
              label: "Chief Technology Officer (CTO)",
              name: "Osborn Mukasa",
              subordinates: [
                {
                  id: "098",
                  label: "IT Security Officer",
                  name: "Paul Ongaba",
                  subordinates: [],
                },
                {
                  id: "5",
                  label: "Technical Lead",
                  name: "Bob Tumukunde",
                  subordinates: [
                    {
                      id: "508",
                      label: "Lead Software Developer",
                      name: "Wandera Henry",
                      subordinates: [
                        {
                          id: "7808",
                          label: "Frontend Developer",
                          name: "Julie Mbinga",
                          subordinates: [],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  loading: false,
  error: "",
  success: false,
  message: "",
  showAddModal: false,
  showEditModal: false,
  showDeleteModal: false,
  showViewModal: false,
};

const staffSlice = createSlice({
  name: "staff",
  initialState,
  reducers: {
    setStaffMembers(state, action) {
      state.staffMembers = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
    setSuccess(state, action) {
      state.success = action.payload;
    },
    setMessage(state, action) {
      state.message = action.payload;
    },
    toggleShowAddModal(state) {
      state.showAddModal = !state.showAddModal;
    },
    toggleShowDeleteModal(state) {
      state.showDeleteModal = !state.showDeleteModal;
    },
    toggleShowEditModal(state) {
      state.showEditModal = !state.showEditModal;
    },
    toggleShowViewModal(state) {
      state.showViewModal = !state.showViewModal;
    },
  },
});
export const {
  setStaffMembers,
  setLoading,
  setError,
  setSuccess,
  setMessage,
  toggleShowAddModal,
  toggleShowDeleteModal,
  toggleShowEditModal,
  toggleShowViewModal,
} = staffSlice.actions;

export default staffSlice.reducer;
