require 'find'
require 'rubygems'
require 'sinatra'

set :port, 8080

# recursively find and require all controllers
Find.find('./lib/controllers') do |file|
    require file if file.end_with?('.rb')
end