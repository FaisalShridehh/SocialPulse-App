import { Router } from "express";
import {
  createPost,
  deletePosts,
  deleteSpecificPost,
  getPosts,
  getSpecificPost,
  getTimeLinePosts,
  likeAndDisLikeAPost,
  loveAndDisLoveAPost,
  updateSpecificPost,
  getUsersPosts,
} from "../controllers/postController.js";

const router = Router();

/**
 * GET get all Posts with getPosts function
 * ||
 * \/
 */
router.route("/posts").get(getPosts).delete(deletePosts);

/**
 * POST create Post with createPost function
 * ||
 * \/
 */

router.route("/post").post(createPost);

/**
 * GET:
 * get a Post with getSpecificPost function
 * PUT:
 * update Post with updatePost function
 * DELETE:
 * delete Post with deletePost function
 * ||
 * \/
 */
router
  .route("/post/:postId")
  .get(getSpecificPost)
  .put(updateSpecificPost)
  .delete(deleteSpecificPost);

/**
 * POST:
 * Like a post
 * ||
 * \/
 */

router.route("/post/:postId/like").put(likeAndDisLikeAPost);
router.route("/post/:postId/love").put(loveAndDisLoveAPost);
/**
 * GET:
 * get a timeline posts
 * ||
 * \/
 */

router.route("/posts/timeline/:userId").get(getTimeLinePosts);

/**
 * GET:
 * get a users's posts
 * ||
 * \/
 */

router.route("/posts/profile/:username").get(getUsersPosts);








export default router;
