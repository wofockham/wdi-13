counter = 10
while counter > 0
  puts counter
  counter -= 1 # counter = counter - 1
end
puts "Blastoff"

counter = 10
until counter == 0
  puts counter
  counter -= 1
end

# Don't ever use these, really
# for n in 1..100
#   puts n
# end

(1..100).each do |i|
  puts i
end

100.times do |goldfish|
  puts goldfish
end
