def fibonacci(n)
  a, b = 1, 1
  while n > 2
    a, b = b, a + b
    n -= 1
  end
  b
end

require 'pry'
binding.pry
