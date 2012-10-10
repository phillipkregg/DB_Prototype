class Job < ActiveRecord::Base
  attr_accessible :caller, :claim_number, :crew_chief, :dispatch_status, :first_name, :insurance_company, :job_age, :job_status, :job_type, :last_name, :loss_city, :loss_date, :occupant, :production_manager
end
