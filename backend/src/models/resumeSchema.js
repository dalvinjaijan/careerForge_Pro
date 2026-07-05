import mongoose from "mongoose";

const educationSchema =
  new mongoose.Schema(
    {
      institution: String,
      degree: String,
      year: String,
    },
    { _id: false }
  );

const experienceSchema =
  new mongoose.Schema(
    {
      company: String,

      position: String,

      duration: String,

      achievements: [String],
    },
    { _id: false }
  );

const projectSchema =
  new mongoose.Schema(
    {
      title: String,

      technologies: [String],

      achievements: [String],
    },
    { _id: false }
  );

const resumeContentSchema =
  new mongoose.Schema(
    {
      fullName: String,

      email: String,

      phone: String,

      location: String,

      linkedin: String,

      github: String,

      summary: String,

      skills: [String],

      experience: [
        experienceSchema,
      ],

      projects: [
        projectSchema,
      ],

      education: [
        educationSchema,
      ],
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
    coverLetter: {
  type: String,
  default: ""
}
  },
  {
    timestamps: true,
  }
);

const Resume = mongoose.model("Resume", resumeSchema);

export default Resume;
