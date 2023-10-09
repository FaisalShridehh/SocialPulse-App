import { Router } from "express";
import {
  updateSpecificUser,
  deleteSpecificUser,
  getSpecificUser,
  getUsers,
  followSpecificUser,
  unFollowSpecificUser,
  deleteUsers,
  getFriendsData,
} from "../controllers/userController.js";

const router = Router();

/**
 * GET:
 *  get all users with getUsers function
 * ||
 * \/
 */
router.route("/users").get(getUsers).delete(deleteUsers);

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
router.route("/user").get(getSpecificUser);
router
  .route("/user/:userId")
  .put(updateSpecificUser)
  .delete(deleteSpecificUser);

/**
 * GET:
 * get a friends data
 * ||
 * \/
 */

router.route("/friends/:userId").get(getFriendsData);

/**
 * PUT:
 * follow a user
 * ||
 * \/
 */
router.route("/user/:userId/follow").put(followSpecificUser);

/**
 * PUT:
 * Un-Follow a user
 * ||
 * \/
 */
router.route("/user/:userId/unfollow").put(unFollowSpecificUser);

export default router;
