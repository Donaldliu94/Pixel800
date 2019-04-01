class Api::PostPicturesController < ApplicationController


    def index
        @posts = Post.all
        render :index
    end


    def show
        @post = Post.find(params[:id]) 
        render :show
    end


    def create
        @post = Post.new(post_params)
        if @post.save
            render json: {message: "Sucessfully posted"}
        else
            render json: @post.errors.full_messages, status: 401
        end
    end



    def destroy
        @post = current_picture
        if @post 
            @post.destroy
            render :show
        else
            render ["Could not find picture"]
        end

    end



private
    def post_params
        params.require(:post).permit(:title, :description, :photographer_id)
    end

    def current_picture
        Post.find(params[:id])
    end


end