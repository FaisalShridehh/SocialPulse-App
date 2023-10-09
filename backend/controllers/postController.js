import Post from "../models/Post.js";
import User from "../models/User.js";

import bcrypt from "bcrypt";

/**
 * GET
 * get all posts
 * ||
 * \/
 */
export const getPosts = async (req, res, next) => {
  try {
    const posts = await Post.find({});
    // console.log(posts);

    if (posts.length === 0)
      return res.status(404).json({
        message: "there are no posts available",
      });

    return res.status(200).json({
      message: "getting all posts",
      posts: posts,
    });
  } catch (error) {
    return res.status(500).json({
      message: "error getting all posts",
      error: error,
    });
  }
};

/**
 * DELETE
 * delete all posts
 * ||
 * \/
 */
export const deletePosts = async (req, res, next) => {
  try {
    const posts = await Post.deleteMany(
      {},
      {
        new: true,
      }
    );
    console.log(posts);

    if (!posts.deletedCount)
      return res.status(404).json({
        message: "there are no posts available",
      });

    res.status(200).json({
      message: "successfully deleted all posts",
    });
  } catch (error) {
    return res.status(500).json({
      message: "error deleting all posts",
      error: error,
    });
  }
};

/**
 * POST
 * Create a new post
 * ||
 * \/
 */

export const createPost = async (req, res, next) => {
  try {
    const newPost = new Post(req.body);

    const savedPost = await newPost.save();

    res.status(201).json({
      message: "successfully created post",
      savedPost,
    });
  } catch (error) {
    return res.status(500).json({
      message: "error in Create a post",
      error: error,
    });
  }
};

/**
 * GET
 * get a post
 * ||
 * \/
 */
export const getSpecificPost = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.postId);

    if (!post)
      return res.status(404).json({
        message: "post not found",
      });

    res.status(201).json({
      message: "successfully getting post",
      post,
    });
  } catch (error) {
    return res.status(500).json({
      message: "error in get a post",
      error: error,
    });
  }
};
/**
 * PUT
 * update a specific post
 * ||
 * \/
 */
export const updateSpecificPost = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.postId);

    if (!post)
      return res.status(400).json({
        message: "Post not found",
      });

    if (post.userId !== req.body.userId)
      return res.status(403).json({
        message: "You are not allowed to update this post , only update yours ",
      });

    // if (post.description === req.body.description) return res.status(403).json({message: "Nothing change to description"})

    const updatedPost = await Post.findByIdAndUpdate(
      req.params.postId,
      {
        $set: req.body,
      },
      {
        new: true,
      }
    );

    return res.status(200).json({
      message: "The post has been updated successfully",
      updatedPost,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "error in update a post",
      error,
    });
  }
};
/**
 * DELETE
 * delete a specific post
 * ||
 * \/
 */
export const deleteSpecificPost = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.postId);

    if (!post)
      return res.status(400).json({
        message: "Post not found",
      });

    if (post.userId !== req.body.userId)
      return res.status(403).json({
        message: "You are not allowed to delete this post , only delete yours ",
      });

    const deletedPost = await Post.findByIdAndDelete(req.params.postId, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      message: "successfully deleted post",
      deletedPost,
    });
  } catch (error) {
    return res.status(500).json({
      message: "error in delete a post",
      error: error,
    });
  }
};
/**
 * POST
 * Like a post
 * ||
 * \/
 */

export const likeAndDisLikeAPost = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.postId);

    if (!post.likes.includes(req.body.userId)) {
      const likedPost = await Post.findByIdAndUpdate(
        req.params.postId,
        {
          $push: {
            likes: req.body.userId,
          },
          $pull: {
            hearts: req.body.userId,
          },
        },
        {
          new: true,
        }
      );
      return res.status(200).json({
        message: "successfully liked a post",
        likedPost,
      });
    } else {
      const disLikedPost = await Post.findByIdAndUpdate(
        req.params.postId,
        {
          $pull: {
            likes: req.body.userId,
          },
        },
        {
          new: true,
        }
      );
      return res.status(200).json({
        message: "successfully disliked a post",
        disLikedPost,
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: "error in Like a post",
      error: error,
    });
  }
};
export const loveAndDisLoveAPost = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.postId);

    if (!post.hearts.includes(req.body.userId)) {
      const lovedPost = await Post.findByIdAndUpdate(
        req.params.postId,
        {
          $push: {
            hearts: req.body.userId,
          },
          $pull: {
            likes: req.body.userId,
          },
        },
        {
          new: true,
        }
      );
      return res.status(200).json({
        message: "successfully loved a post",
        lovedPost,
      });
    } else {
      const disLovedPost = await Post.findByIdAndUpdate(
        req.params.postId,
        {
          $pull: {
            hearts: req.body.userId,
          },
        },
        {
          new: true,
        }
      );
      return res.status(200).json({
        message: "successfully disLoved a post",
        disLovedPost,
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: "error in Love a post",
      error: error,
    });
  }
};

/**
 * GET
 * get a  timeline posts
 * ||
 * \/
 */

export const getTimeLinePosts = async (req, res, next) => {
  try {
    const currentUser = await User.findById(req.params.userId);
    const userPosts = await Post.find({
      userId: currentUser.id,
    }).sort({ createdAt: -1 });
    // i should use promise.all if i am using loop , if i did it only with await the loop will not execute
    const friendPosts = await Promise.all(
      currentUser.followings.map((friendId) => {
        return Post.find({
          userId: friendId,
        }).sort({ createdAt: -1 });
      })
    );

    return res.status(200).json(userPosts.concat(...friendPosts));
  } catch (error) {
    return res.status(500).json({
      message: "error in get timeline posts",
      error: error,
    });
  }
};

/**
 * GET
 * get a user's posts
 * ||
 * \/
 */

export const getUsersPosts = async (req, res, next) => {
  try {
    const currentUser = await User.findOne({ username: req.params.username });

    if (!currentUser)
      return res.status(404).json({ message: "User not found" });

    // console.log("currentUser => ", currentUser);
    const userPosts = await Post.find({
      userId: currentUser.id,
    }).sort({ createdAt: -1 });
    if (!userPosts)
      return res
        .status(404)
        .json({ message: "There is no posts for this current user not found" });

    // console.log("userPosts => ", userPosts);
    return res.status(200).json(userPosts);
  } catch (error) {
    return res.status(500).json({
      message: "error in get timeline posts",
      error: error,
    });
  }
};
