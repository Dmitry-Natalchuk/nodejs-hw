const {
  addContact,
  updateContact,
  listContacts,
  getContactById,
  removeContact,
  updateContactList,
} = require("../models/contacts");

const getContacts = async (req, res) => {
  const data = await listContacts();
  res.status(200).json({ message: data });
};

const getContactByID = async (req, res) => {
  try {
    const { contactId } = req.params;
    const data = await getContactById(contactId);
    res.status(200).json({ message: data });
  } catch (error) {
    res.status(404).json({ message: "Not found" });
  }
};

const postAddContact = async (req, res) => {
  const data = await addContact(req.body);
  res.status(201).json({ message: data });
};

const putChangeContact = async (req, res) => {
  const { contactId } = req.params;
  const data = await updateContact(contactId, req.body);
  if (data) {
    res.status(201).json({ message: data });
  } else {
    res.status(404).json({ message: "Not found" });
  }
};

const deleteContact = async (req, res) => {
  try {
    const { contactId } = req.params;
    const data = await removeContact(contactId);
    if (data) {
      res.status(200).json({ message: "contact deleted" });
    } else {
      res.status(404).json({ message: "Not found" });
    }
  } catch (error) {
    console.log(error.message);
  }
};

const patchFavoriteContact = async (req, res) => {
  const { contactId } = req.params;
  if (!contactId) {
    res.status(400).json({ message: "Missing field favorite" });
  }
  const data = await updateContactList(contactId, req.body);
  if (data) {
    res.status(200).json({ message: data });
  } else {
    res.status(404).json({ message: "Not found" });
  }
};

module.exports = {
  getContacts,
  getContactByID,
  postAddContact,
  putChangeContact,
  deleteContact,
  patchFavoriteContact,
};