require "find"
require "rubygems"
require "bundler/setup"

require "mongo_mapper"
require "sinatra"

$: << "./lib"

MongoMapper.database = "zomoes"

set :port, 8080

# recursively find and require all controllers
Find.find("./lib/controllers") do |file|
    require file if file.end_with?(".rb")
end