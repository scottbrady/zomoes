require 'rubygems'
require 'sinatra'

set :port, 8080

get '/hello' do
    "hello"
end