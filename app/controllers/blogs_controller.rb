class BlogsController < ApplicationController
  def index
    # render json: {blogs: Blog.all.map(&:index), status: 200}
  end
end
