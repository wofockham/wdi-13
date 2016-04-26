namespace :twitter do
  desc 'Nukes the User and Tweet tables'
  task :clear => :environment do
    User.destroy_all
    Tweet.destroy_all
  end

  task :stats => :environment do
    puts "Users: #{ User.count }, Tweets: #{ Tweet.count }"
  end

  desc "Populate Tweet and User tables with Faker data"
  task :populate, [:user_count] => :environment do |t, args|
    FactoryGirl.create_list :user_with_tweets, args[:user_count].to_i
    Rake::Task['twitter:stats'].invoke
  end

  # rake twitter:search[microsoft,50]
  desc "Retrieve some number of tweets from Twitter matching the search term"
  task :search, [:query, :limit] => :environment do |t, args|
    # Your code goes here
  end
end
