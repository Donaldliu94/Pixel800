class Api::LikesController < ApplicationController

    # def create

        # if current_user
        #    @like = Like.find_by(user_id: current_user.id, post_id: params[:like][post_id]) 
        #     if @like
        #         if @like.update(like_params)
        #             render :show
        #         else
        #             render json: @like.errors.full_messages, status: 422
        #         end
        #     else
        #         @like = Like.new(like_params)
        #         if @like.save
        #             render :show
        #         else
        #             render json: @like.errors.full_messages, status: 422
        #         end
        #     end
            
        # else
        #     render json: ["Must be signed in to like a picture"], status: 400
        # end
    # end



    def create 
        # debugger
        @like = Like.new
        # debugger
        @like.user_id = current_user.id
        # @like = current_user.likes.new
        @like.post_id = params[:post_id]
        if @like.save
            @post = Post.find(@like.post_id)
            @user = User.find(@like.user_id)

            render :show
        else
            # debugger
            render json: @like.errors.full_messages, status: 422
        end
    end



    def destroy 
        # debugger
        # @likes = Like.all.where(post_id: params[:id])
        # @like = @likes.find_by(user_id: current_user.id)
        # @post = Post.find(params[:id])
        @like = Like.find(params[:id])
        if @like
            @like.destroy
            #these are not n + 1 query because the user finding doesn't depend on the post finding, and vice versa
            @post = Post.find(@like.post_id)
            @user = User.find(@like.user_id)
            render :show           #do i have to render show when i destroy?
        else
            render ["Could not find like"]
        end

    end





private
    # def like_params
    #     params.require(:like).permit(:post_id, :user_id)
    # end


end
