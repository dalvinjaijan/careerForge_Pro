import mongoose from "mongoose";

const educationSchema = new mongoose.Schema(
  {
    institute: String,
    degree: String,
    startYear: String,
    endYear: String,
  },
  { _id: false }
);

const experienceSchema = new mongoose.Schema(
  {
    company: String,
    role: String,
    description: String,
    startDate: String,
    endDate: String,
  },
  { _id: false }
);

const resumeContentSchema = new mongoose.Schema(
  {
    fullName: String,

    email: String,

    phone: String,

    summary: String,

    skills: [String],

    education: [educationSchema],

    experience: [experienceSchema],
  },
  { _id: false }
);

const resumeSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    title: {
      type: String,
      default: "Untitled Resume",
    },

    fullName: {
      type: String,
      required: true,
    },

    email: String,

    phone: String,

    summary: String,

    education: [educationSchema],

    experience: [experienceSchema],

    skills: [String],

    jobDescription: {
      type: String,
      default: "",
    },

    atsScore: {
      type: Number,
      default: 0,
    },

     originalResume: {
      type: resumeContentSchema,
      required: true,
    },

    optimizedResume: {
      type: resumeContentSchema,
    },
  },
  {
    timestamps: true,
  }
);

const Resume = mongoose.model("Resume", resumeSchema);

export default Resume;
