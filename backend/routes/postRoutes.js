import { Router } from "express";
import {
  createPost,
  deletePosts,
  deleteSpecificPost,
  getPosts,
  getSpecificPost,
  getTimeLinePosts,
  likeAndDisLikeAPost,
  updateSpecificPost,
} from "../controllers/postController.js";

const router = Router();

/**
 * GET get all Posts with getPosts function
 * ||
 * \/
 */
router.route("/api/posts").get(getPosts).delete(deletePosts);

/**
 * POST create Post with createPost function
 * ||
 * \/
 */

router.route("/api/post").post(createPost);

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
  .route("/api/post/:postId")
  .get(getSpecificPost)
  .put(updateSpecificPost)
  .delete(deleteSpecificPost);

/**
 * POST:
 * Like a post
 * ||
 * \/
 */

router.route("/api/post/:postId/like").post(likeAndDisLikeAPost);
/**
 * GET:
 * get a timeline posts
 * ||
 * \/
 */

router.route("/api/posts/timeline").get(getTimeLinePosts);



export default router;
