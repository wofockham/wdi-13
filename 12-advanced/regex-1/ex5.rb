ARGF.each do |line|
  puts line if line =~ /(\w)\1/
end
