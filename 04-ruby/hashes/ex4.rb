users = {
  "Jonathan" => {
    :twitter => "tronathan",
    :favorite_numbers => [12, 42, 75],
  },
  "Erik" => {
    :twitter => "sferik",
    :favorite_numbers => [8, 12, 24],
  },
  "Anil" => {
    :twitter => "bridgpal",
    :favorite_numbers => [12, 14, 85],
  },
}

# How would you access Jonathan's Twitter handle (i.e. the string "tronathan")?
p users["Jonathan"][:twitter]
# How would you add the number 7 to Erik's favorite numbers?
users["Erik"][:favorite_numbers] << 7
# How would you add yourself to the users hash?
users["Jorge"] = {:twitter => "edwardawkward", :favorite_numbers => [5, 12]}
# How would you return the array of Erik's favorite numbers?
users["Erik"][:favorite_numbers]
# How would you return the smallest of Erik's favorite numbers?
users["Erik"][:favorite_numbers].min
# How would you return an array of Anil's favorite numbers that are also even?
users["Anil"][:favorite_numbers].select { |i| i.even? }
# How would you return an array of the favorite numbers common to all users?
users.values.map { |u| u[:favorite_numbers] }.inject :&
# How would you return an array containing all users' favorite numbers, sorted, and excluding duplicates?
users.values.map { |u| u[:favorite_numbers] }.flatten.sort.uniq
