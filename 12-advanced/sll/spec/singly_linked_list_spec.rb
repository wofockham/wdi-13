require_relative '../singly_linked_list'

describe SinglyLinkedList do
  context "without an initial value" do

  end

  context "with an initial value" do
    before do
      @list = SinglyLinkedList.new 'Groucho'
    end

    it 'should retain the initial value in #head' do
      expect(@list.head).to be
      expect(@list.head.value).to eq('Groucho')
    end

    describe '#prepend' do
      it 'should prepend the new value' do
        @list.prepend('Harpo')
        # expect(@list.length).to eq(2)
        expect(@list.head.value).to eq('Harpo')
        expect(@list.head.next.value).to eq('Groucho')
      end
    end
  end
end
