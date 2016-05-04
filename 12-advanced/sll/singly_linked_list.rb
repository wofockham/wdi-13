class SinglyLinkedList

  include Enumerable # Mixin

  attr_accessor :head

  def initialize(value=nil)
    @head = Node.new(value) if value
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

  def insert_after(node, new_node)
    new_node.next = node.next
    node.next = new_node
  end

  def shift # Acts like some_array.shift
    node = @head
    @head = node.next
    node
  end

  def length
    tally = 0
    node = @head
    while node.respond_to? :next
      node = node.next
      tally += 1
    end
    tally
  end

  def find(needle)
    # Return the first node with the value of needle
  end

  def reverse
    reverse_list = SinglyLinkedList.new
    node = @head
    while node
      reverse_list.prepend(node.value)
      node = node.next
    end
    reverse_list
  end

  def reverse!
    @head = reverse.head
  end

  def each
    node = @head
    while node
      yield node.value if block_given?
      node = node.next
    end
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
