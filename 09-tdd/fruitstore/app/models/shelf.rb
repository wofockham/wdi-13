# == Schema Information
#
# Table name: shelves
#
#  id         :integer          not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Shelf < ActiveRecord::Base
  has_many :fruits
end
