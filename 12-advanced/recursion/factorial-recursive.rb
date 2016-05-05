def factorial n
  if n > 1
    n * factorial(n - 1)
  else
    1
  end
end

require 'pry'
binding.pry
