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

  def insert_after(node, new_node)
  end

  def shift # Acts like some_array.shift
  end

  def length
  end

  def find(needle)
    # Return the first node with the value of needle
  end

  def reverse
  end

  def reverse!
  end

  def each
  end

  # Bonus
  def map
  end

  def inject
  end

  def any?
  end

  def all?
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
