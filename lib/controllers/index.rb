require "peers/resume"

# Get the application index page with a listing of all resumes.
get "/" do
	resumes = ResumePeer.instance.getAllResumes()
	erb :index, :locals => {
		:resumes  => resumes
	}
end