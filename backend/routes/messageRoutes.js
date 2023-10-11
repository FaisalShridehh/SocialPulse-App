import { Router } from "express";
import { createMessages, getMessages, getSpecificMessages } from "../controllers/messageController.js";


const router = Router();

/**
 * GET , POST
 * get all messages
 * create a new messages
 *
 * ||
 * \/
 */
router.route("/messages").get(getMessages).post(createMessages);

/**
 * GET
 * get messages of a user
 * ||
 * \/
 */
router.route("/messages/:conversationId").get(getSpecificMessages);

export default router;
