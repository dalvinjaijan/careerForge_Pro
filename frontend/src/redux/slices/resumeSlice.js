import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    fullName: "",
    email: "",
    phone: "",
    summary: "",

    education: [],

    experience: [],

    skills: []
}

const resumeSlice = createSlice({
    name: "resume",
    initialState,

    reducers: {

        updateResume: (state, action) => {
            return {
                ...state,
                ...action.payload
            }
        }

    }
})

export const { updateResume } = resumeSlice.actions

export default resumeSlice.reducer