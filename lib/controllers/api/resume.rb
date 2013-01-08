require "models/resume"
require "pp"
require "json"

get "/api/resume/:resumeId" do |resumeId|
    content_type :json
    resume = Resume.find(resumeId)
    resume.to_json
end