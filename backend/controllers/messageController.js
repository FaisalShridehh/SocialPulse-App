import Message from "../models/Message.js";
/**
 * GET
 * get all Messages
 * ||
 * \/
 */
export const getMessages = async (req, res) => {
  try {
    const messages = await Message.find({});
    if (!messages)
      return res.status(404).json({ message: "no messages available" });

    return res.status(200).json(messages);
  } catch (error) {
    return res.status(500).json({
      message: "Error happens while getting all Messages",
      error: error.message,
    });
  }
};

/**
 * POST
 * create a new Messages
 * ||
 * \/
 */
export const createMessages = async (req, res) => {
  try {
    const newMessages = new Message(req.body);

    const SavedMessages = await newMessages.save();

    if (!SavedMessages)
      return res.status(403).json({ message: "Error saving saved messages" });

    return res
      .status(201)
      .json({ message: "Message Create successfully ", SavedMessages });
  } catch (error) {
    return res.status(500).json({
      message: "Error happens while creating a new Messages",
      error: error.message,
    });
  }
};

/**
 * GET
 * Get Specific Messages
 * ||
 * \/
 */
export const getSpecificMessages = async (req, res) => {
  try {
    const messages = await Message.find({
      conversationId: req.params.conversationId,
    });

    if (!messages)
      return res.status(404).json({ message: "no messages available" });

    
    res.status(200).json(messages)
  } catch (error) {
    return res.status(500).json({
      message: "Error happens while getting specific messages",
      error: error.message,
    });
  }
};
