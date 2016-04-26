namespace :db do
  desc 'Drop, create and migrate the database'
  task :regenerate do
    Rake::Task['db:drop'].invoke
    Rake::Task['db:create'].invoke
    Rake::Task['db:migrate'].invoke
  end
end
