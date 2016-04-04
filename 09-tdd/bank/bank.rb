class Bank
  attr_reader :name, :accounts

  def initialize(name)
    @name = name
    @accounts = {}
  end

  def create_account(name, deposit)
    @accounts[name] = deposit
  end

  def balance(name)
    @accounts[name]
  end

  def deposit(name, deposit)
    @accounts[name] += deposit
  end

  def withdraw(name, amount)
    @accounts[name] -= amount unless amount > @accounts[name]
  end
end
