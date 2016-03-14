def main_menu
  puts "(b) - basic calculator"
  puts "(a) - advanced calculator"
  puts "(q) - quit"
end

def get_user_selection(message)
  print message
  gets.chomp
end

def basic_calculator
  puts "Basic calculator coming soon"
end

main_menu
menu_choice = get_user_selection("Please enter your selection: ").downcase

until menu_choice == 'q'
  case menu_choice
  when 'b'
    basic_calculator
  else
    puts "Invalid selection"
  end

  main_menu
  menu_choice = get_user_selection("Please enter your selection: ").downcase
end
