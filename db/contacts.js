const fs = require('fs').promises;
const path = require('path');
const contactsPath = path.join(__dirname, "contacts.json");

const listContacts = async() => {
    const data = await fs.readFile(contactsPath);
    const contacts = JSON.parse(data);
    return contacts;
} 

const getContactById = async(contactId) => {
    const contacts = await listContacts();
    const result = contacts.find(contact => contact.id === contactId);
    // if (!result) {
    //     return null;
    // }
    console.log(`result`, result)
    return result;    
}

// function removeContact(contactId) {
//   // fs.unlink(path, callback) - удаление файла.
// }

// function addContact(name, email, phone) {
//   // fs.appendFile(filename, data, [options])- добавление в файл
// }

module.exports = {
    listContacts,
    getContactById,
    // removeContact,
    // addContact,
}

