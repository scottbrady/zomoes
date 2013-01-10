# Display a single resume.  All the resume data is loaded by the frontend code.
get "/resume/:resumeId" do |resumeId|
	erb :resume, :locals => {
		:resumeId  => h(resumeId)
	}
end