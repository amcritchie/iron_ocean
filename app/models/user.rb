class User < ActiveRecord::Base
  has_secure_password

  has_one :admin
  has_many :author

  has_many :addresses, as: :addressable
  accepts_nested_attributes_for :addresses

  has_many :sent_messages, :class_name => 'Message', :foreign_key => 'sender_id'
  has_many :received_messages, :class_name => 'Message', :foreign_key => 'receiver_id'
  mount_uploader :image, ImageUploader

  validates :email, presence: true, uniqueness: true
  # Password create validation
  validates :password, :on => :create, :presence => true,
  :confirmation => true, :length => {:within => 6..40}
  # Password update validation
  validates :password, :on => :update, :allow_blank => true,
  :confirmation => true, :length => {:within => 6..40}

  def address
    self.try(:addresses).first
  end

  def index
    hash = self.as_json
    hash[:admin] = self.admin
    hash[:address] = self.address
    hash
  end
end
