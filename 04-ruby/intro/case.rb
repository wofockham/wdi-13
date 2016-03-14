age = 22

if age > 35
  puts "You can hold any position in government"
elsif age > 30
  puts "Something about the senate"
elsif age >= 18
  puts "You can vote"
else
  puts "You have no say in government"
end

case
when age > 35
  puts "El presidente"
when age > 30
  puts "Senator"
when age > 18
  puts "You can vote"
else
  puts "No voice"
end
