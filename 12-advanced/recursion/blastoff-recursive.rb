def countdown(n)
  if n > 0
    puts n
    countdown n - 1 # Move closer to the base case
  else
    puts "Blastoff" # Base case
  end
end

countdown(10)
