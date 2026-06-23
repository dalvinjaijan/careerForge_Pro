export const checkResumeLimit =
async (
  req,
  res,
  next
) => {

  const user =
    await User.findById(
      req.user.id
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