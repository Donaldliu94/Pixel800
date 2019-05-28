class Api::PostsController < ApplicationController
#Pictures

    def index
        @posts = Post.with_attached_photo.all.includes(:user).includes(:likes)
        # @users = User.all
        # @likes = Like.all

        render :index
    end


    def show
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
        @post = Post.find(params[:id])
        if @post
            @post.update(view: params[:view])
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