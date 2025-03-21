import "colors";
import { program } from "commander";
import {
  listContacts,
  getContactById,
  removeContact,
  addContact,
} from "./contacts.js";

program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      // ...
      const allContacts = await listContacts();
      console.table(allContacts);
      break;

    case "get":
      // ... id
      const oneContactById = await getContactById(id);
      console.table(oneContactById);
      break;

    case "add":
      // ... name email phone
      const newContact = await addContact({ name, email, phone });
      console.table(newContact);
      break;

    case "remove":
      // ... id
      const deleteContact = await removeContact(id);
      console.table(deleteContact);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!".red);
  }
};

invokeAction(argv);
