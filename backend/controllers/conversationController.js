import Conversation from "../models/Conversation.js";

/**
 * GET
 * get all conversations
 * ||
 * \/
 */
export const getConversations = async (req, res) => {
  try {
    const conversations = await Conversation.find({});

    if (!conversations)
      return res.status(404).json({ message: "No conversations available" });

    return res.status(200).json(conversations);
  } catch (error) {
    return res.status(500).json({
      message: "Error happens while getting all conversations",
      error: error.message,
    });
  }
};
/**
 * POST
 * create a new conversation
 * ||
 * \/
 */
export const createConversation = async (req, res) => {
  try {
    const newConversation = new Conversation({
      members: [
        { senderId: req.body.senderId, receiverId: req.body.receiverId },
      ],
    });

    const savedConversation = await newConversation.save();
    if (!savedConversation) throw new Error("[Error creating conversation]");

    return res.status(201).json(savedConversation);
  } catch (error) {
    return res.status(500).json({
      message: "Error happens while creating a new conversation",
      error: error.message,
    });
  }
};

/**
 * GET
 * get conversation of a user
 * ||
 * \/
 */
export const getSpecificConversation = async (req, res) => {
  try {
    const conversation = await Conversation.find({
      members: { $in: [req.params.userId] },
    });

    // const conversation = await Conversation.find({
    //   $or: [
    //     { "members.senderId": req.params.userId },
    //     { "members.receiverId": req.params.userId },
    //   ],
    // });

    if (!conversation || conversation.length === 0)
      return res.status(404).json({ message: "No conversations available" });

    return res.status(200).json(conversation);
  } catch (error) {
    return res.status(500).json({
      message: "Error happens while getting conversation of a user",
      error: error.message,
    });
  }
};

/**
 * GET
 * get conversation of two users
 * ||
 * \/
 */
export const getTwoUsersConversation = async (req, res) => {
  try {
    const conversation = await Conversation.findOne({
      members: { $all: [req.params.firstUserId, req.params.secondUserId] },
    });

    if (!conversation || conversation.length === 0)
      return res.status(404).json({ message: "No conversations available" });

    return res.status(200).json(conversation);
  } catch (error) {
    return res.status(500).json({
      message: "Error happens while getting conversation of a user",
      error: error.message,
    });
  }
};
