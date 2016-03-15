# repl.rb - A simple read evaluate print loop for Ruby
# Don't use this, use Pry or IRB
def main
  print " ruby> "
  input = gets
  puts eval(input)
  main
end

main
