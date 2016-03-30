class PostsController < ApplicationController
  def index
    @posts = Post.all
  end

  def new
    @post = Post.new
  end

  def create
    req = Cloudinary::Uploader.upload( params[:image_url] )
    Post.create( :heading => params[:heading], :image_url => req["url"] )
    redirect_to root_path
  end
end
