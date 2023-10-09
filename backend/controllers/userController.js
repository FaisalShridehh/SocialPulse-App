import User from "../models/User.js";

import bcrypt from "bcrypt";

/**
 * GET
 * get all users
 * ||
 * \/
 */
export const getUsers = async (req, res, next) => {
  try {
    const users = await User.find({});
    // console.log(users);

    if (users.length === 0)
      return res.status(404).json({
        message: "there are no users available",
      });

    return res.status(200).json({
      message: "getting all users",
      users: users,
    });
  } catch (error) {
    return res.status(500).json({
      message: "error getting all users",
      error: error,
    });
  }
};

/**
 * DELETE
 * delete all users
 * ||
 * \/
 */
export const deleteUsers = async (req, res, next) => {
  try {
    const users = await User.deleteMany(
      {},
      {
        new: true,
      }
    );

    res.status(200).json({
      message: "successfully deleted all users",
    });
  } catch (error) {
    return res.status(500).json({
      message: "error deleting all users",
      error: error,
    });
  }
};

/**
 * GET
 * Get specific user
 * ||
 * \/
 */
export const getSpecificUser = async (req, res, next) => {
  try {
    const userId = req.query.userId;
    const username = req.query.username;

    const user = userId
      ? await User.findById(req.query.userId)
      : await User.findOne({ username: req.query.username });

    if (!user) {
      return res.status(404).send({
        message: "User not found",
      });
    }

    const { password, updatedAt, ...others } = user._doc;
    return res.status(200).json({
      message: "User founded successfully",
      user: others,
    });
  } catch (error) {
    return res.status(500).json({
      message: "error getting specific user",
      error: error,
    });
  }
};

export const getFriendsData = async (req, res) => {
  try {
    const userId = req.params.userId;

    const user = await User.findById(userId);

    const friends = await Promise.all(
      user.followings.map((follower) => {
        return User.findById(follower);
      })
    );

    let friendList = [];
    friends.map((friend) => {
      const { _id, username, profilePicture } = friend;

      friendList.push({ _id, username, profilePicture });
    });

    return res.status(200).json(friendList);
  } catch (error) {
    return res.status(500).json({
      message: "error getting friends data",
      error: error,
    });
  }
};

/**
 * PUT
 * Update specific user
 * ||
 * \/
 */
export const updateSpecificUser = async (req, res, next) => {
  // console.log(req)
  // console.log(res)
  try {
    const isUserExist = await User.findById(req.params.userId);

    if (!isUserExist)
      return res.status(400).json({
        message: "User not found",
      });

    if (req.body.userId !== req.params.userId || req.body.isAdmin)
      return res.status(403).json({
        message: "Forbidden, You can only make this request for your account",
      });
    // console.log("req.user", req.user);

    if (req.body.password) {
      const saltRounds = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(req.body.password, saltRounds);
    }

    const updatedUser = await User.findByIdAndUpdate(
      req.params.userId,
      {
        $set: req.body,
      },
      {
        new: true,
        runValidators: true,
      }
    );

    return res.status(200).json({
      message: "User has been updated successfully",
      updatedUser,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "error Updating specific user",
      error: error.message,
    });
  }
};

/**
 * DELETE
 * Delete specific user
 * ||
 * \/
 */
export const deleteSpecificUser = async (req, res, next) => {
  try {
    const isUserExist = await User.findById(req.params.userId);

    if (!isUserExist)
      return res.status(400).json({
        message: "User not found",
      });

    if (req.body.userId !== req.params.userId || req.body.isAdmin)
      return res.status(403).json({
        message: "Forbidden, You can only make this request for your account",
      });
    // console.log("req.user", req.user);

    const deletedUser = await User.findByIdAndDelete(req.params.userId, {
      new: true,
      runValidators: true,
    });

    return res.status(200).json({
      message: "User has been deleted successfully",
      deletedUser,
    });
  } catch (error) {
    return res.status(500).json({
      message: "error Deleting specific user",
      error: error,
    });
  }
};

/**
 * PUT
 * Follow specific user
 * ||
 * \/
 */
export const followSpecificUser = async (req, res, next) => {
  try {
    if (req.body.userId === req.params.userId)
      return res.status(403).json({
        message: "You can't follow yourself",
      });

    const userToFollow = await User.findById(req.params.userId);
    // const currentUser = await User.findById(req.body.userId);

    if (userToFollow.followers.includes(req.body.userId))
      return res.status(403).json({
        message: "You Already follow this user",
      });

    const followedUser = await User.findByIdAndUpdate(
      req.params.userId,
      {
        $push: {
          followers: req.body.userId,
        },
      },
      {
        new: true,
      }
    );
    const currentUser = await User.findByIdAndUpdate(
      req.body.userId,
      {
        $push: {
          followings: req.params.userId,
        },
      },
      {
        new: true,
      }
    );

    return res.status(200).json({
      message: "User has been followed successfully",
      currentUser: currentUser,
      followedUser: followedUser,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "error follow specific user",
      error: error.message,
    });
  }
};

/**
 * PUT
 * Un-Follow specific user
 * ||
 * \/
 */
export const unFollowSpecificUser = async (req, res, next) => {
  try {
    if (req.body.userId === req.params.userId)
      return res.status(403).json({
        message: "You can't un-follow yourself",
      });

    const userToFollow = await User.findById(req.params.userId);
    // const currentUser = await User.findById(req.body.userId);

    if (!userToFollow.followers.includes(req.body.userId))
      return res.status(403).json({
        message: "You don't follow this user yet.",
      });

    const followedUser = await User.findByIdAndUpdate(
      req.params.userId,
      {
        $pull: {
          followers: req.body.userId,
        },
      },
      {
        new: true,
      }
    );
    const currentUser = await User.findByIdAndUpdate(
      req.body.userId,
      {
        $pull: {
          followings: req.params.userId,
        },
      },
      {
        new: true,
      }
    );

    return res.status(200).json({
      message: "User has been un-followed successfully",
      currentUser: currentUser,
      followedUser: followedUser,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "error un-follow specific user",
      error: error.message,
    });
  }
};
