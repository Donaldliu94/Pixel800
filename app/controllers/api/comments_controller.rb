class Api::CommentsController < ApplicationController


    def create
        @comment = Comment.new(comment_params)
        @comment.user_id = current_user.id
        @comment.post_id = params[post_id]
        if @comment.save
            render :show
        else
            render json: @like.errors.full_messages, status: 422
        end
    end


    def destroy
        @comment = Comment.find(params[:id])
        if @comment
            @comment.destroy
            render :show
        else
            render ["Could not find comment"]
        end

    end


private

    def comment_params
        params.require(:comment).permit(:body)
    end

end