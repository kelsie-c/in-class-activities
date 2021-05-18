# Mini Project

In this activity, you will implement IndexedDB so the budget tracker persists data even when the device is not online. When the device finally reconnects, any pending transactions will be synced with the backend api. Write all of your IndexedDB code in `public/db.js`.

## Instructions

* Create a new db request for a `BudgetDB` database.

* Inside `onupgradeneeded`, create an object store called `BudgetStore` and set `autoIncrement` to `true`.

* Inside your `saveRecord()` function:

  * Create a transaction on the `BudgetStore` object with `readwrite` access.

  * Access your `BudgetStore`.

  * Add a record to your store with the `add` method.

* Inside the `checkDatabase` function:

  * Open a transaction on your `BudgetStore` object.
  
  * Access your `BudgetStore` object store.

  * Get all records from store and set to a variable.

* Inside `getAll.onsuccess`:

  * If successful, open a transaction on your `BudgetStore` object.

  * Access your `BudgetStore` object.

  * Clear all items in your store.

## 💡 Hint(s)

* You can use the the comments in `public/db.js` as a guide.

* If you do not see the key pairs populate in the IndexedDB, try refreshing the page. If it still doesn't work, try opening the browser in Incognito mode. 

## 🏆 Bonus

* Create a button that resets all funds to zero in your indexedDB.
