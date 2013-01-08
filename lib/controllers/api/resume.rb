require "models/resume"
require "pp"
require "json"

get "/api/resume/:resumeId" do |resumeId|
    content_type :json
    # resume = Resume.find_by_first_name("Scott")
    resume = Resume.find("50ec85c3ecba6e34f1863440")
    resume.to_json
end