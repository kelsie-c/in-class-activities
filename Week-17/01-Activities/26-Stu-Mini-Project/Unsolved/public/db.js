let db;
// create a new db request for a "BudgetDB" database.
const request = window.indexedDB.open("BudgetDB", 1);

request.onupgradeneeded = function (event) {
  // create object store called "BudgetStore" and set autoIncrement to true
  const db = event.target.result;

  // Creates an object store with a listID keypath that can be used to query on.
  const budgetStore = db.createObjectStore("budgetStore", {
    keyPath: "listID",
    autoIncrement: true
  });
  // Creates a statusIndex that we can query on.
  budgetStore.createIndex("budgetIndex", "budget");
};

request.onsuccess = function (event) {
  db = event.target.result;

  if (navigator.onLine) {
    checkDatabase();
  }
};

request.onerror = function (event) {
  // log error here
  console.log(event.target.error);
};

function saveRecord(record) {
  // create a transaction on the pending db with readwrite access
  const transaction = db.transaction(["budgetStore"], "readwrite");
  // access your pending object store
  const budgetStore = transaction.objectStore("budgetStore");
  // const budgetIndex = budgetStore.index("budgetIndex");
  // add record to your store with add method.
  budgetStore.add({ listID: "1", budget: record });
}

function checkDatabase() {
  const transaction = db.transaction(["budgetStore"]);
  // access your pending object store
  const budgetStore = transaction.objectStore("budgetStore");
  // access your pending object store
  const getAll = budgetStore.getAll();
  // get all records from store and set to a variable

  getAll.onsuccess = function () {
    if (getAll.result.length > 0) {
      fetch('/api/transaction/bulk', {
        method: 'POST',
        body: JSON.stringify(getAll.result),
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
        },
      })
        .then((response) => response.json())
        .then(() => {
          // if successful, open a transaction on your pending db
          const getCursorRequest = budgetStore.openCursor();
          // access your pending object store
          getCursorRequest.onsuccess = e => {
            const cursor = e.target.result;
            if (cursor) {
              console.log(cursor.value);
              cursor.continue();
            } else {
              console.log("No documents left!");
            }
          };
          // clear all items in your store
          if (cursor) {
            if (cursor.value.budget !== null) {
              const budget = cursor.value;
              budget.budget = " ";
              cursor.update(budget);
            }
            cursor.continue();
          }

        });
    }
  };
}

// listen for app coming back online
window.addEventListener('online', checkDatabase);
