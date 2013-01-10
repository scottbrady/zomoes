require "models/resume"
require "singleton"

# Class that contains Resume related data querying.
class ResumePeer
	include Singleton

	# Get all resumes in the system.
	def getAllResumes()
		resumes = Resume.all(
			:order => :last_name.asc
		)
		return resumes
	end

	# Get a specific resume.
	def getResumeById(resumeId)
		resume = Resume.find(resumeId)
		return resume
	end
end