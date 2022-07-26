const { string } = require("yargs");
const contactsOperations = require("./db/contacts");

const argv = require("yargs").argv;

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const contacts = await contactsOperations.listContacts();
      console.table(contacts);
          break;
      
      case "get":
          const contact = await contactsOperations.getContactById(id);
          if (!contact) {
              throw new Error(`Contact with id=${id} not found`);
          }
          console.log(contact);
          break;
      
    // case "add":
    //   // ... name email phone
    //   break;

    // case "remove":
    //   // ... id
    //   break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);
// invokeAction({action: "get", id: "4"});

// node index.js --action list
// node index.js --action get --id 5

// # Добавялем контакт
// node index.js --action add --name Mango --email mango@gmail.com --phone 322-22-22

// # Удаляем контакт
// node index.js --action remove --id=3
