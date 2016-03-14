age = 17
# if age > 18
#   puts "You are legal"
# end

# Modifier version or "backwards" if
puts "You are legal" if age > 18
puts "You are young" if age <= 18

superhero = true
if superhero
  puts "Do something heroic"
else
  puts "Do something mundane"
end

# if not superhero
#   puts "Do something mundane"
# end
#
# puts "Do something mundane" if not superhero

unless superhero
  puts "Do something mundane"
end

puts "Do something mundane" unless superhero
