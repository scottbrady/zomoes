require "models/resume"
require "singleton"

class ResumePeer
	include Singleton

	def getAllResumes()
		resumes = Resume.all(
			:order => :last_name.asc
		)
		return resumes
	end

	def getResumeById(resumeId)
		resume = Resume.find(resumeId)
		return resume
	end
end