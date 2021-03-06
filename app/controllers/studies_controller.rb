class StudiesController < ApplicationController
  before_action :set_study, only: [:show, :update, :destroy]
  before_action :authorize_request, only: [:update, :create, :destroy]

  # GET /studies
  def index
    @studies = Study.all

    render json: @studies
  end

  # GET /studies/1
  def show
    render json: @study
  end

  # POST /studies
  def create
    @study = Study.new(study_params)
    @study.user = @current_user

    if @study.save
      render json: @study, status: :created, location: @study
    else
      render json: @study.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /studies/1
  def update
    if @study.update(study_params)
      render json: @study
    else
      render json: @study.errors, status: :unprocessable_entity
    end
  end

  # DELETE /studies/1
  def destroy
    @study.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_study
      @study = Study.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def study_params
      params.require(:study).permit(:topic, :description, :logo_url, :documentation_url, :user_id)
    end
end
