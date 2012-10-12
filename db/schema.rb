# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20121010174109) do

  create_table "jobs", :force => true do |t|
    t.string   "last_name"
    t.string   "first_name"
    t.string   "loss_city"
    t.string   "job_type"
    t.string   "insurance_company"
    t.string   "job_age"
    t.string   "loss_date"
    t.string   "claim_number"
    t.string   "job_status"
    t.string   "dispatch_status"
    t.string   "caller"
    t.string   "occupant"
    t.string   "production_manager"
    t.string   "crew_chief"
    t.datetime "created_at",         :null => false
    t.datetime "updated_at",         :null => false
  end

end
