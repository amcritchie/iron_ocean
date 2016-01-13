class ArticlesController < ApplicationController
  def edit
    # render json: {blogs: Blog.all.map(&:index), status: 200}
    render json: {article: Article.find(params[:id]), status: 200}
  end
end
