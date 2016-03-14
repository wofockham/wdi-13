def hello
  puts "Hello world"
end

3.times do
  hello
end

def add(a, b)
  a + b # Implicit return
end

puts add(7, 9)

def hello2(name='World') # Default argument
  puts "Hello #{ name }"
end

hello2 "Walter"
hello2
