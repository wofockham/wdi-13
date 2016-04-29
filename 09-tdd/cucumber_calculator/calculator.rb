class Calculator
  def initialize
    @input = []
  end

  def <<(number)
    @input << number.to_f
  end

  def add
    result = @input.inject :+
    puts result
    result
  end
end
