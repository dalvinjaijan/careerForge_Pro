import { configureStore } from "@reduxjs/toolkit"
import resumeReducer from "./slices/resumeSlice"
import authReducer from "./slices/authSlice";
import uploadedResume from "./slices/uploadResumeSlice"
import dashboardReducer from "./slices/dashboardSlice"


export const store = configureStore({
    reducer: {
        resume: resumeReducer,
        auth: authReducer,
        uploadedResume: uploadedResume,
        dashboard: dashboardReducer
    }
})