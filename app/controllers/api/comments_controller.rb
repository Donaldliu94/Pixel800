class Api::CommentsController < ApplicationController


def create
    @comment = Comment.new
    if @comment.save
        @post = Post.find(@comment.post_id)
        @user = User.find(@comment.user_id)

        render :show
    else
        render json: @like.errors.full_messages, status: 422
    end
end






end