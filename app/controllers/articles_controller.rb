class ArticlesController < ApplicationController
  def edit
    # render json: {blogs: Blog.all.map(&:index), status: 200}
    render json: {article: Article.find(params[:id]), status: 200}
  end

  def update
    @article = Article.find(params[:id])

    if current_user || current_user.try(:admin)
      if @article.update(article_params)
        render json: {article: @article, status: 200}
      else
        render json: {article: @article, errors: @article.errors.messages}
      end
    else
      render json: {error: 'Not authed to update this user'}
    end
  end

  private

  def article_params
    params.require(:article).permit(:title, :slug, :body)
  end
end
