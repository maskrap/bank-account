function BankAccount(name, deposit) {
  this.name = name;
  this.balance = parseInt(deposit);
};

BankAccount.prototype.deposit = function(deposit) {
  this.balance += parseInt(deposit);
  return this.balance;
};

BankAccount.prototype.withdrawal = function(withdrawal)  {
  this.balance -= parseInt(withdrawal);
  return this.balance;
};

var user = Object;

$(function()  {
  $("#open-account").submit(function(event)  {
    event.preventDefault();
    user = new BankAccount($("#name").val(), $("#initial-deposit").val());
    $(".balance").text("");
    $(".balance").append("<h2>Balance $" + parseInt(user.balance).toFixed(2) + "</h2>");
  });

  $("#deposit").click(function(event)  {
    var balance = user.deposit($("#funds").val());
    $(".balance").text("");
    $(".balance").append("<h2>Balance $" + parseInt(balance).toFixed(2) + "</h2>");
  });

  $("#withdrawal").click(function(event)  {
   var balance = user.withdrawal($("#funds").val());
   $(".balance").text("");
   $(".balance").append('<h2>Balance $' + parseInt(balance).toFixed(2) + '</h2>');
  });
});
