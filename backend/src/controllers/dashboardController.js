import Resume from "../models/resumeSchema.js";
import User from "../models/userSchema.js";


export const getDashboardResumes = async (
  req,
  res
) => {

  try {

    const resumes =
      await Resume.find({
        userId: req.userId,
      })
        .sort({
          updatedAt: -1,
        })
        .select(
          "_id title atsScore createdAt updatedAt"
        );

    const totalResumes =
      resumes.length;

    const averageATS =
      totalResumes === 0
        ? 0
        : Math.round(
            resumes.reduce(
              (sum, resume) =>
                sum + resume.atsScore,
              0
            ) / totalResumes
          );

    const highestATS =
      totalResumes === 0
        ? 0
        : Math.max(
            ...resumes.map(
              (resume) =>
                resume.atsScore
            )
          );

    return res.status(200).json({

      totalResumes,

      averageATS,

      highestATS,

      resumes,

    });

  } catch (error) {

    console.log(error);

    return res.status(500).json({

      message:
        "Failed to fetch dashboard",

    });

  }

};


export const getResumeById =
  async (
    req,
    res
  ) => {

    try {

      const resume =
        await Resume.findOne({

          _id: req.params.id,

          userId:
            req.userId,

        });

      if (!resume) {

        return res
          .status(404)
          .json({

            message:
              "Resume not found",

          });

      }

      return res
        .status(200)
        .json(resume);

    } catch (error) {

      console.log(error);

      return res
        .status(500)
        .json({

          message:
            "Failed to fetch resume",

        });

    }

};



export const deleteResume = async (
  req,
  res
) => {

  try {

    const deleted =
      await Resume.findOneAndDelete({

        _id: req.params.id,

        userId: req.userId,

      });

    if (!deleted) {

      return res.status(404).json({

        message: "Resume not found",

      });

    }

    const user =
      await User.findById(req.userId);

    if (
      user &&
      user.resumesCreated > 0
    ) {

      await User.findByIdAndUpdate(

        req.userId,

        {
          $inc: {
            resumesCreated: -1,
          },
        }

      );

    }

    return res.status(200).json({

      message: "Resume deleted successfully",

    });

  } catch (error) {

    console.log(error);

    return res.status(500).json({

      message: "Delete failed",

    });

  }

};




export const renameResume =
  async (
    req,
    res
  ) => {

    try {

      const { title } =
        req.body;

      const updated =
        await Resume.findOneAndUpdate(

          {

            _id:
              req.params.id,

            userId:
              req.userId,

          },

          {

            title,

          },

          {

            returnDocument:
              "after",

          }

        );

      if (!updated) {

        return res
          .status(404)
          .json({

            message:
              "Resume not found",

          });

      }

      return res
        .status(200)
        .json(updated);

    } catch (error) {

      console.log(error);

      return res
        .status(500)
        .json({

          message:
            "Rename failed",

        });

    }

};