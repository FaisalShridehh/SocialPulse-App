import { Router } from "express";
import {
  createConversation,
  getConversations,
  getSpecificConversation,
  getTwoUsersConversation,
} from "../controllers/conversationController.js";

const router = Router();

/**
 * GET , POST
 * get all conversations
 * create a new conversation
 *
 * ||
 * \/
 */
router.route("/conversations").get(getConversations).post(createConversation);

/**
 * GET
 * get conversation of a user
 * ||
 * \/
 */
router.route("/conversation/:userId").get(getSpecificConversation);

/**
 * GET
 * get conversation of two users
 * ||
 * \/
 */
router.route("/conversation/find/:firstUserId/:secondUserId").get(getTwoUsersConversation);

export default router;
