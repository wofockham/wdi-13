class SinglyLinkedList
  attr_accessor :head

  def initialize(value=nil)
    @head = Node.new(value)
  end

  def last
    current_node = @head
    until current_node.next.nil?
      current_node = current_node.next
    end
    current_node
  end

  def prepend(value)
    node = Node.new value
    node.next = @head
    @head = node
  end

  def append(value)
    last.next = Node.new value
  end

  # Look at replacing this with a Ruby Struct
  class Node
    attr_accessor :value, :next

    def initialize(value=nil)
      @value = value
    end
  end
end


require 'pry'
binding.pry
