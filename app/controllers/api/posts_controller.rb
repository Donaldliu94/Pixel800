class Api::PostsController < ApplicationController
#Pictures

    def index
        # @posts = Post.with_attached_photo.all.includes(:user).includes(:likes)
        @posts = Post.with_attached_photo.all.includes(:user).includes(:likes, user: [:likes, :followers, :followed])
        # @users = User.all
        # @likes = Like.all

        render :index
    end


    def show
        #increment post.view here in future, it removes work from frontend
        @post = Post.find(params[:id]) 
        render :show
    end


    def create
        @post = Post.new(post_params)
        if @post.save
            render :show
        else
            render json: @post.errors.full_messages, status: 401
        end
    end


    def update
        @post = Post.find(params[:post][:id])
            if @post.update(post_params)
            render :show
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
        params.require(:post).permit(:title, :description, :photographer_id, :photo, :view)
    end

    def current_picture
        Post.find(params[:id])
    end


end