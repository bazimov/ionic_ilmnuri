angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{}];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
})

.factory('Dashs', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var dashs = [{}];

  return {
    all: function() {
      return dashs;
    },
    remove: function(dash) {
      dashs.splice(dashs.indexOf(dash), 1);
    },
    get: function(dashId) {
      for (var i = 0; i < dashs.length; i++) {
        if (dashs[i].id === parseInt(dashId)) {
          return dashs[i];
        }
      }
      return null;
    }
  };
})

.factory('Accounts', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var accounts = [{}];

  return {
    all: function() {
      return accounts;
    },
    remove: function(account) {
      accounts.splice(accounts.indexOf(account), 1);
    },
    get: function(accountId) {
      for (var i = 0; i < accounts.length; i++) {
        if (accounts[i].id === parseInt(accountId)) {
          return accounts[i];
        }
      }
      return null;
    }
  };
});
