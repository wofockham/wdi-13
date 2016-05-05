def fibonacci(n)
  if n > 2
    fibonacci(n - 1) + fibonacci(n - 2)
  else
    1
  end
end

def fib(n, a=1, b=1)
  if n > 2
    fib(n - 1, b, a + b)
  else
    b
  end
end

require 'pry'
binding.pry
