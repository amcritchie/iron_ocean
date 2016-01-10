class Blog < ActiveRecord::Base
  has_many :articles

  mount_uploader :image, ImageUploader

  def index
    self.as_json
  end
end
