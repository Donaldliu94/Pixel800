class Api::SessionsController < ApplicationController

    def create 
        @user = User.find_by_credentials(params[:user][:username], params[:user][:password])

        # debugger
        if @user
            # debugger
            login(@user)
            # debugger
            render "api/users/show"
        else
            # debugger
            render json: ["Invalid Username/Password combination"], status: 422
        end
    end
[]


    def destroy
        @user = current_user
        if @user 
            logout
            render "api/users/show"
        else
            render json: ["Nobody is signed in"], status: 404
        end
    end

end