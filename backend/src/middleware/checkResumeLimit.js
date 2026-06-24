import User from "../models/userSchema.js";

export const checkResumeLimit =
async (
  req,
  res,
  next
) => {
console.log("userID",req.userId)
  const user =
    await User.findById(
      req.userId
    );

  if (
    user.plan === "free" &&
    user.resumesCreated >= 1
  ) {

    return res.status(403)
      .json({
        message:
          "Upgrade to Pro"
      });
  }

  next();
};