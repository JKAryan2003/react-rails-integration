class Api::V1::ApplicationController < ActionController::API

  def authorize_request
    header = request.headers['Authorization']
    header = header.split(' ').last 
    if header
      @decoded = JsonWebToken.decode(header)
      @current_user = User.find(@decoded[:user_id])
    else
      @errors = "You need to log in first"
    end
  end

end