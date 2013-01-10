require "peers/resume"

# Get the data for a single resume.
get "/api/resume/:resumeId" do |resumeId|
	content_type :json
	resume = ResumePeer.instance.getResumeById(resumeId)
	resume.to_json
end