require 'test_helper'

class JobsControllerTest < ActionController::TestCase
  setup do
    @job = jobs(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:jobs)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create job" do
    assert_difference('Job.count') do
      post :create, job: { caller: @job.caller, claim_number: @job.claim_number, crew_chief: @job.crew_chief, dispatch_status: @job.dispatch_status, first_name: @job.first_name, insurance_company: @job.insurance_company, job_age: @job.job_age, job_status: @job.job_status, job_type: @job.job_type, last_name: @job.last_name, loss_city: @job.loss_city, loss_date: @job.loss_date, occupant: @job.occupant, production_manager: @job.production_manager }
    end

    assert_redirected_to job_path(assigns(:job))
  end

  test "should show job" do
    get :show, id: @job
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @job
    assert_response :success
  end

  test "should update job" do
    put :update, id: @job, job: { caller: @job.caller, claim_number: @job.claim_number, crew_chief: @job.crew_chief, dispatch_status: @job.dispatch_status, first_name: @job.first_name, insurance_company: @job.insurance_company, job_age: @job.job_age, job_status: @job.job_status, job_type: @job.job_type, last_name: @job.last_name, loss_city: @job.loss_city, loss_date: @job.loss_date, occupant: @job.occupant, production_manager: @job.production_manager }
    assert_redirected_to job_path(assigns(:job))
  end

  test "should destroy job" do
    assert_difference('Job.count', -1) do
      delete :destroy, id: @job
    end

    assert_redirected_to jobs_path
  end
end
