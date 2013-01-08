require "peers/resume"

get "/api/resume/:resumeId" do |resumeId|
    content_type :json
    resume = ResumePeer.instance.getResumeById(resumeId)
    resume.to_json
end