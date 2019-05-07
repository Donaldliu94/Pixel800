class Api::UsersController < ApplicationController


    def index 
        @users = User.all.includes(:likes)
        render :index
    end



    def create
        # debugger
        @user = User.new(user_params)
        
        if @user.save
            # debugger
            login(@user)
            render "api/users/show"
        else
            render json: @user.errors.full_messages, status: 422
        end
    end



private

    def user_params
        params.require(:user).permit(:username, :password)
    end


end
