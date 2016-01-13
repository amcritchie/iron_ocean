class Blog < ActiveRecord::Base
  has_many :articles
  has_many :authors

  has_many :users, through: :authors

  mount_uploader :image, ImageUploader

  def index
    hash = self.as_json
    hash[:articles] = self.articles.as_json
    hash
  end
end
