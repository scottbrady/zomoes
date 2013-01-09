require "peers/resume"

get "/" do
	resumes = ResumePeer.instance.getAllResumes()
	erb :index, :locals => {
		:resumes  => resumes
	}
end