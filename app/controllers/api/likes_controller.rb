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

            render :show
        else
            # debugger
            render json: @like.errors.full_messages, status: 422
        end
    end



    def destroy 
        debugger
        @like = Like.find(params[:id])
        debugger
        if @like
            @like.destroy
            render :show
        else
            render ["Could not find like"]
        end

    end





private
    # def like_params
    #     params.require(:like).permit(:post_id, :user_id)
    # end


end
