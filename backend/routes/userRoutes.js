import { Router } from "express";
import {
  updateSpecificUser,
  deleteSpecificUser,
  getSpecificUser,
  getUsers,
  followSpecificUser,
  unFollowSpecificUser,
  deleteUsers,
} from "../controllers/userController.js";

const router = Router();

/**
 * GET:
 *  get all users with getUsers function
 * ||
 * \/
 */
router.route("/api/users").get(getUsers).delete(deleteUsers);

/**
 * GET: 
 * get a user with getSpecificUser function
 * PUT: 
 * update user with updateUser function
 * DELETE: 
 * delete user with deleteUser function
 * ||
 * \/
 */
router
  .route("/api/user/:userId")
  .get(getSpecificUser)
  .put(updateSpecificUser)
  .delete(deleteSpecificUser);

/**
 * PUT: 
 * follow a user
 * ||
 * \/
 */
router.route("/api/user/:userId/follow").put(followSpecificUser);

/**
 * PUT: 
 * Un-Follow a user
 * ||
 * \/
*/
router.route("/api/user/:userId/unfollow").put(unFollowSpecificUser);

export default router;
