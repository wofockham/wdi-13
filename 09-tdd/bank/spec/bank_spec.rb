require_relative '../bank'

describe Bank do

  let(:bank) { Bank.new 'RSpec Bank' }
  
  describe '.new' do
    it 'creates a new bank object' do
      expect(bank).to_not eq nil
    end

    it 'has a name' do
      expect(bank.name).to eq 'RSpec Bank'
    end

    it 'has no accounts' do
      expect(bank.accounts.count).to eq 0
    end
  end

  describe '#create_account' do
    it "creates an account for a user with a given deposit" do
      bank.create_account 'Gerry', 200
      expect(bank.accounts['Gerry']).to eq 200
    end
  end
end
