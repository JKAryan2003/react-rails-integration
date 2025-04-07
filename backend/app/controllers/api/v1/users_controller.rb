module Api
  module V1
    class UsersController < Api::V1::ApplicationController

      def index 

        if authorize_request
          @users = User.all
          render json: {users: @users}     
        else
          render json: {errors: @errors}
        end   
      end

      def create
        @user = User.new(user_params)
        if @user.save
          render json: {user: @user, token: token}
        else
          render json: {errors: @user.errors.full_messages}
        end
      end

      private

      def user_params
        params.require(:user).permit(:username, :email, :password)
      end

    end
  end
end